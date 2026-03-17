# Rahul Jobit — Developer Portfolio

A modern, professional developer portfolio built with **React + Vite + Tailwind CSS**.

## ✨ Features

- 🌗 Dark / Light theme toggle (persisted in localStorage)
- 🎞 Smooth scroll-triggered entrance animations
- ⌨ Typewriter hero with role cycling
- 📊 Animated skill progress bars
- 🐙 Live GitHub contribution graph (via ghchart.rshah.org)
- 🗂 Filterable project cards with hover glow effects
- 🕐 Experience timeline
- 📬 Contact form (ready to wire to Formspree / EmailJS)
- 📱 Fully responsive, mobile-first
- ⚡ Vite-powered, fast build & HMR
- 🔍 SEO meta tags included

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
```

Visit: **http://localhost:5173**

### Build for production

```bash
npm run build
# Output goes to /dist
```

Preview the production build:

```bash
npm run preview
```

---

## 📁 Project Structure

```
rahul-portfolio/
├── index.html                  # Entry HTML, fonts, SEO meta
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component, theme state
    ├── index.css               # Tailwind base + global styles
    ├── data/
    │   └── index.js            # All portfolio content (edit here!)
    ├── hooks/
    │   └── useInView.js        # Scroll-based IntersectionObserver hook
    └── components/
        ├── Navbar.jsx          # Sticky nav, mobile menu, theme toggle
        ├── Hero.jsx            # Typewriter, avatar, CTA buttons
        ├── About.jsx           # Bio, highlights grid
        ├── Skills.jsx          # Tabbed skills + GitHub graph
        ├── Projects.jsx        # Filterable project cards
        ├── Experience.jsx      # Timeline layout
        ├── Contact.jsx         # Contact form + info cards
        └── Footer.jsx          # Links, credits
```

---

## ✏️ Customisation

All content lives in **`src/data/index.js`**. Edit:

- `personalInfo` — name, bio, email, phone, links
- `skills` — categories, items, proficiency levels
- `projects` — title, description, tags, links, colors
- `experience` — roles, companies, highlights

To update the **GitHub contribution graph**, change `RahulJobit` in `Skills.jsx`:

```jsx
src="https://ghchart.rshah.org/7c5cfc/RahulJobit"
```

---

## 📬 Wiring Up the Contact Form

The form is UI-complete. Connect it to a backend with one of these:

### Option A — Formspree (easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint URL
3. In `Contact.jsx`, replace the fake submit with:

```jsx
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (response.ok) setStatus('sent')
else setStatus('error')
```

### Option B — EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. `npm install @emailjs/browser`
3. Use `emailjs.sendForm(...)` in the submit handler

---

## 🌐 Deployment

### Vercel (Recommended — 1 click)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — it auto-detects Vite.

### GitHub Pages

1. Install the gh-pages helper:

```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Set `base` in `vite.config.js` to your repo name:

```js
base: '/rahul-jobit-portfolio/'
```

4. Deploy:

```bash
npm run deploy
```

### Netlify

Drag and drop the `/dist` folder at [app.netlify.com](https://app.netlify.com/drop), or connect via GitHub with build command `npm run build` and publish directory `dist`.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| IntersectionObserver | Scroll animations (no library needed) |
| ghchart.rshah.org | GitHub contribution graph |

---

## 📄 License

MIT — feel free to use as a template for your own portfolio.

---

*Built with ❤️ by Rahul Jobit*
