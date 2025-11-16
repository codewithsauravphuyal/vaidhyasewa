"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const [manualLoading, setManualLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      // Placeholder - backend integration pending
      toast.info("Google sign-in will be available soon");
    } catch (error) {
      toast.error("Failed to sign in with Google");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleManualSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setManualLoading(true);
      // Placeholder - backend integration pending
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.info("Authentication feature coming soon");
    } catch (error) {
      toast.error("Failed to sign in");
    } finally {
      setManualLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-teal_400/10 to-teal_700/10">
      <div className="w-full max-w-md px-4">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-teal_400/30 p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-teal_700">Welcome to Vaidhya Sewa</h1>
            <p className="text-gray_700">Sign in to your account</p>
          </div>

          {/* Google OAuth Button */}
          <Button
            onClick={handleGoogleSignIn}
            disabled={googleLoading || manualLoading}
            variant="outline"
            className="w-full h-11 border-teal_400 hover:bg-teal_400/5 text-teal_700 font-medium transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            {googleLoading ? "Signing in..." : "Continue with Google"}
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-teal_400/20"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray_700 font-medium">OR</span>
            </div>
          </div>

          {/* Manual Login Form */}
          <form onSubmit={handleManualSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-teal_700 mb-2">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={googleLoading || manualLoading}
                className="border-teal_400/30 focus:border-teal_400 focus:ring-teal_400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-teal_700 mb-2">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={googleLoading || manualLoading}
                className="border-teal_400/30 focus:border-teal_400 focus:ring-teal_400"
              />
            </div>

            <Button
              type="submit"
              disabled={googleLoading || manualLoading}
              className="w-full h-11 bg-teal_400 hover:bg-teal_700 text-white font-medium transition-colors"
            >
              {manualLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray_700">
            Don't have an account?{" "}
            <Link href="/contact" className="text-teal_400 hover:text-teal_700 font-semibold transition-colors">
              Get started
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-xs text-gray_700">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="hover:text-teal_700 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="hover:text-teal_700 underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
