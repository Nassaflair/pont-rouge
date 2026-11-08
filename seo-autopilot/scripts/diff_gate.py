"""DIFF GATE déterministe : ce que l'ancienne version (ou la page de référence) avait et que la nouvelle a perdu.

  .venv/bin/python scripts/diff_gate.py ancienne.html nouvelle.html
  .venv/bin/python scripts/diff_gate.py https://site.com/page .output/public/page/index.html
  .venv/bin/python scripts/diff_gate.py https://site.com/page-de-reference .output/public/nouvelle/index.html --pattern

Toujours comparer du HTML RENDU des deux cotes. Un fichier source (.vue) ne contient ni title,
ni liens resolus, ni JSON-LD : la comparaison serait vide et le garde-fou inoperant (exit 2).

Code de sortie 1 si quelque chose a disparu → la publication doit être bloquée tant qu'un humain n'a pas validé.
C'est du code, pas un prompt : le modèle ne peut pas « oublier » de vérifier.
"""
from __future__ import annotations

import argparse
import sys
from urllib.parse import urljoin, urlparse

from page_outline import analyse, load_html

TRACKED = {
    "table": "tableaux / classements",
    "form": "formulaires",
    "input": "champs de quiz / calculateur",
    "select": "listes de choix (quiz)",
    "button": "boutons interactifs",
    "iframe": "embeds (carte, vidéo, widget d'avis…)",
    "video": "vidéos",
    "img": "images",
    "details": "blocs FAQ",
    "ol": "listes numérotées (classements)",
}


def inventory(html: str, base: str):
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(html, "html.parser")
    body = soup.find("main") or soup.find("article") or soup.body or soup
    counts = {t: len(body.find_all(t)) for t in TRACKED}
    host = urlparse(base).netloc.lower().removeprefix("www.")
    internal = set()
    for a in body.find_all("a", href=True):
        u = urljoin(base, a["href"]).split("#")[0].rstrip("/")
        # Cloudflare reecrit les mailto: en /cdn-cgi/l/email-protection A LA VOLEE.
        # La prod porte donc une URL que le build local n'a pas, et la comparaison
        # conclut a tort qu'un lien interne a disparu. Ce chemin n'est jamais du contenu.
        if "/cdn-cgi/" in u:
            continue
        if urlparse(u).netloc.lower().removeprefix("www.") in ("", host):
            internal.add(u)
    imgs = {i.get("src") for i in body.find_all("img") if i.get("src")}
    a = analyse(html, base)
    return counts, internal, imgs, a


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("old")
    ap.add_argument("new")
    ap.add_argument("--base", default="", help="URL de base pour résoudre les liens relatifs des fichiers locaux")
    ap.add_argument("--pattern", action="store_true",
                    help="Nouvelle page d'un pattern : la canonical et les H2 diffèrent par construction, "
                         "on ne bloque pas dessus. Sans ce drapeau, on est en mode réécriture.")
    a = ap.parse_args()

    oh, ob = load_html(a.old)
    nh, nb = load_html(a.new)
    base = a.base or ob or nb or a.old
    oc, ol, oi, oa = inventory(oh, ob or base)
    nc, nl, ni, na = inventory(nh, nb or base)

    # Sans ce controle, comparer un fichier non rendu (.vue, .jsx, template) donne un inventaire vide
    # cote reference : tout « passe » et le garde-fou ne garde rien. Mieux vaut refuser de conclure.
    if oa["words"] < 50 or not oa["title"]:
        print("⛔ DIFF GATE : INUTILISABLE — le document de référence n'a produit aucun contenu analysable")
        print(f"  - référence : {a.old}")
        print(f"  - mots détectés : {oa['words']} | title : {oa['title'] or '(aucun)'}")
        print("  - cause la plus fréquente : tu compares un fichier source (.vue, .jsx, template) au lieu du HTML rendu.")
        print("  - sur ce dépôt Nuxt : lance `npm run build` à la racine puis compare .output/public/<slug>/index.html")
        sys.exit(2)

    lost = []
    for t, label in TRACKED.items():
        if nc[t] < oc[t]:
            lost.append(f"{label} : {oc[t]} → {nc[t]}")
    gone_links = sorted(ol - nl)
    if gone_links:
        lost.append(f"liens internes supprimés ({len(gone_links)}) : " + ", ".join(gone_links[:15]))
    gone_imgs = sorted(oi - ni)
    if gone_imgs and nc["img"] < oc["img"]:
        lost.append(f"images retirées : " + ", ".join(gone_imgs[:10]))
    gone_schema = sorted(set(oa["schema_types"]) - set(na["schema_types"]))
    if gone_schema:
        lost.append("données structurées perdues : " + ", ".join(gone_schema))
    gone_h2 = [h for h in oa["h2"] if h not in na["h2"]]
    if na["words"] < 0.7 * oa["words"]:
        lost.append(f"texte réduit de plus de 30 % : {oa['words']} → {na['words']} mots")
    if not a.pattern and oa["canonical"] and oa["canonical"] != na["canonical"]:
        lost.append(f"CANONICAL MODIFIÉE : {oa['canonical']} → {na['canonical'] or '(absente)'}")
    if a.pattern and not na["canonical"]:
        lost.append("canonical absente de la nouvelle page")

    if gone_h2 and not a.pattern:
        lost.append(f"sections (H2) perdues ({len(gone_h2)}) : " + " | ".join(gone_h2[:10]))

    if lost:
        print("⛔ DIFF GATE : DES ÉLÉMENTS ONT DISPARU — publication bloquée sans validation humaine")
        for l in lost:
            print("  -", l)
    else:
        print("✅ DIFF GATE : rien de perdu (tableaux, quiz, embeds, images, liens internes, schema, texte).")
    if gone_h2 and a.pattern:
        print("Info – H2 différents de la page de référence : " + " | ".join(gone_h2[:10]))
    sys.exit(1 if lost else 0)


if __name__ == "__main__":
    main()
