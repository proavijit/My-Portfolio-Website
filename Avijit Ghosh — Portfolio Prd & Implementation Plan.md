# Avijit Ghosh — Portfolio Website

**Role:** Senior Product Designer + Senior Full Stack Engineer

**Project:** Personal Portfolio Website — Minimalistic, Modern, Developer-focused

**Owner:** Avijit Ghosh — Full Stack JavaScript Developer, Jashore, Khulna, Bangladesh

**Contact:** 01753400794 · [avijitghosh2268@gmail.com](mailto:avijitghosh2268@gmail.com) · linkedin.com/in/proavijit · github.com/proavijit

---

## 1. Executive Summary

Build a minimal, modern portfolio for Avijit Ghosh using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn UI**. The site should highlight skills, projects (with case studies and filters), services, and a resume PDF. Support light/dark themes, responsive design, accessible markup, SEO metadata, and easy deployment to Vercel.

Primary goals:

* Present technical expertise clearly to recruiters/clients
* Showcase production-grade projects with code links and case studies
* Enable contact via an email API (Next.js route) and downloadable resume
* Provide extendable architecture for a blog and future CMS integration

---

## 2. User Personas

1. **Recruiter / Hiring Manager**

   * Needs a quick overview: skills, recent projects, downloadable resume
   * Behavior: scans hero, skills, projects, contact

2. **Potential Client**

   * Wants examples of past work, services, delivery time, pricing range
   * Behavior: reads project case studies, contacts for quote

3. **Tech Lead / Engineering Manager**

   * Seeks depth: architecture, code quality, links to repos, system diagrams
   * Behavior: opens project repos, inspects case studies and architecture notes

4. **Peer / Learner**

   * Interested in blog posts, tutorials, reusable components
   * Behavior: reads blog, views code examples

---

## 3. Key User Stories

* As a recruiter, I can see Avijit's top skills and projects within 10 seconds.
* As a client, I can request a quote through the contact form and download the resume.
* As a tech lead, I can view case studies with architecture diagrams and GitHub links.
* As a visitor on mobile, I can navigate the site comfortably and switch theme.

---

## 4. Feature List

### Core Features

* Hero with headline, short summary, CTAs (Contact, View Resume)
* About with timeline / experience highlights
* Skills section with categorized technical skills and proficiency badges
* Projects grid with search, tag filters, and pagination
* Project case-study pages (problem, solution, tech stack, screenshots, links)
* Services overview (what you offer + pricing/estimate ranges)
* Resume page + downloadable PDF
* Contact page + API-backed form (rate-limited, spam-protected)
* Light/Dark theme
* Responsive design and accessibility (WCAG AA)
* SEO meta + Open Graph images for social sharing

### Advanced Features (phased)

* Blog with MDX / CMS (Sanity/Contentful/Notion/Git-based)
* Admin CMS for adding projects (optional)
* Analytics (Vercel/Google Analytics/ Plausible)
* Performance optimizations (image optimization, caching, ISR)
* Internationalization (English + Bangla) — optional

---

## 5. Technical Architecture

**Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS + shadcn UI

**Data & Content**:

* Projects & blog: Markdown/MDX files in `content/` or headless CMS (sanity/strapi) later
* Resume: PDF stored in `public/` and linked

**API**: Next.js API route `app/api/contact/route.ts` using Nodemailer or Resend for transactional email

**Storage**: Git repo for code; assets in `public/` or remote CDN (Cloudinary) for large images

**Optional Backend**: Small Express microservice (Docker) if using external microservices, or serverless functions on Vercel

**CI/CD**: GitHub Actions for lint/test; Vercel for preview & production deploy

**Observability**: Sentry for errors, Vercel analytics, and optionally Plausible for privacy-friendly metrics

**Security**: Rate-limit contact endpoint, sanitize inputs, use environment variables for secrets

---

## 6. Database Schema (if storing contact leads or projects)

*If using a simple database (Postgres/MongoDB) to store contact submissions or a CMS-backed projects table.*

**Contacts collection (MongoDB)**

```
contacts {
  _id: ObjectId,
  name: string,
  email: string,
  message: string,
  subject?: string,
  createdAt: Date,
  ip?: string
}
```

**Projects collection** (if dynamic)

