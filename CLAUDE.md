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

## Reuse Rule — Never Recreate Existing Components

**If a component already exists in `components/`, you must use it — never recreate its CSS from scratch.**

- Use `Button` — never write a custom `<a>` or `<button>` with hand-written button styles
- Use `Badge`, `Chip`, `Tab`, `Avatar`, `Card`, etc. — never duplicate their visual logic
- To adapt colors or sizing: override CSS variables via the `style` prop (see Styling Pattern below)
- To adapt hover behavior: override the relevant design token variable (e.g. `--action-outline-bg-hover`) via `style`
- Creating CSS from scratch for something a component already handles is always wrong, regardless of context

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

---

## Dynamic Subject Theming

Some components (currently `PaginationCard`, `TrackDetailsModal`) accept a `color` prop that maps a Tailwind-family palette name (`"rose"`, `"teal"`, `"amber"`, `"violet"`, etc.) to a set of internal CSS variables `--primary-50` through `--primary-900`. All visuals inside the component reference `--primary-XXX`, never the hardcoded color family.

**How it works**:
- Component sets `style={{ "--primary-50": "var(--rose-50)", ..., "--primary-900": "var(--rose-900)" }}` based on the `color` prop
- CSS uses only `var(--primary-XXX)` — switching the color family is just a different `color` prop
- Default color is `"rose"` for both components

**Tone mapping rules** (use these whenever building a new themed component):

| Slot | Tone |
|---|---|
| Sidebar / strong background | `--primary-600` |
| Title text on sidebar | `--primary-50` |
| Description text on sidebar | `--primary-200` |
| Sidebar divider | `--primary-500` |
| Contributor name/role on sidebar | `--primary-50` |
| Main content area background | `--primary-50` |
| Active tab text + indicator | `--primary-900` |
| Inactive tab text | `--primary-400` |
| Tabs bottom border | `--primary-400` |
| Item dividers inside content | `--primary-200` |
| PaginationCard background | `--primary-100` |
| PaginationCard border | `--primary-300` |
| PaginationCard icon + label | `--primary-400` |
| PaginationCard title | `--primary-900` |

**Constraint**: any color passed via `color` must exist in `app/design.css` with the full 50→900 scale (Tailwind palette families do). For levels/categories that need their own color independent of the subject theme (e.g. difficulty badges), use `<Badge variant="light" color="..." />` directly — those aren't part of the dynamic theme.

---

## Component Reference

Rules for every existing component. Always reuse these — never recreate them.

---

### Button
```tsx
<Button
  content="Texto"
  size="md"           // "xs" | "sm" | "md" | "lg"
  kind="text"         // "text" | "icon"
  variant="filled"    // "filled" | "outline" | "ghost"
  icon={<ArrowRight />}
  showIcon={true}
  htmlType="button"   // "button" | "submit" | "reset"
/>
```
- `kind="icon"` renders only the icon (no text); `kind="text"` always requires `content`
- `showIcon={false}` hides the icon even if `icon` is passed — do not conditionally omit the prop
- Hover, disabled states are handled via CSS `data-variant` — never add conditional classNames
- Shadow: `--shadow-button-black` (light) / `--shadow-button-white` (dark)
- **Never** use a raw `<button>` where Button fits

---

### Badge
```tsx
<Badge
  label="Categoria"
  variant="outline"   // "outline" | "filled" | "mono"
  radius="rounded"    // "rounded" | "none"
  size="md"           // "sm" | "md"
  color="lime"        // only for variant="filled" radius="rounded" size="sm"
/>
```
- `variant="mono"` uses `--font-mono` and uppercase text — use for code/tag labels
- `radius="rounded"` = `--radius-full`; `"none"` = 0
- For inline article/blog category labels use `variant="outline"`
- **Never** use TagArea and Badge interchangeably — TagArea is always pill-shaped and uppercase
- All `size="sm"` variants use `xs` font size and uppercase text — **except** `variant="filled" radius="rounded" size="sm"`
- `variant="filled" radius="rounded" size="sm"`: text is **not** uppercase; use `color` prop to set the color family (e.g. `color="lime"`) — background will always be tone `200` and text always tone `600` of that color (e.g. `--lime-200` / `--lime-600`); default color is lime
- `color` prop is only active for `variant="filled" radius="rounded" size="sm"` — it has no effect on other combinations

