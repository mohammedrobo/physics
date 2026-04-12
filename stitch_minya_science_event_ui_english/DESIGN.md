```markdown
# Design System Strategy: The Celestial Ledger

## 1. Overview & Creative North Star
**Creative North Star: "The Observational Monolith"**
This design system rejects the "web-template" aesthetic in favor of a high-end, editorial experience that mirrors the precision of quantum physics and the prestige of a Swiss timepiece. We are not building a website; we are crafting a digital artifact.

The visual strategy relies on **intentional asymmetry** and **expansive negative space**. By utilizing large-scale, high-contrast serif typography against a vast, obsidian void, we create a "monolith" effect—where content feels heavy, permanent, and undeniably authoritative. The layout should feel like a high-end scientific journal or a luxury watch catalog: silent, expensive, and meticulously ordered.

---

## 2. Colors & Tonal Depth
The palette is rooted in the "Midnight Sapphire & Electrum" concept. We use depth not through shadows, but through light absorption and reflection.

*   **Primary Surfaces:** Utilize `surface` (#0c1324) for the main canvas. This is our "Deepest Obsidian."
*   **The "No-Line" Rule:** Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background shifts. For instance, a `surface-container-low` section should transition into a `surface-container-lowest` section to denote a change in content without a hard line.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of physical layers. 
    *   **Level 0:** `surface` (#0c1324) - The base void.
    *   **Level 1:** `surface-container-low` (#151b2d) - For secondary content areas.
    *   **Level 2:** `surface-container-high` (#23293c) - For interactive cards or "floating" data modules.
*   **The "Glass & Gradient" Rule:** To evoke "Electrum," use subtle radial gradients on CTAs transitioning from `primary` (#ffffff) to `primary-container` (#ede3b8). For glass elements, apply `surface-variant` with a 40% opacity and a `backdrop-filter: blur(24px)`.
*   **Signature Texture:** Apply a 2% opacity monochromatic grain overlay across the entire `background` to eliminate "flat" digital banding and provide a tactile, paper-like feel.

---

## 3. Typography: Intellectual Contrast
We utilize a "High-Contrast Binary" system. Every screen should be a dialogue between the poetic (Serif) and the clinical (Sans-Serif).

*   **Display & Headlines (Newsreader):** These are your "Editorial Anchors." Use `display-lg` and `headline-lg` with tightened letter-spacing (-0.02em) to convey academic authority. They should feel like the masthead of a prestigious journal.
*   **Technical Data & Labels (Space Grotesk):** Use for all functional UI, metadata, and physics data points. The hyper-minimalist nature of Space Grotesk provides a "Micro-precision" feel that balances the weight of the serifs.
*   **Hierarchy Note:** Use `on-surface-variant` (#ccc6b8) for sub-headlines to create a sophisticated, low-contrast "Electrum" shimmer that doesn't compete with the `primary` white headings.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is a matter of atmospheric perspective, not artificial lighting.

*   **The Layering Principle:** Avoid elevation shadows. Instead, nest containers. A `surface-container-highest` card sitting on a `surface-container` background creates "lift" through tonal value alone.
*   **Ambient Shadows:** If a floating element (like a modal) requires a shadow, it must be an "Atmospheric Glow." Use a 64px blur, 4% opacity, using the `surface-tint` (#d1c79d) color to mimic the subtle reflection of Electrum light.
*   **The "Ghost Border" (Micro-Precision):** Where containment is required (e.g., input fields), use a 0.5px border with `outline-variant` (#4a473c) at 30% opacity. It should be barely visible—a "ghost" of a line that suggests structure without imposing it.
*   **Glassmorphism:** Use for navigation bars and overlays. The `surface-container-lowest` token at 70% opacity with a high blur ensures the background colors "bleed" through, creating a luxury "frosted lens" effect.

---

## 5. Components

### Buttons: The Precision Trigger
*   **Primary:** Solid `primary` (#ffffff) with `on-primary` (#363113) text. Square corners (`0px`). 
*   **Secondary (Electrum):** Ghost style. 0.5px border of `primary-fixed-dim`. 
*   **Interaction:** On hover, a subtle `0.5px` inner glow using `surface-tint`.

### Input Fields: The Scientific Entry
*   **Styling:** No background fill. Only a 0.5px bottom-border using `outline`. 
*   **Labels:** Use `label-sm` in `on-surface-variant`, positioned 8px above the input.
*   **State:** On focus, the bottom border transitions to `primary` (#ffffff) with a subtle 0.5px thickness.

### Cards & Modules: The Floating Specimen
*   **Rule:** Forbid divider lines within cards.
*   **Separation:** Use `body-md` for content, and separate sections with 32px of vertical whitespace. 
*   **Background:** Use `surface-container-low`.

### Data Chips: The Element Tag
*   **Styling:** `0px` radius. `surface-container-highest` background with `label-sm` typography. These should look like small, precisely cut stone or metal labels.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace the Void:** Use massive margins (80px, 120px, 160px). Whitespace is the most expensive thing you can give a user.
*   **Monochromatic Precision:** Stick to the sapphire and navy base; use Electrum (#fef3c7) only for the most critical actions or highlights.
*   **Extreme Contrast:** Pair a `display-lg` headline with a `label-sm` technical note immediately adjacent to it. This "size-tension" is a hallmark of high-end design.

### Don’t:
*   **No Rounded Corners:** `0px` radius across the entire system. Roundness suggests "consumer-friendly" and "soft." We are aiming for "Academic" and "Rigid."
*   **No Standard Shadows:** Never use a default black `drop-shadow`. If it’s not tonal layering or a tinted glow, don't use it.
*   **No 1px Lines:** Stick to 0.5px for borders. If the technology doesn't support sub-pixel rendering, use a low-opacity 1px line to mimic the weight.
*   **No "Web" Icons:** Avoid generic, thick-stroke icons. Use ultra-thin (1pt or 0.5pt) custom iconography that matches the sharp terminals of Space Grotesk.