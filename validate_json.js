const ru = require('./src/shared/config/i18n/ru/category-transport.json');
const en = require('./src/shared/config/i18n/en/category-transport.json');
const uz = require('./src/shared/config/i18n/uz/category-transport.json');
const uzCyr = require('./src/shared/config/i18n/uz-cyr/category-transport.json');

console.log('✓ All JSON files are valid');
console.log('\nRussian auto-transport economics section:');
console.log('  - Section name: economics');
console.log('  - tableData type:', Array.isArray(ru.subcategories['auto-transport'].sections.economics.tableData) ? 'array' : 'object');
console.log('  - tableData length:', ru.subcategories['auto-transport'].sections.economics.tableData.length);
console.log('  - First row:', ru.subcategories['auto-transport'].sections.economics.tableData[0]);

console.log('\nEnglish auto-transport economics section:');
console.log('  - Section name: economics');
console.log('  - tableData type:', Array.isArray(en.subcategories['auto-transport'].sections.economics.tableData) ? 'array' : 'object');
console.log('  - tableData length:', en.subcategories['auto-transport'].sections.economics.tableData.length);

console.log('\nUzbek Latin auto-transport economics section:');
console.log('  - Section name: economics');
console.log('  - tableData type:', Array.isArray(uz.subcategories['auto-transport'].sections.economics.tableData) ? 'array' : 'object');
console.log('  - tableData length:', uz.subcategories['auto-transport'].sections.economics.tableData.length);

console.log('\nUzbek Cyrillic auto-transport economics section:');
console.log('  - Section name: economics');
console.log('  - tableData type:', Array.isArray(uzCyr.subcategories['auto-transport'].sections.economics.tableData) ? 'array' : 'object');
console.log('  - tableData length:', uzCyr.subcategories['auto-transport'].sections.economics.tableData.length);
