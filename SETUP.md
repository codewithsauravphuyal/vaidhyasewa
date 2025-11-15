# Vaidhya Sewa - Setup Guide

## Overview
Vaidhya Sewa is a professional SaaS website for a Hospital Management System built with Next.js 16, Tailwind CSS v4, MongoDB, and Shadcn UI components.

## Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Shadcn UI** - High-quality React components
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend & Database
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Next.js API Routes** - Backend endpoints

### Additional Tools
- **Cloudinary** - Image hosting (protected URLs)
- **NextAuth** - Authentication (Google OAuth ready)
- **Sonner** - Toast notifications

## Installation & Setup

### 1. Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (optional, for image hosting)

### 2. Clone & Install Dependencies
```bash
cd vaidhyasewa
npm install
# or
yarn install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vaidhyasewa?retryWrites=true&w=majority

# Cloudinary (Optional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# NextAuth (Optional, for Google OAuth)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vaidhyasewa/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── features/          # Features page
│   │   ├── pricing/           # Pricing page
│   │   ├── demo/              # Demo page
│   │   ├── screenshots/       # Screenshots gallery
│   │   ├── case-studies/      # Case studies
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog page
│   │   ├── contact/           # Contact form
│   │   ├── faq/               # FAQ page
│   │   ├── security/          # Security page
│   │   ├── downloads/         # Downloads page
│   │   ├── login/             # Login page
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms of service
│   │   ├── api/               # API routes
│   │   │   └── contact/       # Contact form endpoint
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── ui/                # Shadcn UI components
│   │   ├── site-header.tsx    # Header component
│   │   ├── site-footer.tsx    # Footer component
│   │   ├── main-nav.tsx       # Navigation component
│   │   └── theme-provider.tsx # Theme provider
│   ├── lib/
│   │   ├── db.ts              # MongoDB connection
│   │   ├── models/            # Database models
│   │   │   ├── contact.ts     # Contact model
│   │   │   └── blog.ts        # Blog model
│   │   ├── validations/       # Zod schemas
│   │   │   └── contact.ts     # Contact form validation
│   │   └── utils.ts           # Utility functions
│   └── public/                # Static assets
├── package.json               # Dependencies
├── tsconfig.json             # TypeScript config
├── tailwind.config.ts        # Tailwind config
├── postcss.config.mjs        # PostCSS config
└── next.config.ts            # Next.js config
```

## Pages & Features

### Main Pages
- **Home** (`/`) - Hero section, features, roles, why choose us
- **Features** (`/features`) - Detailed module descriptions
- **Pricing** (`/pricing`) - Pricing plans with comparison
- **Demo** (`/demo`) - Demo video, interactive login, screenshots
- **Screenshots** (`/screenshots`) - Image gallery with filtering
- **Case Studies** (`/case-studies`) - Success stories
- **About** (`/about`) - Company story, mission, vision, timeline
- **Blog** (`/blog`) - Healthcare articles with categories
- **Contact** (`/contact`) - Contact form with WhatsApp/Messenger links
- **FAQ** (`/faq`) - Grouped FAQs by category
- **Security** (`/security`) - Security measures and compliance
- **Downloads** (`/downloads`) - Brochures, APKs, PDFs
- **Login** (`/login`) - Login page with demo credentials

### API Endpoints
- `POST /api/contact` - Submit contact form

## Color Scheme

The website uses a professional monochromatic color palette:
- **Primary**: `#3ac8c4` (Teal)
- **Secondary**: `#217371` (Dark Teal)
- **Dark**: `#091e1d` (Almost Black)

These colors are configured in `tailwind.config.ts` and used throughout the design.

## Customization

### Update Hospital Information
Edit the following files to customize content:
- `src/app/page.tsx` - Home page content
- `src/components/site-footer.tsx` - Footer links and social media
- `src/app/contact/page.tsx` - Contact information

### Add Blog Posts
Blog posts are stored in MongoDB. Use the admin panel or API to add new posts.

### Update Pricing
Edit `src/app/pricing/page.tsx` to modify pricing plans.

### Customize Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#3ac8c4',
    foreground: '#ffffff',
  },
  // ... other colors
}
```

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Railway

## Environment Variables for Production

When deploying to production, ensure these environment variables are set:
- `MONGODB_URI` - Production MongoDB connection string
- `NEXTAUTH_URL` - Your production domain
- `NEXTAUTH_SECRET` - Strong secret key
- Cloudinary credentials (if using image hosting)
- Google OAuth credentials (if using authentication)

## SEO & Meta Tags

All pages include proper meta tags for SEO:
- Title tags
- Meta descriptions
- Open Graph images
- Structured data (ready for implementation)

## Security Features

- ✅ Environment variable protection
- ✅ Form validation with Zod
- ✅ MongoDB connection pooling
- ✅ CORS headers
- ✅ Rate limiting ready
- ✅ HTTPS ready

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ CSS-in-JS with Tailwind (minimal bundle)
- ✅ Server-side rendering where beneficial
- ✅ Static generation for marketing pages

## Troubleshooting

### MongoDB Connection Error
- Verify `MONGODB_URI` is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Tailwind CSS Not Loading
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `npm install`
- Restart dev server

### Build Errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

## Support & Documentation

For more information:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [MongoDB Documentation](https://docs.mongodb.com)

## License

This project is proprietary software for Vaidhya Sewa.

## Contact

For questions or support, contact: info@vaidhyasewa.com
