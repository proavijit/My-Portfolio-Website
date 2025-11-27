# Avijit Ghosh - Portfolio Website

A modern, minimalistic portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Accessible**: WCAG AA compliant with semantic HTML
- **Performance**: Optimized images, fonts, and code splitting
- **Contact Form**: API route with rate limiting and validation
- **Project Showcase**: Filterable project grid with detailed case studies

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing and detail pages
│   ├── resume/            # Resume page
│   ├── services/          # Services page
│   ├── skills/            # Skills page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilters.tsx
│   ├── SkillsGrid.tsx
│   └── ThemeToggle.tsx
├── lib/                   # Utilities
│   ├── data.ts           # Sample data and utilities
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript types
│   └── index.ts
└── public/               # Static assets
    └── images/           # Project images

```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Inter, JetBrains Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/proavijit/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp env.example.txt .env.local
```

4. Configure environment variables in `.env.local` (see env.example.txt for options)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

1. **Contact Info**: Edit `components/Footer.tsx` and `app/contact/page.tsx`
2. **About Content**: Edit `app/about/page.tsx`
3. **Projects**: Update `lib/data.ts` with your projects
4. **Skills**: Update `lib/data.ts` with your skills
5. **Services**: Update `lib/data.ts` with your services
6. **Resume**: Replace `public/resume.pdf` and update `app/resume/page.tsx`

### Add Email Functionality

Install email service (choose one):

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

**Option 2: Nodemailer**
```bash
npm install nodemailer
```

Update `app/api/contact/route.ts` with your email service implementation.

### Add Analytics

**Google Analytics**:
```bash
npm install @next/third-parties
```

**Plausible** (Privacy-friendly):
Add script to `app/layout.tsx`

## 🎨 Color Customization

Edit `app/globals.css` to customize the color scheme. The current theme uses:
- Primary/Accent: Teal (#0ea5a4)
- Background: Slate tones
- Supports both light and dark modes

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Avijit Ghosh**
- GitHub: [@proavijit](https://github.com/proavijit)
- LinkedIn: [proavijit](https://linkedin.com/in/proavijit)
- Email: avijitghosh2268@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
