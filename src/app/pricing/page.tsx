import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Vaidhya Sewa",
  description: "Flexible pricing plans for hospitals and clinics of all sizes",
};

const plans = [
  {
    name: "Basic",
    price: "₹5,000",
    period: "/month",
    description: "Perfect for small clinics",
    features: [
      "Up to 50 patients/day",
      "OPD Management",
      "Basic Billing",
      "1 User Account",
      "Email Support",
      "Mobile App Access",
    ],
    highlighted: false,
  },
  {
    name: "Standard",
    price: "₹15,000",
    period: "/month",
    description: "For growing hospitals",
    features: [
      "Up to 200 patients/day",
      "OPD/IPD Management",
      "Advanced Billing",
      "5 User Accounts",
      "Pharmacy Module",
      "Lab Integration",
      "Priority Support",
      "Mobile App Access",
      "Basic Reports",
    ],
    highlighted: true,
  },
  {
    name: "Advanced",
    price: "₹35,000",
    period: "/month",
    description: "For established hospitals",
    features: [
      "Up to 500 patients/day",
      "All Standard Features",
      "Unlimited User Accounts",
      "Advanced Analytics",
      "Insurance Integration",
      "Multi-branch Support",
      "Custom Reports",
      "24/7 Phone Support",
      "API Access",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large hospital networks",
    features: [
      "Unlimited patients/day",
      "All Advanced Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "On-premise Deployment",
      "SLA Guarantee",
      "Training & Onboarding",
      "Priority Development",
      "Unlimited API Access",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan anytime. Changes take effect at the next billing cycle.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees. You only pay the monthly subscription. We handle all implementation.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes! We offer 15% discount on annual plans. Contact our sales team for details.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and digital wallets. Enterprise customers can arrange custom payment terms.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    question: "What about data migration?",
    answer: "We provide free data migration from your existing system. Our team handles the entire process.",
  },
];

export default function PricingPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your hospital. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg border transition-all ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-b from-primary/5 to-transparent shadow-lg scale-105"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="p-8">
                  {plan.highlighted && (
                    <div className="mb-4 inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-dark">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <Button
                    asChild
                    className="w-full mb-8"
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <ul className="space-y-4">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-dark mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
            Start your 14-day free trial today. No credit card required.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
