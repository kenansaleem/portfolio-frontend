# AXIOM — Frontend Developer Portfolio

A bold, neo-brutalist portfolio website that redefines the conventional developer portfolio aesthetic. Built with vanilla HTML, CSS, and JavaScript with a distinctive design philosophy.

## Design Philosophy

**Aesthetic Direction: Neo-Brutalist Editorial**

This portfolio breaks away from the sea of generic "AI slop" portfolios by embracing:
- **High-contrast color palette**: Deep charcoal (#0a0a0a) with electric lime (#ccff00) and warm amber (#ffb800) accents
- **Bold typography**: Bebas Neue for display, Syne for headings, Space Mono for body text
- **Dramatic spatial composition**: Grid-breaking layouts, asymmetric elements, generous negative space
- **Atmospheric depth**: Noise/grain textures, gradient overlays, layered elements
- **Orchestrated motion**: Staggered entrance animations, smooth hover transitions, custom cursor

## Features

- **Custom Cursor**: Interactive cursor with dot and outline elements that respond to hover states
- **Theme Toggle**: Light/dark mode with localStorage persistence and system preference detection
- **Scroll Animations**: Intersection Observer-powered reveal animations with staggered delays
- **Mobile Responsive**: Fully responsive design with custom hamburger menu
- **Contact Form**: Firebase-powered form for message storage
- **Performance**: No framework dependencies, pure vanilla implementation

## Sections

1. **Hero**: Full-viewport with animated title reveals, CTA buttons, decorative elements
2. **About**: Split layout with stats counter and editorial imagery
3. **Skills**: Grid of skill cards with progress bars and hover effects
4. **Projects**: Asymmetric project cards with image overlays and tags
5. **Contact**: Split layout with social links and Firebase-powered form
6. **Footer**: Minimal footer with social icons

## Tech Stack

- **HTML5**: Semantic markup with accessibility in mind
- **CSS3**: Custom properties, Grid/Flexbox, CSS animations
- **JavaScript**: ES6+ with Intersection Observer API
- **Firebase**: Realtime Database for contact form
- **Google Fonts**: Bebas Neue, Syne, Space Mono
- **Font Awesome**: Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
--accent-primary: #ccff00;
--accent-secondary: #ffb800;
--bg-primary: #0a0a0a;
```

### Fonts
The design uses three font families:
- **Bebas Neue** - Display text
- **Syne** - Headings
- **Space Mono** - Body text

Replace in the Google Fonts import link in `index.html`.

## Getting Started

1. Open `index.html` in your browser
2. Customize content in each section
3. Update Firebase config in `index.html` (lines 14-16)
4. Replace project images with your own
5. Update social links in the contact section

## License

MIT License