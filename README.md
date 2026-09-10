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
  drakthysghl.html          original body markup, untouched (base64 images)
  drakthysghl.css           original stylesheet, untouched
  drakthysghl.js            original interactivity, untouched
  drakthysghl-lite.html     same markup, but with images pointed at
                            assets/images/... instead of inline base64

  ghl-style.css             ← paste into GHL's Custom CSS field
  ghl-html-js.html          ← paste into a GHL Custom HTML element
                            (markup + the <script> block together)

  ghl-paste-snippet.html     CSS + HTML + JS all combined into one block,
                            for pasting into a single element instead
preview-ghl-2file.html      (repo root) local test render of ghl-style.css
                            + ghl-html-js.html together, for previewing
                            exactly what you're about to paste into GHL
```

`index.html` embeds the images as base64 so it's one portable file. GHL
doesn't work that way (6.9MB of base64 is slow to paste and may exceed a
Custom HTML element's size limit), so the GHL-facing files reference the
images as separate files instead — upload them once to Media Storage and
link to them.

## Pasting into GoHighLevel (2 files: CSS + HTML/JS)

GHL has a Custom CSS field and a Custom HTML element; JS can live right in
the HTML element as a `<script>` tag, so the JS is bundled into the same
file as the markup rather than kept separate.

1. **Upload the images.** In GHL: *Sites → Media Storage*, upload all 6 files
   from `assets/images/`. After uploading, open each file and copy its URL.

2. **Open `ghl/ghl-html-js.html`** and find/replace each of these paths with
   the matching URL you just copied:
   - `assets/images/drakthys-logo.jpg` (used 4×: nav logo, hero emblem,
     footer logo, shop "Sticker Pack" image)
   - `assets/images/drakthys-snow-washed-tee-front.png`
   - `assets/images/drakthys-snow-washed-tee-back.png`
   - `assets/images/drakthys-raw-hem-shorts.png`
   - `assets/images/drakthys-dragon-hoodie-front.png`
   - `assets/images/drakthys-dragon-hoodie-back.png`

3. **CSS** — paste `ghl/ghl-style.css` into the page/funnel's Custom CSS
   field (Settings → Custom CSS, or the page editor's CSS panel). It opens
   with an `@import` for the Anton + Inter Google Fonts, so it's
   self-contained — no separate font setup needed. If your GHL plan strips
   `@import` from that field, add the two lines below to **Settings →
   Custom CSS/JS → Head Tracking Code** instead:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
   ```

4. **HTML + JS** — add a Custom HTML element to the page (page editor →
   *+ Add Element → Custom HTML*) and paste the entire contents of
   `ghl/ghl-html-js.html` (after step 2's find/replace) into it. It already
   ends with the `<script>...</script>` block, so nothing else to add.

5. Because the whole nav/hero/roster/shop/matches section is one HTML block,
   editing copy (player names, stats, prices, match dates, news posts) is
   just editing text directly inside that Custom HTML element in GHL — no
   rebuild needed. For anything structural (new sections, layout changes),
   edit `ghl/drakthysghl.html`/`.css`/`.js` here first, regenerate the `ghl-*`
   files the same way, then re-paste.

### Prefer one paste instead of two fields?

Use `ghl/ghl-paste-snippet.html` — CSS + HTML + JS all combined into a single
block (fonts `<link>` + `<style>` + markup + `<script>`) for pasting into one
Custom HTML element, if your GHL page doesn't expose a separate Custom CSS
field.

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
