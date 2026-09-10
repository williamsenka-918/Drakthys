# Drakthys — Team Site

A one-page site for Drakthys, the Counter-Strike 2 org: hero, sponsors, stats,
about, news, roster, shop (with category filtering), match schedule/results,
and a footer with a newsletter signup.

**Design concept — "field dossier":** a tactical CS2 briefing crossed with
dragon heraldry, instead of the generic red/black esports-template look.
Corner-bracket frames (HUD reticle corners) stand in for the usual
diagonal-cut cards. A faint grid-line texture and one slow scan-line sweep
through the hero read as a minimap/radar. Section headings get a small
monospace "eyebrow" label (`— WHO WE ARE`, `— ACTIVE ROSTER`, `— SUPPLY`)
like a dossier's classification line. Two accents split duties: **ember**
(`#ff5a1f`, a dragon-fire orange) for actions and alerts, **brass**
(`#c9a227`) for structural labels and dividers. Type is `Big Shoulders
Display` (condensed, industrial headlines), `Cinzel` (inscriptional serif,
used only for the DRAKTHYS wordmark — the heraldry note), `IBM Plex Sans`
for body copy, and `IBM Plex Mono` for every stat, price, date and label —
the "data readout" layer. Dark-only by design (this is a brand identity,
not a UI that should flip with a visitor's OS theme).

## Edit it and preview it live

**Live editor:** https://claude.ai/code/artifact/2ec1598a-3084-4193-96a0-38cc68f6d6a1

Two panes: your CSS/HTML+JS on the left (tabs to switch between them), a live
render of the site on the right that updates as you type (with a Desktop /
Mobile width toggle). Edits autosave to your browser as you go, so closing
the tab and coming back keeps your work — "Reset to original" wipes that and
restores the shipped version. When you're happy with a change, hit **Copy
CSS** / **Copy HTML+JS** and paste the result into GHL (see below) or back
into the `ghl/` files in this repo.

## Preview it (read-only)

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
   with an `@import` for the four Google Fonts (Big Shoulders Display,
   Cinzel, IBM Plex Sans, IBM Plex Mono), so it's self-contained — no
   separate font setup needed. If your GHL plan strips `@import` from that
   field, add the two lines below to **Settings → Custom CSS/JS → Head
   Tracking Code** instead:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=Cinzel:wght@500;600&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
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
  `:root` (`--ember`, `--brass`, `--ink`, etc.).
