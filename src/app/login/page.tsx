"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/demo" });
    } catch (error) {
      toast.error("Failed to sign in with Google");
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Demo login logic - in production, this would use NextAuth
    if (email && password) {
      toast.success("Demo login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/demo";
      }, 1000);
    } else {
      toast.error("Please enter email and password");
    }
    
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-secondary/5">
      <div className="w-full max-w-md p-8">
        <div className="bg-white rounded-lg border border-border p-8">
          <h1 className="text-3xl font-bold text-dark mb-2 text-center">Welcome Back</h1>
          <p className="text-muted-foreground text-center mb-8">Sign in to your Vaidhya Sewa account</p>

          <div className="space-y-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-sm text-blue-900">
                Demo credentials are available on the <Link href="/demo" className="font-semibold hover:underline">Demo page</Link>
              </p>
            </div>

            <form onSubmit={handleEmailSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-sm text-primary hover:text-primary/80">
                  Forgot password?
                </a>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
              Sign in with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/contact" className="text-primary hover:text-primary/80 font-semibold">
                Get started
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Protected by reCAPTCHA and subject to the{" "}
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}
