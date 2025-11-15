"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const MainNav = () => {
  const pathname = usePathname()

  const routes = [
    {
      href: "/features",
      label: "Features",
      active: pathname === "/features",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
    {
      href: "/demo",
      label: "Demo",
      active: pathname === "/demo",
    },
    {
      href: "/case-studies",
      label: "Case Studies",
      active: pathname === "/case-studies",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="text-xl font-bold text-primary">Vaidhya Sewa</span>
      </Link>
      <div className="hidden md:flex items-center space-x-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md",
              route.active ? "text-primary" : "text-muted-foreground"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default MainNav
