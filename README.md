# Vaidhya Sewa - Hospital Management System Website

A comprehensive, production-ready marketing website for **Vaidhya Sewa**, a modern Hospital Management System. Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Shadcn UI.

![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38bdf8)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages Overview](#pages-overview)
- [Backend Requirements](#backend-requirements)
- [Environment Variables](#environment-variables)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Support](#support)

## 🎯 Overview

Vaidhya Sewa is a professional SaaS platform designed to showcase a Hospital Management System with all essential pages, features, and functionality for a modern healthcare software product. The website serves as the marketing frontend for the Vaidhya Sewa HMS platform.

### Key Highlights

- **15+ Professional Pages** - Complete website with all essential sections
- **Responsive Design** - Mobile-first, tablet, and desktop optimized
- **Modern UI/UX** - Clean, professional design with smooth animations
- **SEO Optimized** - Meta tags, Open Graph, structured data ready
- **Authentication Ready** - Login and signup pages with Google OAuth support
- **Form Validation** - Zod schema validation for all forms
- **Backend Ready** - Complete API requirements documented

## ✨ Features

### Pages & Sections
- ✅ Homepage with hero, features, testimonials, pricing preview
- ✅ Features page with detailed module descriptions
- ✅ Pricing page with 3 pricing plans (Starter, Standard, Premium)
- ✅ About page with mission, vision, and company values
- ✅ Blog page with categories and search (ready for backend)
- ✅ Contact page with form and contact information
- ✅ FAQ page with categorized questions
- ✅ Case Studies page with success stories
- ✅ Partners page with partner categories
- ✅ Demo page with video, demo accounts, and screenshots
- ✅ Screenshots gallery with filtering
- ✅ Login page (no header/footer)
- ✅ Signup page (no header/footer)
- ✅ Get Started page (hospital registration form)
- ✅ Privacy Policy page
- ✅ Terms of Service page

### Components
- 🎨 Reusable UI components (Shadcn UI)
- 🎭 Hero sections (home and page variants)
- 📝 Form components with validation
- 🎠 Testimonials carousel with drag/swipe
- 📱 Responsive navigation (header & footer)
- 🎯 CTA sections
- 🔔 Toast notifications (Sonner)

### Functionality
- 🔐 User authentication (login/signup)
- 📧 Contact form submission
- 📝 Hospital registration form
- 📰 Newsletter subscription
- 🔍 Search functionality (blog)
- 🎨 Dark mode support (theme provider)
- 📱 Mobile-responsive design
- ⚡ Optimized performance

## 🛠 Technology Stack

### Frontend
- **Next.js 16.0.3** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Shadcn UI** - High-quality component library
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **Sonner** - Toast notifications

### Backend & Database (Ready for Integration)
- **MongoDB** - NoSQL database (configured)
- **Mongoose** - ODM for MongoDB
- **NextAuth** - Authentication framework
- **Next.js API Routes** - Serverless backend

### Additional Tools
- **Next Themes** - Dark mode support
- **Cloudinary** - Image hosting (configured)
- **Date-fns** - Date formatting

## 📁 Project Structure

```
vaidhyasewa/
├── src/
│   ├── app/
│   │   ├── (public)/              # Public pages group
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── about/            # About page
│   │   │   ├── blog/             # Blog listing
│   │   │   ├── case-studies/     # Case studies & partners
│   │   │   ├── contact/          # Contact form
│   │   │   ├── demo/             # Demo page
│   │   │   ├── faq/              # FAQ page
│   │   │   ├── features/         # Features page
│   │   │   ├── getstarted/      # Hospital registration
│   │   │   ├── login/           # Login page (no header/footer)
│   │   │   ├── pricing/         # Pricing plans
│   │   │   ├── privacy/         # Privacy policy
│   │   │   ├── screenshots/     # Screenshots gallery
│   │   │   ├── signup/         # Signup page (no header/footer)
│   │   │   ├── terms/           # Terms of service
│   │   │   └── layout.tsx      # Public layout
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ui/                  # Shadcn UI components
│   │   ├── conditional-layout.tsx  # Header/footer conditional
│   │   ├── cta_section.tsx      # CTA component
│   │   ├── hero_section.tsx     # Page hero
│   │   ├── homehero_section.tsx # Homepage hero
│   │   ├── main-nav.tsx         # Navigation
│   │   ├── site-footer.tsx      # Footer
│   │   ├── site-header.tsx      # Header
│   │   └── testimonials-carousel.tsx # Testimonials
│   └── lib/
│       ├── utils.ts             # Utility functions
│       └── validations/         # Zod schemas
├── public/                      # Static assets
│   └── images/                  # Images
├── BACKEND_REQUIREMENTS.md      # Complete backend API docs
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
└── env.example                  # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** or **pnpm**
- **MongoDB Atlas** account (optional, for backend integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vaidhyasewa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   # MongoDB (optional - for backend integration)
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vaidhyasewa
   
   # NextAuth (for authentication)
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # Cloudinary (for image hosting)
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   
   # Backend API (when backend is ready)
   NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Pages Overview

| Page | Path | Description | Status |
|------|------|-------------|--------|
| **Home** | `/` | Hero, features, testimonials, pricing, FAQ | ✅ Complete |
| **Features** | `/features` | Detailed feature descriptions | ✅ Complete |
| **Pricing** | `/pricing` | 3 pricing plans with feature comparison | ✅ Complete |
| **About** | `/about` | Mission, vision, company values | ✅ Complete |
| **Blog** | `/blog` | Blog listing with search & categories | ✅ Ready for backend |
| **Contact** | `/contact` | Contact form with validation | ✅ Ready for backend |
| **FAQ** | `/faq` | Categorized FAQs | ✅ Ready for backend |
| **Case Studies** | `/case-studies` | Success stories with metrics | ✅ Ready for backend |
| **Partners** | `/case-studies/partners` | Partner listings | ✅ Ready for backend |
| **Demo** | `/demo` | Video demo, demo accounts, screenshots | ✅ Complete |
| **Screenshots** | `/screenshots` | Image gallery with filtering | ✅ Ready for backend |
| **Login** | `/login` | User login (no header/footer) | ✅ Complete |
| **Signup** | `/signup` | User account signup (no header/footer) | ✅ Complete |
| **Get Started** | `/getstarted` | Hospital registration form | ✅ Ready for backend |
| **Privacy** | `/privacy` | Privacy policy | ✅ Complete |
| **Terms** | `/terms` | Terms of service | ✅ Complete |

## 🔌 Backend Requirements

The project includes a comprehensive **Backend Requirements Document** (`BACKEND_REQUIREMENTS.md`) that specifies:

### API Endpoints Required

#### Authentication
- `POST /api/v1/auth/signup/` - User account creation
- `POST /api/v1/auth/login/` - User login
- `POST /api/v1/auth/google/` - Google OAuth
- `POST /api/v1/auth/verify-email/` - Email verification
- `POST /api/v1/auth/password/reset/` - Password reset

#### Content Management
- `GET /api/v1/blog/posts/` - Blog posts
- `GET /api/v1/testimonials/` - Testimonials
- `GET /api/v1/faq/` - FAQs
- `GET /api/v1/features/` - Features
- `GET /api/v1/pricing/plans/` - Pricing plans
- `GET /api/v1/case-studies/` - Case studies
- `GET /api/v1/partners/` - Partners
- `GET /api/v1/screenshots/` - Screenshots
- And many more...

#### Form Submissions
- `POST /api/v1/contact/` - Contact form
- `POST /api/v1/newsletter/subscribe/` - Newsletter
- `POST /api/v1/auth/register/` - Hospital registration

### Django Models

The document includes complete Django model specifications for:
- User & Authentication
- Blog Posts & Categories
- Testimonials
- Case Studies
- Partners
- FAQs
- Features
- Pricing Plans
- Screenshots
- Form Submissions
- And more...

**See `BACKEND_REQUIREMENTS.md` for complete API documentation.**

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate-a-random-secret-key-here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Backend API URL (When backend is ready)
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server (Turbopack)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Code Style

- **TypeScript** - Type-safe development
- **ESLint** - Code quality and linting
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Component library conventions

### Key Development Notes

1. **No Header/Footer Pages**: Login and Signup pages don't show header/footer (handled by `conditional-layout.tsx`)
2. **Form Validation**: All forms use Zod schemas in `src/lib/validations/`
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **Image Optimization**: Uses Next.js Image component with `unoptimized` flag for local images
5. **Toast Notifications**: Uses Sonner for user feedback

### Color Palette

- **Primary Teal**: `#25a6b2` (teal_400)
- **Dark Teal**: `#006d77` (teal_700)
- **Background**: `#ffffff` (white_A700)
- **Text**: `#1e293b` (bluegray_900)
- **Muted**: `#64748b` (bluegray_500)

### Typography

- **Font Family**: Poppins (primary), Inter (fallback)
- **Weights**: 400, 500, 600, 700
- **Responsive**: Scales from mobile to desktop

### Components

- Buttons (primary, secondary, outline, ghost)
- Cards with hover effects
- Forms with validation
- Modals and dialogs
- Navigation components
- Footer with links

## 🔒 Security Features

- Environment variable protection
- Form validation with Zod
- CORS headers ready
- Rate limiting ready (backend)
- HTTPS ready for production
- Secure authentication flow

## 📈 SEO & Performance

- ✅ Meta tags on all pages
- ✅ Open Graph images ready
- ✅ Structured data ready
- ✅ Mobile responsive
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation where possible

## 📚 Documentation

### Project Documentation
- **Backend Requirements**: See `BACKEND_REQUIREMENTS.md` for complete API specifications
- **Environment Variables**: See `env.example` for all required variables

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod Documentation](https://zod.dev)

## 🤝 Contributing

This is a proprietary project. For contributions or issues, contact the development team.

## 📞 Support

For questions or support:

- **Email**: codewithsauravphuyal@gmail.com
- **Additional Email**: sauravphuyal2001@gmail.com
- **Phone**: +977 9746984367
- **Address**: Sundarharaincha 03, Gachhiya, Morang, Koshi Province, Nepal

## 📄 License

Proprietary - All rights reserved © 2024 Vaidhya Sewa

---

**Built with ❤️ for modern healthcare management**
