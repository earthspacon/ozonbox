/**
 * Restore `sources` (and sourcesTitle) in uz-cyr article JSONs from uz
 * so citation titles and URLs remain in Latin.
 * Run from project root: node scripts/restore-sources-from-uz.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_DIR = path.join(ROOT, 'src/shared/config/i18n/uz')
const UZ_CYR_DIR = path.join(ROOT, 'src/shared/config/i18n/uz-cyr')

const articleFiles = fs.readdirSync(UZ_CYR_DIR).filter((f) => f.startsWith('article-') && f.endsWith('.json'))

for (const file of articleFiles) {
  const uzPath = path.join(UZ_DIR, file)
  const uzCyrPath = path.join(UZ_CYR_DIR, file)
  const uz = JSON.parse(fs.readFileSync(uzPath, 'utf-8'))
  const uzCyr = JSON.parse(fs.readFileSync(uzCyrPath, 'utf-8'))
  if (uz.sources) {
    uzCyr.sources = uz.sources
  }
  if (uz.sourcesTitle) {
    uzCyr.sourcesTitle = uz.sourcesTitle
  }
  fs.writeFileSync(uzCyrPath, JSON.stringify(uzCyr, null, 2), 'utf-8')
  console.log(`Restored sources: ${file}`)
}
console.log(`Done. Processed ${articleFiles.length} article files.`)
