import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/lib/db';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          await connectDB();
          
          // TODO: Implement your user authentication logic here
          // Example: Query database for user with email and verify password
          // For now, accepting any email/password combination for demo
          
          return {
            id: credentials.email,
            email: credentials.email,
            name: credentials.email.split('@')[0],
          };
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();
        // You can save user to database here if needed
        return true;
      } catch (error) {
        console.error('Sign in error:', error);
        return false;
      }
    },
    async session({ session, token }) {
      // Add custom session data here
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

