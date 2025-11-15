import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Lock, User, Calendar, ExternalLink } from "lucide-react";

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
    officialUrl: "https://app.vaidhyasewa.com",
  },
  {
    role: "Doctor",
    email: "doctor@demo.vaidhyasewa.com",
    password: "Demo@123",
    description: "Patient care and prescription management",
    officialUrl: "https://app.vaidhyasewa.com",
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
              Watch our demo video, book a personalized demo, or try the interactive demo with sample data
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

      {/* Book Your Demo Section */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-teal_700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white_A700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-4">Book Your Demo</h2>
              <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
                Schedule a personalized demo with our team. We'll show you how Vaidhya Sewa can transform your hospital operations.
              </p>
            </div>
            <div className="bg-white_A700 rounded-lg shadow-bs2 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-bluegray_900 mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    {[
                      "Live system walkthrough",
                      "Customized to your needs",
                      "Q&A session with experts",
                      "Implementation roadmap",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-teal_700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white_A700 text-xs">✓</span>
                        </div>
                        <span className="text-bluegray_700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bluegray_900 mb-4">Demo Duration</h3>
                  <p className="text-bluegray_700 mb-4">30-45 minutes</p>
                  <h3 className="text-xl font-semibold text-bluegray_900 mb-4">Available Times</h3>
                  <p className="text-bluegray_700">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-bluegray_700">Saturday: 10 AM - 2 PM</p>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
                  <Link href="/contact">Schedule Your Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try Demo Section */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-teal_400 rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-white_A700" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-4">Try Demo</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Experience the system with sample data. Use the credentials below to access the official Vaidhya Sewa application.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {demoAccounts.map((account, idx) => (
              <div key={idx} className="bg-bluegray_50 rounded-lg shadow-bs2 p-6 md:p-8 hover:shadow-lg transition-all border border-transparent hover:border-teal_400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-teal_700 flex items-center justify-center">
                    <User className="h-5 w-5 text-white_A700" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-bluegray_900">{account.role}</h3>
                </div>
                <p className="text-sm md:text-base text-bluegray_500 mb-6">{account.description}</p>
                <div className="space-y-3 mb-6 p-4 bg-white_A700 rounded-lg border border-gray_100">
                  <div>
                    <p className="text-xs text-bluegray_500 mb-1 font-medium">Email</p>
                    <p className="font-mono text-xs md:text-sm text-bluegray_900 break-all bg-bluegray_50 p-2 rounded">
                      {account.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-bluegray_500 mb-1 font-medium">Password</p>
                    <p className="font-mono text-xs md:text-sm text-bluegray_900 bg-bluegray_50 p-2 rounded">
                      {account.password}
                    </p>
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md"
                >
                  <a href={account.officialUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Try Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue_50 border border-blue_200 rounded-lg max-w-4xl mx-auto">
            <p className="text-sm text-bluegray_900 flex items-center justify-center">
              <Lock className="inline h-4 w-4 mr-2 text-teal_700" />
              Demo data is reset daily. All changes are temporary and for demonstration purposes only.
            </p>
            <p className="text-xs text-bluegray_500 mt-2 text-center">
              You will be redirected to the official Vaidhya Sewa application. Use the credentials above to login.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Preview */}
      <section className="py-16 md:py-24 bg-bluegray_50">
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
              "Appointments",
              "Billing System",
              "Pharmacy",
              "Lab Tests",
              "Radiology",
              "Reports",
            ].map((title, idx) => (
              <Link key={idx} href="/screenshots" className="group">
                <div className="relative bg-white_A700 rounded-lg border border-gray_100 overflow-hidden aspect-video flex items-center justify-center hover:border-teal_400 transition-all shadow-bs2 hover:shadow-lg">
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
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-bluegray_500 mb-8 max-w-2xl mx-auto">
            Choose the option that works best for you - book a personalized demo or start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/contact">Book Your Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
