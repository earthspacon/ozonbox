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

// Validation functions
function validateComparisonTable(section, path = '') {
  const issues = [];
  
  if (!section) return { valid: true, issues: [] };
  
  // Check headers
  const headers = section.headers || section.tableHeaders;
  if (headers !== undefined) {
    if (!Array.isArray(headers)) {
      issues.push({
        path: `${path}.headers`,
        type: 'comparison-table-headers-not-array',
        message: `headers should be an array, found: ${typeof headers}`,
        value: headers
      });
    } else {
      // Check if all elements are strings
      headers.forEach((h, idx) => {
        if (typeof h !== 'string') {
          issues.push({
            path: `${path}.headers[${idx}]`,
            type: 'comparison-table-header-not-string',
            message: `header should be a string, found: ${typeof h}`,
            value: h
          });
        }
      });
      // Check length (should be 3 or 4)
      if (headers.length < 3 || headers.length > 4) {
        issues.push({
          path: `${path}.headers`,
          type: 'comparison-table-headers-length',
          message: `headers should have 3 or 4 elements, found: ${headers.length}`,
          value: headers.length
        });
      }
    }
  }
  
  // Check rows
  const rows = section.rows || section.tableRows;
  if (rows !== undefined) {
    if (!Array.isArray(rows)) {
      issues.push({
        path: `${path}.rows`,
        type: 'comparison-table-rows-not-array',
        message: `rows should be an array, found: ${typeof rows}`,
        value: rows
      });
    } else {
      rows.forEach((row, idx) => {
        if (typeof row !== 'object' || Array.isArray(row)) {
          issues.push({
            path: `${path}.rows[${idx}]`,
            type: 'comparison-table-row-not-object',
            message: `row should be an object, found: ${Array.isArray(row) ? 'array' : typeof row}`,
            value: row
          });
        } else {
          // Check required fields
          if (!row.parameter && !row.indicator) {
            issues.push({
              path: `${path}.rows[${idx}]`,
              type: 'comparison-table-row-missing-parameter',
              message: `row missing required field: parameter or indicator`,
              value: row
            });
          }
          if (!row.value1 && !row.without) {
            issues.push({
              path: `${path}.rows[${idx}]`,
              type: 'comparison-table-row-missing-value1',
              message: `row missing required field: value1 or without`,
              value: row
            });
          }
          if (!row.value2 && !row.with) {
            issues.push({
              path: `${path}.rows[${idx}]`,
              type: 'comparison-table-row-missing-value2',
              message: `row missing required field: value2 or with`,
              value: row
            });
          }
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateDataTable(section, path = '') {
  const issues = [];
  
  if (!section) return { valid: true, issues: [] };
  
  // Check headers (can be headers or tableHeaders)
  const headers = section.headers || section.tableHeaders;
  if (headers !== undefined) {
    if (!Array.isArray(headers)) {
      issues.push({
        path: `${path}.headers`,
        type: 'data-table-headers-not-array',
        message: `headers/tableHeaders should be an array, found: ${typeof headers}`,
        value: headers
      });
    } else {
      headers.forEach((h, idx) => {
        if (typeof h !== 'string') {
          issues.push({
            path: `${path}.headers[${idx}]`,
            type: 'data-table-header-not-string',
            message: `header should be a string, found: ${typeof h}`,
            value: h
          });
        }
      });
    }
  }
  
  // Check rows (can be rows, tableRows, or tableData)
  const rows = section.rows || section.tableRows || section.tableData;
  if (rows !== undefined) {
    if (!Array.isArray(rows)) {
      issues.push({
        path: `${path}.rows`,
        type: 'data-table-rows-not-array',
        message: `rows/tableRows/tableData should be an array, found: ${typeof rows}`,
        value: rows
      });
    } else {
      rows.forEach((row, idx) => {
        if (!Array.isArray(row)) {
          issues.push({
            path: `${path}.rows[${idx}]`,
            type: 'data-table-row-not-array',
            message: `row should be an array (2D array), found: ${typeof row}`,
            value: row
          });
        } else {
          // Check if all cells are strings or numbers
          row.forEach((cell, cellIdx) => {
            if (typeof cell !== 'string' && typeof cell !== 'number') {
              issues.push({
                path: `${path}.rows[${idx}][${cellIdx}]`,
                type: 'data-table-cell-invalid-type',
                message: `cell should be string or number, found: ${typeof cell}`,
                value: cell
              });
            }
          });
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateProcessList(section, path = '') {
  const issues = [];
  
  if (!section) return { valid: true, issues: [] };
  
  const steps = section.steps;
  if (steps !== undefined) {
    if (!Array.isArray(steps)) {
      issues.push({
        path: `${path}.steps`,
        type: 'process-list-steps-not-array',
        message: `steps should be an array, found: ${typeof steps}`,
        value: steps
      });
    } else {
      steps.forEach((step, idx) => {
        if (typeof step !== 'object' || Array.isArray(step)) {
          issues.push({
            path: `${path}.steps[${idx}]`,
            type: 'process-list-step-not-object',
            message: `step should be an object, found: ${Array.isArray(step) ? 'array' : typeof step}`,
            value: step
          });
        } else {
          if (!step.title) {
            issues.push({
              path: `${path}.steps[${idx}]`,
              type: 'process-list-step-missing-title',
              message: `step missing required field: title`,
              value: step
            });
          }
          if (!step.description) {
            issues.push({
              path: `${path}.steps[${idx}]`,
              type: 'process-list-step-missing-description',
              message: `step missing required field: description`,
              value: step
            });
          }
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateBulletList(section, path = '') {
  const issues = [];
  
  if (!section) return { valid: true, issues: [] };
  
  const items = section.items;
  if (items !== undefined) {
    if (!Array.isArray(items)) {
      issues.push({
        path: `${path}.items`,
        type: 'bullet-list-items-not-array',
        message: `items should be an array, found: ${typeof items}`,
        value: items
      });
    } else {
      items.forEach((item, idx) => {
        if (typeof item !== 'string') {
          issues.push({
            path: `${path}.items[${idx}]`,
            type: 'bullet-list-item-not-string',
            message: `item should be a string, found: ${typeof item}`,
            value: item
          });
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

function validateFeatureGrid(section, path = '') {
  const issues = [];
  
  if (!section) return { valid: true, issues: [] };
  
  const items = section.items || section.features;
  if (items !== undefined) {
    if (!Array.isArray(items)) {
      issues.push({
        path: `${path}.items`,
        type: 'feature-grid-items-not-array',
        message: `items/features should be an array, found: ${typeof items}`,
        value: items
      });
    } else {
      items.forEach((item, idx) => {
        if (typeof item !== 'object' || Array.isArray(item)) {
          issues.push({
            path: `${path}.items[${idx}]`,
            type: 'feature-grid-item-not-object',
            message: `item should be an object, found: ${Array.isArray(item) ? 'array' : typeof item}`,
            value: item
          });
        } else {
          if (!item.title) {
            issues.push({
              path: `${path}.items[${idx}]`,
              type: 'feature-grid-item-missing-title',
              message: `item missing required field: title`,
              value: item
            });
          }
          if (!item.description) {
            issues.push({
              path: `${path}.items[${idx}]`,
              type: 'feature-grid-item-missing-description',
              message: `item missing required field: description`,
              value: item
            });
          }
        }
      });
    }
  }
  
  return { valid: issues.length === 0, issues };
}

// Recursively find and validate component structures
function findAndValidateComponents(obj, path = '', results = {}) {
  if (!obj || typeof obj !== 'object') {
    return results;
  }
  
  // Check for ComparisonTable patterns
  if ((obj.headers || obj.tableHeaders) && (obj.rows || obj.tableRows)) {
    const headers = obj.headers || obj.tableHeaders;
    const rows = obj.rows || obj.tableRows;
    
    // Determine if it's ComparisonTable or DataTable
    if (Array.isArray(rows) && rows.length > 0) {
      const firstRow = rows[0];
      if (typeof firstRow === 'object' && !Array.isArray(firstRow) && 
          (firstRow.parameter || firstRow.indicator || firstRow.value1 || firstRow.without)) {
        // This is a ComparisonTable
        const validation = validateComparisonTable(obj, path);
        if (!validation.valid) {
          if (!results.comparisonTables) results.comparisonTables = [];
          results.comparisonTables.push({ path, issues: validation.issues });
        }
      } else if (Array.isArray(firstRow)) {
        // This is a DataTable
        const validation = validateDataTable(obj, path);
        if (!validation.valid) {
          if (!results.dataTables) results.dataTables = [];
          results.dataTables.push({ path, issues: validation.issues });
        }
      }
    }
  }
  
  // Check for DataTable with tableData
  if (obj.tableHeaders && obj.tableData) {
    const validation = validateDataTable(obj, path);
    if (!validation.valid) {
      if (!results.dataTables) results.dataTables = [];
      results.dataTables.push({ path, issues: validation.issues });
    }
  }
  
  // Check for ProcessList
  if (obj.steps && Array.isArray(obj.steps)) {
    const validation = validateProcessList(obj, path);
    if (!validation.valid) {
      if (!results.processLists) results.processLists = [];
      results.processLists.push({ path, issues: validation.issues });
    }
  }
  
  // Check for BulletList
  if (obj.items && !obj.title && !obj.description) {
    // Might be BulletList, but need to check if items are strings
    if (Array.isArray(obj.items) && obj.items.length > 0 && typeof obj.items[0] === 'string') {
      const validation = validateBulletList(obj, path);
      if (!validation.valid) {
        if (!results.bulletLists) results.bulletLists = [];
        results.bulletLists.push({ path, issues: validation.issues });
      }
    }
  }
  
  // Check for FeatureGrid
  if ((obj.items || obj.features) && Array.isArray(obj.items || obj.features)) {
    const items = obj.items || obj.features;
    if (items.length > 0 && typeof items[0] === 'object' && !Array.isArray(items[0]) && 
        (items[0].title || items[0].description)) {
      const validation = validateFeatureGrid(obj, path);
      if (!validation.valid) {
        if (!results.featureGrids) results.featureGrids = [];
        results.featureGrids.push({ path, issues: validation.issues });
      }
    }
  }
  
  // Recursively check nested objects
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      findAndValidateComponents(obj[key], path ? `${path}.${key}` : key, results);
    }
  }
  
  return results;
}

// Compare structures across languages
function compareStructures(structures) {
  const issues = [];
  const baseLang = 'en';
  const baseStructure = structures[baseLang];
  
  if (!baseStructure) {
    return issues;
  }
  
  // Compare each language with base
  for (const lang of languages) {
    if (lang === baseLang) continue;
    
    const langStructure = structures[lang];
    if (!langStructure) {
      issues.push({
        lang,
        type: 'missing-language',
        message: `Language ${lang} is missing`
      });
      continue;
    }
    
    // Compare component counts
    const baseComponents = {
      comparisonTables: (baseStructure.comparisonTables || []).length,
      dataTables: (baseStructure.dataTables || []).length,
      processLists: (baseStructure.processLists || []).length,
      bulletLists: (baseStructure.bulletLists || []).length,
      featureGrids: (baseStructure.featureGrids || []).length
    };
    
    const langComponents = {
      comparisonTables: (langStructure.comparisonTables || []).length,
      dataTables: (langStructure.dataTables || []).length,
      processLists: (langStructure.processLists || []).length,
      bulletLists: (langStructure.bulletLists || []).length,
      featureGrids: (langStructure.featureGrids || []).length
    };
    
    for (const componentType in baseComponents) {
      if (baseComponents[componentType] !== langComponents[componentType]) {
        issues.push({
          lang,
          type: 'structure-mismatch',
          message: `${componentType} count mismatch: ${baseLang} has ${baseComponents[componentType]}, ${lang} has ${langComponents[componentType]}`
        });
      }
    }
  }
  
  return issues;
}

// Validate a single file
function validateFile(filePath) {
  const results = {
    file: filePath,
    syntaxError: null,
    componentIssues: {},
    structureIssues: []
  };
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Find and validate all components
    const componentResults = findAndValidateComponents(data, 'root');
    results.componentIssues = componentResults;
    
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
console.log('Validating category JSON files...\n');

const allResults = {};
let totalFiles = 0;
let syntaxErrors = 0;
let totalIssues = 0;

// First pass: validate all files
categories.forEach(category => {
  allResults[category] = {};
  
  languages.forEach(lang => {
    const filePath = path.join(basePath, lang, `category-${category}.json`);
    totalFiles++;
    
    if (fs.existsSync(filePath)) {
      const result = validateFile(filePath);
      allResults[category][lang] = result;
      
      if (result.syntaxError) {
        syntaxErrors++;
        console.log(`❌ ${filePath}`);
        console.log(`   Syntax Error: ${result.syntaxError}\n`);
      } else {
        // Count issues
        const issueCount = Object.values(result.componentIssues).reduce((sum, arr) => sum + (arr ? arr.length : 0), 0);
        totalIssues += issueCount;
        
        if (issueCount > 0) {
          console.log(`⚠️  ${filePath}`);
          console.log(`   Found ${issueCount} issue(s):`);
          
          if (result.componentIssues.comparisonTables) {
            result.componentIssues.comparisonTables.forEach(ct => {
              ct.issues.forEach(issue => {
                console.log(`   - ComparisonTable ${ct.path}: ${issue.message}`);
              });
            });
          }
          if (result.componentIssues.dataTables) {
            result.componentIssues.dataTables.forEach(dt => {
              dt.issues.forEach(issue => {
                console.log(`   - DataTable ${dt.path}: ${issue.message}`);
              });
            });
          }
          if (result.componentIssues.processLists) {
            result.componentIssues.processLists.forEach(pl => {
              pl.issues.forEach(issue => {
                console.log(`   - ProcessList ${pl.path}: ${issue.message}`);
              });
            });
          }
          if (result.componentIssues.bulletLists) {
            result.componentIssues.bulletLists.forEach(bl => {
              bl.issues.forEach(issue => {
                console.log(`   - BulletList ${bl.path}: ${issue.message}`);
              });
            });
          }
          if (result.componentIssues.featureGrids) {
            result.componentIssues.featureGrids.forEach(fg => {
              fg.issues.forEach(issue => {
                console.log(`   - FeatureGrid ${fg.path}: ${issue.message}`);
              });
            });
          }
          console.log('');
        } else {
          console.log(`✅ ${filePath} - OK`);
        }
      }
    } else {
      console.log(`⚠️  ${filePath} - File not found`);
    }
  });
});

// Second pass: compare structures across languages
console.log('\n' + '='.repeat(60));
console.log('COMPARING STRUCTURES ACROSS LANGUAGES');
console.log('='.repeat(60));

let structureMismatches = 0;

categories.forEach(category => {
  const structures = {};
  
  languages.forEach(lang => {
    const result = allResults[category][lang];
    if (result && !result.syntaxError) {
      // Extract component paths
      structures[lang] = {
        comparisonTables: result.componentIssues.comparisonTables || [],
        dataTables: result.componentIssues.dataTables || [],
        processLists: result.componentIssues.processLists || [],
        bulletLists: result.componentIssues.bulletLists || [],
        featureGrids: result.componentIssues.featureGrids || []
      };
    }
  });
  
  const comparisonIssues = compareStructures(structures);
  if (comparisonIssues.length > 0) {
    structureMismatches += comparisonIssues.length;
    console.log(`\n⚠️  ${category}:`);
    comparisonIssues.forEach(issue => {
      console.log(`   - ${issue.message}`);
    });
  }
});

// Summary
console.log('\n' + '='.repeat(60));
console.log('VALIDATION SUMMARY');
console.log('='.repeat(60));
console.log(`Total files processed: ${totalFiles}`);
console.log(`Syntax errors: ${syntaxErrors}`);
console.log(`Component structure issues: ${totalIssues}`);
console.log(`Structure mismatches across languages: ${structureMismatches}`);
console.log(`Files passed: ${totalFiles - syntaxErrors - (totalIssues > 0 ? 1 : 0)}`);

if (syntaxErrors === 0 && totalIssues === 0 && structureMismatches === 0) {
  console.log('\n✅ ALL FILES PASSED VALIDATION');
  process.exit(0);
} else {
  console.log('\n⚠️  SOME ISSUES WERE FOUND');
  process.exit(1);
}
