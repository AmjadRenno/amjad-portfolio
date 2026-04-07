# Portfolio — Next.js

A modern, dark-themed developer portfolio built with Next.js 14 and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customize

| File | What to change |
|------|----------------|
| `portfolio.ts` | **All site content** — personal info, skills, projects, contact links, and all localized text (DA + EN) |
| `context/LocaleContext.tsx` | Default language setting |
| `app/layout.tsx` | Site title & meta description |
| `components/Navbar.tsx` | Navigation + language toggle button |
| `components/About.tsx` | Bio, stats, action buttons |
| `components/Skills.tsx` | Skills & proficiency levels |
| `components/Projects.tsx` | Projects list |
| `components/Contact.tsx` | Contact form & links |
| `components/Footer.tsx` | Footer links |

## Bilingual Support (DA / EN)

The site supports **two languages**:

| Language | Code | Status |
|---|---|---|
| Danish | `da` | Default |
| English | `en` | Secondary |

### How to switch language

A toggle button (DA / EN) is displayed in the **Navbar**. Clicking it switches the entire site between Danish and English instantly (React Context — no page reload, no routing change).

### How to edit translated content

All translatable text lives in **`portfolio.ts`** inside the `locales` object:

```ts
export const locales = {
  da: {
    navigation: [...],
    hero: { roles: [...], description: "...", ... },
    about: { paragraphs: [...], stats: [...], ... },
    skills: { sectionLabel: "...", heading: "..." },
    projects: { sectionLabel: "...", heading: "...", privateLabel: "..." },
    contact: { heading: "...", intro: "...", sendLabel: "...", ... },
    footer: { builtWith: "..." },
  },
  en: {
    // same structure as da — always update both blocks
  },
};
```

> **Important:** Whenever you add or update text, edit **both** `da` and `en` blocks.

### Language-independent content

The following data is shared across both languages and lives outside `locales`:

- `personal` — name, email, location, GitHub, LinkedIn
- `skillGroups` — skills & proficiency levels
- `projects` — project titles, descriptions, tags, links
- `contactLinks` — email, LinkedIn, GitHub links
- `footerLinks` — footer icon links

### Adding a third language

1. Add a new key inside `locales` in `portfolio.ts` (e.g. `de: { ... }`)
2. Update `export type Locale = "da" | "en" | "de"` at the top of `portfolio.ts`
3. Update the toggle button in `Navbar.tsx` to cycle through all three

## Contact Form — Resend Setup

The contact form sends emails directly via [Resend](https://resend.com), through an internal Next.js API route (`POST /api/contact`). No database, no third-party form service.

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Get your key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# The email address that will receive messages from the contact form
CONTACT_TO_EMAIL=your@email.com
```

> **Note:** On Resend's free plan, the `from` address must use `onboarding@resend.dev` (already set) unless you verify a custom domain. The recipient email (`CONTACT_TO_EMAIL`) must match the email registered in your Resend account.

### How it works

1. User fills out the contact form (name, email, message)
2. The form submits to `/api/contact` (internal Next.js route)
3. The backend validates inputs and sends an email via Resend to `CONTACT_TO_EMAIL`
4. The form displays: idle / sending / success / error states

### Testing locally

1. Sign up at [resend.com](https://resend.com) and create an API key
2. Add your key and email to `.env.local`
3. Run `npm run dev` and submit the contact form

## Deploy to Vercel

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import GitHub repo → Deploy
```

Add these environment variables in Vercel → **Settings → Environment Variables**:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_TO_EMAIL` | The email that receives messages |

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Bebas Neue + DM Sans + JetBrains Mono
- **Email**: Resend
- **Deployment**: Vercel
