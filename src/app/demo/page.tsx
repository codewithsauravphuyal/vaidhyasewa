import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo - Vaidhya Sewa",
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

const screenshots = [
  { title: "Dashboard", category: "Dashboard" },
  { title: "Patient Management", category: "Dashboard" },
  { title: "Billing System", category: "Billing" },
  { title: "Pharmacy Inventory", category: "Pharmacy" },
  { title: "Lab Tests", category: "Lab" },
  { title: "Doctor Schedule", category: "Settings" },
  { title: "Reports", category: "Reports" },
  { title: "Settings", category: "Settings" },
];

export default function DemoPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Experience Vaidhya Sewa</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our demo video and try the interactive demo with sample data
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-8">Demo Video</h2>
            <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center border border-border">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-white text-lg">Demo video coming soon</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Video duration: ~3 minutes | Covers all major features and workflows
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12">Try Interactive Demo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {demoAccounts.map((account, idx) => (
              <div key={idx} className="p-8 bg-white rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-dark">{account.role}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{account.description}</p>
                <div className="space-y-3 mb-6 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-mono text-sm text-foreground">{account.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Password</p>
                    <p className="font-mono text-sm text-foreground">{account.password}</p>
                  </div>
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/login">Try Demo</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <Lock className="inline h-4 w-4 mr-2" />
              Demo data is reset daily. All changes are temporary and for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12">Screenshots Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {screenshots.map((screenshot, idx) => (
              <Link key={idx} href="/screenshots" className="group">
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border overflow-hidden aspect-video flex items-center justify-center hover:border-primary/50 transition-all">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                      {screenshot.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/screenshots">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to See More?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our team or start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Schedule Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
