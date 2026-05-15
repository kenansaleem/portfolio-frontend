# AGENTS.md — Frontend Portfolio

## Repo Type
Static HTML/CSS/JS website. No build system, no package.json. Open `index.html` directly in a browser.

## File Structure
```
index.html    - Main entry, contains structure + Firebase config
styles.css    - All styling (neo-brutalist theme)
script.js     - Interactions, animations, form handling
README.md     - Project docs
LICENSE       - MIT
```

## Commands
- **View locally**: Open `index.html` in browser (no server required)
- **No npm/Node** commands apply — this isn't a Node project

## Important Notes
- **Firebase config** in `index.html` (lines 14-16) uses placeholder values. Replace with your credentials to enable contact form submissions.
- **Theme toggle**: Light/dark mode stored in localStorage key `axiom-theme`.
- **Custom cursor**: Implemented in CSS/JS — disable in `styles.css` if unwanted.

## Style Context
This portfolio uses a **neo-brutalist** aesthetic (Bebas Neue + Syne + Space Mono fonts, high-contrast lime/amber on dark). If editing, maintain this design direction — don't revert to generic Bootstrap styling.

## Missing
- No tests, no linting, no CI/CD
- No TypeScript, no framework