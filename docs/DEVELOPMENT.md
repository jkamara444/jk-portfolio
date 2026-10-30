# Developing the portfolio

The portfolio site, built with **Next.js (App Router)**, **React** and **TypeScript**.
Styling is plain CSS: a few shared files for the design tokens, plus one CSS Module per feature.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run lint         # ESLint (next/core-web-vitals + TypeScript)
npm run typecheck    # tsc --noEmit
npm run format       # Prettier
```

## Pages

| URL                | What it is                                   |
| ------------------ | -------------------------------------------- |
| `/`                | Home                                         |
| `/about`           | About, skills, education, fun facts          |
| `/bio`             | Bio (draggable photos, typing keyboard)      |
| `/experience`      | Experience timeline                          |
| `/projects`        | Projects & Research explorer                 |
| `/projects/[slug]` | The eight case studies (one shared template) |
| `/community`       | Community gallery (filterable flip cards)    |
| `/contact`         | Contact                                      |

Valid case-study slugs: `handbook`, `grapevne`, `ai-gateway`, `ev-battery`, `necropolitics`,
`flock-thesis`, `portfolio`. Anything else is a 404.

## How the code is organised

```
src/
  app/                 Routes only. Each page file is a few lines that render a page component.
  components/
    layout/            Header, footer, nav, theme toggle, <PageShell>
    ui/                Small pieces used everywhere: ButtonLink, SmartLink, ThemedImage, Bloom ...
    home/ about/ bio/ experience/ projects/ community/ contact/
    case-study/        The shared case-study template and its block components
  data/                All the words, links and image choices, as typed objects
    case-studies/      One file per case study + the types they share
  hooks/               useDraggable
  lib/                 Helpers: theme store, cx, cssVars, mailto, fonts ...
  styles/              tokens.css (colours, type, radii), base.css, primitives.css, theme.css
  assets/              Images (imported through assets/images/index.ts) and fonts
