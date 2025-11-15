import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Features - Vaidhya Sewa",
  description: "Explore all features of Vaidhya Sewa hospital management system",
};

const features = [
  {
    icon: "/images/img_fluentclipboar.svg",
    title: "OPD/IPD Management",
    description: "Efficient patient registration and admission management system for comprehensive healthcare operations.",
  },
  {
    icon: "/images/img_icon.svg",
    title: "Billing System",
    description: "Fast and accurate billing operations with multiple payment options and insurance integration.",
  },
  {
    icon: "/images/img_icon_1.svg",
    title: "Pharmacy Module",
    description: "Complete inventory and prescription management system for your hospital pharmacy.",
  },
  {
    icon: "/images/img_icon_2.svg",
    title: "Lab Integration",
    description: "Comprehensive test management and result tracking system for laboratory operations.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Awesome Features
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              Valuable features of Vaidhya Sewa
            </h1>
            <p className="text-base md:text-lg text-bluegray_500">
              Everything you need to manage your hospital operations efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white_A700 rounded-lg shadow-bs2 p-6 md:p-8 hover:shadow-lg transition-all">
                <div className="flex justify-center mb-6">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    unoptimized
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-bluegray_900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-bluegray_500 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
                Comprehensive Solution
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 leading-tight">
                All-in-One Hospital Management Platform
              </h2>
              <p className="text-base md:text-lg text-bluegray_500 leading-relaxed">
                Our integrated system combines all essential hospital management functions into one seamless platform, reducing complexity and improving efficiency.
              </p>
              <div className="space-y-4">
                {[
                  "Patient Management & Records",
                  "Appointment Scheduling",
                  "Billing & Insurance Claims",
                  "Pharmacy Inventory",
                  "Laboratory Management",
                  "Doctor Scheduling",
                  "Reports & Analytics",
                  "Multi-branch Support",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <Image
                      src="/images/img_group554_2.svg"
                      alt="check"
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                      unoptimized
                    />
                    <span className="text-sm md:text-base text-bluegray_900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white_A700 rounded-lg shadow-bs4 p-8">
                <div className="aspect-video bg-bluegray_50 rounded-lg flex items-center justify-center">
                  <p className="text-bluegray_500 text-center">Feature Screenshot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-4">
              Key Benefits
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Discover how Vaidhya Sewa transforms hospital operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Increased Efficiency", description: "Reduce administrative workload by up to 80% with automated processes" },
              { title: "Better Patient Care", description: "Improved patient experience and satisfaction with streamlined workflows" },
              { title: "Data Security", description: "Enterprise-grade security and compliance with HIPAA standards" },
              { title: "Scalability", description: "Grow from single clinic to multi-branch hospital seamlessly" },
              { title: "Real-time Analytics", description: "Comprehensive reports and insights for data-driven decisions" },
              { title: "Easy Integration", description: "Seamless integration with existing systems and third-party services" },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-bluegray_50 rounded-lg">
                <Image
                  src="/images/img_group554_2.svg"
                  alt="check"
                  width={24}
                  height={24}
                  className="flex-shrink-0 mt-1"
                  unoptimized
                />
                <div>
                  <h3 className="text-lg font-semibold text-bluegray_900 mb-2">{benefit.title}</h3>
                  <p className="text-bluegray_500 text-sm md:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-bluegray_500 mb-8 max-w-2xl mx-auto">
            Experience the power of Vaidhya Sewa with a free demo or contact our team for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/demo">View Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
