import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";

export const metadata = {
  title: "Vaidhya Sewa - Modern Hospital Management System",
  description: "Comprehensive hospital management solution for clinics and hospitals of all sizes. Streamline OPD, IPD, billing, pharmacy, and lab operations.",
  openGraph: {
    title: "Vaidhya Sewa - Hospital Management System",
    description: "Modern HMS for efficient hospital operations",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* hero section */}
      <HeroSection />
      {/* Features Section */}
      <section className="relative py-16 md:py-24 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Awesome Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900">
              Valuable features of Vaidhya Sewa
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "/images/img_fluentclipboar.svg",
                title: "OPD/IPD Management",
                description: "Efficient patient registration and admission management system.",
              },
              {
                icon: "/images/img_icon.svg",
                title: "Billing System",
                description: "Fast and accurate billing with multiple payment options and insurance integration.",
              },
              {
                icon: "/images/img_icon_1.svg",
                title: "Pharmacy Module",
                description: "Complete inventory and prescription management for your pharmacy.",
              },
              {
                icon: "/images/img_icon_2.svg",
                title: "Lab Integration",
                description: "Comprehensive test management and result tracking system.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white_A700 rounded-lg shadow-bs2 p-6 md:p-8">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  className="mb-6"
                  unoptimized
                />
                <h3 className="text-lg md:text-xl font-semibold text-bluegray_900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-bluegray_500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* statistics card section */}
      <section className="relative py-16 md:py-24 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/img_unsplash8yg31x.png"
                alt="Hospital Management"
                width={472}
                height={472}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
              <div className="absolute bottom-0 right-0 bg-teal_400 rounded-lg shadow-bs3 p-6 w-[44%]">
                <p className="font-bold text-white_A700 text-center text-sm mb-4 tracking-wider">WATCH VIDEO</p>
                <Image
                  src="/images/img_icon_3.svg"
                  alt="play icon"
                  width={100}
                  height={100}
                  className="mx-auto"
                  unoptimized
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
                Introducing Vaidhya Sewa
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 leading-tight">
                Find a Better Hospital Management Solution in Few Easy Steps.
              </h2>
              <p className="text-base md:text-lg text-bluegray_500 leading-relaxed">
                Comprehensive hospital management system designed for clinics and hospitals of all sizes. Streamline operations, improve patient care, and boost efficiency with our integrated solution.
              </p>
              <div className="space-y-4">
                {[
                  "Concept Design",
                  "Concept Development",
                  "Concept Implementation",
                  "Testing work",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Image
                      src={`/images/img_warningwavy${idx > 0 ? `_${idx}` : ""}.svg`}
                      alt="check"
                      width={24}
                      height={24}
                      className="flex-shrink-0"
                      unoptimized
                    />
                    <span className="text-sm md:text-base text-bluegray_900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-16 md:py-24 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Get started with Vaidhya Sewa in just a few simple steps and transform your hospital management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '01',
                title: 'Sign Up & Onboarding',
                description: 'Create your account and complete the quick onboarding process to set up your hospital profile.'
              },
              {
                number: '02',
                title: 'Customize Your Setup',
                description: 'Configure the system according to your hospital\'s specific needs and requirements.'
              },
              {
                number: '03',
                title: 'Go Live & Train Staff',
                description: 'Launch the system and train your staff with our comprehensive training materials.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white_A700 rounded-lg shadow-bs2 p-8 text-center">
                <div className="w-16 h-16 bg-teal_50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-teal_700">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-bluegray_900 mb-3">{step.title}</h3>
                <p className="text-bluegray_500 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/demo">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Team Management Section */}
      <section className="relative py-16 md:py-24 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
                Team Management
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 leading-tight">
                We help build skilled teams for you
              </h2>
              <p className="text-base md:text-lg text-bluegray_500 leading-relaxed">
                Search all the open positions on the web. Get your own personalized salary estimate.
              </p>
              <div className="space-y-4">
                {[
                  "Easily select the staff you need",
                  "Many employee can be found together",
                  "Improve business quickly with skilled people",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Image
                      src="/images/img_group554.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                      unoptimized
                    />
                    <span className="text-sm md:text-base text-bluegray_900 font-semibold opacity-80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-bluegray_50 rounded-[50px] p-8 opacity-35">
                <div className="bg-white_A700 rounded-lg shadow-bs4 p-8 text-center">
                  <div className="relative inline-block mb-4">
                    <Image
                      src="/images/img_image.png"
                      alt="user"
                      width={100}
                      height={100}
                      className="rounded-full"
                      unoptimized
                    />
                    <div className="absolute -top-2 -right-2 bg-white_A700 rounded-full shadow-bs5 w-[26px] h-[26px] flex items-center justify-center">
                      <span className="text-xs text-gray_700 font-normal">5</span>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray_901 mb-1">John Smith</p>
                  <p className="text-sm text-gray_701">Hospital Administrator</p>
                  <div className="flex items-center justify-center gap-6 mt-6">
                    <div className="text-center">
                      <Image
                        src="/images/img_098controls1.svg"
                        alt="views"
                        width={16}
                        height={16}
                        className="mx-auto mb-1"
                        unoptimized
                      />
                      <p className="text-sm font-medium text-bluegray_901">682.1k</p>
                    </div>
                    <div className="text-center">
                      <Image
                        src="/images/img_commenticon.svg"
                        alt="comments"
                        width={16}
                        height={16}
                        className="mx-auto mb-1"
                        unoptimized
                      />
                      <p className="text-sm font-medium text-bluegray_901">1,862</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Increase Business Efficiency Section */}
      <section className="relative py-16 md:py-24 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-6">
              Increase Business Efficiency
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 mb-8 leading-relaxed max-w-2xl mx-auto">
              Comprehensive hospital management system designed for clinics and hospitals of all sizes. Streamline operations, improve patient care, and boost efficiency.
            </p>
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/contact">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 md:py-24 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              What our trusted client say
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Community development is often linked with community work or community planning, and may involve stakeholders, foundations,
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Leslie Alexander",
                role: "Hospital Administrator",
                image: "/images/img_ellipse70.png",
                text: "Vaidhya Sewa has transformed our hospital operations. The system is intuitive and efficient.",
              },
              {
                name: "Guy Hawkins",
                role: "Chief Medical Officer",
                image: "/images/img_ellipse70_1.png",
                text: "Excellent hospital management solution. Our staff adapted quickly and patient satisfaction improved significantly.",
              },
              {
                name: "Kristin Watson",
                role: "Operations Manager",
                image: "/images/img_ellipse70_2.png",
                text: "The best investment we made for our hospital. Streamlined operations and better patient care.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white_A700 rounded-lg shadow-bs10 p-6 md:p-8 relative">
                <div className="absolute -top-8 left-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={61}
                    height={61}
                    className="rounded-full"
                    unoptimized
                  />
                </div>
                <div className="pt-8">
                  <p className="text-sm md:text-base text-bluegray_500 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base md:text-lg font-semibold text-bluegray_900">{testimonial.name}</p>
                      <p className="text-sm text-bluegray_500">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-bluegray_500">5.0</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-amber_700">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[35%] left-0 right-0 h-[0.95px] bg-gray_100 w-[88%] mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Image
              src="/images/img_group3431.svg"
              alt="navigation"
              width={65}
              height={65}
              className="mx-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative py-16 md:py-24 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 leading-tight">
                Schedule Your Work Whenever You Want
              </h2>
              <p className="text-base md:text-lg text-bluegray_500 leading-relaxed">
                Publish your content automatically to ensure that your content reaches the right people. Built-in features such as best time to post, geolocation, user tags, and other benefits help optimize your workflow.
              </p>
              <div className="space-y-4">
                {[
                  "Best Time to Post",
                  "Geolocation",
                  "User Tag",
                  "Others benefit",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Image
                      src={`/images/img_feathercheckc${idx > 0 ? `_${idx}` : ""}.svg`}
                      alt="check"
                      width={16}
                      height={16}
                      className="flex-shrink-0"
                      unoptimized
                    />
                    <span className="text-sm md:text-base text-bluegray_700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="p-2">
                <div className="bg-black_900 rounded-t-[22px] rounded-b-0 p-4">
                    <Image
                      src="/images/homevaidhya.png"
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
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[7px] bg-black_900 blur-[44px] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-bluegray_50 rounded-[30px] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 h-[321px] w-full opacity-65 rounded-[30px]"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-bluegray_900 mb-4">
                  Get started for free
                </h2>
                <p className="text-base md:text-lg text-bluegray_500 mb-6 leading-relaxed">
                  Transform your hospital operations into incredible efficiency with our comprehensive management system.
                </p>
                <Button asChild size="lg" className="bg-teal_400 hover:bg-teal_400/90 text-white_A700 font-semibold">
                  <Link href="/contact">Start 30 day trial</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/img_youngbusiness.png"
                  alt="Get Started"
                  width={500}
                  height={410}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
