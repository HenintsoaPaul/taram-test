# Next.js Frontend Development Instructions (for Copilot Agent)

> **Scope**: Frontend only
>
> * Framework: **Next.js (App Router)**
> * Default project setup (TypeScript, Tailwind, ESLint, Turbopack, alias `@/*`)
> * No backend, no APIs, no integrations

---

## 1. Core Principles (Strict)

* ✅ **Functional components only**
* ❌ **No `any`** (no exceptions)
* ❌ **No inline styles**
* ✅ Prefer **readability over cleverness or micro-optimizations**
* ❌ Do not over-engineer abstractions
* ❌ Do not add third-party libraries

  * If useful, **suggest libraries with links**, but do not install or use them

---

## 2. TypeScript Rules

* TypeScript must be **strict but minimal**
* Explicitly type:

  * Component props
  * State when non-trivial
* Allowed utility types: `Partial`, `Pick`, `Record`
* Never bypass typing with `any` or unsafe casts

---

## 3. Naming Conventions

* **Components**: `PascalCase`
* **Files & folders**: `kebab-case`
* **Tailwind class order**: default (no reordering rules)

Example:

```
user-profile-card.tsx
UserProfileCard
```

---

## 4. Project Structure

### Feature-based folder structure (mandatory)

```
app/
  dashboard/
    layout.tsx
    page.tsx
    components/
      stats-card.tsx
      activity-list.tsx
      button.tsx
      modal.tsx
      theme-toggle.tsx
```

Rules:

* Components related to a route live **inside that route**
* Reusable components go to `app/components`

---

## 5. Component Design Rules

* Prefer **small, reusable components**

* If a UI pattern appears **more than once**, the AI must:

  * Suggest extracting a reusable component
  * Explain why it should be shared

* Parent components:

  * Hold and mutate state
  * Pass data down via props

---

## 6. Styling & Tailwind CSS

* Use **default Tailwind configuration**
* Tailwind utilities are the default styling method
* ❌ **Do not write Tailwind classes on a single line**
* ✅ **Split `className` into multiple lines** for readability
* ✅ **Group related Tailwind utilities on the same line**

  * Layout & positioning
  * Flex / grid
  * Spacing (padding / margin)
  * Typography
  * Colors & backgrounds
  * Responsive variants

Example (required style):

```tsx
<section
  className="relative
             flex flex-col items-center justify-center
             px-4 pt-8 pb-16
             text-center
             max-w-5xl mx-auto"
>
```

* CSS files are allowed **only in rare edge cases** (must be justified)
* No inline styles

### Dark Mode (mandatory)

* Always support dark mode
* Use Tailwind dark variants (`dark:`)

---

## 7. Design Tokens

When analyzing:

* Figma mockups
* Images
* Design assets

The AI must:

* Suggest **design tokens** when patterns are detected
* Especially for:

  * Colors
  * Spacing
  * Typography

Tokens should map naturally to Tailwind theme extensions when relevant.

---

## 8. Image / Figma → Component Rules

When a visual asset is provided, the AI must perform **explicit analysis before coding**:

### Mandatory analysis output

* ✅ Identify fonts (size, weight, hierarchy)
* ✅ Identify colors in **hexadecimal**
* ✅ Identify spacing rules if possible (e.g. 4px / 8px grid)
* ✅ Detect reusable UI patterns (cards, buttons, headers, etc.)

### Implementation rules

* 🎯 **Pixel-perfect reproduction** is required
* 📱 **Mobile-first** approach
* 📐 Responsiveness must use **Tailwind default breakpoints**

---

## 9. Accessibility

* Always enforce:

  * Semantic HTML (`nav`, `main`, `section`, `button`, etc.)
  * Correct ARIA roles when necessary

* Keyboard navigation:

  * Optional, unless naturally required by semantics

---

## 10. Next.js App Router Rules

* Prefer **Server Components by default**
* Use `"use client"` **only when strictly required**
* Always use `layout.tsx` for routes
* Components should be colocated with their routes when not shared

---

## 11. SEO & Metadata

* Do **not** implement SEO or metadata automatically
* Only **suggest** SEO/meta improvements
* Implement metadata **only when explicitly asked**

---

## 12. State Management

* Use React built-ins only:

  * `useState`
* No external state libraries

State rules:

* Parents own the state
* Children receive state and callbacks via props

---

## 13. Comments & Documentation

* Any function **3 lines or longer** must be commented
* Comments should explain **why**, not obvious **what**

---

## 14. Copilot Behavior Rules

Before coding:

* Make **reasonable assumptions**
* Ask for **confirmation if assumptions impact structure or design**
* Minimize token usage when asking questions

During coding:

* Follow this document strictly
* Do not introduce new patterns unless justified

---

## 15. Explicit Do / Don’t

### ✅ DO

* Extract reusable components
* Keep components small and focused
* Favor clarity and consistency
* Suggest improvements when patterns emerge

### ❌ DON’T

* Add backend logic
* Add API routes
* Add third-party UI libraries
* Over-abstract early
* Use `any` or inline styles

---

**This document is authoritative.**
If a request conflicts with these rules, the AI must point it out before proceeding.
