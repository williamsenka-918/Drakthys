# Drakthys — Team Site

A one-page site for Drakthys, the Counter-Strike 2 org: hero, sponsors, stats,
about, news, roster, shop (with category filtering), match schedule/results,
and a footer with a newsletter signup. Dark theme, `Anton` display type +
`Inter` body type, crimson accent.

## Preview it

**Live preview:** https://claude.ai/code/artifact/8504a4b2-3929-425f-95cc-f316ff3929cc

**Locally:** open [`index.html`](./index.html) directly in a browser — it's a
single self-contained file (styles, script and images all inlined), no server
needed.

## Files

```
index.html               ← full standalone page (open this to preview)
assets/images/            ← the 6 real images used on the site, extracted
                            and de-duplicated (the logo/dragon mark is reused
                            4 places, so it's stored once)
ghl/
  drakthysghl.html         original body markup, untouched
  drakthysghl.css          original stylesheet, untouched
  drakthysghl.js           original interactivity, untouched
  drakthysghl-lite.html     same markup, but with images pointed at
                            assets/images/... instead of inline base64
  ghl-paste-snippet.html    ← the file to paste into GoHighLevel (see below)
  preview-ghl-snippet.html  (repo root) local test render of that snippet
```

`index.html` embeds the images as base64 so it's one portable file. GHL
doesn't work that way, so `ghl-paste-snippet.html` was built as a lighter
version (~35KB vs ~6.9MB) that references the images as separate files —
that's the one meant for GHL.

## Pasting into GoHighLevel

GHL's Custom HTML element size limits (and general performance) don't play
well with a 6.9MB block of inline base64 images, so use the lightweight
snippet instead:

1. **Upload the images.** In GHL: *Sites → Media Storage*, upload all 6 files
   from `assets/images/`. After uploading, open each file and copy its URL.

2. **Open `ghl/ghl-paste-snippet.html`** and find/replace each of these paths
   with the matching URL you just copied:
   - `assets/images/drakthys-logo.jpg` (used 4×: nav logo, hero emblem,
     footer logo, shop "Sticker Pack" image)
   - `assets/images/drakthys-snow-washed-tee-front.png`
   - `assets/images/drakthys-snow-washed-tee-back.png`
   - `assets/images/drakthys-raw-hem-shorts.png`
   - `assets/images/drakthys-dragon-hoodie-front.png`
   - `assets/images/drakthys-dragon-hoodie-back.png`

3. **Add a Custom HTML / Custom Code element** to your GHL page (Sites or
   Funnels → page editor → *+ Add Element → Custom HTML*), and paste the
   entire contents of `ghl-paste-snippet.html` into it. It already contains
   the Google Fonts `<link>` tags, the full `<style>` block, the page markup,
   and the `<script>` block — everything in one paste.

4. If your GHL plan strips `<link>`/`<style>`/`<script>` tags out of Custom
   HTML elements, move the Google Fonts `<link>` tags into the page/funnel's
   **Settings → Custom CSS/JS → Head Tracking Code**, and/or the closing
   `<script>` block into **Footer Tracking Code** instead — the snippet is
   already split into clearly labeled sections so this is a copy/paste.

5. Because the whole nav/hero/roster/shop/matches section is one HTML block,
   editing copy (player names, stats, prices, match dates, news posts) is
   just editing text directly inside that Custom HTML element in GHL — no
   rebuild needed. For anything structural (new sections, layout changes),
   edit `ghl/drakthysghl.html`/`.css`/`.js` here first, regenerate the
   snippet the same way, then re-paste.

### Why not paste the images as base64 into GHL too?

You can — `drakthysghl.html` (the original, untouched file) still has them
inline, and it'll work as a single Custom HTML paste. It's just ~6.9MB of
text, which is slow to paste, slow for the page editor to handle, and may
exceed the element's saved-content limit on some GHL plans. Hosting the 6
images in Media Storage and linking to them (steps above) is the safer path
and lets you swap any image later without touching the code.

## Editing content later

Everything a non-developer would want to change lives in plain markup:

- **Roster** — `.roster-grid` in the HTML: player tag, flag emoji, role,
  rating/KAST/age.
- **Shop** — `.shop-grid`: product name, price, image, and `data-cat`
  (`apparel` / `accessories`) which drives the category filter buttons.
- **Matches** — `.match-panel[data-panel="upcoming"|"results"]`: date,
  opponent, event name, format tag or score.
- **News** — `.news-grid` cards: date, headline, blurb.
- **Colors** — all in one place at the top of `drakthysghl.css`, under
  `:root` (`--crimson`, `--black`, etc.).
