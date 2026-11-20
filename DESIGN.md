---
name: M Santhosh Kumar
description: A developer's career set as a conference programme, with paper stock, black ink, four track colours and timetable rules.
colors:
  paper: "#f4f5f1"
  ink: "#121212"
  ink-soft: "#55574f"
  rule-soft: "#cfd2c8"
  python-blue: "#2f5bd3"
  python-deep: "#1f3f9e"
  npm-red: "#c4391f"
  github-green: "#19774e"
  product-yellow: "#f2c230"
  product-deep: "#d9a514"
  cosmos-navy: "#0b1430"
  cosmos-deep: "#060b1d"
  cosmos-ink-soft: "#b9c3e6"
  on-track: "#ffffff"
  night-paper: "#111214"
  night-ink: "#ecede6"
  night-ink-soft: "#a6a8a0"
  night-rule-soft: "#34373b"
  code-keyword: "#ffd76a"
  code-comment: "#a9bdf5"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.4vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  display-compact:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.15rem"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline-close:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.8vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  contact:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 2rem)"
    fontWeight: 750
  proof:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    letterSpacing: "-0.01em"
    fontFeature: "'tnum' 1"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 110"
  title-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  body-sm:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  label-ui:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 750
    letterSpacing: "0.01em"
    fontFeature: "'tnum' 1"
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.8125rem"
    lineHeight: 1.7
  code-compact:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.75rem"
    lineHeight: 1.6
rounded:
  none: "0px"
  dot: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  kpad: "clamp(22px, 2.6vw, 34px)"
  column-gap: "calc(clamp(22px, 2.6vw, 34px) * 2)"
  bar-height: "60px"
  max-width: "1240px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "46px"
  button-ink-hover:
    backgroundColor: "{colors.python-blue}"
    textColor: "{colors.on-track}"
  button-line:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "46px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  track-filter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "38px"
  track-filter-python:
    backgroundColor: "{colors.python-blue}"
    textColor: "{colors.on-track}"
  track-filter-npm:
    backgroundColor: "{colors.npm-red}"
    textColor: "{colors.on-track}"
  track-filter-github:
    backgroundColor: "{colors.github-green}"
    textColor: "{colors.on-track}"
  session-time:
    backgroundColor: "{colors.python-blue}"
    textColor: "{colors.on-track}"
    typography: "{typography.label}"
    padding: "6px 8px"
    width: "92px"
  keynote-python:
    backgroundColor: "{colors.python-blue}"
    textColor: "{colors.on-track}"
    rounded: "{rounded.none}"
    padding: "{spacing.kpad}"
  keynote-product:
    backgroundColor: "{colors.product-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.kpad}"
  tool-tag:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "5px 10px"
  close-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  copy-button:
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
---

# Design System: M Santhosh Kumar

## Overview

**Creative North Star: "The Conference Programme"**

The site is printed matter for a developer conference: a booklet on cool, slightly green-grey paper with black ink. The owner's name is set like the event title, the two flagship projects are keynotes printed as solid fields of colour, and everything else sits in a timetable with coloured time slots and ruled rows. Structure comes from typography, ink rules and flat colour fields. Nothing in the system floats, glows or sits in a card.

Density is that of a programme page. Rows are tight, rules separate them, and the expanded heavy Archivo carries the hierarchy so the layout can stay plain. The four track colours are used as whole areas (a keynote field, a time slot, a filter chip), never as thin accents on neutral components. Colour tells you which track an item belongs to.

Dark mode is the same programme printed on near-black stock. Paper and ink swap, the track fields keep their exact colours, and the one thing that changes role is the current-section marker, which turns from ink to Product yellow.

**Key Characteristics:**
- Paper ground, black ink, square corners everywhere except the status dot.
- Four track colours applied as solid fields: Python blue, npm red, GitHub green, Product yellow.
- 2px ink rules for structure (masthead, section heads, registration box), 1px soft rules for rows.
- Archivo variable: expanded and very heavy for titles, normal width for reading text, tabular numerals for every date.
- One shared column line: every half-and-half section starts its second column where the right keynote's text starts.

