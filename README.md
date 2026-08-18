# TrackPro — Marketing Website

Static marketing site for TrackPro (GPS vehicle tracking).
Stack: **Vite + React + Tailwind CSS**. Font: **Onest** (Google Fonts).

## Chalane ka tarika

```bash
npm install      # pehli dafa
npm run dev      # http://localhost:5173
npm run build    # production -> dist/
npm run preview  # build test
```

## Sections (Figma SS ke mutabiq, sab bane hue)
1. Navbar
2. Hero — "Request a demo" lead form
3. Enterprise Services (dark grid — real product content)
4. Fleet showcase (vehicle types tracked)
5. How it works (3 steps)
6. Stats / "Find your vehicle from here"
7. Benefits grid
8. Vehicle tracking tabs + spec table
9. Testimonials carousel
10. App download CTA
11. Contact — "Let's connect with us" (name order theek, typo fix)
12. FAQ (real tracking Q&A, koi repeat nahi)
13. Brand strip + Footer (TrackPro branding)

## Font
Onest istemal ho raha hai (bold geometric, Semantic ke qareeb, free).
Badalna ho to `tailwind.config.js` mein `fontFamily` aur `src/index.css`
ke top wali `@import` line change kar do.

## Underline
Hand-drawn orange underline `src/assets/underline.png` se aata hai,
reusable `<Underlined>text</Underlined>` component ke zariye.

## Optional images
`public/` mein ye daal sakte ho (bina inke bhi chalta hai — fallback laga hai):
hero-bg.jpg, stats.jpg, benefits.jpg, app-bg.jpg
(dekho public/README-IMAGES.txt)

## Deploy
`dist/` folder Netlify / Vercel / GitHub Pages pe daal do — static hai.
