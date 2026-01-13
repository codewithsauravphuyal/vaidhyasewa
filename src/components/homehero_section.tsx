import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
<<<<<<< HEAD
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
=======
import { ArrowRight } from "lucide-react";

export function Herohome() {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[850px] bg-white_A700">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* WHITE OVERLAY */}
          <div className="absolute inset-0 bg-white_A700/80 md:bg-transparent z-[1]"></div>

          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/img_vector65.svg"
            alt="background"
            width={1440}
            height={850}
            className="absolute right-0 h-full w-auto object-cover z-0"
            unoptimized
          />
        </div>

        {/* Other shapes */}
        <div className="absolute backdrop-opacity-[0.3] bg-amber_700 blur-[590px] bottom-[5%] right-0 h-[272px] w-[14%] rounded-full opacity-30"></div>
        <div className="absolute bg-green_500 left-[42%] top-[21%] h-[14px] w-[14px] rounded-full"></div>
        <div className="absolute backdrop-opacity-[0.5] bg-amber_700 blur-[450px] left-0 top-0 h-[187px] w-[12%] rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-2 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 mt-7 md:mt-0">
            <p className="text-teal_700 md:text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
              We are the best
            </p>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bluegray_900 leading-tight">
                We Provide Complete{" "}
                <span className="text-teal_700">Hospital Management</span>
              </h1>
              <div className="relative w-full mt-2 hidden md:block">
                <Image
                  src="/images/img_vector.svg"
                  alt="underline"
                  width={200}
                  height={71}
                  className="h-auto w-[30%] min-w-[150px] mx-auto"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-bluegray_900 md:text-bluegray_700 text-base md:text-lg leading-relaxed">
              Manage your hospital efficiently and easily. A comprehensive hospital management system designed for clinics and hospitals of all sizes. Streamline operations, improve patient care, and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-teal_400 text-teal_400 hover:bg-teal_400/10"
              >
                <Link href="/demo" className="flex items-center">
                  <Image
                    src="/images/img_polygon1.png"
                    alt="play"
                    width={18}
                    height={18}
                    className="mr-2"
                    unoptimized
                  />
                  Watch Video
                </Link>
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="relative">
            <div className="relative p-2">
              <div className="bg-black_900 rounded-t-[22px] max-w-[250px] sm:max-w-[250px] md:max-w-[500px] mx-auto p-2 md:p-3">
                <Image
                  src="/images/vaidhyasewadashboard.png"
                  alt="Dashboard Preview"
                  width={400}
                  height={367}
                  className="w-full h-auto rounded-lg"
                  unoptimized
                />
              </div>
              <Image
                src="/images/img_bottom.png"
                alt="bottom"
                width={400}
                height={21}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[80%] md:w-[90%] h-[7px] bg-black_900 blur-[30px] md:blur-[44px] rounded-full opacity-50"></div>
          </div>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
