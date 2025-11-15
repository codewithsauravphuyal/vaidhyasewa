# OAuth Login Setup Guide

## Overview
Your login page now supports clean OAuth authentication with Google and GitHub. The old email/password form has been removed for a streamlined experience.

## What Changed

### 1. **Login Page** (`src/app/login/page.tsx`)
- ✅ Removed email/password form
- ✅ Added Google OAuth button
- ✅ Added GitHub OAuth button
- ✅ Clean, modern UI with gradient background
- ✅ Loading states for each provider
- ✅ Responsive design

### 2. **NextAuth Configuration** (`src/app/api/auth/[...nextauth]/route.ts`)
- ✅ Added GitHub provider
- ✅ Enabled email account linking
- ✅ Simplified callbacks

### 3. **Environment Variables** (`env.example`)
- ✅ Added GitHub OAuth credentials placeholders

## Setup Instructions

### Step 1: Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID (Web application)
3. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)
4. Copy the Client ID and Client Secret

### Step 2: GitHub OAuth Setup
1. Go to [GitHub Settings > Developer settings > OAuth Apps](https://github.com/settings/developers)
2. Create a new OAuth App
3. Set Authorization callback URL:
   - `http://localhost:3000/api/auth/callback/github` (development)
   - `https://yourdomain.com/api/auth/callback/github` (production)
4. Copy the Client ID and Client Secret

### Step 3: Environment Variables
Create a `.env.local` file in the root directory:

```env
# Authentication
NEXTAUTH_SECRET=your-secret-key-here-generate-with-openssl-rand-base64-32
NEXTAUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# GitHub OAuth
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Step 4: Generate NEXTAUTH_SECRET
Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

### Step 5: Update Production URL
Before deploying, update `NEXTAUTH_URL` to your production domain:
```env
NEXTAUTH_URL=https://yourdomain.com
```

## Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/login`

3. Click "Continue with Google" or "Continue with GitHub"

4. You should be redirected to the OAuth provider's login page

5. After successful authentication, you'll be redirected to `/demo`

## Features

- **Clean UI**: Modern, minimalist design with gradient background
- **Loading States**: Each provider button shows loading state independently
- **Error Handling**: Toast notifications for failed sign-ins
- **Responsive**: Works on mobile and desktop
- **Security**: Uses NextAuth.js for secure OAuth handling
- **Email Linking**: Users can link multiple OAuth providers to the same email

## Customization

### Change Redirect URL
Edit the `callbackUrl` in `src/app/login/page.tsx`:
```typescript
await signIn(provider, { callbackUrl: "/your-page" });
```

### Add More Providers
To add more OAuth providers (e.g., Microsoft, Discord):

1. Install the provider: `npm install next-auth`
2. Add to `src/app/api/auth/[...nextauth]/route.ts`:
```typescript
import DiscordProvider from 'next-auth/providers/discord';

// Add to providers array:
DiscordProvider({
  clientId: process.env.DISCORD_CLIENT_ID || '',
  clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
  allowDangerousEmailAccountLinking: true,
}),
```

### Customize Styling
The login page uses Tailwind CSS. Edit the className attributes in `src/app/login/page.tsx` to match your brand colors.

## Troubleshooting

### "Invalid redirect_uri" error
- Ensure the callback URL in your OAuth app settings matches exactly
- Check for trailing slashes and protocol (http vs https)

### "Missing credentials" error
- Verify all environment variables are set correctly
- Restart the development server after adding env variables

### Session not persisting
- Check that `NEXTAUTH_SECRET` is set
- Verify database connection if using session storage

## Security Notes

- Never commit `.env.local` to version control
- Use strong `NEXTAUTH_SECRET` (32+ characters)
- Always use HTTPS in production
- Keep OAuth secrets secure and rotate them regularly
- Enable email verification if storing user data
