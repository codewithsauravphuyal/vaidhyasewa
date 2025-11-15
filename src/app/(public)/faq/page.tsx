"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    name: "General",
    faqs: [
      {
        q: "What is Vaidhya Sewa?",
        a: "Vaidhya Sewa is a comprehensive hospital management system designed to streamline operations for hospitals and clinics of all sizes.",
      },
      {
        q: "Who can use Vaidhya Sewa?",
        a: "Any hospital, clinic, diagnostic center, or healthcare facility can use Vaidhya Sewa. We have plans for small clinics to large hospital networks.",
      },
      {
        q: "Is Vaidhya Sewa cloud-based?",
        a: "Yes, Vaidhya Sewa is cloud-based for easy accessibility. Enterprise customers can also opt for on-premise deployment.",
      },
    ],
  },
  {
    name: "Billing & Pricing",
    faqs: [
      {
        q: "What are the pricing plans?",
        a: "We offer Basic (₹5,000/month), Standard (₹15,000/month), Advanced (₹35,000/month), and Enterprise (custom pricing) plans.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes, we offer a 14-day free trial with full access to all features. No credit card required.",
      },
      {
        q: "Can I upgrade or downgrade my plan?",
        a: "Yes, you can change your plan anytime. Changes take effect at the next billing cycle.",
      },
      {
        q: "Do you offer discounts for annual billing?",
        a: "Yes, we offer 15% discount on annual plans. Contact our sales team for details.",
      },
    ],
  },
  {
    name: "Installation & Setup",
    faqs: [
      {
        q: "How long does it take to set up Vaidhya Sewa?",
        a: "Basic setup takes 1-2 days. Full implementation with data migration typically takes 1-2 weeks depending on your data volume.",
      },
      {
        q: "Do you help with data migration?",
        a: "Yes, we provide free data migration from your existing system. Our team handles the entire process.",
      },
      {
        q: "What training is provided?",
        a: "We provide comprehensive training for all staff members. This includes online training, documentation, and on-site support if needed.",
      },
      {
        q: "Do I need special hardware?",
        a: "No, Vaidhya Sewa is cloud-based and works on any device with internet connection. A modern browser is all you need.",
      },
    ],
  },
  {
    name: "Features & Functionality",
    faqs: [
      {
        q: "What modules are included?",
        a: "Core modules include OPD/IPD Management, Billing, Pharmacy, Lab Integration, Doctor Schedule, and Reception Tools.",
      },
      {
        q: "Can I customize the system?",
        a: "Yes, Vaidhya Sewa is highly customizable. We can adapt it to your specific workflows and requirements.",
      },
      {
        q: "Does it support multiple branches?",
        a: "Yes, our Advanced and Enterprise plans support multi-branch operations with centralized management.",
      },
      {
        q: "Can I integrate with other systems?",
        a: "Yes, Vaidhya Sewa offers API access and can integrate with other healthcare systems.",
      },
    ],
  },
  {
    name: "Security & Data",
    faqs: [
      {
        q: "Is my data secure?",
        a: "Yes, we use enterprise-grade security with end-to-end encryption, regular backups, and compliance with healthcare data protection standards.",
      },
      {
        q: "What is your uptime guarantee?",
        a: "We guarantee 99.9% uptime with automatic backups and disaster recovery measures.",
      },
      {
        q: "How often is data backed up?",
        a: "Data is backed up automatically every hour with multiple redundancy across different geographic locations.",
      },
      {
        q: "What happens if I want to leave?",
        a: "You can export all your data at any time. We provide complete data portability.",
      },
    ],
  },
  {
    name: "Support",
    faqs: [
      {
        q: "What support is available?",
        a: "We offer email support for all plans, priority support for Standard plan, and 24/7 phone support for Advanced and Enterprise plans.",
      },
      {
        q: "What is the average response time?",
        a: "We aim to respond to all support requests within 1 hour for critical issues and 4 hours for general inquiries.",
      },
      {
        q: "Is there a knowledge base?",
        a: "Yes, we have comprehensive documentation, video tutorials, and FAQs available in our knowledge base.",
      },
      {
        q: "How do I report a bug?",
        a: "You can report bugs through our support portal, email, or phone. We prioritize critical bugs and aim to fix them within 24 hours.",
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(faqCategories[0].name);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Vaidhya Sewa
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-6">
            {faqCategories.map((category) => (
              <div key={category.name} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.name ? null : category.name
                    )
                  }
                  className="w-full p-6 flex items-center justify-between bg-secondary/5 hover:bg-secondary/10 transition-colors"
                >
                  <h2 className="text-xl font-semibold text-dark">{category.name}</h2>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${
                      expandedCategory === category.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedCategory === category.name && (
                  <div className="divide-y">
                    {category.faqs.map((faq, idx) => {
                      const faqId = `${category.name}-${idx}`;
                      return (
                        <div key={faqId} className="p-6">
                          <button
                            onClick={() =>
                              setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
                            }
                            className="w-full flex items-start justify-between gap-4 text-left"
                          >
                            <h3 className="font-semibold text-dark flex-1">{faq.q}</h3>
                            <ChevronDown
                              className={`h-5 w-5 text-primary flex-shrink-0 mt-1 transition-transform ${
                                expandedFAQ === faqId ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {expandedFAQ === faqId && (
                            <p className="text-muted-foreground mt-4">{faq.a}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Didn't find your answer?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our support team and we'll be happy to help.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
