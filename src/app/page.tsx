import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Zap, Shield, BarChart3 } from "lucide-react";

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
  const features = [
    { icon: Users, title: "OPD/IPD Management", description: "Efficient patient registration and admission" },
    { icon: Zap, title: "Billing System", description: "Fast and accurate billing with multiple payment options" },
    { icon: Shield, title: "Pharmacy Module", description: "Inventory and prescription management" },
    { icon: BarChart3, title: "Lab Integration", description: "Test management and result tracking" },
    { icon: CheckCircle2, title: "Doctor Schedule", description: "Appointment and schedule management" },
    { icon: Zap, title: "Reception Tools", description: "Patient check-in and queue management" },
  ];

  const roles = [
    { name: "Super Admin", description: "Full system control and configuration" },
    { name: "Admin", description: "Hospital operations management" },
    { name: "Doctor", description: "Patient care and prescriptions" },
    { name: "Receptionist", description: "Patient registration and scheduling" },
    { name: "Pharmacist", description: "Pharmacy operations" },
    { name: "Lab Technician", description: "Lab test management" },
  ];

  const whyChoose = [
    { title: "24/7 Support", description: "Round-the-clock customer support team" },
    { title: "Faster Billing", description: "Reduce billing time by 80%" },
    { title: "Multi-Branch", description: "Manage multiple hospital locations" },
    { title: "Paperless Workflow", description: "Complete digital documentation" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark">
                Hospital Management Made Simple
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Vaidhya Sewa is a comprehensive hospital management system designed for clinics and hospitals of all sizes. Streamline operations, improve patient care, and boost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/demo">
                    Request Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/screenshots">View Screenshots</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-8 bg-white/50 rounded-lg backdrop-blur">
                  <p className="text-sm text-muted-foreground">Dashboard Preview</p>
                  <p className="text-2xl font-bold text-primary mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your hospital efficiently
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-dark mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Multi-Role Support</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored interfaces for different hospital staff roles
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-white border border-border">
                <h3 className="text-lg font-semibold text-dark mb-2">{role.name}</h3>
                <p className="text-muted-foreground">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Vaidhya Sewa?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to Transform Your Hospital?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hospitals and clinics across the region using Vaidhya Sewa to improve patient care and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started Today</Link>
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
