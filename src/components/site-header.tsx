"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import MainNav from "./main-nav"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white_A700/95 backdrop-blur-sm border-b border-gray_100">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          <MainNav />
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild className="text-bluegray_900 hover:text-teal_700">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-teal_700 text-white_A700 hover:bg-teal_700/90 font-semibold shadow-md">
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-bluegray_900">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-sm font-medium transition-colors hover:text-teal_700"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/features"
                    className="text-sm font-medium transition-colors hover:text-teal_700"
                    onClick={() => setOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium transition-colors hover:text-teal_700"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/demo"
                    className="text-sm font-medium transition-colors hover:text-teal_700"
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-sm font-medium transition-colors hover:text-teal_700"
                    onClick={() => setOpen(false)}
                  >
                    Pricing
                  </Link>
                  <div className="pt-4 border-t space-y-2">
                    <Button variant="ghost" asChild className="w-full justify-start">
                      <Link href="/login" onClick={() => setOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild className="w-full bg-teal_700 text-white_A700">
                      <Link href="/contact" onClick={() => setOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
