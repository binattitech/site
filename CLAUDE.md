# Design System Rules — Binatti Community

These rules guide AI coding agents when implementing Figma designs in this project.

---

## Project Stack

- **Framework**: Next.js (App Router) + React 19
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS custom properties per component (Mantine pattern)
- **Path alias**: `@/*` maps to the project root

---

## Visual Fidelity — Non-Negotiable

The code must be a **1:1 match** with the Figma design. This means:

- Every spacing, color, radius, shadow, and typography value must come from `design.css`
- No approximations — if the Figma uses `--space-3`, the code uses `--space-3`
- No invented values — if a value is not in `design.css`, ask before creating one
- Responsive behavior must match the Figma variants exactly
- Light and Dark themes must match the Figma modes exactly
- Always call `get_screenshot` and validate visually before marking any component or section as done

---

## Design System File

All global variables live in **one single file**: `app/design.css`

This file is imported once in `app/layout.tsx` and is globally available.
**Never** duplicate variables outside this file.
```css
/* app/design.css */
:root {

  /* ============================================
     SEMANTIC COLORS — LIGHT THEME
     ============================================ */

  /* Actions — filled button */
  --action-filled-bg-default: /* Global Colors → black */;
  --action-filled-bg-hover: /* Global Colors → Stone.800 */;
  --action-filled-shadow: /* Global Colors → black 5% */;

  /* Actions — outline button */
  --action-outline-border: /* Global Colors → black */;
  --action-outline-bg-hover: /* Global Colors → black 10% */;

  /* Foreground (text and icons) */
  --fg-emphasis: /* black */;
  --fg-default: /* Off White.600 */;
  --fg-muted: /* Off White.400 */;
  --fg-offwhite: /* off-white */;
  --fg-white: /* white */;

  /* Background */
  --bg-default: /* off-white */;

  /* ============================================
     TYPOGRAPHY
     ============================================ */
  --font-family: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
  --font-heading: 'Bricolage Grotesque', sans-serif;

  /* ============================================
     SPACING
     ============================================ */
  --space-0: 0rem;
  --space-px: 0.063rem;
  --space-0-5: 0.125rem;
  --space-1: 0.25rem;
  --space-1-5: 0.375rem;
  --space-2: 0.5rem;
  --space-2-5: 0.625rem;
  --space-3: 0.75rem;
  --space-3-5: 0.875rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-7: 1.75rem;
  --space-8: 2rem;
  --space-9: 2.25rem;
  --space-10: 2.5rem;
  --space-11: 2.75rem;
  --space-12: 3rem;
  --space-14: 3.5rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-28: 7rem;
  --space-32: 8rem;
  --space-36: 9rem;
  --space-40: 10rem;
  --space-44: 11rem;
  --space-48: 12rem;
  --space-52: 13rem;
  --space-56: 14rem;
  --space-60: 15rem;
  --space-64: 16rem;
  --space-72: 18rem;
  --space-80: 20rem;
  --space-96: 24rem;

  /* ============================================
     BORDER RADIUS
     ============================================ */
  --radius-none: 0rem;
  --radius-7xs: 0.063rem;
  --radius-6xs: 0.125rem;
  --radius-5xs: 0.25rem;
  --radius-4-5xs: 0.375rem;
  --radius-4xs: 0.5rem;
  --radius-3-5xs: 0.625rem;
  --radius-3xs: 0.75rem;
  --radius-2-5xs: 0.875rem;
  --radius-2xs: 1rem;
  --radius-xs: 1.25rem;
  --radius-sm: 1.5rem;
  --radius-md: 1.75rem;
  --radius-lg: 2rem;
  --radius-xl: 2.25rem;
  --radius-2xl: 2.5rem;
  --radius-3xl: 2.75rem;
  --radius-4xl: 3rem;
  --radius-5xl: 3.5rem;
  --radius-6xl: 4rem;
  --radius-full: 624.938rem;

  /* ============================================
     SHADOWS
     ============================================ */
  --shadow-button-black: 0 1px 3px #0000000d, 0 2px 1px -1px #0000000d;
  --shadow-button-white: 0 1px 3px #ffffff0d, 0 2px 1px -1px #ffffff0d;

  /* ============================================
     BREAKPOINTS
     ============================================ */
  --breakpoint-sm-min: 20rem;
  --breakpoint-sm-max: 47.938rem;
  --breakpoint-md-min: 48rem;
  --breakpoint-md-max: 79.938rem;
  --breakpoint-lg-min: 80rem;
  --breakpoint-lg-max: 120rem;

  /* ============================================
     SECTION LAYOUT PER BREAKPOINT
     ============================================ */

  /* Mobile */
  --section-sm-padding-x: var(--space-16);
  --section-sm-padding-y: var(--space-4);
  --section-sm-layout-gap: var(--space-6);
  --section-sm-content-gap: var(--space-4);
  --section-sm-paragraph-gap: var(--space-2);

  /* Tablet */
  --section-md-padding-x: var(--space-24);
  --section-md-padding-y: var(--space-12);
  --section-md-layout-gap: var(--space-12);
  --section-md-content-gap: var(--space-6);
  --section-md-paragraph-gap: var(--space-3);

  /* Desktop */
  --section-lg-padding-x: var(--space-32);
  --section-lg-padding-y: var(--space-16);
  --section-lg-layout-gap: var(--space-16);
  --section-lg-content-gap: var(--space-8);
  --section-lg-paragraph-gap: var(--space-4);
}

/* ============================================
   DARK THEME
   ============================================ */
[data-theme="dark"] {
  --action-filled-bg-default: /* off-white */;
  --action-filled-bg-hover: /* Off White.200 */;
  --action-filled-shadow: /* off-white 5% */;
  --action-outline-border: /* off-white */;
  --action-outline-bg-hover: /* off-white 10% */;
  --fg-emphasis: /* off-white */;
  --fg-default: /* Off White.400 */;
  --fg-muted: /* Off White.600 */;
  --fg-offwhite: /* black */;
  --fg-white: /* white */;
  --bg-default: /* black */;
}
```

