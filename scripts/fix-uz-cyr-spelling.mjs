/**
 * Fix uz-cyr Russian-style spelling: -сийа→-ция, йа→я, йо→ё, йу→ю.
 * Run from project root:
 *   node scripts/fix-uz-cyr-spelling.mjs              # all uz-cyr JSONs
 *   node scripts/fix-uz-cyr-spelling.mjs <file.json>  # single file
 *   node scripts/fix-uz-cyr-spelling.mjs --dry-run    # preview only
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_CYR_DIR = path.join(ROOT, 'src/shared/config/i18n/uz-cyr')

// apply in order: longer / more specific first
const SPELLING_REPLACEMENTS = [
  ['ресиркулйатсийа', 'рециркуляция'],
  ['вентилйатсийа', 'вентиляция'],
  ['вентилятсийа', 'вентиляция'],
  ['концентратсийалар', 'концентрациялар'],
  ['концентратсийа', 'концентрация'],
  ['дезодоризатсийа', 'дезодоризация'],
  ['инактиватсийа', 'инактивация'],
  ['интегратсийа', 'интеграция'],
  ['дезинфексийа', 'дезинфекция'],
  ['филтратсийаси', 'фильтрации'],
  ['филтратсийа', 'фильтрация'],
  ['аератсийа', 'аэрация'],
  ['дегазатсийа', 'дегазация'],
  ['озонатсийа', 'озонация'],
  ['реактсийаси', 'реакции'],
  ['реактсийа', 'реакция'],
  ['инфектсийа', 'инфекция'],
  ['стансийа', 'станция'],
  ['инексийа', 'инъекция'],
  ['криптоспоридийа', 'криптоспоридия'],
  ['технологийа', 'технология'],
  ['пневмонийа', 'пневмония'],
  ['санитарийа', 'санитария'],
  ['тавсийа', 'тавсия'],
  ['контсентратсийа', 'концентрация'],
  ['навигатсийа', 'навигация'],
  ['консултатсийа', 'консультация'],
  ['компанийа', 'компания'],
  ['Швейтсарийа', 'Швейцария'],
  ['швейтсарийа', 'Швейцария'],
  ['стантсийаси', 'станции'],
  ['минерализатсийа', 'минерализация'],
  ['консентратсийали', 'концентрацияли'],
  ['дезинфексийалаш', 'дезинфекциялаш'],
  // тси → ци (Russian -ция, -ции, -цид, etc.)
  ['тсияси', 'ции'],
  ['Тсияси', 'ции'],
  ['тсия', 'ция'],
  ['Тсия', 'ция'],
  ['Аератсия', 'Аэрация'],
  ['Реактсия', 'Реакция'],
  ['Дегазатсия', 'Дегазация'],
  ['Вентилятсия', 'Вентиляция'],
  ['Инфектсияни', 'Инфекции'],
  ['Инактиватсия', 'Инактивация'],
  ['Бактеритсид', 'Бактерицид'],
  ['пеститсид', 'пестицид'],
  ['Пеститсид', 'Пестицид'],
  ['бактеритсид', 'бактерицид'],
  ['гербитсид', 'гербицид'],
  ['инсектитсид', 'инсектицид'],
  ['фунгитсид', 'фунгицид'],
  ['вирутсид', 'вируцид'],
  ['фитонтсид', 'фитонцид'],
  ['коеффитсиенти', 'коеффициенти'],
  ['коеффитсиент', 'коеффициент'],
  ['статсионар', 'стационар'],
  ['Статсионар', 'Стационар'],
  ['тсиклларини', 'циклларини'],
  ['тсикллар', 'цикллар'],
  ['тсикл', 'цикл'],
  ['оператсион', 'операцион'],
  ['оператсия', 'операция'],
  ['експлуататсия', 'эксплуатация'],
  ['реабилитатсия', 'реабилитация'],
  ['радиатсия', 'радиация'],
  ['деформатсия', 'деформация'],
  ['контаминатсия', 'контаминация'],
  ['канализатсия', 'канализация'],
  ['фумигатсия', 'фумигация'],
  ['дегассификатсия', 'дегазификация'],
  ['Дегассификатсия', 'Дегазификация'],
  ['амортизатсияси', 'амортизации'],
  ['конденсатсия', 'конденсация'],
  ['изолятсия', 'изоляция'],
  ['инвеститсия', 'инвестиция'],
  ['Инвеститсия', 'Инвестиция'],
  ['комбинатсия', 'комбинация'],
  ['фитосамитария', 'фитосанитария'],
  ['вентилатсия', 'вентиляция'],
  ['потентсиал', 'потенциал'],
  ['принтсипи', 'принципи'],
  ['Принтсипи', 'Принципи'],
  ['кондитсионер', 'кондиционер'],
  ['Кондитсионер', 'Кондиционер'],
  ['Радиатсион', 'Радиацион'],
  ['микротсиркуляция', 'микроциркуляция'],
  ['метитсиллин', 'метициллин'],
  ['Мунитсипал', 'Муниципал'],
  ['Ретсиркуляция', 'Рециркуляция'],
  ['Фунгитсид', 'Фунгицид'],
  ['вентилатсиё', 'вентиляциё'],
  ['ресиркулятсион', 'рециркуляционный'],
  ['Коеффитсиенти', 'Коеффициенти'],
  ['консентратсийа', 'концентрация'],
]

const DIGRAPH_REPLACEMENTS = [
  ['Йу', 'Ю'],
  ['Йо', 'Ё'],
  ['Йа', 'Я'],
  ['Йе', 'Е'],
  ['йу', 'ю'],
  ['йо', 'ё'],
  ['йа', 'я'],
  ['йе', 'е'],
]

function applyReplacements(str, replacements) {
  let s = str
  for (const [from, to] of replacements) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
    s = s.replace(re, to)
  }
  return s
}

function fixString(value) {
  if (typeof value !== 'string') return value
  let s = applyReplacements(value, SPELLING_REPLACEMENTS)
  s = applyReplacements(s, DIGRAPH_REPLACEMENTS)
  return s
}

function walkAndFix(obj, keyPath = '', changes = [], dryRun = false) {
  if (typeof obj === 'string') {
    const fixed = fixString(obj)
    if (fixed !== obj) {
      changes.push({ keyPath, old: obj, new: fixed })
    }
    return fixed
  }
  if (Array.isArray(obj)) {
    return obj.map((item, i) => {
      const nextPath = keyPath ? `${keyPath}[${i}]` : `[${i}]`
      return walkAndFix(item, nextPath, changes, dryRun)
    })
  }
  if (obj !== null && typeof obj === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      const nextPath = keyPath ? `${keyPath}.${k}` : k
      out[k] = walkAndFix(v, nextPath, changes, dryRun)
    }
    return out
  }
  return obj
}

function processFile(filePath, dryRun) {
  const relPath = path.relative(ROOT, filePath)
  const content = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(content)
  const changes = []
  const fixed = walkAndFix(data, '', changes, dryRun)
  if (changes.length === 0) return 0
  if (!dryRun) {
    fs.writeFileSync(filePath, JSON.stringify(fixed, null, 2) + '\n', 'utf-8')
  }
  for (const { keyPath, old, new: n } of changes) {
    const snippet = (s) => (s.length > 50 ? s.slice(0, 50) + '…' : s)
    console.log(`  ${relPath} | ${keyPath}`)
    if (dryRun) {
      console.log(`    → ${snippet(n)}`)
    }
  }
  return changes.length
}

function getJsonFiles(args) {
  const filtered = args.filter((a) => a !== '--dry-run')
  if (filtered.length === 0) {
    return fs
      .readdirSync(UZ_CYR_DIR)
      .filter((f) => f.endsWith('.json'))
      .map((f) => path.join(UZ_CYR_DIR, f))
  }
  const input = filtered[0]
  const p = path.isAbsolute(input) ? input : path.join(ROOT, input)
  const stat = fs.statSync(p)
  if (stat.isFile()) return [p]
  if (stat.isDirectory()) {
    return fs
      .readdirSync(p)
      .filter((f) => f.endsWith('.json'))
      .map((f) => path.join(p, f))
  }
  return [p]
}

function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const files = getJsonFiles(args)
  let total = 0
  for (const file of files) {
    const count = processFile(file, dryRun)
    total += count
  }
  if (dryRun && total > 0) {
    console.log(`\n(dry-run) would apply ${total} change(s) in ${files.length} file(s)`)
  } else if (total > 0) {
    console.log(`Done. ${total} change(s) in ${files.length} file(s)`)
  }
}

main()
