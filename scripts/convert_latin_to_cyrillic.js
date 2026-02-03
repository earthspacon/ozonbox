/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')

// Uzbek Latin to Cyrillic mapping
const LATIN_TO_CYRILLIC_MAP = {
  a: 'а',
  b: 'б',
  d: 'д',
  e: 'е',
  f: 'ф',
  g: 'г',
  h: 'ҳ',
  i: 'и',
  j: 'ж',
  k: 'к',
  l: 'л',
  m: 'м',
  n: 'н',
  o: 'о',
  p: 'п',
  q: 'қ',
  r: 'р',
  s: 'с',
  t: 'т',
  u: 'у',
  v: 'в',
  x: 'х',
  y: 'й',
  z: 'з',
  A: 'А',
  B: 'Б',
  D: 'Д',
  E: 'Е',
  F: 'Ф',
  G: 'Г',
  H: 'Ҳ',
  I: 'И',
  J: 'Ж',
  K: 'К',
  L: 'Л',
  M: 'М',
  N: 'Н',
  O: 'О',
  P: 'П',
  Q: 'Қ',
  R: 'Р',
  S: 'С',
  T: 'Т',
  U: 'У',
  V: 'В',
  X: 'Х',
  Y: 'Й',
  Z: 'З',
}

function latinToCyrillic(text) {
  if (typeof text !== 'string') {
    return text
  }

  let result = text

  // Handle special combinations first (order matters!)
  const replacements = [
    ["o'", 'ў'],
    ["O'", 'Ў'],
    ["g'", 'ғ'],
    ["G'", 'Ғ'],
    ['sh', 'ш'],
    ['Sh', 'Ш'],
    ['ch', 'ч'],
    ['Ch', 'Ч'],
    ['ng', 'нг'],
    ['Ng', 'Нг'],
  ]

  for (const [latin, cyrillic] of replacements) {
    result = result.replace(new RegExp(latin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), cyrillic)
  }

  // Convert remaining single characters
  for (const [latin, cyrillic] of Object.entries(LATIN_TO_CYRILLIC_MAP)) {
    result = result.replace(new RegExp(latin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), cyrillic)
  }

  return result
}

function convertValue(value) {
  if (typeof value === 'string') {
    return latinToCyrillic(value)
  } else if (Array.isArray(value)) {
    return value.map(convertValue)
  } else if (value !== null && typeof value === 'object') {
    const result = {}
    for (const [key, val] of Object.entries(value)) {
      result[key] = convertValue(val)
    }
    return result
  }
  return value
}

function convertFile(uzPath, uzCyrPath) {
  console.log(`Converting ${uzPath} -> ${uzCyrPath}`)

  const uzContent = fs.readFileSync(uzPath, 'utf-8')
  const uzData = JSON.parse(uzContent)

  const uzCyrData = convertValue(uzData)

  fs.writeFileSync(uzCyrPath, JSON.stringify(uzCyrData, null, 2), 'utf-8')
  console.log(`✓ Converted ${path.basename(uzPath)}`)
}

// Get file name from command line
const fileName = process.argv[2]

if (!fileName) {
  console.error('Usage: node convert_latin_to_cyrillic.js <filename>')
  process.exit(1)
}

const projectRoot = path.join(__dirname, '..')
const uzPath = path.join(projectRoot, 'src', 'shared', 'config', 'i18n', 'uz', fileName)
const uzCyrPath = path.join(projectRoot, 'src', 'shared', 'config', 'i18n', 'uz-cyr', fileName)

if (!fs.existsSync(uzPath)) {
  console.error(`File not found: ${uzPath}`)
  process.exit(1)
}

convertFile(uzPath, uzCyrPath)
