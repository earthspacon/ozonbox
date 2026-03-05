/**
 * One-off: extract per-subcategory JSON files from category JSONs.
 * Run from project root: node scripts/extract-subcategory-jsons.mjs
 * Must run BEFORE trim-category-jsons.mjs; do not run after trim or you will overwrite
 * full subcategory JSONs with trimmed content (title/shortDesc only).
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const I18N = path.join(ROOT, 'src/shared/config/i18n')
const LOCALES = ['ru', 'en', 'uz', 'uz-cyr']

const PAIRS = [
  ['medicine', 'hospitals'],
  ['medicine', 'equipment-sterilization'],
  ['medicine', 'dental'],
  ['medicine', 'rehabilitation'],
  ['medicine', 'ambulances'],
  ['agriculture', 'poultry'],
  ['agriculture', 'livestock'],
  ['agriculture', 'vegetable-storage'],
  ['agriculture', 'greenhouses'],
  ['agriculture', 'aquaculture'],
  ['agriculture', 'grain-storage'],
  ['agriculture', 'beekeeping'],
  ['food-production', 'bottled-water'],
  ['food-production', 'dairy'],
  ['food-production', 'meat-sausages'],
  ['food-production', 'cheese'],
  ['food-production', 'cold-storage'],
  ['horeca', 'hotels'],
  ['horeca', 'restaurants'],
  ['horeca', 'laundries'],
  ['horeca', 'tobacco-hookah'],
  ['horeca', 'secondhand'],
  ['water-treatment', 'drinking-water'],
  ['water-treatment', 'wastewater'],
  ['water-treatment', 'pools-spa'],
  ['water-treatment', 'iron-removal'],
  ['disinfection', 'offices'],
  ['disinfection', 'public-transport'],
  ['disinfection', 'sports-facilities'],
  ['disinfection', 'shopping-malls'],
  ['cleaning', 'odor-removal'],
  ['cleaning', 'fire-smoke'],
  ['cleaning', 'pet-odors'],
  ['cleaning', 'car-interiors'],
  ['cleaning', 'carpet-cleaning'],
  ['warehouses', 'mold-prevention'],
  ['warehouses', 'general-storage'],
  ['industry', 'oil-removal'],
  ['industry', 'manufacturing'],
  ['transport', 'public-buses'],
  ['transport', 'railway'],
  ['transport', 'shipping-containers'],
  ['transport', 'auto-transport'],
  ['mining-metals', 'extraction-and-metals'],
  ['mining-metals', 'gold-mining-global'],
  ['mining-metals', 'cyanide-destruction'],
  ['mining-metals', 'metal-storage-surface'],
]

for (const [categoryId, subcategoryId] of PAIRS) {
  const categoryNs = `category-${categoryId}`
  const subNs = `subcategory-${categoryId}-${subcategoryId}`
  for (const lang of LOCALES) {
    const categoryPath = path.join(I18N, lang, `${categoryNs}.json`)
    if (!fs.existsSync(categoryPath)) {
      console.warn(`Skip ${lang}/${categoryNs}.json (not found)`)
      continue
    }
    const raw = fs.readFileSync(categoryPath, 'utf8')
    let category
    try {
      category = JSON.parse(raw)
    } catch (e) {
      console.error(`Invalid JSON: ${categoryPath}`, e.message)
      continue
    }
    const sub = category.subcategories?.[subcategoryId]
    if (!sub) {
      console.warn(`No subcategory "${subcategoryId}" in ${categoryPath}`)
      continue
    }
    const subKeys = Object.keys(sub)
    if (subKeys.length <= 2 && subKeys.every((k) => ['title', 'shortDesc'].includes(k))) {
      console.warn(
        `Skip ${lang}/${subNs}.json: category appears trimmed (only title/shortDesc). Run extract before trim.`,
      )
      continue
    }
    const out = {
      title: category.title,
      ...(category.description != null && { description: category.description }),
      subcategories: { [subcategoryId]: sub },
    }
    const outPath = path.join(I18N, lang, `${subNs}.json`)
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n', 'utf8')
    console.log(`Wrote ${outPath}`)
  }
}
console.log('Done.')
