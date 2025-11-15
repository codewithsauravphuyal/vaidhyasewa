"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-teal_700 w-full font-poppins">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="relative flex items-center mb-4">
              <div className="bg-white_A700 h-8 w-8 md:h-9 md:w-9 rounded"></div>
              <span className="absolute left-2 font-bold text-teal_700 text-xl md:text-2xl font-inter">V</span>
              <span className="ml-2 text-xl md:text-2xl font-bold text-white_A700 font-inter">aidhya Sewa</span>
            </div>
            <p className="text-sm text-white_A701 leading-relaxed">
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
          <div>
            <h4 className="font-semibold text-white_A700 mb-4 text-base md:text-lg">Service</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link href="/features" className="text-white_A700 hover:text-teal_300 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-white_A700 hover:text-teal_300 transition-colors">Pricing</Link></li>
              <li><Link href="/demo" className="text-white_A700 hover:text-teal_300 transition-colors">Demo</Link></li>
              <li><Link href="/security" className="text-white_A700 hover:text-teal_300 transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white_A700 mb-4 text-base md:text-lg">Resources</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link href="/downloads" className="text-white_A700 hover:text-teal_300 transition-colors">Downloads</Link></li>
              <li><Link href="/blog" className="text-white_A700 hover:text-teal_300 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-white_A700 hover:text-teal_300 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-white_A700 hover:text-teal_300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white_A700 mb-4 text-base md:text-lg">Company</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><Link href="/about" className="text-white_A700 hover:text-teal_300 transition-colors">About</Link></li>
              <li><Link href="/case-studies" className="text-white_A700 hover:text-teal_300 transition-colors">Case Studies</Link></li>
              <li><Link href="/partners" className="text-white_A700 hover:text-teal_300 transition-colors">Partners</Link></li>
              <li><Link href="/terms" className="text-white_A700 hover:text-teal_300 transition-colors">Terms of use</Link></li>
              <li><Link href="/privacy" className="text-white_A700 hover:text-teal_300 transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-semibold text-white_A700 mb-4 text-base md:text-lg">Get in touch</h4>
            <p className="text-sm md:text-base text-white_A700 mb-4 leading-relaxed">
              You'll find your next hospital management solution you prefer.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray_52 text-bluegray_500 pr-12 rounded"
              />
              <Image
                src="/images/img_vector_1.svg"
                alt="arrow"
                width={16}
                height={16}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white_A700/20 pt-8">
          <p className="text-sm md:text-base text-center text-gray_101">
            &copy; {new Date().getFullYear()} Vaidhya Sewa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
