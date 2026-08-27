# Pink Petal Flow

Create a fullscreen hero section for a SaaS product called "flowpath" using React, Tailwind CSS, and Lucide React icons. The section should be a single `

` filling the viewport (`h-screen w-full overflow-hidden`).

IMPORTANT: This hero section will be integrated into an existing system, so the implementation must be modular, clean, and must not interfere with the existing project's styles, components, routes, layout, or functionality. Avoid global styles whenever possible and scope custom styles specifically to this hero section.

## Visual Identity / Color Palette

The visual identity must use a **soft, elegant pink palette**.

All flowers and floral elements visible in the background/video or decorative elements should have a **pink color palette**, replacing any orange, brown, beige, yellow, or warm-toned floral appearance whenever possible.

Use shades inspired by:

* Primary pink: `#E91E63`
* Soft pink: `#F48FB1`
* Light pink: `#F8BBD0`
* Very light pink: `#FCE4EC`
* Deep pink: `#C2185B`
* Accent pink: `#EC407A`

The flowers should look natural and elegant, using variations of pink rather than a single flat color.

Do NOT make the entire interface aggressively pink. The pink should primarily be used for the flowers, decorative elements, subtle accents, and visual identity. Keep the glass effects, typography, and overall premium SaaS appearance intact.

If the supplied background video already contains flowers, apply an appropriate visual treatment/filter/overlay where technically possible to shift their appearance toward the pink palette without significantly damaging the video quality.

## Background

* A looping, muted, autoplaying `` element covering the full section with `object-cover`.
* Video URL:

`https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4`

* Use:

  * `autoPlay`
  * `muted`
  * `loop`
  * `playsInline`
* The video must fill the entire hero.
* Use `object-cover`.
* Add a subtle dark overlay on top of the video: `bg-black/10`.
* Keep the video visually soft and premium.
* Do not excessively darken the background.

### Pink Floral Treatment

Add a subtle pink color treatment over the background to harmonize the flowers with the existing system.

Use a very subtle overlay, for example:

`background: linear-gradient(135deg, rgba(236, 64, 122, 0.10), rgba(244, 143, 177, 0.04), rgba(194, 24, 91, 0.08));`

The overlay must remain subtle enough that the original video is still clearly visible.

The goal is:

**natural flowers + elegant pink tones + premium SaaS aesthetic.**

Do not use a strong magenta filter that makes the entire video pink.

## Font

Use "Helvetica Now Text" as the primary font, loaded from:

`https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text`

Fallback stack:

`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

IMPORTANT:
Because this component will be integrated into an existing application, avoid changing the global `*` selector if possible. Scope the font to the hero component/container instead.

## Navigation

The navigation should be positioned at the top of the hero and should NOT be fixed or sticky.

* Full-width
* Responsive horizontal padding:

  * `px-5`
  * `sm:px-6`
  * `md:px-12`
  * `lg:px-16`
* Vertical padding:

  * `py-4`
  * `sm:py-5`

### Logo

Create an inline SVG diamond logo measuring `28x28`.

The logo should contain two overlapping diamond paths using different opacity levels:

* First diamond: opacity `0.9`
* Second diamond: opacity `0.5`

Follow the icon with the text:

`flowpath`

Text styling:

`text-lg sm:text-xl font-medium tracking-tight`

The logo text should be white.

Optionally introduce a very subtle pink accent in the diamond logo while keeping the primary appearance white.

### Desktop Navigation

Desktop navigation should be hidden on mobile.

Navigation items:

* Product

  * Connections
  * Workflows
  * Insights

* Solutions

  * Guides
  * Use cases
  * API reference

* About

  * Our story
  * Open roles
  * Reach us

* Plans

Use:

`text-white/90 hover:text-white text-sm font-medium`

For dropdown items, use a `ChevronDown` icon with dimensions approximately `3.5x3.5`.

The icon must rotate `180deg` when the dropdown is open.

### Dropdown Behavior

Dropdowns open on hover using:

* `onMouseEnter`
* `onMouseLeave`

Dropdown position:

`absolute top-full left-0`

Dropdown styling:

`!absolute`

Use the custom `.liquid-glass` class.

Additional styling:

* `rounded-xl`
* `py-3`
* `px-2`
* `min-w-[160px]`
* `shadow-xl`

Dropdown items:

`text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5`

Add a subtle pink highlight on hover where appropriate, for example:

`hover:bg-pink-400/10`

Do not make the dropdown strongly pink.

### Desktop CTA

Include:

**Log in**

Styling:

`text-white/90 hover:text-white text-sm font-medium`

And:

**Try it free**

Use:

`liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium`

The CTA may use a very subtle pink glow or pink border accent while maintaining the glass effect.

## Mobile Navigation

Mobile menu button should be displayed only on mobile.

Animate between:

* `Menu`
* `X`

Use rotation, scale, and opacity transitions.

Transition duration:

`duration-300`

### Mobile Menu

Position absolutely below the navigation.

Use:

`cubic-bezier(0.16,1,0.3,1)`

Animation duration:

`400ms`

Background:

`bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6`

The mobile menu should contain all navigation items and sub-items.

Sub-items should be visually indented.

Add a bordered footer containing:

* Log in
* Try it free

The pink palette can be used very subtly in mobile menu hover states.

## Hero Content

Hero content should be positioned below the navigation.

It must be:

* top-aligned
* NOT vertically centered

Container:

`flex-1 flex items-start justify-center`

Spacing:

`pt-16 sm:pt-20 md:pt-24`

Text wrapper:

`text-center max-w-3xl`

### Main Heading

Use:

`

