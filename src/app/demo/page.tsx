import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Vaidhya Sewa",
  description: "Watch demo video and try interactive demo of Vaidhya Sewa",
};

const demoAccounts = [
  {
    role: "Admin",
    email: "admin@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Full system access and configuration",
  },
  {
    role: "Doctor",
    email: "doctor@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Patient care and prescription management",
  },
  {
    role: "Pharmacist",
    email: "pharmacist@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Pharmacy operations",
  },
  {
    role: "Lab Technician",
    email: "lab@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Lab test management",
  },
];

export default function DemoPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Our Services
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              Experience Vaidhya Sewa
            </h1>
            <p className="text-base md:text-lg text-bluegray_500">
              Watch our demo video and try the interactive demo with sample data
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-8 text-center">Demo Video</h2>
            <div className="relative w-full bg-teal_400 rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-teal_400 shadow-bs3">
              <div className="text-center">
                <Image
                  src="/images/img_icon_3.svg"
                  alt="play"
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                  unoptimized
                />
                <p className="text-white_A700 text-lg font-bold tracking-wider">WATCH VIDEO</p>
              </div>
            </div>
            <p className="text-bluegray_500 mt-4 text-sm text-center">
              Video duration: ~3 minutes | Covers all major features and workflows
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Try Interactive Demo</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Experience the system with sample data. Choose a role to explore different features.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoAccounts.map((account, idx) => (
              <div key={idx} className="bg-white_A700 rounded-lg shadow-bs2 p-6 md:p-8 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal_700/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-teal_700" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-bluegray_900">{account.role}</h3>
                </div>
                <p className="text-sm md:text-base text-bluegray_500 mb-6">{account.description}</p>
                <div className="space-y-3 mb-6 p-4 bg-bluegray_50 rounded-lg">
                  <div>
                    <p className="text-xs text-bluegray_500 mb-1">Email</p>
                    <p className="font-mono text-xs md:text-sm text-bluegray_900 break-all">{account.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-bluegray_500 mb-1">Password</p>
                    <p className="font-mono text-xs md:text-sm text-bluegray_900">{account.password}</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
                  <Link href="/login">Try Demo</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue_50 border border-blue_200 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-bluegray_900 flex items-center justify-center">
              <Lock className="inline h-4 w-4 mr-2" />
              Demo data is reset daily. All changes are temporary and for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Preview */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Screenshots Gallery</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Explore our system through detailed screenshots
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Dashboard",
              "Patient Management",
              "Billing System",
              "Pharmacy",
              "Lab Tests",
              "Reports",
              "Settings",
              "Schedule",
            ].map((title, idx) => (
              <Link key={idx} href="/screenshots" className="group">
                <div className="relative bg-bluegray_50 rounded-lg border border-border overflow-hidden aspect-video flex items-center justify-center hover:border-teal_400 transition-all">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-bluegray_900 group-hover:text-teal_700 transition-colors">
                      {title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
              <Link href="/screenshots">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-6">Ready to See More?</h2>
          <p className="text-base md:text-lg text-bluegray_500 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our team or start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
