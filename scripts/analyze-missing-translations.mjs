#!/usr/bin/env node

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const i18nDir = 'src/shared/config/i18n';
const languages = ['ru', 'en', 'uz', 'uz-cyr'];

function getJsonFiles(lang) {
  const langDir = join(i18nDir, lang);
  try {
    return readdirSync(langDir)
      .filter(f => f.endsWith('.json'))
      .map(f => f.replace('.json', ''));
  } catch {
    return [];
  }
}

function loadJson(lang, filename) {
  try {
    const content = readFileSync(join(i18nDir, lang, `${filename}.json`), 'utf-8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

function countKeys(obj, prefix = '') {
  let count = 0;
  let keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      const result = countKeys(value, fullKey);
      count += result.count;
      keys.push(...result.keys);
    } else {
      count++;
      keys.push(fullKey);
    }
  }
  
  return { count, keys };
}

function getMissingKeys(ruKeys, langKeys) {
  return ruKeys.filter(key => !langKeys.includes(key));
}

console.log('Analyzing translation completeness...\n');

const ruFiles = getJsonFiles('ru');
const issues = [];

for (const filename of ruFiles) {
  const ru = loadJson('ru', filename);
  if (!ru) continue;
  
  const ruData = countKeys(ru);
  const fileIssues = {
    filename,
    ruKeys: ruData.count,
    languages: {}
  };
  
  let hasIssues = false;
  
  for (const lang of ['en', 'uz', 'uz-cyr']) {
    const langData = loadJson(lang, filename);
    
    if (!langData) {
      fileIssues.languages[lang] = {
        status: 'MISSING_FILE',
        keys: 0,
        missing: ruData.count,
        missingKeys: ruData.keys
      };
      hasIssues = true;
    } else {
      const langKeysData = countKeys(langData);
      const missingKeys = getMissingKeys(ruData.keys, langKeysData.keys);
      
      if (missingKeys.length > 0) {
        fileIssues.languages[lang] = {
          status: 'INCOMPLETE',
          keys: langKeysData.count,
          missing: missingKeys.length,
          missingKeys: missingKeys.slice(0, 10) // show first 10
        };
        hasIssues = true;
      } else if (langKeysData.count < ruData.count) {
        fileIssues.languages[lang] = {
          status: 'FEWER_KEYS',
          keys: langKeysData.count,
          missing: ruData.count - langKeysData.count
        };
        hasIssues = true;
      }
    }
  }
  
  if (hasIssues) {
    issues.push(fileIssues);
  }
}

// Sort by severity (most missing keys first)
issues.sort((a, b) => {
  const aMissing = Object.values(a.languages).reduce((sum, l) => sum + (l.missing || 0), 0);
  const bMissing = Object.values(b.languages).reduce((sum, l) => sum + (l.missing || 0), 0);
  return bMissing - aMissing;
});

console.log(`Found ${issues.length} files with translation issues:\n`);

for (const issue of issues) {
  console.log(`\n📄 ${issue.filename}.json (${issue.ruKeys} keys in RU)`);
  
  for (const [lang, data] of Object.entries(issue.languages)) {
    if (data.status === 'MISSING_FILE') {
      console.log(`  ❌ ${lang.toUpperCase()}: FILE MISSING (${data.missing} keys needed)`);
    } else if (data.status === 'INCOMPLETE') {
      console.log(`  ⚠️  ${lang.toUpperCase()}: ${data.keys} keys, missing ${data.missing}`);
      if (data.missingKeys && data.missingKeys.length > 0) {
        console.log(`      Missing: ${data.missingKeys.slice(0, 5).join(', ')}${data.missingKeys.length > 5 ? '...' : ''}`);
      }
    } else if (data.status === 'FEWER_KEYS') {
      console.log(`  ⚠️  ${lang.toUpperCase()}: ${data.keys} keys (${data.missing} fewer than RU)`);
    }
  }
}

console.log(`\n\nTotal files with issues: ${issues.length}`);
console.log(`\nTo fix these issues, run parallel subagents - one per file.`);
