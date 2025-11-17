import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lock, User, Calendar, ExternalLink } from "lucide-react";
import { Herosection } from "@/components/hero_section";
import DemoCard from "./components/DemoCard";
import CTA from "@/components/cta_section";

export const metadata: Metadata = {
  title: "Services - Vaidhya Sewa",
  description: "Watch demo video and try interactive demo of Vaidhya Sewa",
};

const HeroData = {
  subtitle: "Our Services",
  title: "Experience at",
  title_2: "Vaidhya Sewa",
  description: ["Watch our demo video, book a personalized demo,", "or try the interactive demo with sample data"],
};

const demoAccounts = [
  {
    role: "Super Admin",
    email: "admin",
    password: "admin",
    description: "Full system access and configuration",
    officialUrl: "https://login.makalueveresthospital.com.np/auth/login",
  },
  {
    role: "Admin",
    email: "youthit@gmail.com",
    password: "123456",
    description: "Full system access and configuration",
    officialUrl: "https://login.makalueveresthospital.com.np/auth/login",
  },
  {
    role: "Doctor",
    email: "doctor@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Patient care and prescription management",
    officialUrl: "https://login.makalueveresthospital.com.np/auth/login",
  },
  {
    role: "Pharmacist",
    email: "pharmacist@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Pharmacy operations and inventory",
    officialUrl: "https://app.vaidhyasewa.com",
  },
  {
    role: "Lab Technician",
    email: "lab@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Lab test management and results",
    officialUrl: "https://app.vaidhyasewa.com",
  },
  {
    role: "Receptionist",
    email: "reception@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Patient registration and appointments",
    officialUrl: "https://app.vaidhyasewa.com",
  },
];

const demoExpectations = [
  "Live system walkthrough",
  "Customized to your needs",
  "Q&A session with experts",
  "Implementation roadmap",
];

const screenshotItems = [
  "Dashboard",
  "Patient Management",
  "Appointments",
  "Billing System",
  "Pharmacy",
  "Lab Tests",
  "Radiology",
  "Reports",
];

export default function DemoPage() {
  return (
    <div className="min-h-screen w-full bg-white font-poppins text-bluegray-900">
      {/* Hero */}
      <Herosection {...HeroData} />

      {/* Video Demo */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-semibold sm:text-4xl">Demo Video</h2>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-teal-400 border border-teal-400 shadow-lg">
              <div className="text-center">
                <Image
                  src="/images/img_icon_3.svg"
                  alt="play"
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                  unoptimized
                />
                <p className="text-lg font-bold tracking-wider text-white">WATCH VIDEO</p>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-bluegray-500 sm:text-base">
              Video duration: ~3 minutes | Covers all major features and workflows
            </p>
          </div>
        </div>
      </section>

      {/* Book Your Demo Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-700">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Book Your Demo</h2>
              <p className="mx-auto max-w-2xl text-base text-bluegray-500 sm:text-lg">
                Schedule a personalized demo with our team. We'll show you how Vaidhya Sewa can transform your hospital operations.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 sm:p-8 md:p-12 shadow-sm">
              <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold">What to Expect</h3>
                  <ul className="space-y-3">
                    {demoExpectations.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-700">
                          <span className="text-xs text-white">✓</span>
                        </div>
                        <span className="text-bluegray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-semibold">Demo Duration</h3>
                  <p className="mb-4 text-bluegray-700">30-45 minutes</p>
                  <h3 className="mb-4 text-xl font-semibold">Available Times</h3>
                  <p className="text-bluegray-700">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-bluegray-700">Saturday: 10 AM - 2 PM</p>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-700/90 font-semibold shadow-md text-white">
                  <Link href="/contact">Schedule Your Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Demo Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Try Demo</h2>
            <p className="mx-auto max-w-2xl text-base text-bluegray-500 sm:text-lg">
              Experience the system with sample data. Use the credentials below to access the official Vaidhya Sewa application.
            </p>
          </div>
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {demoAccounts.map((account, idx) => (
              <DemoCard key={idx} account={account} />
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-blue-200 bg-blue-50 p-6">
            <p className="flex items-center justify-center text-sm text-bluegray-900">
              <Lock className="mr-2 h-4 w-4 text-teal-700" />
              Demo data is reset daily. All changes are temporary and for demonstration purposes only.
            </p>
            <p className="mt-2 text-center text-xs text-bluegray-500">
              You will be redirected to the official Vaidhya Sewa application. Use the credentials above to login.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Preview */}
      <section className="py-12 sm:py-16 lg:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Screenshots Gallery</h2>
            <p className="mx-auto max-w-2xl text-base text-bluegray-500 sm:text-lg">
              Explore our system through detailed screenshots
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {screenshotItems.map((title, idx) => (
              <Link key={idx} href="/screenshots" className="group">
                <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-white border border-gray-100 shadow-sm transition-all hover:border-teal-400 hover:shadow-md">
                  <p className="text-sm font-semibold text-bluegray-900 transition-colors group-hover:text-teal-700">
                    {title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="border-teal-400 text-teal-400 hover:bg-teal-400/10">
              <Link href="/screenshots">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}