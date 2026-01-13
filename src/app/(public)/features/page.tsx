import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, FlaskConical, Users, Pill, Scan, UserCheck, CheckCircle2, CreditCard, FileText } from "lucide-react";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Features - Vaidhya Sewa",
  description: "Explore all features of Vaidhya Sewa hospital management system",
};

const HeroData = {
  subtitle: "Awesome Features",
  title: "Our Features at",
  title_2: "Vaidhya Sewa",
  description: ["Everything you need to manage your hospital operations efficiently"],
};

const features = [
  {
    icon: Calendar,
    title: "Appointment Management",
    description: "Efficient appointment scheduling and management system for seamless patient bookings.",
    details: [
      "Online appointment booking",
      "Doctor availability management",
      "Appointment reminders",
      "Reschedule and cancellation",
    ],
    color: "teal_700",
  },
  {
    icon: User,
    title: "Doctor Management",
    description: "Comprehensive doctor profiles, schedules, and specialization management.",
    details: [
      "Doctor profiles and credentials",
      "Schedule management",
      "Specialization tracking",
      "Performance analytics",
    ],
    color: "teal_400",
  },
  {
    icon: FlaskConical,
    title: "Lab Management",
    description: "Complete laboratory test management and result tracking system.",
    details: [
      "Test order management",
      "Result entry and tracking",
      "Report generation",
      "Quality control",
    ],
    color: "teal_700",
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient records, history, and medical information management.",
    details: [
      "Patient registration",
      "Medical history tracking",
      "Visit records",
      "Insurance information",
    ],
    color: "teal_400",
  },
  {
    icon: Pill,
    title: "Pharmacy Module",
    description: "Full pharmacy inventory, prescription, and stock management system.",
    details: [
      "Medicine inventory",
      "Prescription management",
      "Stock alerts",
      "Expiry tracking",
    ],
    color: "teal_700",
  },
  {
    icon: Scan,
    title: "Radiology",
    description: "Radiology imaging, reports, and diagnostic management system.",
    details: [
      "Image management",
      "Report generation",
      "DICOM support",
      "Radiologist workflow",
    ],
    color: "teal_400",
  },
  {
    icon: UserCheck,
    title: "Reception",
    description: "Front desk operations, patient registration, and queue management.",
    details: [
      "Patient check-in",
      "Queue management",
      "Visitor management",
      "Quick registration",
    ],
    color: "teal_700",
  },
  {
    icon: CheckCircle2,
    title: "OPD/IPD Management",
    description: "Outpatient and inpatient department management with admission tracking.",
    details: [
      "OPD registration",
      "IPD admission",
      "Bed management",
      "Discharge process",
    ],
    color: "teal_400",
  },
  {
    icon: CreditCard,
    title: "Billing System",
    description: "Comprehensive billing and payment management with multiple payment options.",
    details: [
      "Invoice generation",
      "Payment processing",
      "Insurance claims",
      "Financial reports",
    ],
    color: "teal_700",
  },
  {
    icon: FileText,
    title: "Reports & Analytics",
    description: "Comprehensive reporting and analytics for data-driven decision making.",
    details: [
      "Custom reports",
      "Real-time analytics",
      "Financial reports",
      "Performance metrics",
    ],
    color: "teal_400",
  },
];

const benefits = [
  { title: "Increased Efficiency", description: "Reduce administrative workload by up to 80% with automated processes" },
  { title: "Better Patient Care", description: "Improved patient experience and satisfaction with streamlined workflows" },
  { title: "Data Security", description: "Enterprise-grade security and compliance with HIPAA standards" },
  { title: "Scalability", description: "Grow from single clinic to multi-branch hospital seamlessly" },
  { title: "Real-time Analytics", description: "Comprehensive reports and insights for data-driven decisions" },
  { title: "Easy Integration", description: "Seamless integration with existing systems and third-party services" },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-white/95 backdrop-blur-sm font-poppins text-bluegray-900">
      {/* Hero */}
      <Herosection {...HeroData} />

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-24 bg-bluegray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              const iconColor = feature.color === "teal_700" ? "#006d77" : "#25a6b2";
              return (
                <article
                  key={idx}
                  className="group bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  <Header className="mb-4 text-primary">{feature.title}</Header>
                  <Paragraph className="mb-6 text-bluegray-500">
                    {feature.description}
                  </Paragraph>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                          <span className="text-xs font-medium text-primary-foreground">✓</span>
                        </div>
                        <Small className="text-bluegray-700">{detail}</Small>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 sm:py-16 lg:py-24 bg-bluegray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <SubTitle className="mb-4 text-primary">Key Benefits</SubTitle>
            <ParagraphLarge className="text-bluegray-500">
              Discover how Vaidhya Sewa transforms hospital operations
            </ParagraphLarge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-primary-foreground">✓</span>
                </div>
                <div>
                  <Header className="mb-2 text-primary">{benefit.title}</Header>
                  <Paragraph className="text-bluegray-500">{benefit.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}