## Colors

The palette is a print palette: off-white paper, near-black ink, one soft grey for hairlines, and four saturated track inks.

### Primary
- **Python Track Blue** (python-blue): The colour of the news-fetch keynote field, PyPI time slots and the PyPI filter. It is also the interaction colour: the hover state of the ink button, the focus outline (3px) and the text caret.
- **Deep Press Blue** (python-deep): The base under the Python keynote field while its colour wipes in, and the background of the keynote code block.

### Secondary
- **Product Yellow** (product-yellow): The Dev Tools keynote field, the "now" marker on the career line, text selection, the toast, the email underline in the close, and the current-section marker in dark mode. Ink text always sits on it, never white.
- **Ochre Underprint** (product-deep): The base under the Product field during its wipe-in. Nothing else uses it.
- **Cosmos Navy** (cosmos-navy): The field of the lead keynote, Cinematic Universe. It is that product's own brand navy and spans the full keynote row above the two track keynotes. White text on it.
- **Cosmos Underprint** (cosmos-deep): The base under the Cosmos field during its wipe-in. Nothing else uses it.
- **Cosmos Soft Ink** (cosmos-ink-soft): Secondary text (the technical stack line) inside the Cosmos field only, about 10:1 on cosmos-navy.
- **Code Gold** (code-keyword) and **Code Periwinkle** (code-comment): Syntax colours for keywords and for the prompt and comments. They are used only inside the Deep Press Blue code block and never on paper.

### Tertiary
- **npm Track Red** (npm-red) and **GitHub Track Green** (github-green): Time-slot fields and filter chips for those tracks. Green is also the "open to work" status dot. White text sits on both.

### Neutral
- **Programme Paper** (paper): The page ground, the masthead fill and the fill of unselected filter chips. In dark mode it becomes **Night Stock** (night-paper).
- **Press Ink** (ink): All primary text, the 2px structural rules, the ink button and the full-bleed close band. In dark mode it becomes **Night Ink** (night-ink).
- **Pencil Grey** (ink-soft / night-ink-soft): Secondary text such as descriptions, roles, career dates and skill values.
- **Hairline** (rule-soft / night-rule-soft): 1px row rules in the timetable, skills list and registration links, and the resting underline on inline "earlier packages" links.

### Named Rules
**The Whole Field Rule.** A track colour fills its whole shape (a field, a time slot, a chip). It is never used as a thin left border, a tinted wash or a coloured heading on paper.

**The Fixed Ink Rule.** Text on Python blue, npm red and GitHub green is white (on-track). Text on Product yellow is ink #121212 in both themes. Track fields do not change colour between themes.

**The Marker Rule.** The current-section underline in the nav uses the mark token. It is ink in light mode and Product yellow in dark mode, at 3px thickness. Hover gets a 2px ink underline. The two states must never look the same.

## Typography

**Display Font:** Archivo variable, self-hosted (fonts/archivo-latin-var.woff2, weight 100 to 900, width 62% to 125%), with Helvetica Neue and Arial as fallbacks.
**Body Font:** Archivo at normal width (wdth 100).
**Label/Mono Font:** the system monospace stack, used only for the keynote code sample (0.8125rem, or 0.75rem on phones).

**Character:** One family pushed to two extremes. Titles are expanded and very heavy, like an event poster. Reading text is plain and normal width, like the programme's small print.

