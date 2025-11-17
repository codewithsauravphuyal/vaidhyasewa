'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, FlaskConical, Users, Pill, Scan, UserCheck, CheckCircle2, Shield, Zap, BarChart3, Clock, Star, TrendingUp, Award, Plus, Minus } from "lucide-react";
import { Herohome } from "@/components/homehero_section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import CTA from "@/components/cta_section";

const features = [
  {
    icon: Calendar,
    title: "Appointment Management",
    description: "Efficient appointment scheduling and management system for seamless patient bookings.",
    color: "teal_700",
  },
  {
    icon: User,
    title: "Doctor Management",
    description: "Comprehensive doctor profiles, schedules, and specialization management.",
    color: "teal_400",
  },
  {
    icon: FlaskConical,
    title: "Lab Management",
    description: "Complete laboratory test management and result tracking system.",
    color: "teal_700",
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Complete patient records, history, and medical information management.",
    color: "teal_400",
  },
  {
    icon: Pill,
    title: "Pharmacy Module",
    description: "Full pharmacy inventory, prescription, and stock management system.",
    color: "teal_700",
  },
  {
    icon: Scan,
    title: "Radiology",
    description: "Radiology imaging, reports, and diagnostic management system.",
    color: "teal_400",
  },
  {
    icon: UserCheck,
    title: "Reception",
    description: "Front desk operations, patient registration, and queue management.",
    color: "teal_700",
  },
  {
    icon: CheckCircle2,
    title: "OPD/IPD Management",
    description: "Outpatient and inpatient department management with admission tracking.",
    color: "teal_400",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "80% Faster Operations",
    description: "Automate routine tasks and reduce manual work significantly.",
    color: "teal_700",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Enterprise-grade security with HIPAA compliance and data encryption.",
    color: "teal_400",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with comprehensive reports and insights.",
    color: "teal_700",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help you whenever you need.",
    color: "teal_400",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account and get started with Vaidhya Sewa in minutes.",
    link: "/signup",
  },
  {
    number: "02",
    title: "Choose Pricing",
    description: "Select the perfect plan that fits your hospital's needs and budget.",
    link: "/pricing",
  },
  {
    number: "03",
    title: "Fill Form & Go Live",
    description: "Complete your hospital details and start managing operations efficiently.",
    link: "/signup",
  },
];

const howItWorks = [
  {
    icon: Users,
    title: "Patient Registration",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
  },
  {
    icon: UserCheck,
    title: "Consultation & Diagnosis",
  },
  {
    icon: FlaskConical,
    title: "Lab Tests & Radiology",
  },
  {
    icon: Pill,
    title: "Pharmacy & Billing",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    hospital: "City General Hospital",
    image: "/images/img_ellipse70.png",
    text: "Vaidhya Sewa has transformed our hospital operations. The system is intuitive, efficient, and has significantly improved our patient care quality.",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Medical Officer",
    hospital: "Metro Healthcare",
    image: "/images/img_ellipse70_1.png",
    text: "Excellent hospital management solution. Our staff adapted quickly and patient satisfaction improved significantly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    hospital: "Sunrise Clinic",
    image: "/images/img_ellipse70_2.png",
    text: "The best investment we made for our hospital. Streamlined operations, better patient care, and excellent customer support.",
    rating: 5,
  },
  {
    name: "Anil Thapa",
    role: "IT Manager",
    hospital: "Everest Care Hospital",
    image: "/images/img_ellipse70.png",
    text: "Easy to use and perfectly fits our workflow. The support team is very responsive and helpful.",
    rating: 5,
  },
  {
    name: "Dr. Meera Shrestha",
    role: "Medical Director",
    hospital: "Green Valley Clinic",
    image: "/images/img_ellipse70_1.png",
    text: "We now have clear visibility into every department. Reporting and billing have become much smoother.",
    rating: 5,
  },
  {
    name: "Ramesh Karki",
    role: "Administrator",
    hospital: "Himalayan Health Center",
    image: "/images/img_ellipse70_2.png",
    text: "Implementation was quick and the team guided us throughout. Highly recommended for any clinic or hospital.",
    rating: 5,
  },
];

const whyChooseUs = [
  "Trusted by 500+ hospitals across Nepal",
  "99.9% uptime guarantee",
  "Enterprise-grade security",
  "24/7 customer support",
  "Affordable pricing for all sizes",
  "Regular feature updates",
  "Easy data migration",
  "Mobile responsive included",
];