---

## Component Organization
```
components/
  ComponentName/
    ComponentName.tsx
    ComponentName.module.css
    index.ts

sections/
  SectionName/
    SectionName.tsx
    SectionName.module.css
    index.ts

app/
  design.css        ← single source of truth for all global variables
  globals.css       ← CSS reset and base styles only
  layout.tsx        ← imports design.css and globals.css
  [route]/
    page.tsx
```

- IMPORTANT: Check `components/` and `sections/` before creating anything new

---

## Component Patterns

- Names: **PascalCase** (e.g. `Button`, `HeroSection`, `PricingCard`)
- Props interface: suffixed with `Props` (e.g. `ButtonProps`)
- Variant types: union strings (e.g. `"filled" | "outline"`)
- Client components must include `"use client"`
- Barrel export via `index.ts`:
```ts
  export { default } from "./ComponentName";
  export type { ComponentNameProps } from "./ComponentName";
```

---

## Styling Pattern — CSS Variables per Component

Each component defines its own CSS variables that **point to `design.css`**.
Component props override those variables punctually via `style`.

### Full example
```css
/* Button.module.css */
.button {
  /* Component variables → point to design.css */
  --button-bg: var(--action-filled-bg-default);
  --button-bg-hover: var(--action-filled-bg-hover);
  --button-color: var(--fg-emphasis);
  --button-border: transparent;
  --button-radius: var(--radius-4xs);
  --button-padding-x: var(--space-6);
  --button-padding-y: var(--space-3);
  --button-shadow: var(--shadow-button-black);

  /* Styles use only component variables — never design.css directly */
  background: var(--button-bg);
  color: var(--button-color);
  border: 1px solid var(--button-border);
  border-radius: var(--button-radius);
  padding: var(--button-padding-y) var(--button-padding-x);
  box-shadow: var(--button-shadow);
  font-family: var(--font-family);
}

.button:hover {
  background: var(--button-bg-hover);
}

.button[data-variant="outline"] {
  --button-bg: transparent;
  --button-border: var(--action-outline-border);
  --button-color: var(--fg-emphasis);
}
```
```tsx
// Button.tsx
interface ButtonProps {
  variant?: "filled" | "outline";
  bg?: string;
  radius?: string;
  children: React.ReactNode;
}

export default function Button({ variant = "filled", bg, radius, children }: ButtonProps) {
  return (
    <button
      className={styles.button}
      data-variant={variant}
      style={{
        "--button-bg": bg,
        "--button-radius": radius,
      } as React.CSSProperties}
    >
      {children}
    </button>
  );
}
```