---

### TagArea
```tsx
<TagArea content="CATEGORIA" />
```
- Always pill-shaped (`--radius-full`) with uppercase text
- Single-purpose: inline category label inside card/article headers
- No variants — if you need variants, use Badge instead

---

### Chip
```tsx
<Chip
  label="Ver mais"
  state="default"     // "default" | "hover" | "active" | "disabled"
  showIcon={true}
/>
```
- Icon is a left-pointing arrow (ArrowLeft) — shown when `showIcon={true}`
- State is controlled externally via the `state` prop; CSS uses `data-state`
- Use for filter chips and secondary navigation actions — **not** for tags or status labels

---

### Tab
```tsx
<Tab
  label="Artigos"
  state="default"     // "default" | "active" | "disable"
/>
```
- Active state: bottom border indicator
- Disabled state: reduced opacity, no pointer events
- Always render inside a flex row container — Tab has no internal layout
- Use inside `PersonalContribution` tab bar pattern

---

### Card
```tsx
// Tutorial card (image + metadata)
<Card
  variant="tutorial"
  size="md"           // "md" | "sm"
  title="Título"
  author="Autora"
  category="Design"
  tag="Iniciante"
  imageSrc="/photos/cover.jpg"
  href="/artigos/slug"
/>

// Article list card (horizontal layout)
<Card
  variant="articles"
  size="xs"           // "md" | "sm" | "xs"
  title="Título do artigo"
  author="Autora"
  category="UX"
  tag="Avançado"
  href="/artigos/slug"
/>

// Project card (xs only) — courses / projects with level + format badges + description
<Card
  variant="project"
  size="xs"
  title="Introdução à Cibersegurança"
  level="Iniciante"            // filled lime badge (uses Badge color="lime")
  tag="CURSO"                  // outline badge
  description="A cibersegurança é uma área valiosa..."
  showDescription={true}
  href="/cursos/slug"
/>
```
- `variant="tutorial"`: vertical card with image on top — use in grids (BlogAreasSection, TutoriaisSection)
- `variant="articles"`: horizontal row with arrow icon — use in article lists (ArtigosSection, PersonalContribution)
- `variant="project"`: xs-only — header row with two badges (filled lime `level` + outline `tag`), title, optional description; border-bottom uses `--rose-200`; **no author** shown
- `size` affects padding and font sizes; `"xs"` is the most compact (used inside WindowProfile)
- `imageSrc` is optional in `"articles"` variant; missing image → dashed placeholder
- `level` and `description` props are only active for `variant="project"` — ignored on other variants
- Always pass `href` — Card is a link element

---

### Avatar
```tsx
// Card variant — portrait with footer (name, role, social icons)
<Avatar
  variant="card"
  size="md"           // "md" only for card
  name="Milena Duarte"
  role="Product Designer"
  avatarSrc="/photos/milena.jpg"
  showRole={true}
  showSocialIcons={true}
  githubUrl="https://github.com/..."
  instagramUrl="https://instagram.com/..."
  linkedinUrl="https://linkedin.com/..."
/>

// WithText variant — horizontal with name and role
<Avatar
  variant="withText"
  size="md"           // "md" (48px circle) | "sm" (28px circle)
  name="Milena Duarte"
  role="Autora"
  avatarSrc="/photos/milena.jpg"
  showAvatar={true}
  showRole={false}
/>
```
- `variant="card"`: use in ContribuidorasSection grid (clickable, opens WindowProfile); hover dims photo to `opacity: 0.8` + shows background
- `variant="withText"`: use inside article cards, author bylines
- `size` prop only affects `withText`: `"md"` = 48px circle, `"sm"` = 28px circle; name/role typography stays the same between sizes
- Missing photo → circular placeholder with initials (handled internally)
- Social icons are Phosphor icons (GithubLogo, InstagramLogo, LinkedinLogo)
- Do not duplicate avatar logic — always use this component

---

### Contributor
```tsx
<Contributor variant="milena" />
// variants: "milena" | "kayele" | "laura"
```
- Photo from `public/photos/[name].jpg`
- To add a new person: add variant to union type + name to internal map + photo to `public/photos/`
- Missing photo → circular placeholder with initials
- **Never** hard-code photo path outside this component

