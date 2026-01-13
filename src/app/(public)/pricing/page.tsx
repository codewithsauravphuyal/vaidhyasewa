import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CTA from "@/components/cta_section";
import { Herosection } from "@/components/hero_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Pricing - Vaidhya Sewa",
  description: "Flexible pricing plans for hospitals and clinics of all sizes",
};

const HeroData = {
  subtitle: "Pricing Plans",
  title: "Our",
  title_2: "Pricing & Plans",
  description: ["Choose the perfect plan for your hospital. All plans include 30-day free trial."],
};

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

export default function PricingPage() {
  return (
    <div className="w-full bg-white_A700">
      <Herosection {...HeroData} />

      <section className="relative py-20 md:py-28 bg-bluegray_50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
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
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg shadow-md"
                        >
                          <Link href="/signup">Get Started</Link>
                        </Button>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          className="w-full border-secondary text-secondary hover:bg-secondary/10 font-semibold py-4 rounded-lg"
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

      {/* Final CTA */}
      <CTA />
    </div>
  );
}