### Rules

- **Never** reference `design.css` variables directly in CSS properties
- Always go through the intermediate layer: CSS property → component variable → DS variable
- Props that override visuals always via `style` with CSS variable — never conditional className
- `data-*` only for states that need pure CSS (hover, disabled, loading, error)
- **Never** use hardcoded values — not even in component variables

---

## Icon System

- Library: **Phosphor Icons**
- Install: `npm install @phosphor-icons/react`
- Reference: https://phosphoricons.com
```tsx
  import { House, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";

  <House size={24} color="var(--fg-default)" />
```
- **Never** create icon SVGs manually
- **Never** install other icon libraries

---

## Assets — Images and SVGs

### Folder structure
```
public/
  photos/
    milena.jpg
    kayele.jpg
    ...
  illustrations/
    img1.svg
    img2.svg
    ...
  [other-categories]/
    img1.png
    img2.png
    ...
```

- **Never** leave assets loose at the root of `public/`
- Generic naming: sequential `img1`, `img2`, `img3`...
- People photos: lowercase name (`milena.jpg`)
- Always reference via public path:
```tsx
  <img src="/illustrations/img1.svg" alt="description" />
```
- Use Next.js `<Image />` component when automatic optimization is needed

### Placeholder for missing images
```css
.imagePlaceholder {
  width: 100%;
  height: 100%;
  border: 2px dashed var(--fg-muted);
  border-radius: var(--radius-4xs);
  background: transparent;
}
```

---

## Contributor Component
```tsx
<Contributor variant="milena" />
```

- Lives in `components/Contributor/`
- Variants are lowercase names: `"milena" | "kayele" | "laura"`
- Photo comes from `public/photos/[name].jpg`
- If photo does not exist: circular placeholder with initials (e.g. `MO` for Milena Oliveira)
- Each contributor's full name is mapped inside the component
- To add a new contributor: add variant to the type + full name to the map + photo in `public/photos/`

---

## Import Conventions
```ts
import Button from "@/components/Button";
import HeroSection from "@/sections/HeroSection";
```
- Never use deep relative imports (e.g. `../../../components`)

---

## Figma MCP Integration

### Required flow (do not skip any step)

1. Call `get_design_context` with `fileKey` and `nodeId`
2. Call `get_screenshot` for the same node as visual reference
3. If the response is too large, call `get_metadata` first to map nodes
4. Translate the MCP output into this project's conventions:
   - Tailwind/hardcoded values → variables from `design.css`
   - Manual SVG icons → Phosphor Icons components
   - Generated components → reuse existing ones from `components/` and `sections/`
5. Validate visually against the Figma screenshot before marking as done

### Implementation rules

- The Figma MCP output is a **reference**, not final code
- Always reuse existing components and sections — never duplicate
- New pages go in `app/[route]/page.tsx` — section composition only, no own styles
- The final result must be a **pixel-perfect match** with the Figma design

---

## Project Context

- **Name**: Binatti Community (`binatti-site`)
- **Description**: Women in tech, in community
- **UI Language**: Portuguese (pt-BR)
- **Token source**: `tokens.json` (synced from Figma) → compiled into `app/design.css`