---

### NavLink
```tsx
<NavLink
  title="Blog"
  autor="Binatti"
  badgeLabel="Novo"
  size="md"           // "md" | "sm"
  state="default"
  showDescription={true}
  showBadge={false}
/>
```
- `size="md"`: shows description block (title + autor + badge)
- `size="sm"`: shows icon + title + external link icon; icon opacity animates on hover
- Use inside NavMenuDropdown for navigation items

---

### ToggleNavMenu
```tsx
<ToggleNavMenu content="Blog" state="default" />
// state: "default" | "active"
```
- Active state uses `aria-current="page"` and bold font weight (700)
- Use for top-level nav links in the Header desktop menu

---

### NavMenuDropdown
```tsx
<NavMenuDropdown
  variant="complete"          // "complete" | "cta-buttons"
  navItems={[...]}
  onVolunteer={() => {}}
  onStudy={() => {}}
/>
```
- `variant="complete"`: nav items + CTA buttons row at the bottom
- `variant="cta-buttons"`: only the CTA buttons (Quero ser voluntária / Quero estudar)
- Fixed internal width: 267px — do not override unless Figma specifies otherwise
- Rendered inside Header dropdown — do not use standalone without Header context

---

### Header
```tsx
<Header
  navItems={[{ label: "Blog", href: "/blog" }]}
  logoSrc="/logo.svg"
  onVolunteer={() => {}}
  onStudy={() => {}}
/>
```
- Desktop: centered nav links + CTA buttons
- Tablet/mobile: hamburger icon toggles NavMenuDropdown with slide animation (220ms/200ms)
- Dropdown state managed via `data-menu-open` attribute on the header element
- `"use client"` required — handles click state internally
- Always placed at the top of page layouts, not inside sections

---

### Footer
```tsx
<Footer
  instagramUrl="..."
  linkedinUrl="..."
  youtubeUrl="..."
  emailUrl="..."
/>
```
- Always renders with `data-theme="dark"` — independent of global theme
- Contains `SwitchGroup` for theme toggle
- Social icons: Phosphor icons
- **Never** add a Footer inside a section — it lives at the root layout level

---

### SwitchGroup
```tsx
<SwitchGroup activeMode="light" onToggle={(mode) => {}} />
// activeMode: "light" | "dark"
```
- Contains two Switch components: "claro" (SunDim icon) and "escuro" (MoonStars icon)
- Manages hover color per mode via CSS variables
- Only used inside Footer — do not place elsewhere without Figma spec

---

### Switch
```tsx
<Switch
  label="claro"
  state="active"      // "default" | "hover" | "active" | "disabled"
  showIcon={true}
  icon={<SunDim />}
/>
```
- Height: 36px (2.25rem) — do not change
- State managed via `data-state` attribute
- Custom icon support via `icon` prop

---

### SearchBar
```tsx
<SearchBar
  state="default"     // "default" | "hover" | "typing"
  value=""
  placeholder="Buscar..."
  onChange={() => {}}
  onSubmit={() => {}}
/>
```
- Has a built-in rotating placeholder typewriter effect (16 phrases, 80ms type / 50ms erase / 2000ms pause)
- The external `placeholder` prop overrides the rotating effect — omit it to use the default rotation
- Clear button appears when `state="typing"` (i.e., value is non-empty)
- Used inside BlogHeroSection paired with SearchModal

---

### SearchModal
```tsx
<SearchModal
  isOpen={false}
  results={[]}
  onClose={() => {}}
  onQueryChange={(q) => {}}
/>
```
- Portal-based (renders outside the component tree into `document.body`)
- Overlay: fadeIn 150ms; Modal: slideDown 180ms; dismiss reverses
- Max width: 600px; closes on Escape key or overlay click
- Blocks body scroll while open
- **Never** render inline — always portal

---

### WindowProfile
- Portal-based MacOS-style modal — renders into `document.body`
- Contains: titlebar with username, banner, Avatar (overlapping), bio sidebar, PersonalContribution
- Animations: windowAppear 380ms cubic-bezier (open) / windowDismiss 200ms (close)
- Blocks body scroll while open; closes on the × button
- Used exclusively inside ContribuidorasSection — do not repurpose without Figma spec

