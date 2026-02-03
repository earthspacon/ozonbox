const fs = require('fs');
const path = require('path');

const categories = [
  'agriculture',
  'cleaning',
  'disinfection',
  'food-production',
  'horeca',
  'industry',
  'medicine',
  'transport',
  'warehouses',
  'water-treatment'
];

const languages = ['en', 'ru', 'uz', 'uz-cyr'];

const basePath = path.join(__dirname, '..', 'src', 'shared', 'config', 'i18n');

// Determine if a table is ComparisonTable or DataTable based on row structure
function isComparisonTable(rows) {
  if (!Array.isArray(rows) || rows.length === 0) return false;
  const firstRow = rows[0];
  // ComparisonTable rows are objects with parameter/value1/value2
  // But they might have different keys that need conversion
  if (typeof firstRow === 'object' && !Array.isArray(firstRow)) {
    // Check if it has keys that suggest comparison (like indicator/without/with)
    const keys = Object.keys(firstRow);
    return keys.length >= 3 && (
      keys.includes('parameter') || 
      keys.includes('indicator') ||
      (keys.includes('without') && keys.includes('with'))
    );
  }
  return false;
}

// Convert nested table structure to flat structure
function flattenTableStructure(obj) {
  const fixed = JSON.parse(JSON.stringify(obj)); // Deep clone
  const changes = [];
  
  function processObject(current, currentPath) {
    if (!current || typeof current !== 'object' || Array.isArray(current)) {
      return;
    }
    
    // Check if this object has a nested table
    if (current.table && typeof current.table === 'object') {
      const table = current.table;
      
      // Convert table.headers to array if it's an object
      let headers = table.headers;
      if (headers && typeof headers === 'object' && !Array.isArray(headers)) {
        headers = Object.values(headers);
        changes.push(`${currentPath}.table.headers: converted object to array`);
      }
      
      // Convert table.rows to array if it's an object
      let rows = table.rows;
      if (rows && typeof rows === 'object' && !Array.isArray(rows)) {
        rows = Object.values(rows);
        changes.push(`${currentPath}.table.rows: converted object to array`);
      }
      
      // Determine table type and convert accordingly
      if (headers && rows) {
        if (isComparisonTable(rows)) {
          // ComparisonTable: use headers and rows directly
          current.headers = headers;
          // Convert rows to ComparisonTable format: parameter/value1/value2
          current.rows = rows.map(row => {
            if (typeof row === 'object' && !Array.isArray(row)) {
              const keys = Object.keys(row);
              // Try to map common patterns
              if (keys.includes('indicator') && keys.includes('without') && keys.includes('with')) {
                return {
                  parameter: row.indicator || '',
                  value1: row.without || '',
                  value2: row.with || ''
                };
              } else if (keys.includes('parameter')) {
                // Already in correct format
                return row;
              } else {
                // Try to infer: first key is parameter, rest are values
                const paramKey = keys.find(k => k === 'parameter' || k === 'indicator' || k === 'type');
                const valueKeys = keys.filter(k => k !== paramKey).slice(0, 3);
                return {
                  parameter: row[paramKey] || '',
                  value1: row[valueKeys[0]] || '',
                  value2: row[valueKeys[1]] || '',
                  value3: row[valueKeys[2]]
                };
              }
            }
            return row;
          });
          changes.push(`${currentPath}: converted table to ComparisonTable structure`);
        } else {
          // DataTable: use tableHeaders and tableData
          current.tableHeaders = headers;
          if (table.caption) {
            current.tableCaption = table.caption;
          }
          // Convert rows to 2D array format
          current.tableData = rows.map(row => {
            if (Array.isArray(row)) {
              return row;
            } else if (typeof row === 'object') {
              // Convert object to array of values
              return Object.values(row);
            }
            return [String(row)];
          });
          changes.push(`${currentPath}: converted table to DataTable structure`);
        }
      }
      
      // Remove nested table object
      delete current.table;
    }
    
    // Also check for direct headers/rows objects (not nested in table)
    if (current.headers && typeof current.headers === 'object' && !Array.isArray(current.headers)) {
      current.headers = Object.values(current.headers);
      changes.push(`${currentPath}.headers: converted object to array`);
    }
    
    if (current.rows && typeof current.rows === 'object' && !Array.isArray(current.rows)) {
      current.rows = Object.values(current.rows);
      changes.push(`${currentPath}.rows: converted object to array`);
    }
    
    // Recursively process nested objects
    for (const key in current) {
      if (current.hasOwnProperty(key) && typeof current[key] === 'object' && current[key] !== null) {
        processObject(current[key], currentPath ? `${currentPath}.${key}` : key);
      }
    }
  }
  
  processObject(fixed, 'root');
  return { fixed, changes };
}

// Main validation and fix function
function validateAndFixFile(filePath) {
  const results = {
    file: filePath,
    syntaxError: null,
    changes: [],
    fixed: false
  };
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Fix structure
    const { fixed, changes } = flattenTableStructure(data);
    
    if (changes.length > 0) {
      fs.writeFileSync(filePath, JSON.stringify(fixed, null, 2) + '\n', 'utf8');
      results.changes = changes;
      results.fixed = true;
    }
    
  } catch (error) {
    if (error instanceof SyntaxError) {
      results.syntaxError = error.message;
    } else {
      results.syntaxError = error.message;
    }
  }
  
  return results;
}

// Main execution
console.log('Validating and fixing category JSON files...\n');

let totalFiles = 0;
let syntaxErrors = 0;
let fixedFiles = 0;
const allChanges = [];

categories.forEach(category => {
  languages.forEach(lang => {
    const filePath = path.join(basePath, lang, `category-${category}.json`);
    totalFiles++;
    
    if (fs.existsSync(filePath)) {
      const result = validateAndFixFile(filePath);
      
      if (result.syntaxError) {
        syntaxErrors++;
        console.log(`❌ ${filePath}`);
        console.log(`   Syntax Error: ${result.syntaxError}\n`);
      } else if (result.changes.length > 0) {
        fixedFiles++;
        console.log(`⚠️  ${filePath}`);
        console.log(`   Fixed ${result.changes.length} issue(s):`);
        result.changes.slice(0, 5).forEach(change => {
          console.log(`   - ${change}`);
        });
        if (result.changes.length > 5) {
          console.log(`   ... and ${result.changes.length - 5} more`);
        }
        console.log('');
        allChanges.push(...result.changes);
      } else {
        console.log(`✅ ${filePath} - OK`);
      }
    } else {
      console.log(`⚠️  ${filePath} - File not found`);
    }
  });
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('VALIDATION SUMMARY');
console.log('='.repeat(60));
console.log(`Total files processed: ${totalFiles}`);
console.log(`Syntax errors: ${syntaxErrors}`);
console.log(`Files fixed: ${fixedFiles}`);
console.log(`Total changes made: ${allChanges.length}`);
console.log(`Files passed: ${totalFiles - syntaxErrors - fixedFiles}`);

if (syntaxErrors === 0 && fixedFiles === 0) {
  console.log('\n✅ ALL FILES PASSED VALIDATION');
  process.exit(0);
} else if (syntaxErrors === 0) {
  console.log('\n✅ ALL FILES FIXED SUCCESSFULLY');
  process.exit(0);
} else {
  console.log('\n❌ SOME FILES HAVE SYNTAX ERRORS');
  process.exit(1);
}
