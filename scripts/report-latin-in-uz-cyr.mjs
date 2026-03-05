/**
 * Report uz-cyr JSON files that contain Latin script in translatable strings.
 * Latin is allowed only inside known brand/abbreviation tokens (OZONOXY, FDA, etc.).
 * Run from project root: node scripts/report-latin-in-uz-cyr.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_CYR_DIR = path.join(ROOT, 'src/shared/config/i18n/uz-cyr')

const ALLOWED_LATIN_TOKENS = [
  'OZONOXY',
  'FDA',
  'USDA',
  'VNITIP',
  'Salmonella',
  'E. coli',
  'Campylobacter',
  'Telegram',
  'YouTube',
  'Facebook',
  'HoReCa',
  'HVAC',
  'KOE',
  'COVID-19',
  'COVID',
  'SanPiN',
  'LOС',
  'ЛОС',
  'ХПК',
  'БПК',
  'MPK',
  'MRK',
  'SARS-CoV-2',
  'ISCO3',
  'EPA',
  'IARC',
  'WHO',
  'https',
  'http',
  'www',
  'one',
  'other',
  'plural',
  'count',
  'O3CC',
  'GRAS',
  'Penicillium',
  'CIP',
  'CFA',
  'Cu',
  'Al',
  'Montreal',
  'Purdue',
  'Ceriodaphnia',
  'Electric',
  'Power',
  'GSH',
  'siz@email.uz',
  'C',
  'c',
  'Recognized',
  'as',
  'Safe',
  'Electric',
  'Power',
  'Listeria',
  'monocytogenes',
  'ASHRAE',
  'MRSA',
  '62.1',
  '2022',
]

function hasDisallowedLatin(str) {
  if (typeof str !== 'string') return false
  let s = str
  for (const token of ALLOWED_LATIN_TOKENS) {
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    s = s.replace(new RegExp(escaped, 'gi'), ' ')
  }
  return /[a-zA-Z]/.test(s)
}

function collectStringPaths(obj, prefix = '', out = []) {
  if (obj === null || typeof obj !== 'object') return out
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => collectStringPaths(item, `${prefix}[${i}]`, out))
    return out
  }
  for (const [key, value] of Object.entries(obj)) {
    const keyPath = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'string') {
      out.push({ path: keyPath, value })
    } else {
      collectStringPaths(value, keyPath, out)
    }
  }
  return out
}

function reportFile(filePath, relPath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(content)
  const entries = collectStringPaths(data)
  const violations = []
  for (const { path: keyPath, value } of entries) {
    if (keyPath.includes('.url') || keyPath.endsWith('.url')) continue
    if (keyPath.includes('sources[') && keyPath.endsWith('.title')) continue
    if (hasDisallowedLatin(value)) {
      violations.push({
        path: keyPath,
        preview: value.length > 80 ? value.slice(0, 77) + '...' : value,
      })
    }
  }
  return violations
}

function main() {
  const files = fs.readdirSync(UZ_CYR_DIR).filter((f) => f.endsWith('.json'))
  let totalViolations = 0
  const byFile = []

  for (const file of files.sort()) {
    const fullPath = path.join(UZ_CYR_DIR, file)
    const violations = reportFile(fullPath, file)
    if (violations.length > 0) {
      totalViolations += violations.length
      byFile.push({ file, violations })
    }
  }

  if (byFile.length === 0) {
    console.log('No Latin script found in uz-cyr (except allowed tokens).\n')
    return
  }

  console.log(`Found Latin in ${totalViolations} string(s) across ${byFile.length} file(s):\n`)
  for (const { file, violations } of byFile) {
    console.log(`${file} (${violations.length}):`)
    for (const v of violations) {
      console.log(`  → ${v.path}`)
      console.log(`    "${v.preview.replace(/"/g, '\\"')}"`)
    }
    console.log('')
  }
}

main()
