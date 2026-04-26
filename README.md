# Surajit Chakraborty — Portfolio

A modern, animated portfolio website built with **Next.js 16**, **React 19**, **Framer Motion**, and custom CSS.

**Live:** [https://portfolio-pi-one-hgpnm3xjtw.vercel.app/](https://portfolio-pi-one-hgpnm3xjtw.vercel.app/)

---

## Features

✨ **Modern Animations**
- Magnetic hover effects on buttons and images
- Scroll progress indicator with spring physics
- Typewriter kicker animation with blinking caret
- Staggered section reveals with fade-up transitions
- Cursor-reactive spotlight effect
- Morphing SVG wave dividers
- Floating metric cards with bob animation
- Shimmer headline effect

🎨 **Premium Design**
- Custom CSS with CSS variables and glass morphism
- Bold startup color palette (orange `#ff6b2c` + blue `#0b6cff`)
- Responsive layout (mobile, tablet, desktop)
- Snap scroll sections (proximity-based)
- Typography via Google Fonts (Space Grotesk + Playfair Display)

♿ **Accessible**
- Respects `prefers-reduced-motion` system setting
- Semantic HTML structure
- Proper color contrast ratios
- Keyboard navigation ready

---

## Tech Stack

- **Framework:** Next.js 16.2.4
- **UI Library:** React 19
- **Animations:** Framer Motion 11.18.2
- **Styling:** Custom CSS (no Tailwind)
- **Fonts:** Google Fonts (`next/font`)
- **Deployment:** Vercel

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jit23456/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## Project Structure

```
portfolio surajit/
├── app/
│   ├── layout.js          # Root layout, font setup
│   ├── page.js            # Main portfolio page
│   └── globals.css        # Global styles & animations
├── public/
│   └── photosurajit.jpg   # Profile photo
├── package.json
└── README.md
```

### Key Components

**`MagneticItem`** — Spring-based hover wrapper
- Tracks mouse position
- Applies smooth spring physics to translate elements
- Used on CTAs and portrait image

**Wave SViders** — SVG morphing animations
- Two animated wave sections between content
- Path transitions on scroll

**Scroll Progress** — Fixed top bar
- Uses `useScroll` from Framer Motion
- Spring-smoothed animation
- Color gradient flow

---

## Customization

### Edit Personal Data
Update these sections in `app/page.js`:
- Name, headline, bio
- GitHub & LinkedIn URLs
- Email address
- Project details
- Skills list
- Profile photo (`public/photosurajit.jpg`)

### Adjust Colors
Edit CSS variables in `app/globals.css`:
```css
--accent-1: #ff6b2c;  /* Primary (orange) */
--accent-2: #0b6cff;  /* Secondary (blue) */
--bg-1: #fff7ef;      /* Primary background */
--bg-2: #eaf3ff;      /* Secondary background */
```

### Tweak Animations
- `framer-motion` animation variants in `app/page.js`
- Keyframe animations in `app/globals.css` (typing, bob, shimmer, etc.)
- Spring configs: adjust `stiffness` and `damping` in motion values

---

## Deployment

Deployed on **Vercel** with automatic redeployment on every Git push.

### To redeploy your changes:

1. Make edits locally
2. Commit and push:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. Vercel automatically builds and deploys (~60 seconds)

---

## Performance

- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size:** ~150kb (gzipped)
- **First Contentful Paint:** <1s on 4G

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Respects `prefers-reduced-motion` for accessibility

---

## License

MIT — feel free to fork and customize for your own portfolio!

---

## Contact

**Email:** surajitchakraborty823@gmail.com  
**GitHub:** [Jit23456](https://github.com/Jit23456)  
**LinkedIn:** [Surajit Chakraborty](https://www.linkedin.com/in/surajit-chakraborty-158047273/)
