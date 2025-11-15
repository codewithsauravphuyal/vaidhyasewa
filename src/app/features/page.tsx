import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Zap, Shield, BarChart3, Clock, DollarSign, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Vaidhya Sewa",
  description: "Explore all features of Vaidhya Sewa hospital management system",
};

const modules = [
  {
    icon: Users,
    title: "OPD/IPD Management",
    description: "Comprehensive patient management system",
    features: [
      "Patient registration and profiles",
      "Appointment scheduling",
      "Admission and discharge management",
      "Medical history tracking",
    ],
  },
  {
    icon: DollarSign,
    title: "Billing System",
    description: "Fast and accurate billing operations",
    features: [
      "Automated invoice generation",
      "Multiple payment methods",
      "Insurance claim management",
      "Financial reports and analytics",
    ],
  },
  {
    icon: Shield,
    title: "Pharmacy Module",
    description: "Inventory and prescription management",
    features: [
      "Medicine inventory tracking",
      "Prescription management",
      "Stock alerts and reordering",
      "Expiry date monitoring",
    ],
  },
  {
    icon: BarChart3,
    title: "Lab Integration",
    description: "Test management and result tracking",
    features: [
      "Test order management",
      "Result entry and tracking",
      "Report generation",
      "Quality control",
    ],
  },
  {
    icon: Clock,
    title: "Doctor Schedule",
    description: "Appointment and schedule management",
    features: [
      "Doctor availability management",
      "Appointment booking",
      "Schedule optimization",
      "Consultation tracking",
    ],
  },
  {
    icon: Zap,
    title: "Reception Tools",
    description: "Patient check-in and queue management",
    features: [
      "Patient check-in system",
      "Queue management",
      "Token generation",
      "Wait time tracking",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Powerful Features</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your hospital operations efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, idx) => {
              const Icon = module.icon;
              return (
                <div key={idx} className="p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-dark mb-2">{module.title}</h3>
                  <p className="text-muted-foreground mb-6">{module.description}</p>
                  <ul className="space-y-3">
                    {module.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Increased Efficiency", description: "Reduce administrative workload by up to 80%" },
              { title: "Better Patient Care", description: "Improved patient experience and satisfaction" },
              { title: "Data Security", description: "Enterprise-grade security and compliance" },
              { title: "Scalability", description: "Grow from single clinic to multi-branch hospital" },
              { title: "Real-time Analytics", description: "Comprehensive reports and insights" },
              { title: "Easy Integration", description: "Seamless integration with existing systems" },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the power of Vaidhya Sewa with a free demo or contact our team for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/demo">View Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
