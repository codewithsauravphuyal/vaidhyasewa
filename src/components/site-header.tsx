"use client"

<<<<<<< HEAD
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { CalendarHeart, Menu, Instagram, Facebook, LogIn, Users, Mail, Phone } from "lucide-react"
=======
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import MainNav from "./main-nav"
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export function SiteHeader() {
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/our-team", label: "Our Team", active: pathname === "/our-team" },
    { href: "/news", label: "Events & News", active: pathname === "/news" },
    { href: "#", label: "Our Clients", active: pathname === "#" },
    { href: "/pricing", label: "Pricing", active: pathname === "/pricing" },
    { href: "/contact", label: "Contact", active: pathname === "/contact" },
  ]

  // Compute active index for easy access
  const activeIndex = routes.findIndex(route => route.active)
=======
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
<<<<<<< HEAD
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Set initial underline position for active route
  useEffect(() => {
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      const link = linkRefs.current[activeIndex]
      if (navRef.current && link) {
        setUnderlineStyle({
          left: link.offsetLeft,
          width: link.offsetWidth,
        })
      }
    }
  }, [pathname, activeIndex])

  const updateUnderline = (index: number) => {
    const link = linkRefs.current[index]
    if (navRef.current && link) {
      setUnderlineStyle({
        left: link.offsetLeft,
        width: link.offsetWidth,
      })
    }
  }

  // Reset underline to active on mouse leave
  const handleMouseLeave = () => {
    if (activeIndex !== -1) {
      updateUnderline(activeIndex)
    }
  }

  return (
    <header className={cn(
      "fixed left-0 right-0 top-0 z-50 w-full transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
    )}>
      {/* Top Bar */}
      <div className={cn(
        "hidden md:flex absolute left-0 right-0 top-0 h-12 items-center bg-primary text-white transition-transform duration-300 ease-in-out",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-base">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="mailto:info@vaidhyasewa.com"
              className="hover:opacity-80 transition-opacity"
            >
             <Mail className="inline-block mr-2 h-4 w-4" /> 
              info@vaidhyasewa.com
            </a>
            <a
              href="tel:+977980000000"
              className="hover:opacity-80 transition-opacity"
            >
              <Phone className="inline-block mr-2 h-4 w-4" />
              +977-9746888890
            </a>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="flex space-x-2">
              <a
                href="https://instagram.com/vaidhyasewa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/vaidhyasewa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <Link
              href="/our-team"
              className="hover:opacity-80 transition-opacity font-medium"
            >
              <Users className="inline-block mr-2 h-4 w-4" />
              Our Team
            </Link>
            <div className="bg-secondary h-12">
              <Link
                href="apps.vaidhyasewa.com"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-white font-medium hover:opacity-80 transition-opacity"
                target="_blank"
              >
                <LogIn className="inline-block mr-2 h-4 w-4" />
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={cn(
        "w-full transition-all duration-300",
        scrolled ? "pt-0" : "pt-0 md:pt-12"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Vaidhya Sewa"
                width={100}
                height={100}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex relative items-center gap-3">
              <nav
                ref={navRef}
                className="relative flex gap-3"
                onMouseLeave={handleMouseLeave}
              >
                {routes.map((route, index) => (
                  <Link
                    key={index}
                    ref={(el) => {
                      linkRefs.current[index] = el
                    }}
                    href={route.href}
                    onMouseEnter={() => updateUnderline(index)}
                    className={cn(
                      "relative text-base font-medium transition-colors hover:text-secondary px-2 py-1",
                      route.active ? "text-secondary" : "text-primary"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
                {/* Dynamic Underline */}
                <div
                  className="absolute -bottom-6 left-0 h-1 bg-secondary transition-all duration-300 ease-out"
                  style={{ left: underlineStyle.left, width: underlineStyle.width }}
                />
              </nav>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                size="sm"
                className={cn(
                  "bg-primary hover:bg-secondary text-white font-medium transition-colors",
                  scrolled ? "shadow-sm" : ""
                )}
              >
                <a href="/schedule-demo" target="_blank">
                  <CalendarHeart className="mr-2 h-4 w-4" />
                  Schedule a Demo
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-8 w-8 hover:bg-gray-100"
                    )}
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                  <div className="flex flex-col h-full">
                    <SheetHeader className="border-b border-gray-100 p-6">
                      <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex-1 p-6 space-y-4">
                      {routes.map((route, index) => (
                        <Link
                          key={index}
                          href={route.href}
                          className={cn(
                            "block text-base font-medium py-2 px-3 rounded-lg transition-colors",
                            route.active
                              ? "bg-primary/10 text-secondary border border-primary/45"
                              : "text-primary"
                          )}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </nav>
                    <div className="border-t border-gray-100 p-6">
                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-primary hover:bg-secondary text-white"
                      >
                        <a href="/contact" target="_blank">
                          <CalendarHeart className="mr-2 h-4 w-4" />
                          Schedule a Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
=======
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  return (
    <header className={cn(
      "fixed w-full z-50 py-4 transition-all duration-300",
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-8">
            <MainNav />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 font-semibold text-base">
<<<<<<< HEAD
              <a href="https://app.vaidhyasewa.com" target="blank">Login</a>
=======
              <Link href="/login">Login</Link>
>>>>>>> a3eb5ca269c8001d82d406e8e0ca130400f1fcb5
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "hover:bg-white/10",
                    scrolled ? "text-teal-700" : "text-teal-700"
                  )}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="bg-white h-[50vh] max-h-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col mt-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/about", label: "About" },
                    { href: "/blog", label: "Blogs" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/contact", label: "Contact" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-base font-medium py-2 px-4 rounded-md transition-colors block",
                        pathname === item.href
                          ? "bg-teal-50 text-teal-700"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t space-y-3">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white" asChild>
<<<<<<< HEAD
                      <a href="https://app.vaidhyasewa.com" target="blank" onClick={() => setOpen(false)}>
                        Login
                      </a>
=======
                      <Link href="/login" onClick={() => setOpen(false)}>
                        Login
                      </Link>
>>>>>>> a3eb5ca269c8001d82d406e8e0ca130400f1fcb5
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          </div>
        </div>
      </div>
    </header>
  )
}