const allFeatures = [
  "Patient Record Management",
  "Appointment Scheduling",
  "Doctor Profiles & Scheduling",
  "Admin Dashboard",
  "OPD Management",
  "IPD & Bed Management",
  "Basic Billing & Invoicing",
  "Reception & Registration",
  "Pharmacy Inventory",
  "Prescription Management",
  "Lab Test Management",
  "Radiology Imaging & Reports",
  "Basic Reports & Analytics",
  "1 User Account",
  "Email Support",
  "Mobile App Access",
  "Advanced Billing & Insurance Claims",
  "5 User Accounts",
  "User Role Management",
  "Inventory Tracking",
  "Priority Support",
  "SMS/Email Notifications",
  "Discharge Summary",
  "Electronic Health Records (EHR)",
  "Unlimited User Accounts",
  "Advanced Analytics & Custom Reports",
  "Multi-Branch Support",
  "API Access",
  "24/7 Phone Support",
  "Telemedicine Integration",
  "Multi-Organization Management",
  "Grievance & Feedback Management",
  "Advanced Customization",
  "PDF Report Downloads",
];

const plans = [
  {
    name: "Starter",
    price: "Rs. 14,999",
    period: "Per Year",
    limit: "Up to 150 patients/day",
    color: "teal_400",
    includedFeatures: [
      "Patient Record Management",
      "Appointment Scheduling",
      "Doctor Profiles & Scheduling",
      "Admin Dashboard",
      "OPD Management",
      "Basic Billing & Invoicing",
      "Reception & Registration",
      "Pharmacy Inventory",
      "Basic Reports & Analytics",
      "1 User Account",
      "Email Support",
      "Mobile App Access",
      "PDF Report Downloads",
    ],
  },
  {
    name: "Standard",
    price: "Rs. 29,999",
    period: "Per Year",
    limit: "Up to 400 patients/day",
    color: "amber_700",
    highlighted: true,
    includedFeatures: [
      "Patient Record Management",
      "Appointment Scheduling",
      "Doctor Profiles & Scheduling",
      "Admin Dashboard",
      "OPD Management",
      "IPD & Bed Management",
      "Advanced Billing & Insurance Claims",
      "Reception & Registration",
      "Pharmacy Inventory",
      "Prescription Management",
      "Lab Test Management",
      "Radiology Imaging & Reports",
      "5 User Accounts",
      "User Role Management",
      "Inventory Tracking",
      "Priority Support",
      "SMS/Email Notifications",
      "Discharge Summary",
      "Electronic Health Records (EHR)",
      "PDF Report Downloads",
    ],
  },
  {
    name: "Premium",
    price: "Rs. 39,999",
    period: "Per Year",
    limit: "Up to 1000 patients/day",
    color: "pink_A100",
    includedFeatures: [
      "Patient Record Management",
      "Appointment Scheduling",
      "Doctor Profiles & Scheduling",
      "Admin Dashboard",
      "OPD Management",
      "IPD & Bed Management",
      "Basic Billing & Invoicing",
      "Reception & Registration",
      "Pharmacy Inventory",
      "Prescription Management",
      "Lab Test Management",
      "Radiology Imaging & Reports",
      "Basic Reports & Analytics",
      "1 User Account",
      "Email Support",
      "Mobile App Access",
      "Advanced Billing & Insurance Claims",
      "5 User Accounts",
      "User Role Management",
      "Inventory Tracking",
      "Priority Support",
      "SMS/Email Notifications",
      "Discharge Summary",
      "Electronic Health Records (EHR)",
      "Unlimited User Accounts",
      "Advanced Analytics & Custom Reports",
      "Multi-Branch Support",
      "API Access",
      "24/7 Phone Support",
      "Telemedicine Integration",
      "Multi-Organization Management",
      "Grievance & Feedback Management",
      "Advanced Customization",
      "PDF Report Downloads",
    ],
  },
];

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
        a: "We offer starter (Rs. 14,999 per years), Standard (Rs. 29,999 per year), and Premimum (Rs. 39,999 per years) plans.",
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

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(faqCategories[0]?.name || null);

  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero Section */}
      <Herohome />

      {/* Features Section */}
      <section className="relative py-20 md:py-28 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 lg:order-1">
              <div className="space-y-4">
                <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
                  Awesome Features
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 leading-tight">
                  Efficient Solutions for Streamlined Business Management
                </h2>
                <p className="text-base md:text-lg text-bluegray_500 max-w-lg leading-relaxed">
                  Efficiently track, manage, and optimize your hospital operations with our comprehensive management system.
                </p>
              </div>
              <div className="relative">
                <div className="relative p-2">
                  <div className="bg-black_900 rounded-t-[22px] max-w-[250px] sm:max-w-[250px] md:max-w-[500px] mx-auto rounded-b-0 p-2 md:p-3">
                    <Image
                      src="/images/vaidhyasewadashboard.png"
                      alt="Dashboard Preview"
                      width={400}
                      height={367}
                      className="w-full h-auto rounded-lg max-w-[250px] sm:max-w-[250px] md:max-w-[500px] mx-auto"
                      unoptimized
                    />
                  </div>
                  <Image
                    src="/images/img_bottom.png"
                    alt="bottom"
                    width={400}
                    height={21}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[80%] md:w-[90%] h-[7px] bg-black_900 blur-[30px] md:blur-[44px] rounded-full opacity-50"></div>
              </div>
            </div>
            <div className="lg:order-2">
              <div className="grid md:grid-cols-2 gap-3 lg:gap-4">
                {features.map((feature, idx) => {
                  const IconComponent = feature.icon;
                  const iconColor = feature.color === "teal_700" ? "#006d77" : "#25a6b2";
                  return (
                    <div key={idx} className="bg-white_A700 rounded-xl shadow-bs2 p-3 md:p-4 hover:shadow-lg transition-all group border border-transparent hover:border-teal_400/20">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-teal_50 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-teal_100 transition-colors">
                        <IconComponent className="h-5 w-5 md:h-6 md:w-6" style={{ color: iconColor }} />
                      </div>
                      <h3 className="text-sm md:text-base font-semibold text-bluegray_900 mb-1 md:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-bluegray_500 leading-tight">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's the Function / How It Works */}
      <section className="relative py-20 md:py-28 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              WHAT'S THE FUNCTION
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              Let's see how it works
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto leading-relaxed">
              Vaidhya Sewa - The trusted hospital management solution for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {howItWorks.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className="bg-white_A700 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all border border-gray_100 text-center">
                  <div className="w-14 h-14 rounded-full bg-teal_700 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white_A700" />
                  </div>
                  <h3 className="text-xl font-semibold text-bluegray_900">{step.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-28 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              What our trusted clients say
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto leading-relaxed">
              Hear from hospitals and clinics that have transformed their operations with Vaidhya Sewa.
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 md:py-28 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Why Choose Vaidhya Sewa
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              Transform Your Hospital Operations
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-3xl mx-auto leading-relaxed">
              Experience the power of modern hospital management with features designed to improve efficiency and patient care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              const iconColor = benefit.color === "teal_700" ? "#006d77" : "#25a6b2";
              return (
                <div key={idx} className="text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-teal_50 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10" style={{ color: iconColor }} />
                  </div>
                  <h3 className="text-xl font-semibold text-bluegray_900 mb-3">{benefit.title}</h3>
                  <p className="text-bluegray_500 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-bluegray_50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-bluegray_900 mb-6">Key Advantages</h3>
              <ul className="space-y-4">
                {whyChooseUs.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal_700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white_A700 text-xs">✓</span>
                    </div>
                    <span className="text-bluegray_700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-bluegray_50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-bluegray_900 mb-6">More Benefits</h3>
              <ul className="space-y-4">
                {whyChooseUs.slice(4, 8).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal_700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white_A700 text-xs">✓</span>
                    </div>
                    <span className="text-bluegray_700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps to Get Started */}
      <section className="relative py-20 md:py-28 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              Simple Steps to Get Started
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto leading-relaxed">
              Get started with Vaidhya Sewa in just a few simple steps and transform your hospital management experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white_A700 rounded-xl shadow-bs2 p-8 text-center hover:shadow-lg transition-all border border-transparent hover:border-teal_400/20">
                <div className="w-20 h-20 bg-teal_700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white_A700">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-bluegray_900 mb-3">{step.title}</h3>
                <p className="text-bluegray_500 text-base mb-6 leading-relaxed">{step.description}</p>
                <Button asChild className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold">
                  <Link href={step.link}>
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 md:py-28 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              Pricing & Plans
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              Our pricing plans suits your every need
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your hospital. All plans include 30-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => {
              const planFeatures = allFeatures.map((feature) => ({
                text: feature,
                included: plan.includedFeatures.includes(feature),
              }));
              const included = planFeatures.filter((f) => f.included);
              const notIncluded = planFeatures.filter((f) => !f.included);

              return (
                <div
                  key={idx}
                  className={`bg-white_A700 rounded-lg shadow-lg ${plan.highlighted ? "shadow-xl" : ""
                    }`}
                >
                  <div className="p-6 lg:p-8">
                    {/* Plan Header */}
                    <div className="mb-6">
                      <p
                        className={`font-medium text-xs md:text-sm lg:text-base mb-3 opacity-80 ${plan.color === "teal_400"
                          ? "text-teal_400"
                          : plan.color === "amber_700"
                            ? "text-amber_700"
                            : "text-pink_A100"
                          }`}
                      >
                        {plan.name}
                      </p>
                      <p className="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 3xl:text-[57px] text-bluegray_900 mb-2">
                        {plan.price}
                      </p>
                      <p className="font-medium text-xs md:text-sm lg:text-base opacity-71 text-bluegray_700">
                        {plan.period}
                      </p>
                      <p className="text-sm text-bluegray_500 mt-2">{plan.limit}</p>
                    </div>

                    {/* Divider */}
                    <div className="h-[0.56px] bg-blue_600 opacity-25 w-[81%] mx-auto mb-6"></div>

                    {/* Features */}
                    <div className="mb-8">
                      {/* Included Features */}
                      <div className="space-y-3">
                        {included.map((feature, fidx) => (
                          <div key={fidx} className="flex items-start gap-2">
                            <Image
                              src={idx === 0 ? "/images/img_group554_1.svg" : "/images/img_group554_2.svg"}
                              alt="check"
                              width={16}
                              height={16}
                              className="mt-1 flex-shrink-0"
                              unoptimized
                            />
                            <span className="text-sm md:text-base text-bluegray_900">
                              {feature.text}
                            </span>
                          </div>
                        ))}

                        {/* Not Included Features */}
                        {notIncluded.length > 0 &&
                          notIncluded.map((feature, fidx) => (
                            <div key={fidx} className="flex items-start gap-2">
                              <Image
                                src="/images/img_group555.svg"
                                alt="cross"
                                width={16}
                                height={16}
                                className="mt-1 flex-shrink-0 opacity-90"
                                unoptimized
                              />
                              <span className="text-sm md:text-base text-red-500">
                                {feature.text}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8">
                      {plan.highlighted ? (
                        <Button
                          asChild
                          className="w-full bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold py-4 rounded-lg shadow-md"
                        >
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-teal_400 text-teal_400 hover:bg-teal_400/10 font-semibold py-4 rounded-lg"
                        >
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="relative py-20 md:py-28 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-bluegray_900 mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto mb-4 leading-relaxed">
              Answered all frequently asked questions
            </p>
            <p className="text-base text-bluegray_500 max-w-2xl mx-auto mb-12">
              Still confused? Feel free to contact us.
            </p>
          </div>
          {/* FAQ Accordion */}
          <div className="grid gap-4 md:gap-2 lg:gap-2 mb-8">
            {faqCategories.map((category) => (
              <article
                key={category.name}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.name ? null : category.name
                    )
                  }
                  className="w-full p-4 md:p-6 flex items-center justify-between text-left rounded-t-2xl"
                >
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-bluegray-900 flex-1">
                    {category.name}
                  </h2>
                  {expandedCategory === category.name ? (
                    <Minus className="h-5 w-5 md:h-6 md:w-6 text-teal-700 transition-transform duration-200" />
                  ) : (
                    <Plus className="h-5 w-5 md:h-6 md:w-6 text-teal-700 transition-transform duration-200" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCategory === category.name ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="divide-y divide-gray-200/50">
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
                            <h3 className="font-semibold text-bluegray-900 flex-1 text-sm md:text-base leading-tight">
                              {faq.q}
                            </h3>
                            {expandedFAQ === faqId ? (
                              <Minus className="h-4 w-4 md:h-5 md:w-5 text-teal-700 flex-shrink-0 mt-0.5 transition-transform duration-200" />
                            ) : (
                              <Plus className="h-4 w-4 md:h-5 md:w-5 text-teal-700 flex-shrink-0 mt-0.5 transition-transform duration-200" />
                            )}
                          </button>
                          <div
                            className={`mt-3 overflow-hidden transition-all duration-300 ease-in-out ${
                              expandedFAQ === faqId ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="text-bluegray-500 text-xs md:text-sm leading-relaxed pl-1">
                              {faq.a}
                            </p>
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

      {/* Final CTA Section */}
      <CTA />

    </div>
  );
}