"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
<<<<<<< HEAD
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
=======
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

const HeroData = {
  subtitle: "FAQ",
  title: "Frequently Asked",
  title_2: "Questions",
  description: ["Find answers to common questions about Vaidhya Sewa"],
};

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
      {
        q: "How does Vaidhya Sewa ensure compliance with healthcare regulations?",
        a: "Vaidhya Sewa is compliant with standards like HIPAA, GDPR, and local healthcare regulations. We conduct regular audits to maintain these standards.",
      },
    ],
  },
  {
    name: "Billing & Pricing",
    faqs: [
      {
        q: "What are the pricing plans?",
        a: "We offer starter (Rs. 14,999 per years), Standard (Rs. 29,999 per year), and Premimum (custom pricing) plans.",
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
      {
        q: "Are there additional fees for extra users or storage?",
        a: "Basic and Standard plans include up to 10 users. Additional users are ₹500/month each. Storage is unlimited on all plans.",
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
      {
        q: "Can I test the system before full setup?",
        a: "Absolutely. During the free trial, you can explore the system with sample data to get familiar before committing.",
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
      {
        q: "Does it include patient portal features?",
        a: "Yes, patients can access their records, book appointments, and view bills through a secure self-service portal.",
      },
      {
        q: "Is mobile app support available?",
        a: "We offer a mobile app for doctors and staff for on-the-go access. Patient app is in development.",
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
      {
        q: "How do you handle user access controls?",
        a: "Role-based access control (RBAC) ensures users only see data relevant to their role, with audit logs for all actions.",
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
      {
        q: "Do you offer dedicated account managers?",
        a: "Yes, for Enterprise plans, you'll have a dedicated account manager for personalized assistance.",
      },
    ],
  },
  {
    name: "Integrations & API",
    faqs: [
      {
        q: "What integrations are supported?",
        a: "We integrate with popular EMR systems, payment gateways like Razorpay, and lab equipment via HL7/FHIR standards.",
      },
      {
        q: "How can I access the API?",
        a: "API documentation is available in your dashboard. All plans include read/write API access with rate limits based on your tier.",
      },
      {
        q: "Can I build custom apps with your API?",
        a: "Yes, our RESTful API allows for custom applications, reports, and automations tailored to your needs.",
      },
      {
        q: "Is there webhook support for real-time updates?",
        a: "Yes, webhooks enable real-time notifications for events like new appointments or payments.",
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(faqCategories[0].name);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero */}

      <Herosection {...HeroData} />

      {/* FAQ */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:gap-2 lg:gap-2">
            {faqCategories.map((category) => (
              <article
                key={category.name}
                className="bg-white/80 backdrop-blur-sm border border-border/50"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.name ? null : category.name
                    )
                  }
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left rounded-t-2xl"
                >
<<<<<<< HEAD
                  <SubTitle className="text-primary flex-1">
                    {category.name}
                  </SubTitle>
=======
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex-1">
                    {category.name}
                  </h2>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                  {expandedCategory === category.name ? (
                    <Minus className="h-5 w-5 md:h-6 md:w-6 text-primary transition-transform duration-200" />
                  ) : (
                    <Plus className="h-5 w-5 md:h-6 md:w-6 text-primary transition-transform duration-200" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCategory === category.name ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="divide-y divide-border/50">
                    {category.faqs.map((faq, idx) => {
                      const faqId = `${category.name}-${idx}`;
                      return (
                        <div key={faqId} className="p-4 md:p-6">
                          <button
                            onClick={() =>
                              setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
                            }
                            className="w-full flex items-start justify-between gap-3 text-left"
                          >
<<<<<<< HEAD
                            <H4 className="text-primary flex-1">
                              {faq.q}
                            </H4>
=======
                            <h3 className="font-semibold text-foreground flex-1 text-sm md:text-base leading-tight">
                              {faq.q}
                            </h3>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                            {expandedFAQ === faqId ? (
                              <Minus className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-200" />
                            ) : (
                              <Plus className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-200" />
                            )}
                          </button>
                          <div
                            className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedFAQ === faqId ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
<<<<<<< HEAD
                            <Small className="text-muted-foreground pl-1">
                              {faq.a}
                            </Small>
=======
                            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pl-1">
                              {faq.a}
                            </p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}