```
projects {
  _id: ObjectId,
  title: string,
  slug: string,
  shortDescription: string,
  contentMDX: string,
  coverImage: string,
  screenshots: string[],
  tags: string[],
  repoUrl?: string,
  liveUrl?: string,
  techStack: string[],
  featured: boolean,
  createdAt: Date,
  updatedAt: Date
}
```

*Note: for initial launch, static MDX content keeps deployment simple.*

---

## 7. Information Architecture & Sitemap

```
/
|-- /about
|-- /skills
|-- /projects
|    |-- /projects/[slug]
|-- /services
|-- /resume
|-- /contact
|-- /blog (optional)
|    |-- /blog/[slug]
|-- /api/contact (POST)
```

---

## 8. Wireframe Descriptions

> Keep wireframes minimal: clear whitespace, bold headings, monospace code snippets where needed.

### Home (Hero + Highlights)

* Top nav: logo (Avijit), nav items (About, Skills, Projects, Services, Resume, Contact), theme toggle
* Hero: Large headline (`Full Stack JavaScript Developer`), 1-line value prop, 2 CTAs (Contact / View Resume), small tech stack strip (icons)
* Featured projects carousel (or grid)
* Skills preview (compact chips)
* Footer: legal + social links

### About

* Two-column: left — short bio, photo; right — timeline of experience & education
* Soft callout: "Currently learning DSA" and links to GitHub profile

### Skills

* Categorized cards: Frontend, Backend, DevOps, Tools
* Each skill: name + small proficiency indicator (bar or dots)

### Projects

* Filter bar: search input + tag filter + featured toggle
* Project cards: cover image, title, short description, tags, CTAs (View case study, Live, Repo)

### Project Case Study

* Hero image + title + badges (tech stack)
* Sections: Problem → Role → Solution → Architecture diagram → Screenshots → Outcome / Metrics → Links

### Services

* Cards describing services, delivery timelines, approximate pricing ranges, CTA to contact

### Resume

* Human-readable sections: Summary, Experience (each job with bullets), Education, Skills, Projects
* CTA to download PDF

### Contact

* Short lead sentence + contact form (name, email, subject, message)
* Validation + success state + spam protection (honeypot or recaptcha)

---

## 9. UI/UX Rules & Design System

### Principles

* Minimal, developer-focused, readable
* Fast load times, accessible, mobile-first
* Use whitespace and hierarchy to highlight content

### Layout & Spacing

* 12pt baseline grid; generous vertical rhythm (1.5–2x spacing)
* Max content width: 1100px

### Components

* Buttons: primary (filled), secondary (ghost), subtle (link)
* Cards: rounded corners (8–12px), soft shadow, hover lift
* Code blocks: monospace, light background in light theme, dark in dark theme
* Badges/tags: pill shape, subtle borders

### Accessibility

* Contrast ratios >= 4.5:1 for body text
* Semantic HTML (nav, main, article, section)
* Keyboard accessible components & focus outlines
* aria-* attributes where needed

---

## 10. Color Theme & Typography

### Color Palette (Minimalistic Modern)

* Primary: #0F172A (slate-900 / near-black) — for headings & dark mode base
* Accent / Brand: #0ea5a4 (teal-500) — CTAs, links
* Muted: #64748b (slate-500) — secondary text
* Surface (light): #FFFFFF
* Surface (dark): #0b1220
* Success: #16a34a; Error: #ef4444

**Tailwind tokens**: use `slate-900`, `teal-500`, `slate-500`, `white`, `slate-800` etc.

### Typography

* Headings: Inter (variable) — Bold for H1/H2
* Body: Inter / system-ui
* Code: JetBrains Mono or Fira Code for code snippets

Font scale example:

* H1: 40–48px
* H2: 28–34px
* Body: 16px / 1.5 line-height

---

## 11. Next.js 14 Project Structure (TypeScript + shadcn + Tailwind)

```
/ (repo root)
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ page.tsx  (home)
│  ├─ about/page.tsx
│  ├─ skills/page.tsx
│  ├─ projects/page.tsx
│  ├─ projects/[slug]/page.tsx
│  ├─ services/page.tsx
│  ├─ resume/page.tsx
│  ├─ contact/page.tsx
│  ├─ blog/ (optional)
│  └─ api/contact/route.ts
├─ components/
│  ├─ ui/ (shadcn components + design system)
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ ProjectCard.tsx
│  ├─ ProjectFilters.tsx
│  ├─ SkillsGrid.tsx
│  └─ ThemeToggle.tsx
├─ lib/
│  ├─ mail.ts (nodemailer/wrapper)
│  └─ data.ts (static project list loader)
├─ content/
│  ├─ projects/ (mdx files)
│  └─ blog/ (mdx files)
├─ public/
│  ├─ resume.pdf
│  └─ images/
├─ scripts/
├─ types/
│  └─ index.d.ts
├─ .env.local
├─ tailwind.config.ts
├─ postcss.config.js
├─ package.json
└─ tsconfig.json
```

