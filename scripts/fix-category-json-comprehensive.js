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

// Fix functions
function fixHeaders(headers) {
  if (!headers) return headers;
  
  // If it's an object, convert to array
  if (typeof headers === 'object' && !Array.isArray(headers)) {
    // Check if it has numeric keys (like {"0": "...", "1": "..."})
    const keys = Object.keys(headers).sort((a, b) => {
      const numA = parseInt(a);
      const numB = parseInt(b);
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
      return a.localeCompare(b);
    });
    
    // If all keys are numeric, convert to array
    if (keys.every(k => !isNaN(parseInt(k)))) {
      return keys.map(k => headers[k]);
    }
    
    // Otherwise, convert object values to array
    return Object.values(headers);
  }
  
  return headers;
}

function fixComparisonTableRows(rows) {
  if (!Array.isArray(rows)) return rows;
  
  return rows.map(row => {
    if (typeof row === 'object' && !Array.isArray(row)) {
      // Check if it needs conversion
      const keys = Object.keys(row);
      
      // If it has parameter/value1/value2, it's already correct
      if (row.parameter && (row.value1 || row.value2)) {
        return row;
      }
      
      // If it has parameter/before/after, convert to value1/value2
      if (row.parameter && row.before && row.after) {
        return {
          parameter: row.parameter,
          value1: row.before,
          value2: row.after,
          value3: row.efficiency || row.value3
        };
      }
      
      // If it has indicator/without/with, convert to parameter/value1/value2
      if (row.indicator && row.without && row.with) {
        return {
          parameter: row.indicator,
          value1: row.without,
          value2: row.with,
          value3: row.value3
        };
      }
      
      // If it has parameter but different value keys, try to map them
      if (row.parameter) {
        const valueKeys = keys.filter(k => k !== 'parameter' && k !== 'indicator');
        return {
          parameter: row.parameter,
          value1: row[valueKeys[0]] || '',
          value2: row[valueKeys[1]] || '',
          value3: row[valueKeys[2]] || row.value3
        };
      }
      
      // Try to infer from common patterns
      if (keys.length >= 3) {
        const paramKey = keys.find(k => 
          k === 'parameter' || k === 'indicator' || k === 'type' || k === 'criterion'
        ) || keys[0];
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
}

function fixDataTableRows(rows) {
  if (!Array.isArray(rows)) return rows;
  
  return rows.map(row => {
    // If it's already an array, return as is
    if (Array.isArray(row)) {
      return row;
    }
    
    // If it's an object, convert to array
    if (typeof row === 'object') {
      // Check if it has numeric keys (like {"0": "...", "1": "..."})
      const keys = Object.keys(row).sort((a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }
        return a.localeCompare(b);
      });
      
      // If all keys are numeric, convert to array
      if (keys.every(k => !isNaN(parseInt(k)))) {
        return keys.map(k => row[k]);
      }
      
      // Otherwise, convert object values to array
      return Object.values(row);
    }
    
    // If it's a primitive, wrap in array
    return [String(row)];
  });
}

function fixProcessListSteps(steps) {
  if (!Array.isArray(steps)) return steps;
  
  return steps.map((step, idx) => {
    // If it's already an object, return as is
    if (typeof step === 'object' && !Array.isArray(step)) {
      return step;
    }
    
    // If it's a string, convert to object
    if (typeof step === 'string') {
      return {
        title: `Step ${idx + 1}`,
        description: step
      };
    }
    
    return step;
  });
}

// Recursively fix structure
function fixStructure(obj, path = '') {
  const fixed = JSON.parse(JSON.stringify(obj)); // Deep clone
  const changes = [];
  
  function processObject(current, currentPath) {
    if (!current || typeof current !== 'object' || Array.isArray(current)) {
      return;
    }
    
    // Fix headers/tableHeaders
    if (current.headers || current.tableHeaders) {
      const headerKey = current.headers ? 'headers' : 'tableHeaders';
      const original = current[headerKey];
      const fixedHeaders = fixHeaders(original);
      
      if (JSON.stringify(original) !== JSON.stringify(fixedHeaders)) {
        current[headerKey] = fixedHeaders;
        changes.push(`${currentPath}.${headerKey}: converted object to array`);
      }
    }
    
    // Check for ComparisonTable pattern
    if ((current.headers || current.tableHeaders) && (current.rows || current.tableRows)) {
      const rows = current.rows || current.tableRows;
      
      if (Array.isArray(rows) && rows.length > 0) {
        const firstRow = rows[0];
        if (typeof firstRow === 'object' && !Array.isArray(firstRow) && 
            (firstRow.parameter || firstRow.indicator || firstRow.before || firstRow.without)) {
          // This is a ComparisonTable
          const fixedRows = fixComparisonTableRows(rows);
          if (JSON.stringify(rows) !== JSON.stringify(fixedRows)) {
            if (current.rows) {
              current.rows = fixedRows;
            } else {
              current.tableRows = fixedRows;
            }
            changes.push(`${currentPath}: fixed ComparisonTable rows`);
          }
        }
      }
    }
    
    // Check for DataTable pattern
    if ((current.tableHeaders || current.headers) && (current.tableData || current.tableRows || current.rows)) {
      const rows = current.tableData || current.tableRows || current.rows;
      
      if (Array.isArray(rows) && rows.length > 0) {
        const firstRow = rows[0];
        // If first row is an object (not array), it might be a DataTable that needs fixing
        if (typeof firstRow === 'object' && !Array.isArray(firstRow) && 
            !firstRow.parameter && !firstRow.indicator && !firstRow.before) {
          // This might be a DataTable with object rows
          const fixedRows = fixDataTableRows(rows);
          if (JSON.stringify(rows) !== JSON.stringify(fixedRows)) {
            if (current.tableData) {
              current.tableData = fixedRows;
            } else if (current.tableRows) {
              current.tableRows = fixedRows;
            } else {
              current.rows = fixedRows;
            }
            changes.push(`${currentPath}: fixed DataTable rows (converted objects to arrays)`);
          }
        } else if (Array.isArray(firstRow)) {
          // Already correct format, but check individual rows
          const fixedRows = fixDataTableRows(rows);
          if (JSON.stringify(rows) !== JSON.stringify(fixedRows)) {
            if (current.tableData) {
              current.tableData = fixedRows;
            } else if (current.tableRows) {
              current.tableRows = fixedRows;
            } else {
              current.rows = fixedRows;
            }
            changes.push(`${currentPath}: fixed DataTable rows`);
          }
        }
      }
    }
    
    // Special case: tableData with object rows (like in agriculture.json)
    if (current.tableData && Array.isArray(current.tableData) && current.tableData.length > 0) {
      const firstRow = current.tableData[0];
      if (typeof firstRow === 'object' && !Array.isArray(firstRow)) {
        // Check if it's actually a ComparisonTable (has parameter/value1/value2)
        if (firstRow.parameter && (firstRow.value1 || firstRow.value2)) {
          // This is actually a ComparisonTable, not DataTable
          // Convert to ComparisonTable format
          current.headers = current.tableHeaders || current.headers || [];
          current.rows = fixComparisonTableRows(current.tableData);
          delete current.tableData;
          delete current.tableHeaders;
          changes.push(`${currentPath}: converted DataTable to ComparisonTable format`);
        } else {
          // It's a DataTable with object rows, convert to 2D array
          const fixedRows = fixDataTableRows(current.tableData);
          if (JSON.stringify(current.tableData) !== JSON.stringify(fixedRows)) {
            current.tableData = fixedRows;
            changes.push(`${currentPath}.tableData: converted object rows to 2D array`);
          }
        }
      }
    }
    
    // Fix ProcessList steps
    if (current.steps && Array.isArray(current.steps)) {
      const fixedSteps = fixProcessListSteps(current.steps);
      if (JSON.stringify(current.steps) !== JSON.stringify(fixedSteps)) {
        current.steps = fixedSteps;
        changes.push(`${currentPath}.steps: converted string steps to objects`);
      }
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

// Validate and fix a single file
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
    const { fixed, changes } = fixStructure(data);
    
    if (changes.length > 0) {
      // Write back with proper formatting
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
console.log('Fixing category JSON files...\n');

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
        console.log(`✅ ${filePath}`);
        console.log(`   Fixed ${result.changes.length} issue(s):`);
        result.changes.slice(0, 10).forEach(change => {
          console.log(`   - ${change}`);
        });
        if (result.changes.length > 10) {
          console.log(`   ... and ${result.changes.length - 10} more`);
        }
        console.log('');
        allChanges.push(...result.changes);
      } else {
        console.log(`✅ ${filePath} - OK (no changes needed)`);
      }
    } else {
      console.log(`⚠️  ${filePath} - File not found`);
    }
  });
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('FIX SUMMARY');
console.log('='.repeat(60));
console.log(`Total files processed: ${totalFiles}`);
console.log(`Syntax errors: ${syntaxErrors}`);
console.log(`Files fixed: ${fixedFiles}`);
console.log(`Total changes made: ${allChanges.length}`);
console.log(`Files passed: ${totalFiles - syntaxErrors - fixedFiles}`);

if (syntaxErrors === 0 && fixedFiles === 0) {
  console.log('\n✅ ALL FILES ARE ALREADY CORRECT');
  process.exit(0);
} else if (syntaxErrors === 0) {
  console.log('\n✅ ALL FILES FIXED SUCCESSFULLY');
  process.exit(0);
} else {
  console.log('\n❌ SOME FILES HAVE SYNTAX ERRORS');
  process.exit(1);
}
