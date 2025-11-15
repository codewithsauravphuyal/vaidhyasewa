import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Compare - Vaidhya Sewa",
  description: "Compare Vaidhya Sewa with other hospital management systems",
};

const competitors = [
  {
    name: "Vaidhya Sewa",
    features: {
      pricing: "Starting at ₹5,000/month",
      cloud: true,
      mobile: true,
      support: "24/7",
      customization: "High",
      multiBranch: true,
      pharmacy: true,
      lab: true,
      billing: true,
      reports: "Advanced",
    },
  },
  {
    name: "Competitor A",
    features: {
      pricing: "Starting at ₹15,000/month",
      cloud: true,
      mobile: false,
      support: "Business hours",
      customization: "Limited",
      multiBranch: false,
      pharmacy: true,
      lab: false,
      billing: true,
      reports: "Basic",
    },
  },
  {
    name: "Competitor B",
    features: {
      pricing: "Starting at ₹25,000/month",
      cloud: false,
      mobile: true,
      support: "Email only",
      customization: "Medium",
      multiBranch: true,
      pharmacy: true,
      lab: true,
      billing: true,
      reports: "Standard",
    },
  },
];

const featureList = [
  { label: "Cloud-based", key: "cloud" },
  { label: "Mobile App", key: "mobile" },
  { label: "24/7 Support", key: "support" },
  { label: "High Customization", key: "customization" },
  { label: "Multi-Branch Support", key: "multiBranch" },
  { label: "Pharmacy Module", key: "pharmacy" },
  { label: "Lab Integration", key: "lab" },
  { label: "Advanced Billing", key: "billing" },
  { label: "Advanced Reports", key: "reports" },
];

export default function ComparePage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Compare Vaidhya Sewa</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how Vaidhya Sewa compares to other hospital management systems
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-semibold text-dark">Feature</th>
                  {competitors.map((comp, idx) => (
                    <th
                      key={idx}
                      className={`text-center p-4 font-semibold ${
                        idx === 0 ? "text-primary" : "text-dark"
                      }`}
                    >
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium text-dark">Pricing</td>
                  {competitors.map((comp, idx) => (
                    <td key={idx} className="p-4 text-center text-muted-foreground">
                      {comp.features.pricing}
                    </td>
                  ))}
                </tr>
                {featureList.map((feature, fidx) => (
                  <tr key={fidx} className="border-b border-border">
                    <td className="p-4 font-medium text-dark">{feature.label}</td>
                    {competitors.map((comp, idx) => {
                      const value = comp.features[feature.key as keyof typeof comp.features];
                      const isTrue = value === true || value === "24/7" || value === "High" || value === "Advanced";
                      return (
                        <td key={idx} className="p-4 text-center">
                          {isTrue ? (
                            <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                          ) : typeof value === "string" ? (
                            <span className="text-muted-foreground">{value}</span>
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Why Choose Vaidhya Sewa?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Affordable",
                description: "Starting at just ₹5,000/month, we offer the best value in the market",
              },
              {
                title: "Feature-Rich",
                description: "All essential modules included with no hidden costs",
              },
              {
                title: "Better Support",
                description: "24/7 support with faster response times than competitors",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-dark mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Ready to Make the Switch?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference with Vaidhya Sewa. Start your free trial today.
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