---

### PersonalContribution
```tsx
<PersonalContribution
  articles={[...]}
  videos={[...]}
  defaultTab="articles"   // "articles" | "videos"
/>
```
- Tab "Trilhas" is always **disabled** (not yet implemented)
- Articles tab: list of `<Card variant="articles" size="xs" />`
- Videos tab: 3-column grid with 274:426 aspect ratio (Instagram feed format)
- Used inside WindowProfile only

---

### TableOfContents
```tsx
<TableOfContents
  title="Neste artigo"
  items={[{ label: "Introdução", href: "#intro" }]}
  activeIndex={0}
  onItemClick={(i) => {}}
/>
```
- Fixed width: 297px — do not change
- Active item: filled background highlight
- Used as sticky sidebar in ArticleBodySection (hidden on tablet/mobile)
- Always render outside the main text column, never inline

---

### Pagination / PaginationGroup / PaginationItem
```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  visiblePages={5}    // default: 5
  onPageChange={(p) => {}}
/>
```
- `Pagination` is the entry point — composes `PaginationGroup` + "Page X of Y" label
- `PaginationGroup` renders prev/next arrows + numbered buttons
- `PaginationItem` renders individual page buttons; active state via `aria-current="page"`
- Arrow buttons: 36×36px — do not resize
- Used in BlogAreasSection (9 items per page)

---

### GridLines
- Decorative background component — animated vertical + horizontal lines
- Lines scale from 0→1 with randomized delays and durations (3.5s–5s)
- CSS variables `--delay` and `--dur` are set per-line via inline style
- Used as a full-bleed background inside AboutHeroSection
- **Never** use for layout — purely decorative, `aria-hidden`

---

### PaginationCard
```tsx
<PaginationCard
  direction="prev"        // "prev" | "next"
  label="Anterior"        // optional — defaults to "Anterior"/"Próximo" by direction
  title="Como criar um Design System com Claude"
  color="rose"            // any palette family in design.css (rose, teal, amber, ...)
  href="/trilhas/anterior"
/>
```
- 120×184 px card with three borders (no border on the entry side) and rounded corners on the exit side
- `direction="prev"`: ArrowLeft + label aligned left, rounded corners on the right, no left border
- `direction="next"`: ArrowRight + label aligned right (row-reverse), rounded corners on the left, no right border
- Fully theme-aware via the `color` prop — see **Dynamic Subject Theming** for tone slots
- Always pass `href` (or `onClick`) — it's a navigation card

---

### TrackDetailsModal
```tsx
<TrackDetailsModal
  isOpen={open}
  onClose={() => setOpen(false)}
  color="rose"                      // theme color family
  trackName="UX UI Design"
  description="Se você está começando..."
  contributors={[{ name: "Milena Duarte", role: "UX UI Designer", avatarSrc: "/photos/milena.jpg" }]}
  trilhaItems={[
    { id: "1", title: "Como criar...", level: "iniciante", format: "VÍDEO", href: "/..." },
  ]}
  projetoItems={[]}
/>
```
- Portal-based modal (renders into `document.body`); blocks body scroll, closes on Escape or overlay click
- 900×600 px (max-width 100% / max-height 100%); `--radius-6xs` rounded; bordered with `--primary-300`
- **Sidebar (320px, left)**: background `--primary-600`, contains track name (5xl heading in `--primary-50`), description (`--primary-200`), divider (`--primary-500`), and contributor list
  - Contributors render as `<Avatar variant="withText" size="sm" />` — sidebar overrides `--avatar-name-color` and `--avatar-role-color` to `--primary-50`
- **Content (right)**: background `--primary-50`, contains tabs (Trilha / Projetos) and the active tab's items list
  - Tabs: active = `--primary-900` text + bottom border; inactive = `--primary-400`; tab strip border = `--primary-400`
  - Items: each one shows `<Badge variant="light" color={LEVEL.color} />` (Iniciante=red, Intermediário=yellow, Avançado=lime) + `<Badge variant="outline" />` for format, then a 16px medium title; bottom border `--primary-200`
- Level → color map is internal and **not** themable — difficulty colors stay independent of subject theme
- Close button: top-right, 28×28, X icon

---

