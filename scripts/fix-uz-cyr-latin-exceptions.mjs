/**
 * Fix uz-cyr: sourcesTitle to Cyrillic; restore allowed Latin abbreviations.
 * Run from project root: node scripts/fix-uz-cyr-latin-exceptions.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_CYR_DIR = path.join(ROOT, 'src/shared/config/i18n/uz-cyr')

const REPLACEMENTS = [
  ['Manbalar', 'Манбалар'],
  ['Adabiyotlar', 'Адабиётлар'],
  ['САРС-CоВ-2', 'SARS-CoV-2'],
  ['CОВИД-19', 'COVID-19'],
  ['ИСCО3', 'ISCO3'],
  ['(ЕПА)', '(EPA)'],
  ['ИАРC', 'IARC'],
  ['О3СС', 'O3CC'],
  ['ГСҲ', 'GSH'],
  ['Cу-Ал', 'Cu-Al'],
  ['CФА', 'CFA'],
  ['ҲоРеCа', 'HoReCa'],
  ['Фаcебоок', 'Facebook'],
  ['ҲАCCП', 'HACCP'],
  ['ҲВАC', 'HVAC'],
  ['ИCМC', 'ICMC'],
  ['АСҲРАЕ', 'ASHRAE'],
  ['ДC', 'DC'],
  ['ФДА', 'FDA'],
  ['ПВC', 'PVC'],
  ['CИП', 'CIP'],
  ['WАД', 'WAD'],
  ['МРСА', 'MRSA'],
  ['ГРАС', 'GRAS'],
  ['Пениcиллиум', 'Penicillium'],
  ['Листериа моноcйтогенес', 'Listeria monocytogenes'],
  ['Cериодапҳниа', 'Ceriodaphnia'],
  ['йоур@емаил.cом', 'siz@email.uz'],
  ['попcорн', 'попкорн'],
  ['Cамемберт', 'Камамбер'],
  ['Cрйптоспоридиум', 'Криптоспоридиум'],
  ['Асcоспҳаера апис', 'Аскосфера апис'],
  ['Шоwер', 'Душ'],
  ['Реcогнизед ас Сафе', 'Recognized as Safe'],
  ['Елеcтриc Поwер', 'Electric Power'],
  ['МПC', 'МПК'],
  ['контсентратсийа', 'концентрация'],
  ['озонатсийа', 'озонация'],
]

const files = fs.readdirSync(UZ_CYR_DIR).filter((f) => f.endsWith('.json'))
let total = 0
for (const file of files) {
  const filePath = path.join(UZ_CYR_DIR, file)
  let content = fs.readFileSync(filePath, 'utf-8')
  let count = 0
  for (const [from, to] of REPLACEMENTS) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    const newContent = content.replace(re, to)
    if (newContent !== content) {
      count += (content.match(re) || []).length
      content = newContent
    }
  }
  if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf-8')
    total += count
    console.log(`${file}: ${count} replacement(s)`)
  }
}
console.log(`Done. ${total} total replacement(s).`)