### Hierarchy
- **Display** (850, wdth 125, clamp 2.75rem to 6rem, line-height 0.92, -0.035em): The owner's name as the event title. Once per page.
- **Display compact** (2.15rem, same settings): The display size at 560px and below.
- **Headline** (850, wdth 125, clamp 2.25rem to 3.75rem, line-height 0.95): Keynote titles.
- **Headline close** (850, wdth 125, clamp 2rem to 3.75rem, line-height 1, max 20ch): The close band's call to talk.
- **Contact** (750, clamp 1.25rem to 2rem): The email address in the close band, with a 2px yellow underline.
- **Proof** (800, 1.375rem, tabular): The figures in a keynote's proof line (stars, forks, tool counts).
- **Title** (800, wdth 110, clamp 1.75rem to 2.5rem, line-height 1): Section headings that sit on a 2px rule ("Everything I've shipped", "Experience").
- **Title small** (800, wdth 106, 1.25rem): Career role names, with the employer in 550 weight Pencil Grey beside them.
- **Body** (400, 1.0625rem, line-height 1.55): Default reading text. Keep measures between 44ch and 62ch, as the build does.
- **Lede** (400, 1rem, line-height 1.55): Keynote descriptions (0.9375rem on phones), and the title role line on phones.
- **Body small** (0.9375rem, line-height 1.45): Session descriptions, career paragraphs, nav and button text.
- **UI label** (650 to 750, 0.875rem): Track filter text, skill names, registration profile links and the copy button.
- **Label** (750, 0.8125rem, tabular numerals): Dates inside time slots, career dates (650, Pencil Grey) and tool tags (600).

### Named Rules
**The Two Widths Rule.** Width is the hierarchy. Headings use wdth 104 to 125 and reading text uses wdth 100. Don't make titles bigger by using a second typeface.

**The Timetable Numerals Rule.** Every date, count and version number is set with tabular numerals.

## Layout

The page sits in one centred column (max-width 1240px) with a fluid gutter (16px to 40px). A sticky 60px masthead (56px on phones) has a 2px ink rule along its bottom edge. Anchor scrolling clears the masthead by 12px.

The keynotes form two equal fields that touch, with no gap between them. Each field has an inner padding of kpad (22px to 34px). The timetable and the experience section are also half-and-half grids, and their column gap is exactly 2 × kpad. Because of that, their second columns start on the same vertical line as the text inside the right keynote. The title block is the one deliberate exception: a fluid name column beside a fixed 340px registration box with a 40px gap, dropped by 10% of the display size so it lines up with the name's cap height.

Each section starts on a full-width 2px ink rule with 18px of space above its content. Timetable rows are a 92px time slot (76px on phones) followed by the entry, with a 1px hairline under each row. The career line is a 2px vertical ink rule with 12px square nodes.

At 980px and below, every two-column grid becomes one column. At 560px and below, the masthead meta and the registration's profile links are hidden (the close repeats them), keynote padding drops to 20px/18px, and skills become stacked.

**The Shared Line Rule.** In any half-and-half section, set the column gap to 2 × kpad so the second column starts on the keynote text line. Never pick a new gap value.

## Elevation & Depth

The system is flat. Depth comes from solid fields of colour and ink rules, as on a printed page. Inset box-shadows are used only to show filter state, and they act as rules rather than lift. There is one real shadow, on the toast, because it is the only element that floats above the page.

### Shadow Vocabulary
- **Filter press** (`box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.28)`): Hover on a track filter chip.
- **Filter selected** (`box-shadow: inset 0 0 0 3px var(--paper)`): The selected chip gets a paper-coloured inner ring inside an ink border.
- **Toast lift** (`box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.35)`): The temporary "Email copied" toast only.

### Named Rules
**The Printed Page Rule.** Things that stay on the page do not get shadows. Only a temporary overlay may cast one.

## Shapes

Every corner is square (0px): buttons, chips, fields, code block, registration box, time slots and career nodes. The only round shape is the 10px green status dot. Borders come in three weights: 2px ink for structure and buttons, 1px currentColor for tags and the copy button, and 1px hairline for rows.

The keynote fields wipe in from the left on load. A solid colour layer grows from 0% to 100% width over the deep base colour in 1.1s on the ease-out curve, and the Product field starts 0.15s later. This is a flat colour wipe, not a visible gradient. It is turned off when the user prefers reduced motion.