`

Styling:

`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em]`

Content:

Bridge the
gaps. Ditch the
grindwork.

Keep the line breaks exactly as shown.

### Subheading

Use:

`

`

Styling:

`text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8`

Text:

"Flowpath unifies your complete wellness tools, so your crew spends less energy plugging gaps and more on real progress."

### CTA Buttons

Place the buttons side by side.

Container:

`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8`

#### Primary CTA

Text:

`Begin your journey`

Styling:

`px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90`

Add a subtle pink shadow/glow on hover, but keep the button white.

#### Secondary CTA

Text:

`See it live`

Styling:

`px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10`

Use a subtle pink accent in the glass effect on hover.

## Custom CSS

Create a scoped `.liquid-glass` class.

Use:

```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

IMPORTANT:

Because `.liquid-glass` uses `position: relative`, dropdown elements MUST use:

`!absolute`

to override the position behavior.

## Additional CSS Utilities

```css
@keyframes dropdown-in {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-dropdown {
  animation: dropdown-in 0.2s ease-out;
}

.duration-400 {
  transition-duration: 400ms;
}
```

## Pink Accent Guidelines

The pink palette must feel like part of the existing system rather than an independent theme.

Preferred usage:

* Flowers: primary pink visual element
* Decorative elements: subtle pink
* Logo: optional subtle pink accent
* Button hover: subtle pink glow
* Dropdown hover: subtle pink
* Mobile navigation hover: subtle pink
* Background overlay: extremely subtle pink
* Glass effects: mostly transparent/white, with very subtle pink accents

Avoid:

* Bright neon pink
* Entire background becoming pink
* Pink text everywhere
* Strong magenta overlays
* Excessive gradients
* Removing the natural appearance of the video

The final result should feel:

**elegant, modern, premium, feminine without being overly decorative, clean, sophisticated and consistent with a professional SaaS system.**

## Responsiveness

The entire section must be fully responsive.

Use breakpoints:

* `sm`
* `md`
* `lg`
* `xl`

Ensure:

* No horizontal scrolling
* Navigation adapts correctly
* Mobile menu works correctly
* Hero text remains readable on small screens
* Buttons wrap naturally when necessary
* Video always covers the viewport
* Content does not overlap the navigation

## Integration Requirements

This component will be inserted into an already existing Lovable project.

Therefore:

1. Do not modify unrelated components.
2. Do not modify existing routes.
3. Do not overwrite the existing design system.
4. Do not install unnecessary dependencies.
5. Use only React, Tailwind CSS and Lucide React.
6. Keep the component self-contained.
7. Avoid global CSS changes.
8. Scope custom CSS to this hero component whenever possible.
9. Reuse existing project configuration when available.
10. Do not create duplicate components or duplicate dependencies.
11. Preserve the existing application's functionality.
12. Make the hero easy to import and place inside the existing page.

## Technical Requirements

* React
* Tailwind CSS
* Lucide React
* No external UI libraries
* Default Tailwind configuration
* No unnecessary packages
* Clean component structure
* Accessible buttons and navigation
* Proper keyboard accessibility where possible
* Proper mobile behavior

The final implementation should look like a polished production-ready SaaS hero with a **pink floral visual identity**, while remaining easy to integrate into an existing Lovable application.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1f060d28-c3c1-41e1-8fae-e5d94699e7fe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
