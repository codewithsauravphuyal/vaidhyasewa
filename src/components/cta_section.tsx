import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
   <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Background Card with Left-Aligned Text Inside */}
          <div className="relative lg:absolute lg:bottom-0 lg:inset-x-0 lg:h-[400px] bg-bluegray_50/70 rounded-3xl flex items-center px-6 md:px-10 lg:pl-6 lg:pr-12 py-10 md:py-12 z-0 pointer-events-none">
            <div className="flex flex-col items-start max-w-xl w-full z-10 pointer-events-auto">
              <h1 className="font-bold text-bluegray_900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                Get started for free
              </h1>
              <p className="mt-4 md:mt-6 text-bluegray_500 text-lg md:text-xl lg:text-2xl leading-relaxed">
                Turn your business ideas into incredible reality
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 md:mt-8">
                <Button asChild className="bg-teal_400 text-white px-8 py-4 rounded-md font-semibold text-base md:text-lg">
                  <Link href="/signup">Start 30 day trial</Link>
                </Button>
                <Button asChild className="bg-teal_400 text-white px-8 py-4 rounded-md font-semibold text-base md:text-lg">
                  <Link href="/demo">View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
          {/* Right Image - Stays in place */}
          <div className="relative flex flex-col lg:flex-row items-center justify-end gap-10 pt-10 md:pt-16 lg:pt-0 z-10">
            <div className="hidden lg:block w-full lg:w-auto" />
            <Image
              src="/images/doctor.png"
              alt="youngbusiness"
              width={1000}
              height={1000}
              className="w-full max-w-md sm:max-w-lg lg:max-w-2xl object-contain"
            />
          </div>
        </div>
      </section>
  )
}

export default CTA