"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
<<<<<<< HEAD
import { useState, useEffect } from "react"

export function SiteFooter() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-primary w-full font-poppins">
=======

export function SiteFooter() {
  return (
    <footer className="bg-teal_700 w-full font-poppins">
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
      <div className="container py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 order-1">
            <div className="relative flex items-center mb-4">
              <div className="bg-white_A700 h-8 w-8 md:h-9 md:w-9 rounded"></div>
<<<<<<< HEAD
              <span className="absolute left-2 font-bold text-primary text-xl md:text-2xl font-inter">V</span>
=======
              <span className="absolute left-2 font-bold text-teal_700 text-xl md:text-2xl font-inter">V</span>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
              <span className="ml-2 text-xl md:text-2xl font-bold text-white_A700 font-inter">aidhya Sewa</span>
            </div>
            <p className="text-xs sm:text-sm text-white_A701 leading-relaxed">
              Manage your hospital efficiently and easily. A comprehensive hospital management system with a single application.
            </p>
            <div className="mt-4">
              <Image
                src="/images/img_subscirbe.svg"
                alt="subscribe"
                width={120}
                height={32}
                className="h-8 w-auto"
                unoptimized
              />
            </div>
          </div>

          {/* Service */}
          <div className="order-3 md:order-2 lg:order-2">
            <h4 className="font-semibold text-white_A700 mb-4 text-sm md:text-base lg:text-lg">Service</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
<<<<<<< HEAD
              <li><Link href="/features" className="text-white_A700 hover:text-secondary transition-colors block py-1">Features</Link></li>
              <li><Link href="/pricing" className="text-white_A700 hover:text-secondary transition-colors block py-1">Pricing</Link></li>
              <li><Link href="/demo" className="text-white_A700 hover:text-secondary transition-colors block py-1">Demo</Link></li>
=======
              <li><Link href="/features" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Features</Link></li>
              <li><Link href="/pricing" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Pricing</Link></li>
              <li><Link href="/demo" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Demo</Link></li>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            </ul>
          </div>

          {/* Resources */}
          <div className="order-4 md:order-3 lg:order-3">
            <h4 className="font-semibold text-white_A700 mb-4 text-sm md:text-base lg:text-lg">Resources</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
<<<<<<< HEAD
              <li><Link href="/blog" className="text-white_A700 hover:text-secondary transition-colors block py-1">Blog</Link></li>
              <li><Link href="/faq" className="text-white_A700 hover:text-secondary transition-colors block py-1">FAQ</Link></li>
              <li><Link href="/contact" className="text-white_A700 hover:text-secondary transition-colors block py-1">Contact</Link></li>
=======
              <li><Link href="/blog" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Blog</Link></li>
              <li><Link href="/faq" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">FAQ</Link></li>
              <li><Link href="/contact" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Contact</Link></li>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            </ul>
          </div>

          {/* Company */}
          <div className="order-5 md:order-4 lg:order-4">
            <h4 className="font-semibold text-white_A700 mb-4 text-sm md:text-base lg:text-lg">Company</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base">
<<<<<<< HEAD
              <li><Link href="/about" className="text-white_A700 hover:text-secondary transition-colors block py-1">About</Link></li>
              <li><Link href="/our-team" className="text-white_A700 hover:text-secondary transition-colors block py-1">Our Team</Link></li>
              <li><Link href="/company" className="text-white_A700 hover:text-secondary transition-colors block py-1">Youth IT</Link></li>
              <li><Link href="/case-studies" className="text-white_A700 hover:text-secondary transition-colors block py-1">Case Studies</Link></li>
              <li><Link href="/terms" className="text-white_A700 hover:text-secondary transition-colors block py-1">Terms of use</Link></li>
              <li><Link href="/privacy" className="text-white_A700 hover:text-secondary transition-colors block py-1">Privacy</Link></li>
=======
              <li><Link href="/about" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">About</Link></li>
              <li><Link href="/case-studies" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Case Studies</Link></li>
              <li><Link href="/terms" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Terms of use</Link></li>
              <li><Link href="/privacy" className="text-white_A700 hover:text-teal_300 transition-colors block py-1">Privacy</Link></li>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            </ul>
          </div>

          {/* Get in touch */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 order-2 md:order-5 lg:order-5">
            <h4 className="font-semibold text-white_A700 mb-4 text-sm md:text-base lg:text-lg">Get in touch</h4>
            <p className="text-xs sm:text-sm md:text-base text-white_A700 mb-4 leading-relaxed">
              You'll find your next hospital management solution you prefer.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray_52 text-bluegray_500 pr-10 sm:pr-12 rounded text-xs sm:text-sm"
              />
              <Image
                src="/images/img_vector_1.svg"
                alt="arrow"
                width={16}
                height={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white_A700/20 pt-6 md:pt-8">
<<<<<<< HEAD
          <p className="text-xs sm:text-sm md:text-base text-center text-white_A700/90 mb-2">
            &copy; {currentYear} Vaidhya Sewa. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-center text-white_A700/70">
            Website designed and developed by{" "}
            <Link href="/company" className="text-white_A700 hover:text-secondary transition-colors font-medium">
              Youth IT
            </Link>
=======
          <p className="text-xs sm:text-sm md:text-base text-center text-gray_101">
            &copy; {new Date().getFullYear()} Vaidhya Sewa. All rights reserved.
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          </p>
        </div>
      </div>
    </footer>
  )
}