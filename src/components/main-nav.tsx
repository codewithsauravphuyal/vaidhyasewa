"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const MainNav = () => {
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/features",
      label: "Features",
      active: pathname === "/features",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/demo",
      label: "Services",
      active: pathname === "/demo",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
      <Link href="/" className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <div className="bg-teal_700 h-8 w-8 md:h-9 md:w-9 rounded"></div>
          <span className="absolute left-2 font-bold text-white_A700 text-xl md:text-2xl font-inter">V</span>
          <span className="ml-2 text-xl md:text-2xl font-bold text-bluegray_900 font-inter">aidhya Sewa</span>
        </div>
      </Link>
      <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm md:text-base lg:text-lg font-medium transition-colors px-3 py-2 rounded-md",
              route.active 
                ? "text-teal_700 font-semibold" 
                : "text-bluegray_900 hover:text-teal_700"
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
