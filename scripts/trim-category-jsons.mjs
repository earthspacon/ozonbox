/**
 * Trim category JSONs: keep only title, description, and per-subcategory { title, shortDesc }.
 * Category index page only needs these; full subcategory content lives in subcategory-*.json.
 * Run from project root: node scripts/trim-category-jsons.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const I18N = path.join(ROOT, 'src/shared/config/i18n')
const LOCALES = ['ru', 'en', 'uz', 'uz-cyr']

const CATEGORY_IDS = [
  'medicine',
  'agriculture',
  'food-production',
  'horeca',
  'water-treatment',
  'disinfection',
  'cleaning',
  'warehouses',
  'industry',
  'transport',
  'mining-metals',
]

function trimSubcategory(sub) {
  if (!sub || typeof sub !== 'object') return sub
  const out = {}
  if (sub.title != null) out.title = sub.title
  if (sub.shortDesc != null) out.shortDesc = sub.shortDesc
  return out
}

for (const categoryId of CATEGORY_IDS) {
  const ns = `category-${categoryId}`
  for (const lang of LOCALES) {
    const filePath = path.join(I18N, lang, `${ns}.json`)
    if (!fs.existsSync(filePath)) {
      console.warn(`Skip ${filePath} (not found)`)
      continue
    }
    const raw = fs.readFileSync(filePath, 'utf8')
    let data
    try {
      data = JSON.parse(raw)
    } catch (e) {
      console.error(`Invalid JSON: ${filePath}`, e.message)
      continue
    }
    const trimmed = {
      title: data.title,
      ...(data.description != null && { description: data.description }),
      subcategories: {},
    }
    if (data.subcategories && typeof data.subcategories === 'object') {
      for (const [subId, sub] of Object.entries(data.subcategories)) {
        trimmed.subcategories[subId] = trimSubcategory(sub)
      }
    }
    fs.writeFileSync(filePath, JSON.stringify(trimmed, null, 2) + '\n', 'utf8')
    console.log(`Trimmed ${filePath}`)
  }
}
console.log('Done.')
