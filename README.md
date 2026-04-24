# Amjad Renno - Developer Portfolio

A personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**, designed to present my work, technical focus, and projects in a clear and professional way.

## Live Demo

https://amjad-portfolio-pink.vercel.app

## About This Project

This portfolio was built to reflect my professional profile as a **Datamatiker student** with a strong focus on:

- **C# / .NET**
- **SQL / databases**
- **Security-aware software development**
- **Architecture, clean design, and structured development**

The project is intentionally designed to be:

- fast and minimal
- visually consistent
- easy to maintain
- bilingual (**Danish / English**)
- connected to a real working contact form

## Main Features

- Bilingual content (**Danish default + English**)
- Centralized content management through `portfolio.ts`
- Responsive modern UI
- Project showcase with GitHub links
- Real contact form using **Resend**
- Next.js API route for email sending
- Easy deployment with **Vercel**

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Bebas Neue, DM Sans, JetBrains Mono
- **Email:** Resend
- **Deployment:** Vercel

## Project Structure

```text
app/                  # App Router pages and layout
components/           # Reusable UI sections
context/              # Locale context (DA / EN)
portfolio.ts          # Centralized site content
```

## Quick Start

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

http://localhost:3000

## Content Management

Most of the site content is managed from:

- `portfolio.ts`

This file contains:

- personal information
- localized text
- skills
- projects
- contact text
- footer content

### Files You May Want to Edit

| File | Purpose |
|---|---|
| `portfolio.ts` | Main content source for both languages |
| `context/LocaleContext.tsx` | Language handling |
| `app/layout.tsx` | Site metadata, title, description |
| `components/Navbar.tsx` | Navigation and language toggle |
| `components/About.tsx` | About section |
| `components/Skills.tsx` | Skills and focus areas |
| `components/Projects.tsx` | Projects list |
| `components/Contact.tsx` | Contact form |
| `components/Footer.tsx` | Footer links |

## Bilingual Support

The site supports two languages:

- `da` -> Danish (default)
- `en` -> English

Language switching is handled through React Context and does not require routing changes.

### Translatable Content

All translatable text lives inside `portfolio.ts` under the `locales` object.

```ts
export const locales = {
  da: {
    navigation: [...],
    hero: { ... },
    about: { ... },
    skills: { ... },
    projects: { ... },
    contact: { ... },
    footer: { ... },
  },
  en: {
    navigation: [...],
    hero: { ... },
    about: { ... },
    skills: { ... },
    projects: { ... },
    contact: { ... },
    footer: { ... },
  },
};
```

Important: whenever you update text content, update both `da` and `en` blocks.

### Shared Content

Some data is language-independent and is stored outside `locales`, such as:

- personal links
- skill groups
- project links
- contact links
- footer links

## Contact Form - Resend Setup

The contact form sends emails through **Resend** using an internal Next.js API route.

It does not use:

- Formspree
- a database
- external form handling services

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your@email.com
```

Notes:

- On Resend's free plan, the sender address may use `onboarding@resend.dev` unless you verify a custom domain.
- The contact form sends messages to the address defined in `CONTACT_TO_EMAIL`.
- The API route validates inputs and sends email server-side.

### Contact Flow

1. A user fills out the form.
2. The form submits to `/api/contact`.
3. The API validates the data.
4. Resend sends the email.
5. The UI shows success or error feedback.

### Testing Locally

1. Create a Resend account.
2. Generate an API key.
3. Add your values to `.env.local`.
4. Run `npm run dev`.
5. Test the contact form locally.

## Deployment

This project is deployed on Vercel and connected to GitHub for automatic deployments.

### Vercel Environment Variables

Add these in: Project Settings -> Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `CONTACT_TO_EMAIL` | Email address that receives contact messages |

## Why I Built This

I built this project to create a portfolio that feels both technically solid and professionally relevant.

The goal was to:

- present a clear technical identity
- highlight my strongest areas
- keep the design clean and focused
- support Danish and English content
- use a real contact flow instead of a fake form
- maintain all content from a central source

## Current Focus

This portfolio reflects my strongest focus areas at the moment:

- C# / .NET
- SQL / databases
- Security-aware development
- Architecture and clean software design

Additional skills, projects, and ongoing learning are available through my LinkedIn and GitHub profiles.

## Links

- Live Site: https://amjad-portfolio-pink.vercel.app
- GitHub: https://github.com/AmjadRenno
- LinkedIn: https://linkedin.com/in/amjad-renno-6a73b32b8

## License

This project is for personal portfolio use.
