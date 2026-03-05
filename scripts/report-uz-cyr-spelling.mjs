/**
 * Report uz-cyr JSON files that contain Russian-style spelling violations.
 * Violations: -сийа/-тийа/-ийа (should be -ция/-тия/-ия), йа/йо/йу (should be я/ё/ю).
 * Run from project root: node scripts/report-uz-cyr-spelling.mjs [--json] [file-or-dir]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const UZ_CYR_DIR = path.join(ROOT, 'src/shared/config/i18n/uz-cyr')

const VIOLATION_REGEX = /сийа|тийа|ийа|йатсийа|йа|йо|йу/gi

const SNIPPET_LEN = 60

function* walkStrings(obj, keyPath = '') {
  if (typeof obj === 'string') {
    yield [keyPath, obj]
    return
  }
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      yield* walkStrings(obj[i], keyPath ? `${keyPath}[${i}]` : `[${i}]`)
    }
    return
  }
  if (obj !== null && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      const nextPath = keyPath ? `${keyPath}.${k}` : k
      yield* walkStrings(v, nextPath)
    }
  }
}

function hasViolation(str) {
  if (typeof str !== 'string') return false
  return VIOLATION_REGEX.test(str)
}

function snippet(str) {
  if (!str || str.length <= SNIPPET_LEN) return str
  return str.slice(0, SNIPPET_LEN) + '…'
}

function getJsonFiles(input) {
  if (!input) {
    return fs
      .readdirSync(UZ_CYR_DIR)
      .filter((f) => f.endsWith('.json'))
      .map((f) => path.join(UZ_CYR_DIR, f))
  }
  const p = path.isAbsolute(input) ? input : path.join(ROOT, input)
  const stat = fs.statSync(p)
  if (stat.isFile()) return [p]
  if (stat.isDirectory()) {
    return fs
      .readdirSync(p)
      .filter((f) => f.endsWith('.json'))
      .map((f) => path.join(p, f))
  }
  return []
}

function reportFile(filePath) {
  const relPath = path.relative(ROOT, filePath)
  const content = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(content)
  const entries = []
  for (const [keyPath, value] of walkStrings(data)) {
    if (hasViolation(value)) {
      entries.push({
        file: relPath,
        keyPath,
        snippet: snippet(value),
      })
    }
  }
  return entries
}

function main() {
  const args = process.argv.slice(2)
  const jsonOut = args.includes('--json')
  const input = args.filter((a) => a !== '--json')[0]
  const files = getJsonFiles(input)
  const all = []
  for (const file of files) {
    const entries = reportFile(file)
    all.push(...entries)
  }
  if (jsonOut) {
    console.log(JSON.stringify(all, null, 2))
  } else {
    for (const { file, keyPath, snippet: s } of all) {
      console.log(`${file} | ${keyPath} | ${s}`)
    }
    if (all.length > 0) {
      console.log('')
      console.log(`Total: ${all.length} violation(s) in ${new Set(all.map((e) => e.file)).size} file(s)`)
    }
  }
}

main()
