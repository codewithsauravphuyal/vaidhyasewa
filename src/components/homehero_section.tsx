import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle, Sparkles, Shield, Zap } from "lucide-react";
import { Paragraph } from "./ui/typography";

export function Herohome() {
  return (
    <section className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] pt-6 md:pt-16 lg:pt-32 mt-20 md:mt-20">
      {/* Video/GIF Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Primary Overlay */}
      <div className="absolute inset-0 bg-primary/50 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center mt-10">
        {/* Featured Tag - Now centered and responsive */}
        <div className="flex justify-center mb-6">
          <div className="border border-primary p-1 w-fit rounded-full flex items-center justify-between bg-white/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 px-3 sm:px-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="font-inter text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap">
                Introducing Intelligent HMS
              </span>
            </div>
            <Link
              href="#features"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center bg-primary transition-all duration-300 hover:bg-primary/90"
            >
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Main Headline - Responsive typography */}
        <div className="text-center max-w-5xl mx-auto mb-6 md:mb-8 lg:mb-12">
          <h1 className="font-manrope font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 md:mb-6 leading-tight tracking-tight">
            Transform Healthcare with{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">
                Intelligent HMS
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-white/20 -z-10 rounded-full"></div>
            </span>
          </h1>
          <Paragraph className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            A comprehensive Hospital Management System ERP that streamlines operations,
            enhances patient care, and boosts efficiency across your entire healthcare facility.
          </Paragraph>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row flex-wrap gap-4 justify-center mb-12 lg:mb-16">
          <Button
            asChild
            size="lg"
            className="flex-1 sm:flex-none bg-primary text-white font-semibold px-4 sm:px-8 py-6 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group max-w-xs"
          >
            <Link href="/demo" className="flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="flex-1 sm:flex-none border-2 border-white/50 hover:border-white text-primary px-4 sm:px-8 py-6 text-base sm:text-lg font-semibold transition-all duration-300 max-w-xs"
          >
            <Link href="/demo" className="flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}