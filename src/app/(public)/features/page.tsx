import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, User, FlaskConical, Users, Pill, Scan, UserCheck, CheckCircle2, CreditCard, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Vaidhya Sewa",
  description: "Explore all features of Vaidhya Sewa hospital management system",
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

export default function FeaturesPage() {
  return (
    <div className="w-full bg-white_A700/95 backdrop-blur-sm font-poppins">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Awesome Features
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              Valuable features of Vaidhya Sewa
            </h1>
            <p className="text-base md:text-lg text-bluegray_500">
              Everything you need to manage your hospital operations efficiently
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              const iconColor = feature.color === "teal_700" ? "#006d77" : "#25a6b2";
              return (
                <div key={idx} className="bg-white_A700 rounded-lg shadow-bs2 p-6 md:p-8 hover:shadow-lg transition-all border border-gray_100 group">
                  <div className="w-14 h-14 rounded-lg bg-teal_50 flex items-center justify-center mb-6 group-hover:bg-teal_100 transition-colors">
                    <IconComponent 
                      className="h-7 w-7" 
                      style={{ color: iconColor }} 
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-bluegray_900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-bluegray_500 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-teal_700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white_A700 text-xs">✓</span>
                        </div>
                        <span className="text-sm text-bluegray_700">{detail}</span>
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
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-4">
              Key Benefits
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Discover how Vaidhya Sewa transforms hospital operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Increased Efficiency", description: "Reduce administrative workload by up to 80% with automated processes" },
              { title: "Better Patient Care", description: "Improved patient experience and satisfaction with streamlined workflows" },
              { title: "Data Security", description: "Enterprise-grade security and compliance with HIPAA standards" },
              { title: "Scalability", description: "Grow from single clinic to multi-branch hospital seamlessly" },
              { title: "Real-time Analytics", description: "Comprehensive reports and insights for data-driven decisions" },
              { title: "Easy Integration", description: "Seamless integration with existing systems and third-party services" },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white_A700 rounded-lg shadow-bs2">
                <div className="w-8 h-8 rounded-full bg-teal_700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white_A700 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-bluegray_900 mb-2">{benefit.title}</h3>
                  <p className="text-bluegray_500 text-sm md:text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-bluegray_900 mb-6">Ready to Get Started?</h2>
          <p className="text-base md:text-lg text-bluegray_500 mb-8 max-w-2xl mx-auto">
            Experience the power of Vaidhya Sewa with a free demo or contact our team for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md">
              <Link href="/demo">View Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
