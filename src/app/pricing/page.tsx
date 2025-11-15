import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing - Vaidhya Sewa",
  description: "Flexible pricing plans for hospitals and clinics of all sizes",
};

const plans = [
  {
    name: "Starter",
    price: "₹5,000",
    period: "Per Month",
    color: "teal_400",
    features: [
      { text: "Up to 50 patients/day", included: true },
      { text: "OPD Management", included: true },
      { text: "Basic Billing", included: true },
      { text: "1 User Account", included: true },
      { text: "Email Support", included: true },
      { text: "Mobile App Access", included: true },
    ],
  },
  {
    name: "Standard",
    price: "₹15,000",
    period: "Per Month",
    color: "amber_700",
    highlighted: true,
    features: [
      { text: "Up to 200 patients/day", included: true },
      { text: "OPD/IPD Management", included: true },
      { text: "Advanced Billing", included: true },
      { text: "5 User Accounts", included: true },
      { text: "Pharmacy Module", included: true },
      { text: "Lab Integration", included: true },
      { text: "Priority Support", included: true },
      { text: "Mobile App Access", included: true },
      { text: "Basic Reports", included: true },
    ],
  },
  {
    name: "Premium",
    price: "₹35,000",
    period: "Per Month",
    color: "pink_A100",
    features: [
      { text: "Up to 500 patients/day", included: true },
      { text: "All Standard Features", included: true },
      { text: "Unlimited User Accounts", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Insurance Integration", included: true },
      { text: "Multi-branch Support", included: true },
      { text: "Custom Reports", included: true },
      { text: "24/7 Phone Support", included: true },
      { text: "API Access", included: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Pricing Section */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[600px]">
        {/* Background shapes */}
        <div className="absolute inset-0 bg-bluegray_50">
          <Image
            src="/images/img_shape_12.svg"
            alt="shape"
            width={1440}
            height={730}
            className="absolute bottom-0 w-full h-auto object-cover"
            unoptimized
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <div className="inline-block mb-4">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg">
                Pricing & Plans
              </p>
            </div>
            <div className="relative inline-block w-full">
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-[36px] 3xl:text-[43px] text-bluegray_900 leading-tight">
                Our pricing plans suits your every need
              </h1>
              <Image
                src="/images/img_rectangle232.svg"
                alt="underline"
                width={200}
                height={6}
                className="absolute bottom-[28%] right-[1%] w-[51%] h-auto"
                unoptimized
              />
            </div>
          </div>

      {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white_A700 rounded-lg shadow-lg ${
                  plan.highlighted ? "shadow-xl" : ""
                }`}
              >
                <div className="p-6 lg:p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <p
                      className={`font-medium text-xs md:text-sm lg:text-base mb-3 opacity-80 ${
                        plan.color === "teal_400"
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
                  </div>

                  {/* Divider */}
                  <div className="h-[0.56px] bg-blue_600 opacity-25 w-[81%] mx-auto mb-6"></div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        {feature.included ? (
                          idx === 0 ? (
                            <Image
                              src="/images/img_group554_1.svg"
                              alt="check"
                              width={16}
                              height={16}
                              className="mt-1 flex-shrink-0"
                              unoptimized
                            />
                          ) : (
                            <Image
                              src="/images/img_group554_2.svg"
                              alt="check"
                              width={16}
                              height={16}
                              className="mt-1 flex-shrink-0"
                              unoptimized
                            />
                          )
                        ) : (
                          <Image
                            src="/images/img_group555.svg"
                            alt="check"
                            width={16}
                            height={16}
                            className="mt-1 flex-shrink-0 opacity-90"
                            unoptimized
                          />
                        )}
                        <span
                          className={`text-sm md:text-base text-bluegray_900 ${
                            !feature.included ? "opacity-90" : ""
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-8">
                    {plan.highlighted ? (
                      <Button
                        asChild
                        className="w-full bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold py-4 rounded-lg shadow-md"
                      >
                        <Link href="/contact">Buy Now</Link>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-teal_400 text-teal_400 hover:bg-teal_400/10 font-semibold py-4 rounded-lg"
                      >
                        <Link href="/contact">Buy Now</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
