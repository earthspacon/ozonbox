#!/usr/bin/env python3
import json
import os
import re
import shutil
import urllib.parse
import urllib.request
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS = {"w": W_NS}
ET.register_namespace("w", W_NS)

SRC_DIR = Path("/home/earthspaceson/code/ozonbox/src/shared/assets/files/tech-passport")
TMP_DOCX_DIR = Path("/home/earthspaceson/code/ozonbox/.tmp/tech-passport-docx")
OUT_UZ_LAT_DIR = SRC_DIR / "uz-lat"
OUT_UZ_CYR_DIR = SRC_DIR / "uz-cyr"

PLACEHOLDER_PREFIX = "¤K"
CYRILLIC_RE = re.compile(r"[А-Яа-яЁё]")
ALNUM_RE = re.compile(r"[A-Za-zА-Яа-яЁё0-9]")

PROTECTED_TERMS = [
    "OZONOXY",
    "S10",
    "S20",
    "S40",
    "S50",
    "S60",
    "ГОСТ",
    "ПДК",
]


def _translate_ru_to_uz(text: str, cache: dict[str, str]) -> str:
    if text in cache:
        return cache[text]
    q = urllib.parse.quote(text)
    url = (
        "https://translate.googleapis.com/translate_a/single"
        f"?client=gtx&sl=ru&tl=uz&dt=t&q={q}"
    )
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0"},
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
    translated = "".join(chunk[0] for chunk in payload[0] if chunk and chunk[0])
    cache[text] = translated
    return translated


def _protect_terms(text: str) -> tuple[str, dict[str, str]]:
    protected: dict[str, str] = {}
    idx = 0

    def replace_term(match: re.Match[str]) -> str:
        nonlocal idx
        val = match.group(0)
        token = f"{PLACEHOLDER_PREFIX}{idx}¤"
        protected[token] = val
        idx += 1
        return token

    pattern = re.compile("|".join(re.escape(term) for term in PROTECTED_TERMS), re.IGNORECASE)
    text = pattern.sub(replace_term, text)
    return text, protected


def _restore_terms(text: str, protected: dict[str, str]) -> str:
    for token, original in protected.items():
        text = text.replace(token, original)
    return text


def _uz_lat_to_cyr(text: str) -> str:
    protected: dict[str, str] = {}
    idx = 0
    allowed_latin = {"OZONOXY", "FDA", "USDA", "VNITIP", "Telegram", "YouTube", "Facebook"}

    def protect_latin_brands(match: re.Match[str]) -> str:
        nonlocal idx
        word = match.group(0)
        if word in allowed_latin or re.fullmatch(r"S\d+", word):
            token = f"§§{idx}§§"
            protected[token] = word
            idx += 1
            return token
        return word

    text = re.sub(r"\b[A-Za-z][A-Za-z0-9.\-_/]*\b", protect_latin_brands, text)

    s = text
    s = re.sub(r"[oO][ʻ`'’‘ʼ]", lambda m: "ў" if m.group(0)[0].islower() else "Ў", s)
    s = re.sub(r"[gG][ʻ`'’‘ʼ]", lambda m: "ғ" if m.group(0)[0].islower() else "Ғ", s)

    digraphs = [
        ("sh", "ш"),
        ("Sh", "Ш"),
        ("SH", "Ш"),
        ("ch", "ч"),
        ("Ch", "Ч"),
        ("CH", "Ч"),
        ("yo", "ё"),
        ("Yo", "Ё"),
        ("YO", "Ё"),
        ("yu", "ю"),
        ("Yu", "Ю"),
        ("YU", "Ю"),
        ("ya", "я"),
        ("Ya", "Я"),
        ("YA", "Я"),
        ("ng", "нг"),
        ("Ng", "Нг"),
        ("NG", "НГ"),
    ]
    for src, dst in digraphs:
        s = s.replace(src, dst)

    single = {
        "a": "а",
        "b": "б",
        "d": "д",
        "e": "е",
        "f": "ф",
        "g": "г",
        "h": "ҳ",
        "i": "и",
        "j": "ж",
        "k": "к",
        "l": "л",
        "m": "м",
        "n": "н",
        "o": "о",
        "p": "п",
        "q": "қ",
        "r": "р",
        "s": "с",
        "t": "т",
        "u": "у",
        "v": "в",
        "x": "х",
        "y": "й",
        "z": "з",
        "A": "А",
        "B": "Б",
        "D": "Д",
        "E": "Е",
        "F": "Ф",
        "G": "Г",
        "H": "Ҳ",
        "I": "И",
        "J": "Ж",
        "K": "К",
        "L": "Л",
        "M": "М",
        "N": "Н",
        "O": "О",
        "P": "П",
        "Q": "Қ",
        "R": "Р",
        "S": "С",
        "T": "Т",
        "U": "У",
        "V": "В",
        "X": "Х",
        "Y": "Й",
        "Z": "З",
    }
    s = "".join(single.get(ch, ch) for ch in s)
    s = s.replace("йа", "я").replace("Йа", "Я").replace("ЙА", "Я")
    s = s.replace("йо", "ё").replace("Йо", "Ё").replace("ЙО", "Ё")
    s = s.replace("йу", "ю").replace("Йу", "Ю").replace("ЙУ", "Ю")

    for token, original in protected.items():
        s = s.replace(token, original)
    return s


