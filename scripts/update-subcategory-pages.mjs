/**
 * Update getCategoryNamespace -> getSubcategoryNamespace in subcategory page files.
 * Run from project root: node scripts/update-subcategory-pages.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

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

function updateFile(filePath, categoryId, subcategoryId, isLangPage) {
  if (!fs.existsSync(filePath)) return false
  let content = fs.readFileSync(filePath, 'utf8')
  const oldImport = isLangPage
    ? "import { getCategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'"
    : "import { DEFAULT_LOCALE, getCategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'"
  const newImport = isLangPage
    ? "import { getSubcategoryNamespace, LOCALES_LIST, NAMESPACES, TLocale } from '@/shared/config/tolgee'"
    : "import { DEFAULT_LOCALE, getSubcategoryNamespace, NAMESPACES, TLocale } from '@/shared/config/tolgee'"
  const oldNs = `getCategoryNamespace('${categoryId}')`
  const newNs = `getSubcategoryNamespace('${categoryId}', '${subcategoryId}')`
  if (!content.includes(oldImport) && !content.includes('getCategoryNamespace')) return false
  content = content.replace(oldImport, newImport).replace(oldNs, newNs)
  fs.writeFileSync(filePath, content, 'utf8')
  return true
}

for (const [categoryId, subcategoryId] of PAIRS) {
  const langPage = path.join(ROOT, 'src', 'pages', '[lang]', 'applications', categoryId, `${subcategoryId}.tsx`)
  const defaultPage = path.join(ROOT, 'src', 'pages', 'applications', categoryId, `${subcategoryId}.tsx`)
  if (updateFile(langPage, categoryId, subcategoryId, true)) console.log('Updated', langPage)
  if (updateFile(defaultPage, categoryId, subcategoryId, false)) console.log('Updated', defaultPage)
}
console.log('Done.')
