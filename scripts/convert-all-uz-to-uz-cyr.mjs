/**
 * Run convert_latin_to_cyrillic.js for every JSON file in uz/ (and uz-cyr/).
 * Use after syncing uz-cyr from uz to ensure all uz-cyr content is Cyrillic.
 * Run from project root: node scripts/convert-all-uz-to-uz-cyr.mjs
 */
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_DIR = path.join(ROOT, 'src/shared/config/i18n/uz')

const files = fs.readdirSync(UZ_DIR).filter((f) => f.endsWith('.json'))
for (const file of files.sort()) {
  try {
    execSync(`node scripts/convert_latin_to_cyrillic.js "${file}"`, {
      cwd: ROOT,
      stdio: 'inherit',
    })
  } catch (err) {
    console.error(`Failed: ${file}`, err.message)
  }
}
console.log(`Done. Converted ${files.length} files.`)
