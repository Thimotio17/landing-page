# Pink Flow

A cinematic, full-screen floral landing experience built with React, TypeScript, TanStack Start, and Tailwind CSS.

![Pink Petal Flow preview](docs/preview.jpg)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Built with Lovable](https://img.shields.io/badge/Built%20with-Lovable-FF4F8B)](https://lovable.dev/)

## Overview

Pink Petal Flow is a focused visual demo for premium landing pages, campaign intros, event screens, and ambient web experiences. It combines a locally hosted floral video with a dual-video crossfade and lightweight CSS petals, producing continuous motion without visible text or interface chrome.

The hero is intentionally self-contained so it can be reused without changing the application's global design system.

## Features

- Full-viewport, responsive floral hero
- Seamless 2.5-second crossfade between two synchronized video layers
- Twenty independently animated CSS petals with varied size, drift, rotation, blur, and timing
- Local video asset for predictable playback without a third-party media dependency
- Muted autoplay and inline playback for modern desktop and mobile browsers
- Decorative animation isolated from pointer interaction and assistive technologies
- Component-scoped animation styles
- Production build powered by Vite and TanStack Start

## Technology

- React 19
- TypeScript 5
- TanStack Start and TanStack Router
- Tailwind CSS 4
- Vite 8
- CSS keyframe animation

## Getting started

### Requirements

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
git clone https://github.com/Thimotio17/landing-page.git
cd landing-page
npm ci
npm run dev
```

Open the local address shown by Vite in your browser.

### Production build

```bash
npm run build
npm run preview
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run build:dev` | Build using the development mode configuration |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format supported files with Prettier |

## Project structure

```text
public/assets/
  flowpath-hero-pink.mp4   Local floral background
src/components/
  FlowpathHero.tsx         Video crossfade and falling-petal animation
src/routes/
  index.tsx                Homepage route and page metadata
docs/
  preview.jpg              Repository preview image
```

## Customization

The main visual controls live in `src/components/FlowpathHero.tsx`:

- `VIDEO_URL` selects the background media.
- `CROSSFADE_SECONDS` controls the overlap between video layers.
- `PETALS` defines each petal's position, size, speed, delay, drift, spin, opacity, and blur.
- `PETAL_CSS` contains the petal shape and animation path.

Replace the video with a similarly framed asset for the best result. Keep the file local when reliable playback and stable performance are important.

## Accessibility and motion

The background videos are muted and do not expose playback controls. The additional falling petals are decorative and marked with `aria-hidden`. If this component is extended with interactive content, preserve keyboard access, readable contrast, and a reduced-motion alternative.

## Contributing

Useful improvements are welcome. Please:

1. Fork the repository.
2. Create a focused branch for the change.
3. Run `npm run build` and `npm run lint`.
4. Open a Pull Request describing the motivation and visual impact.

Keep changes scoped, avoid committing generated files or credentials, and include a screenshot when altering the visual presentation.

## Lovable

The project remains connected to [Lovable](https://lovable.dev/projects/1f060d28-c3c1-41e1-8fae-e5d94699e7fe). Commits merged into the connected branch can appear in the Lovable editor, so published Git history should not be rewritten.

## Acknowledgements

Created as an exploration of seamless motion, soft pink floral art direction, and minimal landing-page composition.
