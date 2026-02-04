const fs = require('fs');
const files = [
  'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\en\\category-transport.json',
  'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\ru\\category-transport.json',
  'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\uz\\category-transport.json',
  'D:\\Projects\\ozonbox\\src\\shared\\config\\i18n\\uz-cyr\\category-transport.json'
];

files.forEach(f => {
  try {
    JSON.parse(fs.readFileSync(f, 'utf8'));
    console.log(f.split('\\').pop() + ': ✓ OK');
  } catch(e) {
    console.log(f.split('\\').pop() + ': ✗ ' + e.message);
  }
});
