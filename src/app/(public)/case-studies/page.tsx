import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
<<<<<<< HEAD
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
=======
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

export const metadata: Metadata = {
  title: "Case Studies - Vaidhya Sewa",
  description: "Real hospital use cases and success stories with Vaidhya Sewa",
};

const HeroData = {
  subtitle: "Case Studies",
  title: "Success Stories",
  title_2: "Vaidhya Sewa",
  description: ["See how hospitals and clinics across the region are using", " Our Vaidhya Sewa to improve operations"],
};

const caseStudies = [
  {
    hospital: "Makalu Everest Hospital",
    location: "Biratnagar",
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
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full">
      {/* Hero */}

      <Herosection {...HeroData} />

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
<<<<<<< HEAD
                      <SubTitle className="text-primary mb-2">{study.hospital}</SubTitle>
                      <Paragraph className="text-muted-foreground">{study.location}</Paragraph>
=======
                      <h3 className="text-2xl font-bold text-dark mb-2">{study.hospital}</h3>
                      <p className="text-muted-foreground">{study.location}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                      <span className="inline-block mt-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {study.type}
                      </span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
<<<<<<< HEAD
                        <H4 className="text-primary mb-2">Challenge</H4>
                        <Paragraph className="text-muted-foreground">{study.problem}</Paragraph>
                      </div>
                      <div>
                        <H4 className="text-primary mb-2">Solution</H4>
                        <Paragraph className="text-muted-foreground">{study.solution}</Paragraph>
=======
                        <h4 className="font-semibold text-dark mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
<<<<<<< HEAD
                      <Paragraph className="text-foreground italic mb-3">"{study.testimonial}"</Paragraph>
                      <Small className="font-semibold text-primary">{study.author}</Small>
                      <Small className="text-muted-foreground">{study.position}</Small>
=======
                      <p className="text-foreground italic mb-3">"{study.testimonial}"</p>
                      <p className="font-semibold text-dark text-sm">{study.author}</p>
                      <p className="text-muted-foreground text-sm">{study.position}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                    </div>
                  </div>

                  {/* Right Side - Results */}
                  <div>
<<<<<<< HEAD
                    <Header className="text-primary mb-6">Results</Header>
=======
                    <h4 className="text-xl font-bold text-dark mb-6">Results</h4>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                    <div className="space-y-6">
                      {study.results.map((result, ridx) => (
                        <div key={ridx} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
<<<<<<< HEAD
                            <TitleSmall className="text-primary">{result.metric}</TitleSmall>
                            <Paragraph className="text-muted-foreground">{result.description}</Paragraph>
=======
                            <p className="text-3xl font-bold text-dark">{result.metric}</p>
                            <p className="text-muted-foreground">{result.description}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
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
<<<<<<< HEAD
              <TitleSmall className="text-primary mb-2">500+</TitleSmall>
              <Paragraph className="text-muted-foreground">Hospitals & Clinics</Paragraph>
            </div>
            <div>
              <TitleSmall className="text-primary mb-2">50K+</TitleSmall>
              <Paragraph className="text-muted-foreground">Daily Active Users</Paragraph>
            </div>
            <div>
              <TitleSmall className="text-primary mb-2">99.9%</TitleSmall>
              <Paragraph className="text-muted-foreground">System Uptime</Paragraph>
=======
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
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
