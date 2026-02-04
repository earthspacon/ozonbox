const fs = require('fs');
const files = {
  'en': 'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\en\\category-transport.json',
  'ru': 'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\ru\\category-transport.json',
  'uz': 'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\uz\\category-transport.json',
  'uz-cyr': 'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\uz-cyr\\category-transport.json'
};

Object.entries(files).forEach(([lang, path]) => {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  const sections = data.subcategories['auto-transport'].sections;
  
  console.log(`\n${lang}:`);
  
  // Check all sections exist
  const requiredSections = ['intro', 'highlight1', 'types', 'problems', 'technology', 'modes', 
    'refrigerators', 'odorRemoval', 'integration', 'economy', 'compliance', 'equipment', 'roi', 'safety'];
  
  requiredSections.forEach(sec => {
    if (!sections[sec]) {
      console.log(`  ✗ MISSING: ${sec}`);
    } else {
      console.log(`  ✓ ${sec}`);
    }
  });
  
  // Check integration.features is array
  if (sections.integration && sections.integration.features) {
    if (Array.isArray(sections.integration.features)) {
      console.log(`  ✓ integration.features is array (${sections.integration.features.length} items)`);
    } else {
      console.log(`  ✗ integration.features is NOT array:`, typeof sections.integration.features);
    }
  } else {
    console.log(`  ✗ integration.features is undefined`);
  }
});
