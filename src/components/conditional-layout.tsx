"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";
  const hideHeaderFooter = isLoginPage || isSignupPage;

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideHeaderFooter && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!hideHeaderFooter && <SiteFooter />}
    </div>
  );
}

