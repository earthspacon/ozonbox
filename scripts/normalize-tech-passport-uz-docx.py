#!/usr/bin/env python3
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


W_NS = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
NS = {"w": W_NS}
ET.register_namespace("w", W_NS)

BASE_DIR = Path("/home/earthspaceson/code/ozonbox/src/shared/assets/files/tech-passport")
UZ_LAT_DIR = BASE_DIR / "uz-lat"
UZ_CYR_DIR = BASE_DIR / "uz-cyr"


LAT_REPLACEMENTS = [
    ("PASSPORT", "PASPORT"),
    ("HAVO VA XONALARNI DEZINFEKTSION OZONATOR", "HAVO VA XONALARNI DEZINFEKSIYA QILISH UCHUN OZONATOR"),
    ("(DS)", "(PS)"),
    ("doimiy ta'mirlanadi", "joriy ta'mirlanadi"),
    ("Iqlim dizayni", "Iqlim ijrosi"),
    ("fan va ozon generatoridan", "ventilyator va ozon generatoridan"),
    ("Qadoqlash materialidan tayyorlangan korpus", "Qadoqlash qoplami"),
    ("Qayta ishlash odamlar yo'qligida", "Ishlov berish odamlar yo'qligida"),
    ("Ozonatorning ishlashi.", "Ozonatorning ishlash tartibi."),
]

CYR_REPLACEMENTS = [
    ("ПАССПОРТ", "ПАСПОРТ"),
    ("ҲАВО ВА ХОНАЛАРНИ ДЕЗИНФЕКТСИОН ОЗОНАТОР", "ҲАВО ВА ХОНАЛАРНИ ДЕЗИНФЕКЦИЯ ҚИЛИШ УЧУН ОЗОНАТОР"),
    ("(ДС)", "(ПС)"),
    ("електр", "электр"),
    ("Електр", "Электр"),
    ("ЕЛЕКТР", "ЭЛЕКТР"),
    ("Есингизда", "Эсингизда"),
    ("еътибор", "эътибор"),
    ("Еътибор", "Эътибор"),
    ("еҳтиёт", "эҳтиёт"),
    ("Еҳтиёт", "Эҳтиёт"),
    ("дезинфектсия", "дезинфекция"),
    ("Дезинфектсия", "Дезинфекция"),
    ("дезинфексия", "дезинфекция"),
    ("Дезинфексия", "Дезинфекция"),
    ("вентилятсия", "вентиляция"),
    ("Вентилятсия", "Вентиляция"),
    ("консентратсия", "концентрация"),
    ("Контсентратсия", "Концентрация"),
    ("контсентратсия", "концентрация"),
    ("антимикробиял", "антимикроб"),
    ("ма'лумот", "маълумот"),
    ("Ма'лумот", "Маълумот"),
    ("МА'ЛУМОТ", "МАЪЛУМОТ"),
    ("та'минлаш", "таъминлаш"),
    ("та'мир", "таъмир"),
    ("Та'мир", "Таъмир"),
    ("та'сир", "таъсир"),
    ("Та'сир", "Таъсир"),
    ("қат'иян", "қатъиян"),
    ("қат'ий", "қатъий"),
    ("Қат'ий", "Қатъий"),
    ("доимий таъмирланади", "жорий таъмирланади"),
    (" екологик ", " экологик "),
    (" Екологик ", " Экологик "),
    (" ега ", " эга "),
    (" Ега ", " Эга "),
    (" етилган ", " этилган "),
    (" Етилган ", " Этилган "),
    (" етилади", " этилади"),
    (" Етилади", " Этилади"),
]


def apply_replacements(text: str, replacements: list[tuple[str, str]], is_cyr: bool) -> str:
    out = text
    for old, new in replacements:
        out = out.replace(old, new)
    if is_cyr:
        out = re.sub(r"тсикл", "цикл", out)
        out = re.sub(r"Тсикл", "Цикл", out)
        out = re.sub(r"тсия", "ция", out)
        out = re.sub(r"Тсия", "Ция", out)
    return out


def normalize_docx(path: Path, is_cyr: bool) -> int:
    tmp_path = path.with_suffix(".tmp.docx")
    changed = 0
    replacements = CYR_REPLACEMENTS if is_cyr else LAT_REPLACEMENTS

    with zipfile.ZipFile(path, "r") as zin:
        with zipfile.ZipFile(tmp_path, "w", compression=zipfile.ZIP_DEFLATED) as zout:
            for item in zin.infolist():
                data = zin.read(item.filename)
                if item.filename.startswith("word/") and item.filename.endswith(".xml"):
                    try:
                        root = ET.fromstring(data)
                    except ET.ParseError:
                        zout.writestr(item, data)
                        continue
                    for node in root.findall(".//w:t", NS):
                        original = node.text or ""
                        if not original:
                            continue
                        updated = apply_replacements(original, replacements, is_cyr=is_cyr)
                        if updated != original:
                            node.text = updated
                            changed += 1
                    data = ET.tostring(root, encoding="utf-8", xml_declaration=True)
                zout.writestr(item, data)
    tmp_path.replace(path)
    return changed


def main() -> None:
    for path in sorted(UZ_LAT_DIR.glob("*.docx")):
        changed = normalize_docx(path, is_cyr=False)
        print(f"uz-lat {path.name}: nodes_changed={changed}")
    for path in sorted(UZ_CYR_DIR.glob("*.docx")):
        changed = normalize_docx(path, is_cyr=True)
        print(f"uz-cyr {path.name}: nodes_changed={changed}")


if __name__ == "__main__":
    main()
