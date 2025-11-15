import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Login - Vaidhya Sewa",
  description: "Login to your Vaidhya Sewa account",
};

export default function LoginPage() {
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

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

              <Button className="w-full bg-primary hover:bg-primary/90">Sign In</Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
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
