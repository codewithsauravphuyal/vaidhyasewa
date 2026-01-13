import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Handshake, CheckCircle2 } from "lucide-react";
<<<<<<< HEAD
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
=======
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

export const metadata: Metadata = {
  title: "Partners - Vaidhya Sewa",
  description: "Our partners and integration partners for Vaidhya Sewa",
};

const partnerCategories = [
  {
    title: "Pharmacy Partners",
    description: "Integrated pharmacies for seamless prescription fulfillment",
    partners: [
      { name: "MediCare Pharmacy", type: "Chain Pharmacy", location: "Kathmandu" },
      { name: "HealthPlus Pharmacy", type: "Chain Pharmacy", location: "Pokhara" },
      { name: "City Pharmacy", type: "Independent", location: "Lalitpur" },
    ],
  },
  {
    title: "Lab Partners",
    description: "Diagnostic centers integrated with our lab module",
    partners: [
      { name: "Advanced Diagnostics", type: "Diagnostic Center", location: "Kathmandu" },
      { name: "Pathology Labs", type: "Lab Network", location: "Multiple Cities" },
      { name: "Radiology Center", type: "Imaging Center", location: "Bhaktapur" },
    ],
  },
  {
    title: "Technology Partners",
    description: "Technology companies we work with",
    partners: [
      { name: "Cloud Infrastructure", type: "AWS Partner", location: "Global" },
      { name: "Payment Gateway", type: "Payment Provider", location: "Nepal" },
      { name: "SMS Provider", type: "Communication", location: "Nepal" },
    ],
  },
];

const benefits = [
  "Seamless integration with partner systems",
  "Real-time data synchronization",
  "Unified billing and reporting",
  "Enhanced patient experience",
  "Expanded service network",
];

export default function PartnersPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
<<<<<<< HEAD
            <Title className="text-primary mb-4">Our Partners</Title>
            <ParagraphLarge className="text-muted-foreground max-w-2xl mx-auto">
              Working together with leading healthcare providers and technology partners
            </ParagraphLarge>
=======
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Our Partners</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working together with leading healthcare providers and technology partners
            </p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {partnerCategories.map((category, idx) => (
              <div key={idx}>
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="h-8 w-8 text-primary" />
<<<<<<< HEAD
                    <SubTitle className="text-primary">{category.title}</SubTitle>
                  </div>
                  <Paragraph className="text-muted-foreground">{category.description}</Paragraph>
=======
                    <h2 className="text-3xl font-bold text-dark">{category.title}</h2>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {category.partners.map((partner, pidx) => (
                    <div
                      key={pidx}
                      className="p-6 border border-border rounded-lg hover:border-primary/50 transition-colors"
                    >
<<<<<<< HEAD
                      <Header className="text-primary mb-2">{partner.name}</Header>
                      <Small className="text-muted-foreground mb-1">{partner.type}</Small>
                      <Small className="text-muted-foreground">{partner.location}</Small>
=======
                      <h3 className="text-lg font-semibold text-dark mb-2">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{partner.type}</p>
                      <p className="text-sm text-muted-foreground">{partner.location}</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
<<<<<<< HEAD
          <SubTitle className="text-primary mb-12 text-center">Benefits of Partner Integration</SubTitle>
=======
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Benefits of Partner Integration</h2>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-border">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
            <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
<<<<<<< HEAD
            <SubTitle className="text-primary mb-4">Become a Partner</SubTitle>
            <ParagraphLarge className="text-muted-foreground mb-8">
              Are you a pharmacy, lab, or healthcare service provider? Join our partner network and expand your reach.
            </ParagraphLarge>
=======
            <h2 className="text-3xl font-bold text-dark mb-4">Become a Partner</h2>
            <p className="text-muted-foreground mb-8">
              Are you a pharmacy, lab, or healthcare service provider? Join our partner network and expand your reach.
            </p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

