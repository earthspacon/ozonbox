# Translation Task Prompt

Copy and paste this prompt into a new chat session to translate all untranslated JSON files:

---

I need help translating i18n JSON files from English to Uzbek (both Latin and Cyrillic scripts).

## Project Structure

- Source files: `src/shared/config/i18n/en/*.json` (English)
- Target files:
  - `src/shared/config/i18n/uz/*.json` (Uzbek Latin script)
  - `src/shared/config/i18n/uz-cyr/*.json` (Uzbek Cyrillic script)

## Translation Scripts Available

There are translation scripts in the `scripts/` directory:

- `scripts/translate.js` (Node.js) - converts uz (Latin) to uz-cyr (Cyrillic)

## Task

Please translate all JSON files that still contain English text

## Instructions

1. **For each file:**
   - Read the English source from `src/shared/config/i18n/en/[filename].json`
   - Check if `src/shared/config/i18n/uz/[filename].json` exists and if it contains English text
   - If English text exists, translate it to Uzbek Latin script
   - Then convert the uz (Latin) version to uz-cyr (Cyrillic) version

2. **Translation Guidelines:**
   - Translate all string values (keep JSON keys unchanged)
   - Preserve technical terms, acronyms, brand names (e.g., "HoReCa", "OzonOxy", "SanPiN", "HACCP")
   - Keep numbers, percentages, units, URLs unchanged
   - Maintain JSON structure and formatting
   - Use proper Uzbek grammar and terminology

3. **Special Characters:**
   - Uzbek Latin uses: o', g', sh, ch, ng
   - Uzbek Cyrillic uses: ў, ғ, ш, ч, нг
   - Convert properly when creating uz-cyr files

4. **Process:**
   - Work file by file
   - Translate English → Uzbek Latin (uz)
   - Convert Latin → Cyrillic (uz-cyr)
   - Verify translations are complete (no English text remaining)
   - Save files with UTF-8 encoding and proper JSON formatting

## Expected Output

After translation, all files should:

- Have no English text in string values (except technical terms/brand names)
- Maintain proper JSON structure
- Have matching structure between en, uz, and uz-cyr versions
- Use correct Uzbek script (Latin for uz, Cyrillic for uz-cyr)

## Priority

Start with the category files that are most likely to have English content. Check each file first to see what needs translation, then translate systematically.

Please begin by checking which files still contain English text, then translate them one by one.

---