```

The rule of thumb: **words live in `data/`, layout lives in `components/`.**
A component receives typed data and draws it; it doesn't contain page copy.

## Editing content

- **Site-wide facts** (name, email, LinkedIn, resume link, nav): `src/data/site.ts`.
- **About / Bio / Experience / Contact copy**: the matching file in `src/data/`.
- **Community gallery**: add an item to `communityItems` in `src/data/community.ts`.
  The masonry layout, tilt and gradient are worked out automatically.
- **Projects page**: `src/data/projects.ts`. Each project's title, year, tags and links also feed
  its case study (title, breadcrumb, "Next:" link and the "More work" cards), so they only need
  changing in one place. The order of the array is the order on the Projects page, in the case
  study menu and in the numbering. A project's "Methods" row is a list of `methodGroups`, each
  with an optional label (e.g. Research / Computational). Each project's `kind` ("project" or "research") is what the page's
  All / Projects / Research filter uses.
- **A case study**: `src/data/case-studies/<slug>.ts`. A case study is a list of sections, and each
  section is a list of typed blocks (`lead`, `columns`, `steps`, `solution`, `stats`, `notes` ...).
  The block types are documented in `types.ts`. To add a new kind of block, add it to the
  `CaseBlock` union and handle it in `components/case-study/CaseBlock.tsx` — TypeScript will point
  at the places that need updating.
  `figureColumns` is a list of `rows` of figure and/or text columns side by side under one rule (used
  by the teaching-assistant case study); a row marked `asCard` stays together as one card on a phone.
  A row marked `sideBySide` puts each column's figure on the left and its text on the right on a
  wide screen. Give a figure a `phone` image to swap in a different crop on phones.
  A `funding` block is the highlighted pill used on the Handbook page for who paid for the work.
- **Images**: drop the file into `src/assets/images/`, export it from `index.ts`, then use
  `images.yourName`.

## Light and dark

`<html>` gets the class `jk-light` for light mode. The choice is saved in `localStorage` (`jk-theme`)
and applied by a tiny inline script before first paint, so there is no flash. `lib/theme.ts` is the
store the toggle subscribes to.

- `.jk-surface` keeps an element on the dark palette in both modes (cards, paper, captions).
- `.jk-dotart` deepens the pale pink artwork so it reads on the light background.
- `ThemedImage` renders a dark and a light version of a picture and lets CSS choose.
- The home page is locked to dark with `lockTheme="dark"` on `PageShell`.

### The JK logo

The "JK" mark in the header and footer is one soft-gel sprite that every page shares.

- `components/ui/Monogram.tsx` exports `Monogram` (the mark itself, a small `<svg><use>`) and
  `MonogramDefs` (the sprite: the gradients and the gel filter). `PageShell` renders `MonogramDefs`
  once, **inside the `.jk` root**. That placement matters: the gradient colours are CSS variables, and
  they resolve where the gradient is defined, so putting the sprite outside `.jk` would break both the
  theme colours and the dark lock on the home page. The sprite is hidden with width and height 0
  (never `display: none`, which stops the filter from drawing).
- To recolour it, change `--mk0` to `--mk4` (the gradient stops) and `--mkShadow` / `--mkShadowA`
  (the drop shadow). The dark values are in `styles/tokens.css` (top of the file), the light ones in
  the `jk-light` block further down the same file, and the home page's dark lock in
  `styles/theme.css` keeps its own copy of the dark values.
- Size comes from `Monogram.module.css` (`height: 1.3em`), so it follows the font size of whatever
  holds it.

## Styling conventions

- Colours, fonts, radii and spacing are CSS variables in `styles/tokens.css`. Use them rather
  than hard-coded values.
- Component styles are CSS Modules (`Thing.module.css`). Class names describe what something is
  (`.statValue`), not how it looks.
- Per-element numbers that the stylesheet needs (a delay, a column count) are passed with
  `cssVars({ "--n": 3 })` instead of being written into the CSS.
- Images use `next/image`. `images.unoptimized` is on in `next.config.ts` because the files are
  already compressed `.webp` and a few are animated.

## Phones and iPad

- **Phone header (640px and under):** the page links fold into a hamburger menu. `SiteHeader.tsx`
  keeps the open/closed state (Escape, a tap outside, or opening a page closes it); the dropdown
  panel and the bars-to-cross icon are in `SiteHeader.module.css`. Resume sits at the bottom of the menu.
- **Case studies menu:** every header has a "Case studies" entry between "Projects & Research" and
  "Community". `components/layout/CaseStudiesMenu.tsx` lists each project in `data/projects.ts`
  (so a new case study shows up there on its own). On a wide screen with a mouse, hovering opens
  it (CSS); with touch or the keyboard the button opens it, Escape or a tap outside closes it. On a
  phone it opens in place inside the hamburger menu. Between about 640 and 860px the nav drops
  to two rows so all the links still fit.
- **Phone footer:** one compact row (logo on the left, three links on the right, sharing a baseline), then the copyright under the links, flush right. No hairlines, and the J's swash is nudged in so its tip lines up with the page's left edge.
- **About on a phone:** education is written on the paper and scales with it, "read my bio" is a pill
  under the paper, and the skills are a dropdown per group (`SkillsSection.tsx`).
- **About on iPad (701 to 1100px):** skills run two groups across, then the photo and the note sit
  side by side.
- **Projects on phone and iPad:** the tabs stay attached to the folder and the picture sits under it.
  With eight tabs, the tabs wrap onto a second row whenever the folder is narrower than 880px
  (a container query in `Projects.module.css`).

- **Case studies on a phone (640px and under):** long runs are shortened, and nothing changes above
  640px. "How I worked" and the solution cards (`steps`, `solution`, `figureColumns`, and a `pair`
  with `swipe: true`) become a row of cards you swipe sideways, with a small "swipe" label above
  (`SwipeHint.tsx`). While a row really does scroll, `SwipeRail.tsx` gives it a tab stop and a label so a keyboard can move it; where everything fits it adds nothing to the tab order. The challenge numbers, technology groups and reflection notes become a tab bar
  that shows one panel at a time (`TabbedPanels.tsx`, a client component, as is `SwipeRail.tsx`
  just below). The challenge tabs also change when you swipe sideways (or scroll sideways on a
  trackpad), so they carry the same "swipe" label above the tab bar; the other tab bars are
  tap-only. "More work" becomes a row of three cards you swipe
  through, like the other rails. The hero and closing buttons stack left-aligned, with the text
  link under them on the same line, and the breadcrumb shrinks so it stays on one line. All of it is the last block in
  `CaseStudy.module.css`; on wider screens the tab bar and hint are hidden and every panel lays out
  as before.

## Placeholders to fill in

These links are `#` until the real destinations exist. `grep -rn 'href: "#"' src` finds them all.

- **Resume** (header and footer): `resumeHref` in `src/data/site.ts`
- **Book a time**: `data/contact.ts`