def _should_translate(text: str) -> bool:
    if not text.strip():
        return False
    if not CYRILLIC_RE.search(text):
        return False
    if not ALNUM_RE.search(text):
        return False
    return True


def _replace_paragraph_text(
    para: ET.Element, translated_text: str, translated_count: dict[str, int]
) -> None:
    t_nodes = para.findall(".//w:t", NS)
    if not t_nodes:
        return
    first = True
    for node in t_nodes:
        if first:
            node.text = translated_text
            first = False
        else:
            node.text = ""
    translated_count["count"] += 1


def _translate_xml_payload(xml_bytes: bytes, to_cyr: bool, cache: dict[str, str]) -> tuple[bytes, int]:
    root = ET.fromstring(xml_bytes)
    translated_count = {"count": 0}
    for para in root.findall(".//w:p", NS):
        t_nodes = para.findall(".//w:t", NS)
        if not t_nodes:
            continue
        src_text = "".join((n.text or "") for n in t_nodes)
        if not _should_translate(src_text):
            continue
        protected_src, placeholders = _protect_terms(src_text)
        uz_lat = _translate_ru_to_uz(protected_src, cache)
        uz_lat = _restore_terms(uz_lat, placeholders)
        out_text = _uz_lat_to_cyr(uz_lat) if to_cyr else uz_lat
        _replace_paragraph_text(para, out_text, translated_count)
    out_xml = ET.tostring(root, encoding="utf-8", xml_declaration=True)
    return out_xml, translated_count["count"]


def _translate_docx(src_docx: Path, dst_docx: Path, to_cyr: bool, cache: dict[str, str]) -> int:
    translated_total = 0
    with zipfile.ZipFile(src_docx, "r") as zin:
        with zipfile.ZipFile(dst_docx, "w", compression=zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename.startswith("word/") and item.filename.endswith(".xml"):
                    if (
                        "document.xml" in item.filename
                        or "header" in item.filename
                        or "footer" in item.filename
                    ):
                        try:
                            data, changed = _translate_xml_payload(data, to_cyr, cache)
                            translated_total += changed
                        except ET.ParseError:
                            pass
                zout.writestr(item, data)
    return translated_total


def main() -> None:
    OUT_UZ_LAT_DIR.mkdir(parents=True, exist_ok=True)
    OUT_UZ_CYR_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DOCX_DIR.mkdir(parents=True, exist_ok=True)

    # Ensure DOC -> DOCX converted files exist.
    for doc_path in sorted(SRC_DIR.glob("*.doc")):
        tmp_docx = TMP_DOCX_DIR / f"{doc_path.stem}.docx"
        if not tmp_docx.exists():
            raise RuntimeError(f"Missing converted docx: {tmp_docx}")

    cache: dict[str, str] = {}
    for src_docx in sorted(TMP_DOCX_DIR.glob("*.docx")):
        lat_dst = OUT_UZ_LAT_DIR / src_docx.name
        cyr_dst = OUT_UZ_CYR_DIR / src_docx.name

        translated_lat = _translate_docx(src_docx, lat_dst, to_cyr=False, cache=cache)
        translated_cyr = _translate_docx(src_docx, cyr_dst, to_cyr=True, cache=cache)
        print(f"{src_docx.name}: uz-lat paragraphs={translated_lat}, uz-cyr paragraphs={translated_cyr}")

    print("done")


if __name__ == "__main__":
    main()
