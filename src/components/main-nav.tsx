"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
      href: "/blog",
      label: "Blogs",
      active: pathname === "/blog",
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
<<<<<<< HEAD
          <Image src="/logo.png" alt="logo" width={170} height={170} />
=======
<<<<<<< HEAD
          <Image src="/logo.png" alt="logo" width={170} height={170} />
=======
          <Image src="/images/logo.png" alt="logo" width={150} height={150} />
>>>>>>> a3eb5ca269c8001d82d406e8e0ca130400f1fcb5
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
        </div>
      </Link>
      <div className="hidden md:flex items-center space-x-8 ml-8">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-base font-medium transition-colors',
<<<<<<< HEAD
              route.active ? 'text-secondary font-semibold' : 'text-primary hover:text-secondary'
=======
              route.active
                ? 'text-gray-700 font-semibold'
                : scrolled 
                  ? 'text-teal-700 hover:text-teal-600'
                  : 'text-white hover:text-teal-600'
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
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
