---
name: uzbek-translation-quality
description: Rules and workflow for high-quality Uzbek (uz Latin and uz-cyr Cyrillic) translations in i18n. Use when adding, editing, or refactoring translations in src/shared/config/i18n/uz/ or uz-cyr/.
---

# Uzbek translation quality (UZ and UZ-CYR)

Use this skill whenever you add or edit Uzbek translations in `src/shared/config/i18n/uz/` or `src/shared/config/i18n/uz-cyr/`, or when refactoring existing Uzbek copy.

## UZ (Latin) quality

- Prioritize **natural, professional but highly readable** Uzbek.
- Write for **ordinary readers**: avoid archaic, literary-only, obscure or rare words.
- Prefer **common, modern wording**; when in doubt choose the clearer, more widely used variant.
- Do not use outdated or specialist-only vocabulary that most people do not know.

## UZ-CYR (Cyrillic) — Russian-style spelling

- Use **Russian-style Cyrillic**, not traditional Uzbek Cyrillic.
- Use **я, ё, ю** instead of **йа, йо, йу** (e.g. **тиббиёт** not тиббийот; **дезинфекция** as in Russian).
- For loanwords that exist in Russian with the same meaning, use the **same Cyrillic spelling** (дезинфекция, препарат, технология, etc.).
- For typically Uzbek words, still use я/ё/ю so the text reads naturally in Cyrillic.

## UZ-CYR: Cyrillic only (no mixed script)

- **uz-cyr must use only Cyrillic** for all translatable content. Mixing Latin and Cyrillic in the same uz-cyr file or page is not allowed.
- **Exception**: Proper nouns and brand names that are conventionally written in Latin may stay in Latin (e.g. OZONOXY, FDA, USDA, VNITIP, Salmonella, E. coli, Campylobacter, Telegram, YouTube, Facebook, HoReCa). Numbers, units (mg/m³, ppm, °C), and similar are unchanged.
- If a uz-cyr file or section is still in Latin, convert it to **Russian-style Cyrillic** (not just mechanical UZ-alphabet conversion): use я, ё, ю; use Russian spellings for loanwords (дезинфекция, технология, etc.).
- Before committing uz-cyr changes, ensure no Latin remains in translatable strings except the allowed exceptions above.

## Refactor workflow

When improving existing translations:

1. Use the corresponding file(s) in `src/shared/config/i18n/ru/` as the **reference for meaning and structure**.
2. **Preserve all JSON keys**; improve only the string values.
3. Keep the same structure (nesting, array lengths, key names) so the app continues to work.

## UZ-CYR bulk fix: parallel agents

To fix Russian-style spelling across all uz-cyr JSONs without one agent touching every file:

1. Run the **report script** once to list affected files and keys:
   ```bash
   node scripts/report-uz-cyr-spelling.mjs
   ```
   Optional: `node scripts/report-uz-cyr-spelling.mjs --json` for machine-readable output.

2. Run **one agent per JSON file** (e.g. 4–8 agents in parallel). Each agent:
   - Receives a single file path, e.g. `src/shared/config/i18n/uz-cyr/subcategory-water-treatment-wastewater.json`.
   - Applies the same rules as the fix script, or runs:
     ```bash
     node scripts/fix-uz-cyr-spelling.mjs <path-to-file>
     ```
   - Writes only that one file; does not change other files.

3. Use the replacement list and logic from `scripts/fix-uz-cyr-spelling.mjs` and this skill’s UZ-CYR Russian-style spelling rules (-сийа→-ция, йа→я, йо→ё, йу→ю).

Alternatively, run the fix script once for all files from project root:
`node scripts/fix-uz-cyr-spelling.mjs` (use `--dry-run` to preview).

## Summary

- **UZ**: natural modern Uzbek, understandable to common people; no archaic or obscure terms.
- **UZ-CYR**: same meaning as UZ, but in Cyrillic with Russian-style spelling (я, ё, ю; Russian spellings for loanwords).
