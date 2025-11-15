import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Vaidhya Sewa",
  description: "Real hospital use cases and success stories with Vaidhya Sewa",
};

const caseStudies = [
  {
    hospital: "City General Hospital",
    location: "Kathmandu",
    type: "Multi-specialty Hospital",
    problem: "Manual patient records and slow billing process",
    solution: "Implemented Vaidhya Sewa with full OPD/IPD and billing integration",
    results: [
      { metric: "80%", description: "Reduction in billing time" },
      { metric: "95%", description: "Patient satisfaction increase" },
      { metric: "50%", description: "Administrative cost reduction" },
    ],
    testimonial:
      "Vaidhya Sewa has transformed our hospital operations. We now process 3x more patients daily with the same staff.",
    author: "Dr. Ramesh Kumar",
    position: "Hospital Administrator",
  },
  {
    hospital: "Sunshine Clinic",
    location: "Pokhara",
    type: "Small Clinic",
    problem: "No digital system, paper-based operations",
    solution: "Deployed Vaidhya Sewa Basic plan with mobile app",
    results: [
      { metric: "100%", description: "Digital record keeping" },
      { metric: "60%", description: "Time savings per patient" },
      { metric: "40%", description: "Revenue increase" },
    ],
    testimonial:
      "Going digital was the best decision for our clinic. Vaidhya Sewa made it simple and affordable.",
    author: "Dr. Priya Sharma",
    position: "Clinic Owner",
  },
  {
    hospital: "Metro Hospital Network",
    location: "Lalitpur",
    type: "Multi-branch Hospital",
    problem: "Managing multiple branches with different systems",
    solution: "Centralized Vaidhya Sewa with multi-branch support",
    results: [
      { metric: "3", description: "Branches unified on one platform" },
      { metric: "70%", description: "Operational efficiency gain" },
      { metric: "Real-time", description: "Cross-branch visibility" },
    ],
    testimonial:
      "The multi-branch feature allows us to manage all our hospitals from one dashboard. Incredible!",
    author: "Mr. Arun Patel",
    position: "Network Director",
  },
  {
    hospital: "Advanced Lab Services",
    location: "Bhaktapur",
    type: "Diagnostic Center",
    problem: "Lab result delays and manual reporting",
    solution: "Integrated Vaidhya Sewa lab module with digital reporting",
    results: [
      { metric: "90%", description: "Faster result delivery" },
      { metric: "99.9%", description: "Accuracy improvement" },
      { metric: "100%", description: "Digital reports" },
    ],
    testimonial:
      "Our turnaround time for lab results has improved dramatically. Patients are very satisfied.",
    author: "Dr. Neha Singh",
    position: "Lab Director",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Success Stories</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how hospitals and clinics across the region are using Vaidhya Sewa to improve operations
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Left Side */}
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-dark mb-2">{study.hospital}</h3>
                      <p className="text-muted-foreground">{study.location}</p>
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {study.type}
                      </span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-foreground italic mb-3">"{study.testimonial}"</p>
                      <p className="font-semibold text-dark text-sm">{study.author}</p>
                      <p className="text-muted-foreground text-sm">{study.position}</p>
                    </div>
                  </div>

                  {/* Right Side - Results */}
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-6">Results</h4>
                    <div className="space-y-6">
                      {study.results.map((result, ridx) => (
                        <div key={ridx} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-dark">{result.metric}</p>
                            <p className="text-muted-foreground">{result.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Hospitals & Clinics</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground">Daily Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-muted-foreground">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey with Vaidhya Sewa and transform your hospital operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started Today</Link>
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
