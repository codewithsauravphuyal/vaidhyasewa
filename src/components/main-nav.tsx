"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

const MainNav = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About",
      active: pathname === "/about",
    },
    {
      href: "/pricing",
      label: "Pricing",
      active: pathname === "/pricing",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <nav className="flex items-center justify-between w-full">
      <Link href="/" className="flex items-center">
        <div className="relative flex items-center">
          <div className="bg-teal_700 h-8 w-8 md:h-9 md:w-9 rounded"></div>
          <span className="absolute left-2 font-bold text-white_A700 text-xl md:text-2xl font-inter">V</span>
          <span className="ml-2 text-xl md:text-2xl font-bold text-bluegray_900 font-inter">aidhya Sewa</span>
        </div>
      </Link>
      <div className="hidden md:flex items-center space-x-8 ml-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-base font-medium transition-colors',
              route.active
                ? 'text-gray-700 font-semibold'
                : scrolled 
                  ? 'text-teal-700 hover:text-teal-600'
                  : 'text-white hover:text-teal-600'
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
