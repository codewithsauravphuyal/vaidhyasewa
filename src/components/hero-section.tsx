import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] lg:min-h-[850px]">
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0">
        <div className="absolute backdrop-opacity-[0.3] bg-amber_700 blur-[590px] bottom-[5%] right-[0] h-[272px] w-[14%] rounded-full opacity-30"></div>
        <Image
          src="/images/img_vector65.svg"
          alt="background"
          width={1440}
          height={850}
          className="absolute right-0 h-full w-auto object-cover"
          unoptimized
        />
        <div className="absolute bg-green_500 left-[42%] top-[21%] h-[14px] w-[14px] rounded-full"></div>
        <div className="absolute backdrop-opacity-[0.5] bg-amber_700 blur-[450px] left-0 top-0 h-[187px] w-[12%] rounded-full opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-2 py-20 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
              We are the best
            </p>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bluegray_900 leading-tight">
                We Provide Complete{" "}
                <span className="text-teal_400">Hospital Management</span>
              </h1>
              <div className="relative w-full mt-2">
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
            <p className="text-base md:text-lg text-bluegray_700 max-w-lg leading-relaxed">
              Manage your hospital efficiently and easily. A comprehensive hospital management system designed for clinics and hospitals of all sizes. Streamline operations, improve patient care, and boost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
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
          <div className="relative">
            <div className="relative p-2">
              <div className="bg-black_900 rounded-t-[22px] max-w-[500px] mx-auto rounded-b-0 p-4">
                <Image
                  src="/images/vaidhyasewadashboard.png"
                  alt="Dashboard Preview"
                  width={400}
                  height={367}
                  className="w-full h-auto rounded-lg max-w-[500px] mx-auto"
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
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[7px] bg-black_900 blur-[44px] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
