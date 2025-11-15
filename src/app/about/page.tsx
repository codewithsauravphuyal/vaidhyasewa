import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Vaidhya Sewa",
  description: "Learn about Vaidhya Sewa's mission, vision, and team",
};

const timeline = [
  { year: "2020", event: "Vaidhya Sewa founded with a vision to digitalize healthcare" },
  { year: "2021", event: "Launched MVP with OPD and basic billing features" },
  { year: "2022", event: "Expanded to 100+ hospitals across Nepal" },
  { year: "2023", event: "Added pharmacy and lab modules" },
  { year: "2024", event: "Reached 500+ hospitals with 50K+ daily users" },
];

const values = [
  {
    title: "Patient-Centric",
    description: "Everything we build is designed to improve patient care and experience",
  },
  {
    title: "Innovation",
    description: "Continuous improvement and adoption of latest healthcare technologies",
  },
  {
    title: "Reliability",
    description: "99.9% uptime guarantee and enterprise-grade security",
  },
  {
    title: "Accessibility",
    description: "Affordable solutions for hospitals of all sizes",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">About Vaidhya Sewa</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming healthcare through technology and innovation
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To empower hospitals and clinics with affordable, reliable, and user-friendly digital solutions that improve patient care, streamline operations, and enable healthcare providers to focus on what matters most - saving lives.
              </p>
              <p className="text-muted-foreground">
                We believe that every hospital, regardless of size or location, deserves access to world-class management systems.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To be the leading hospital management system provider in South Asia, enabling thousands of healthcare institutions to deliver better patient outcomes through digital transformation.
              </p>
              <p className="text-muted-foreground">
                We envision a future where every hospital operates seamlessly with integrated, intelligent systems that prioritize patient safety and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-dark mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Our Journey</h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 mb-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {idx !== timeline.length - 1 && (
                    <div className="w-1 h-16 bg-primary/20 mt-2"></div>
                  )}
                </div>
                <div className="pt-2 pb-8">
                  <p className="text-lg font-semibold text-dark">{item.year}</p>
                  <p className="text-muted-foreground mt-2">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Why Choose Vaidhya Sewa?</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Trusted by 500+ hospitals across Nepal",
              "99.9% uptime guarantee",
              "Enterprise-grade security",
              "24/7 customer support",
              "Affordable pricing for all sizes",
              "Regular feature updates",
              "Easy data migration",
              "Mobile app included",
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Join Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the healthcare digital revolution. Let's transform healthcare together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