## Components

### Buttons
Heavy, square and ruled, like stamped tickets.
- **Shape:** Square (0px), 2px ink border, 46px minimum height, 700 weight.
- **Ink (primary):** Ink fill with paper text. Used for "Email me", the main action.
- **Hover / Focus:** Ink turns Python blue with white text over 0.2s. The line button fills with ink. Focus is a 3px Python blue outline offset 3px. Inside the Python field the outline is white, inside the Product field it is ink, and inside the close band it is yellow.
- **Line (secondary):** Paper with ink text and a 2px ink border. Used for "Résumé" with a download icon.
- **Copy button:** In the close band only. 1px currentColor border, 40px tall, and it inverts to paper on hover. After copying, the label changes to "Copied" with a check icon for 1.6s.

### Chips
- **Track filters:** 38px tall, 2px border, 750 weight. "All" is paper on ink when unselected and inverts when selected. Each track chip is filled with its own track colour. When selected, a chip gets the paper inner ring and an ink border. These chips are toggle buttons with aria-pressed.
- **Tool tags:** 1px currentColor border with no fill, 0.8125rem at 600 weight. Used inside a keynote field.

### Cards / Containers
There are no cards. The **registration box** is a ruled form, not a card: a 2px ink border, 20px padding (14px on phones), no fill, no shadow and no radius. **Keynote fields** are solid colour areas with kpad padding, and their link row is pushed to the bottom.

### Navigation
The masthead has the SK ink tile on the left, then the masthead meta line (0.8125rem, 600, uppercase, 0.04em, Pencil Grey). It shows only there and is hidden on phones. Nav links are 650 weight at 0.9375rem with 8px × 12px padding. Hover adds a 2px underline. The current section, tracked with a scroll spy at 45% of viewport height, gets a 3px underline in the mark colour. The theme toggle is a 40px square showing the theme it will switch to (a moon in light mode, a sun in dark mode). Its label says the same.

### Timetable Row (signature)
A coloured time slot (track colour, white label text, tabular date) stretches the full height of the row. Beside it are the entry name (1.0625rem, 750, wdth 104) and a single line of Pencil Grey description. Hover underlines the name. Older items are grouped into one "Earlier packages" row with inline hairline-underlined links.

### Career Line (signature)
A 2px vertical ink rule with 12px square nodes outlined in ink. The current role's node is filled with Product yellow. Each entry shows the date as a label, the role as a small title with the employer beside it, and one paragraph.

### Close Band
A full-bleed ink band with paper text. It holds a headline, the email address at up to 2rem with a 2px yellow underline (the text turns yellow on hover), the copy button, profile links with 40% currentColor underlines, and a colophon below a 1px rule at 30% opacity.

## Do's and Don'ts

### Do:
- **Do** fill whole shapes with track colour: python-blue for PyPI and Python work, npm-red for npm, github-green for GitHub, product-yellow for products.
- **Do** use a 2 × kpad column gap for every half-and-half section so second columns share the keynote text line.
- **Do** start each section on a full-width 2px ink rule and separate rows with 1px hairlines.
- **Do** set dates and counts with tabular numerals.
- **Do** use ink text on Product yellow and white text on the other three track colours, in both themes.
- **Do** keep the theme toggle icon showing the target theme, and keep the marker token as ink in light mode and yellow in dark mode.
- **Do** inline SVG icons drawn with a 2px stroke at 16px to 19px.

### Don't:
- **Don't** use rounded corners. The only round shape is the status dot.
- **Don't** put content in cards, raised panels or shadowed boxes. Only the toast casts a shadow.
- **Don't** use visible gradients, glows or neon. The keynote wipe is a flat colour layer that grows across the field.
- **Don't** add eyebrows or kicker labels above headings. Uppercase tracked text belongs only in the masthead meta line.
- **Don't** use track colours as thin accents, tints or coloured headings on paper.
- **Don't** add a second typeface for display. Use Archivo's width and weight axes.