### ThemeProvider
- `"use client"` component — reads `localStorage.theme` on mount
- Sets `data-theme` attribute on `<html>` element
- Fallback: light theme
- Must wrap the entire app in `layout.tsx` — do not nest inside sections or components

---

## Section Reference

Rules for every existing section. Pages are composed only of sections — no own styles on `page.tsx`.

---

### HeroSection
- Avatar group with overlapping avatars (`margin-left: -8px`)
- Animated heading with decorative inline SVGs (gem, underline, heart) sized in `em` units
- Subtitle: `max-width: 600px`
- No props — content is hardcoded; update directly in the component file

---

### AboutHeroSection
- Full-bleed GridLines background with parallax scroll (`--grid-offset-y` CSS variable updated via JS)
- Badge with violet background (specific color — check design.css)
- Heading size: 7xl
- Grid cell size: 102px; lines use `color-mix` alpha blend

---

### AboutSobreSection
- Two-column layout (left: badge + red heading + paragraphs; right: badge + white heading on dark blue background)
- Responsive: row on tablet+, single column on mobile
- Background color on right column is a specific brand blue — get value from Figma, do not approximate

---

### ArticleHeroSection
- Featured image: 24:5 aspect ratio
- Title size: `5xl` desktop → `4xl` tablet → responsive on mobile
- Meta row: Avatar (withText) + date + category Badge, space-between layout

---

### ArticleBodySection
- Two-column: scrollable text column + sticky TableOfContents sidebar (297px)
- Sidebar hidden on tablet and mobile via media query
- Paragraph size: `xl` on desktop, `md` on mobile
- Receives structured content (intro + array of sections with heading + paragraphs)

---

### BlogHeroSection
- Split layout with vertical divider: left (heading + SearchBar + Chip filters) | right (featured Card)
- Desktop: side-by-side; mobile: stacked vertically
- SearchBar + SearchModal wired together — SearchModal opens on SearchBar focus/submit

---

### BlogAreasSection
- Grid of `<Card variant="tutorial" size="md" />`
- Grid: 1-col mobile → 2-col tablet → 3-col desktop
- Pagination below (9 items per page)
- Receives array of article data as props

---

### ArtigosSection
- Header: title + subtitle
- List of `<Card variant="articles" />` (no pagination)
- Receives array of articles as props

---

### CTASection
- Solid blue background (`--blue-600`)
- Decorative inline SVGs on heading (crown on "v", underline on "você cria") — inline, sized in `em`
- Absolute-positioned photo on the right side
- Mobile: photo shifts to relative positioning below content
- Contains two Button components (filled + outline)

---

### ContribuidorasSection
- Grid of `<Avatar variant="card" />` as clickable buttons
- Grid: 2-col mobile → 3-col tablet → 4-col desktop
- Click opens `<WindowProfile />` for selected member
- Keeps the last selected member in state during close animation (do not reset to null immediately)

---

### SobreSection
- Two-column: text (heading + paragraphs + Button) | square image (1:1 aspect ratio)
- Responsive: stacked on mobile, side by side on tablet+

---

### TrilhasSection
- Mirrors SobreSection layout but with image first on desktop (reversed column order)
- Mobile: `flex-direction: column-reverse`
- Heading has decorative inline SVG (path/arrow)

---

### TutoriaisSection
- Header: title + subtitle
- Grid of `<Card variant="tutorial" />`
- Grid: 1-col mobile → 2-col tablet → 3-col desktop
- Content is currently hardcoded (TUTORIAIS array) — update in the component file

---

### TeamCarouselSection
- Infinite marquee carousel of Avatar components (duplicates array for seamless loop)
- Animation: `marquee` keyframe — 20s on desktop, 10s on mobile
- Pauses on hover
- Header: title + subtitle above the carousel track

---

### ValoresSection
- Heading: "Nossos Valores"
- Three cards with distinct colored backgrounds (orange, pink, green — get exact values from Figma)
- Layout: 3-column row on desktop, stacked on mobile
- Each card has title, body text, and a decorative div element

---

### RelatedArticlesSection
- Header: title + "Ver todos" Button (outline variant)
- Grid of `<Card variant="tutorial" size="md" />`
- Grid: 1-col mobile → 2-col tablet → 3-col desktop
- Conditionally hidden if the articles array is empty — guard before rendering