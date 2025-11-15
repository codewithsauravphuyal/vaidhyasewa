This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Vaidhya Sewa - Professional SaaS Website

A comprehensive, production-ready SaaS website for **Vaidhya Sewa**, a modern Hospital Management System. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Shadcn UI.

## Overview

Vaidhya Sewa is a professional SaaS platform designed to showcase a Hospital Management System with all essential pages, features, and functionality for a modern healthcare software product.

### Key Features

- **13+ Professional Pages** - Complete website blueprint
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Modern UI/UX** - Professional monochromatic color scheme
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Contact Forms** - Zod validation, MongoDB integration
- **Blog System** - Categorized articles with search
- **Case Studies** - Success stories and testimonials
- **Pricing Pages** - Multiple plans with comparison
- **Security Page** - Compliance and infrastructure details
- **FAQ Section** - Grouped by categories
- **Downloads** - Brochures, APKs, documentation
- **Authentication Ready** - Google OAuth integration
- **API Routes** - Backend endpoints for forms

## Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Shadcn UI** - High-quality component library
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **React Hook Form** - Efficient form handling

### Backend & Database
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Next.js API Routes** - Serverless backend

### Validation & Security
- **Zod** - Schema validation
- **NextAuth** - Authentication framework
- **Cloudinary** - Image hosting (protected URLs)

## Project Structure

```
vaidhyasewa/
├── src/
│   ├── app/
│   │   ├── (pages)
│   │   │   ├── page.tsx              # Home
│   │   │   ├── features/page.tsx     # Features
│   │   │   ├── pricing/page.tsx      # Pricing
│   │   │   ├── demo/page.tsx         # Demo
│   │   │   ├── screenshots/page.tsx  # Screenshots
│   │   │   ├── case-studies/page.tsx # Case Studies
│   │   │   ├── about/page.tsx        # About
│   │   │   ├── blog/page.tsx         # Blog
│   │   │   ├── contact/page.tsx      # Contact
│   │   │   ├── faq/page.tsx          # FAQ
│   │   │   ├── security/page.tsx     # Security
│   │   │   ├── downloads/page.tsx    # Downloads
│   │   │   ├── login/page.tsx        # Login
│   │   │   ├── privacy/page.tsx      # Privacy
│   │   │   └── terms/page.tsx        # Terms
│   │   ├── api/
│   │   │   └── contact/route.ts      # Contact API
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── ui/                       # Shadcn components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── main-nav.tsx
│   └── lib/
│       ├── db.ts                     # MongoDB connection
│       ├── models/                   # Database models
│       ├── validations/              # Zod schemas
│       └── utils.ts
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.ts
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vaidhyasewa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create `.env.local`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vaidhyasewa
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, features, roles, CTA |
| Features | `/features` | Detailed module descriptions |
| Pricing | `/pricing` | 4 pricing plans with comparison |
| Demo | `/demo` | Video, interactive demo, screenshots |
| Screenshots | `/screenshots` | Image gallery with filtering |
| Case Studies | `/case-studies` | Success stories with metrics |
| About | `/about` | Company story, mission, timeline |
| Blog | `/blog` | Articles with categories & search |
| Contact | `/contact` | Form with WhatsApp/Messenger links |
| FAQ | `/faq` | Grouped FAQs by category |
| Security | `/security` | Compliance & infrastructure |
| Downloads | `/downloads` | Resources & documentation |
| Login | `/login` | Authentication page |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms of service |

## Design System

### Color Palette
- **Primary**: `#3ac8c4` (Teal)
- **Secondary**: `#217371` (Dark Teal)
- **Dark**: `#091e1d` (Almost Black)
- **Background**: `#ffffff` / `#000000` (light/dark mode)

### Typography
- Font: Inter (Google Fonts)
- Sizes: Responsive scaling
- Weights: 400, 500, 600, 700, 800

### Components
- Buttons (primary, secondary, outline)
- Cards with hover effects
- Forms with validation
- Modals and dialogs
- Navigation components
- Footer with links

## Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin.

Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: { DEFAULT: '#3ac8c4', foreground: '#ffffff' },
  secondary: { DEFAULT: '#217371', foreground: '#ffffff' },
  dark: { DEFAULT: '#091e1d', foreground: '#ffffff' },
}
```

### MongoDB Models
- **Contact** - Contact form submissions
- **Blog** - Blog posts with categories

### API Endpoints
- `POST /api/contact` - Submit contact form

## Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean
- Railway
- Heroku

## Security Features

- Environment variable protection
- Form validation with Zod
- MongoDB connection pooling
- CORS headers configured
- Rate limiting ready
- HTTPS ready for production

## SEO & Performance

- Meta tags on all pages
- Open Graph images
- Structured data ready
- Mobile responsive
- Image optimization
- Code splitting
- Static generation

## Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Tailwind CSS for styling

## Documentation

For detailed setup and customization, see [SETUP.md](./SETUP.md)

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Shadcn UI Docs](https://ui.shadcn.com)
- [MongoDB Docs](https://docs.mongodb.com)
- [Zod Docs](https://zod.dev)

## Contributing

This is a proprietary project. For contributions or issues, contact the development team.

## Support

For questions or support:
- Email: info@vaidhyasewa.com
- Website: https://vaidhyasewa.com

## License

Proprietary - All rights reserved 2024 Vaidhya Sewa

---

**Built with for modern healthcare management**
