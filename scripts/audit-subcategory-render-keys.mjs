#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'

const workspaceRoot = process.cwd()
const pagesRoot = join(workspaceRoot, 'src', '@pages', 'applications')
const i18nRoot = join(workspaceRoot, 'src', 'shared', 'config', 'i18n')

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...walk(fullPath))
      continue
    }

    if (entry.isFile() && fullPath.endsWith('.tsx')) {
      files.push(fullPath)
    }
  }

  return files
}

function extractDataPaths(source) {
  const matches =
    source.match(
      /data(?:\?\.|\.)[A-Za-z0-9_-]+(?:\?\.\[(?:\d+)\]|\[(?:\d+)\]|\?\.[A-Za-z0-9_-]+|\.[A-Za-z0-9_-]+)*/g,
    ) ?? []
  const normalized = new Set()

  for (const match of matches) {
    const raw = match.replace(/^data(?:\?\.)?/, '')
    if (!raw) continue

    const path = raw
      .replace(/\?\./g, '.')
      .replace(/\[(\d+)\]/g, '.$1')
      .replace(/\.{2,}/g, '.')
      .replace(/^\./, '')

    if (path) normalized.add(path)
  }

  return [...normalized].sort()
}

function hasPath(value, path) {
  const segments = path.split('.')
  let current = value

  for (const segment of segments) {
    if (current === null || current === undefined) {
      return false
    }

    if (/^\d+$/.test(segment)) {
      const index = Number(segment)
      if (!Array.isArray(current) || current[index] === undefined) {
        return false
      }
      current = current[index]
      continue
    }

    if (typeof current !== 'object' || !(segment in current)) {
      return false
    }

    current = current[segment]
  }

  return true
}

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function inferJsonPath(pagePath, lang) {
  const category = basename(join(pagePath, '..'))
  const slug = basename(pagePath, '.tsx')
  return join(i18nRoot, lang, `subcategory-${category}-${slug}.json`)
}

function collectIssues(pagePath) {
  const source = readFileSync(pagePath, 'utf8')
  const dataPaths = extractDataPaths(source)
  const ruPath = inferJsonPath(pagePath, 'ru')

  if (!statSync(ruPath, { throwIfNoEntry: false })) {
    return null
  }

  const ruJson = loadJson(ruPath)
  const missingInRu = dataPaths.filter((path) => !hasPath(ruJson.subcategories?.[basename(pagePath, '.tsx')], path))

  if (missingInRu.length === 0) {
    return null
  }

  return {
    page: pagePath.replace(`${workspaceRoot}\\`, ''),
    json: ruPath.replace(`${workspaceRoot}\\`, ''),
    missingInRu,
  }
}

const issues = walk(pagesRoot)
  .map((pagePath) => collectIssues(pagePath))
  .filter(Boolean)

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(issues, null, 2))
  process.exit(0)
}

if (issues.length === 0) {
  console.log('No render/schema mismatches found.')
  process.exit(0)
}

console.log(`Found ${issues.length} application pages with render/schema mismatches:\n`)

for (const issue of issues) {
  console.log(`${issue.page}`)
  console.log(`  JSON: ${issue.json}`)
  for (const path of issue.missingInRu) {
    console.log(`  - ${path}`)
  }
  console.log('')
}
