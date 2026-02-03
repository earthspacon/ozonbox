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

// Validation rules
function validateComparisonTable(table) {
  if (!table) return { valid: true };
  
  const issues = [];
  
  // Headers should be an array
  if (table.headers) {
    if (!Array.isArray(table.headers)) {
      issues.push('headers should be an array, found: ' + typeof table.headers);
    } else if (table.headers.length < 3 || table.headers.length > 4) {
      issues.push(`headers should have 3 or 4 elements, found: ${table.headers.length}`);
    }
  }
  
  // Rows should be an array of objects
  if (table.rows) {
    if (!Array.isArray(table.rows)) {
      issues.push('rows should be an array, found: ' + typeof table.rows);
    } else {
      table.rows.forEach((row, idx) => {
        if (typeof row !== 'object' || Array.isArray(row)) {
          issues.push(`rows[${idx}] should be an object, found: ${Array.isArray(row) ? 'array' : typeof row}`);
        } else if (!row.parameter || !row.value1 || !row.value2) {
          issues.push(`rows[${idx}] missing required fields (parameter, value1, value2)`);
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateDataTable(table) {
  if (!table) return { valid: true };
  
  const issues = [];
  
  // Headers should be an array of strings
  const headers = table.headers || table.tableHeaders;
  if (headers) {
    if (!Array.isArray(headers)) {
      issues.push('headers/tableHeaders should be an array, found: ' + typeof headers);
    } else {
      headers.forEach((h, idx) => {
        if (typeof h !== 'string') {
          issues.push(`headers[${idx}] should be a string, found: ${typeof h}`);
        }
      });
    }
  }
  
  // Rows should be a 2D array
  const rows = table.rows || table.tableRows || table.tableData;
  if (rows) {
    if (!Array.isArray(rows)) {
      issues.push('rows/tableRows/tableData should be an array, found: ' + typeof rows);
    } else {
      rows.forEach((row, idx) => {
        if (!Array.isArray(row)) {
          issues.push(`rows[${idx}] should be an array, found: ${typeof row}`);
        } else {
          row.forEach((cell, cellIdx) => {
            if (typeof cell !== 'string' && typeof cell !== 'number') {
              issues.push(`rows[${idx}][${cellIdx}] should be string or number, found: ${typeof cell}`);
            }
          });
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateProcessList(steps) {
  if (!steps) return { valid: true };
  
  const issues = [];
  
  if (!Array.isArray(steps)) {
    issues.push('steps should be an array, found: ' + typeof steps);
  } else {
    steps.forEach((step, idx) => {
      if (typeof step !== 'object' || Array.isArray(step)) {
        issues.push(`steps[${idx}] should be an object, found: ${Array.isArray(step) ? 'array' : typeof step}`);
      } else if (!step.title || !step.description) {
        issues.push(`steps[${idx}] missing required fields (title, description)`);
      }
    });
  }
  
  return { valid: issues.length === 0, issues };
}

function validateBulletList(items) {
  if (!items) return { valid: true };
  
  const issues = [];
  
  if (!Array.isArray(items)) {
    issues.push('items should be an array, found: ' + typeof items);
  } else {
    items.forEach((item, idx) => {
      if (typeof item !== 'string') {
        issues.push(`items[${idx}] should be a string, found: ${typeof item}`);
      }
    });
  }
  
  return { valid: issues.length === 0, issues };
}

function validateFeatureGrid(items) {
  if (!items) return { valid: true };
  
  const issues = [];
  
  if (!Array.isArray(items)) {
    issues.push('items/features should be an array, found: ' + typeof items);
  } else {
    items.forEach((item, idx) => {
      if (typeof item !== 'object' || Array.isArray(item)) {
        issues.push(`items[${idx}] should be an object, found: ${Array.isArray(item) ? 'array' : typeof item}`);
      } else if (!item.title || !item.description) {
        issues.push(`items[${idx}] missing required fields (title, description)`);
      }
    });
  }
  
  return { valid: issues.length === 0, issues };
}

// Recursively validate structure
function validateStructure(obj, path = '') {
  const issues = [];
  
  if (!obj || typeof obj !== 'object') {
    return issues;
  }
  
  // Check for table structures
  if (obj.table) {
    // Could be ComparisonTable or DataTable
    if (obj.table.headers && typeof obj.table.headers === 'object' && !Array.isArray(obj.table.headers)) {
      // This is likely a ComparisonTable with object headers - needs fixing
      issues.push({
        path: path + '.table.headers',
        type: 'comparison-table-headers-object',
        message: 'ComparisonTable headers is an object, should be array'
      });
    }
    if (obj.table.rows && typeof obj.table.rows === 'object' && !Array.isArray(obj.table.rows)) {
      // This is likely a ComparisonTable with object rows - needs fixing
      issues.push({
        path: path + '.table.rows',
        type: 'comparison-table-rows-object',
        message: 'ComparisonTable rows is an object, should be array of objects'
      });
    }
  }
  
  // Check for known table patterns
  if (obj.headers && typeof obj.headers === 'object' && !Array.isArray(obj.headers)) {
    issues.push({
      path: path + '.headers',
      type: 'headers-object',
      message: 'headers is an object, should be array'
    });
  }
  
  if (obj.rows && typeof obj.rows === 'object' && !Array.isArray(obj.rows)) {
    issues.push({
      path: path + '.rows',
      type: 'rows-object',
      message: 'rows is an object, should be array'
    });
  }
  
  // Recursively check nested objects
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null) {
      issues.push(...validateStructure(obj[key], path ? `${path}.${key}` : key));
    }
  }
  
  return issues;
}

// Fix structure issues
function fixStructure(obj, issues) {
  const fixed = JSON.parse(JSON.stringify(obj)); // Deep clone
  
  issues.forEach(issue => {
    const pathParts = issue.path.split('.');
    let current = fixed;
    
    // Navigate to the parent
    for (let i = 0; i < pathParts.length - 1; i++) {
      if (current[pathParts[i]]) {
        current = current[pathParts[i]];
      } else {
        return; // Path doesn't exist
      }
    }
    
    const lastKey = pathParts[pathParts.length - 1];
    
    if (issue.type === 'comparison-table-headers-object' || issue.type === 'headers-object') {
      // Convert object headers to array
      if (current[lastKey] && typeof current[lastKey] === 'object' && !Array.isArray(current[lastKey])) {
        current[lastKey] = Object.values(current[lastKey]);
      }
    } else if (issue.type === 'comparison-table-rows-object' || issue.type === 'rows-object') {
      // Convert object rows to array
      if (current[lastKey] && typeof current[lastKey] === 'object' && !Array.isArray(current[lastKey])) {
        current[lastKey] = Object.values(current[lastKey]);
      }
    }
  });
  
  return fixed;
}

// Main validation function
function validateFile(filePath) {
  const results = {
    file: filePath,
    syntaxError: null,
    structureIssues: [],
    fixed: false
  };
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Validate structure
    const structureIssues = validateStructure(data);
    results.structureIssues = structureIssues;
    
    // Fix if needed
    if (structureIssues.length > 0) {
      const fixed = fixStructure(data, structureIssues);
      fs.writeFileSync(filePath, JSON.stringify(fixed, null, 2) + '\n', 'utf8');
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

const allResults = [];
let totalFiles = 0;
let syntaxErrors = 0;
let structureIssues = 0;
let fixedFiles = 0;

categories.forEach(category => {
  languages.forEach(lang => {
    const filePath = path.join(basePath, lang, `category-${category}.json`);
    totalFiles++;
    
    if (fs.existsSync(filePath)) {
      const result = validateFile(filePath);
      allResults.push(result);
      
      if (result.syntaxError) {
        syntaxErrors++;
        console.log(`❌ ${filePath}`);
        console.log(`   Syntax Error: ${result.syntaxError}\n`);
      } else if (result.structureIssues.length > 0) {
        structureIssues++;
        fixedFiles++;
        console.log(`⚠️  ${filePath}`);
        console.log(`   Found ${result.structureIssues.length} structure issue(s), fixed automatically`);
        result.structureIssues.forEach(issue => {
          console.log(`   - ${issue.path}: ${issue.message}`);
        });
        console.log('');
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
console.log(`Structure issues found: ${structureIssues}`);
console.log(`Files fixed: ${fixedFiles}`);
console.log(`Files passed: ${totalFiles - syntaxErrors - structureIssues}`);

if (syntaxErrors === 0 && structureIssues === 0) {
  console.log('\n✅ ALL FILES PASSED VALIDATION');
  process.exit(0);
} else {
  console.log('\n⚠️  SOME ISSUES WERE FOUND');
  process.exit(1);
}