---

## 12. Component List + Responsibilities

* **Header**: site navigation, theme toggle, responsive menu
* **Footer**: social links, copyright, small nav
* **Hero**: headline, short summary, CTAs
* **ProjectCard**: image, title, tags, short desc, CTAs
* **ProjectFilters**: search, tag chips, sort
* **ProjectDetail**: full case study layout
* **SkillsGrid**: categorized skill cards
* **ResumeViewer**: embedded PDF or HTML resume
* **ContactForm**: client-side validation + API call
* **Badge/Tag**: reusable tags for tech stacks

---

## 13. API Routes

* `POST /api/contact` — send contact message (validates input, rate-limit, send via email)
* `GET /api/projects` — optional: return list of projects (for dynamic sites)
* `GET /api/og` — generate Open Graph preview image on the fly (optional)

Security: Validate body schema (zod/joi), sanitize inputs, implement basic throttling.

---

## 14. Content & Page Copy (Short drafts)

**Hero:**

> Hi, I’m Avijit Ghosh — a Full Stack JavaScript Developer building production-grade web apps using React, Next.js, Node.js, and MongoDB. I design reliable APIs and beautiful frontends.

**About (short):**

> I’m a former Fiverr Level 2 WordPress developer turned Full Stack JavaScript engineer. I’ve delivered 60+ projects, and now focus on scalable, maintainable full-stack apps. I’m based in Jashore, Khulna, Bangladesh.

**Contact CTA:**

> Looking to build something together? I’m available for freelance and full-time opportunities. Send a message — I reply within 48 hours.

*(Full content for every page is included in the repo file `content/` or can be expanded on demand.)*

---

## 15. SEO Strategy

* Use Next.js metadata API for descriptive titles & meta descriptions per page
* Create structured data (JSON-LD) for Person and Organization
* Add Open Graph & Twitter Card images (generate og images using Vercel OG or static images)
* Sitemap.xml and robots.txt
* Optimize images (next/image) and preload critical fonts

---

## 16. Performance & Accessibility Checklist

* Lighthouse score target: 90+ performance, 90+ accessibility
* Remove unused JS/CSS, use code-splitting
* Optimize images, use `loading="lazy"` where appropriate
* Keyboard navigation and visible focus states

---

## 17. Deployment Plan

* Host on **Vercel** (Github integration)
* Set environment variables on Vercel (EMAIL_API_KEY, SMTP credentials)
* Add GitHub Actions for linting and tests on PRs
* Add preview deployments for branches

---

## 18. Roadmap & Milestones

**Phase 1 (Week 0–1)**

* Scaffold Next.js app, Tailwind, shadcn setup
* Implement layout, Header, Footer, Hero, About, Skills
* Static Projects grid (MDX)

**Phase 2 (Week 2)**

* Project detail pages, contact API, resume PDF
* Accessibility and SEO basics

**Phase 3 (Week 3)**

* Blog (MDX), OG images, deploy to Vercel
* Add analytics & monitoring

**Phase 4 (Optional)**

* CMS integration, admin UI, i18n, advanced performance tuning

---

## 19. Acceptance Criteria

* All pages render correctly and are responsive
* Contact form successfully sends email and stores the lead when DB enabled
* Projects are filterable and case studies contain links and screenshots
* Resume downloadable PDF exists and matches the public resume
* Lighthouse: Performance ≥ 80, Accessibility ≥ 90 (iterative target)

---

## 20. Next Steps / Handoff

* Confirm design direction (Minimal / Dark preference)
* Provide final list of projects (title, slug, short desc, tech stack, repo/live links, images)
* I will generate a starter Next.js repo scaffold and the Home / Projects / Contact pages with shadcn UI components and Tailwind setup.

---

*Prepared for Avijit Ghosh — ready to convert into code or expand content on request.*
