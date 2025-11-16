import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, FlaskConical, Users, Pill, Scan, UserCheck, CheckCircle2, Shield, Zap, BarChart3, Clock, Star, TrendingUp, Award } from "lucide-react";
import { Herohome } from "@/components/homehero_section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import CTA from "@/components/cta_section";

export const metadata = {
  title: "Vaidhya Sewa - Modern Hospital Management System",
  description: "Comprehensive hospital management solution for clinics and hospitals of all sizes. Streamline OPD, IPD, billing, pharmacy, and lab operations.",
  openGraph: {
    title: "Vaidhya Sewa - Hospital Management System",
    description: "Modern HMS for efficient hospital operations",
    type: "website",
  },
};

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

export default function Home() {
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-teal_400 text-teal_400 hover:bg-teal_400/10 px-8 py-6 text-lg">
              <Link href="/faq">View All FAQs</Link>
            </Button>
            <Button asChild size="lg" className="bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold shadow-md px-8 py-6 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTA />

    </div>
  );
}