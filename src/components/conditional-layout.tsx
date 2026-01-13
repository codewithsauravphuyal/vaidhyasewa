"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";
<<<<<<< HEAD
  const hideHeaderFooter = isLoginPage || isSignupPage;
=======
  const isAdminPath = pathname?.startsWith("/admin");
  const hideHeaderFooter = isLoginPage || isSignupPage || Boolean(isAdminPath);
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideHeaderFooter && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!hideHeaderFooter && <SiteFooter />}
    </div>
  );
}

