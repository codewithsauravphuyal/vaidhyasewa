import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, Calendar, Stethoscope, DollarSign, Package, TestTube, Users, Clock, Shield, Phone, Eye, Leaf, Smartphone, TrendingUp } from "lucide-react";
import CTA from "@/components/cta_section";

export const metadata: Metadata = {
  title: "About - Vaidhya Sewa",
  description: "Discover Vaidhya Sewa's comprehensive platform for hospital management, enabling paperless operations and seamless healthcare delivery",
};

const values = [
  {
    title: "Unified Operations",
    description: "A centralized platform that integrates all hospital functions—from appointments to detailed reporting—for complete operational oversight",
  },
  {
    title: "Paperless Efficiency",
    description: "Digital workflows that eliminate paperwork, providing secure access to patient medical histories, lab results, radiology reports, and more",
  },
  {
    title: "Reliable Scalability",
    description: "Robust performance and security designed for hospitals of any size, with seamless pharmacy integration and real-time stock management",
  },
  {
    title: "Care-Centered Design",
    description: "Intuitive tools for reception, doctors, and administrators to streamline tasks and prioritize patient care",
  },
];

const features = [
  {
    icon: User,
    title: "Complete Patient Management",
    description: "Securely store and access detailed medical histories, patient lists, and care records in a centralized digital system for improved outcomes.",
  },
  {
    icon: Calendar,
    title: "Efficient Appointments & Reception",
    description: "Streamlined scheduling, automated notifications, and user-friendly reception features to minimize wait times and enhance patient flow.",
  },
  {
    icon: Stethoscope,
    title: "Physician Workflow Enhancement",
    description: "Specialized interfaces for doctors to review histories, document notes, and collaborate instantly for precise diagnostics and treatments.",
  },
  {
    icon: DollarSign,
    title: "Streamlined Billing & Finance",
    description: "Automated billing processes, insurance handling, and detailed financial reports for clear revenue oversight and fiscal management.",
  },
  {
    icon: Package,
    title: "Pharmacy & Inventory Control",
    description: "Real-time stock tracking, prescription processing, and automated replenishment to ensure availability and efficient medication handling.",
  },
  {
    icon: TestTube,
    title: "Lab & Radiology Integration",
    description: "Seamless digital handling of lab tests and imaging results, with rapid sharing and reporting to support timely clinical decisions.",
  },
];

const whyChoose = [
  {
    icon: Users,
    description: "Full-spectrum control: Reception, appointments, doctors, patients, billing, pharmacy, labs, radiology, finance, and stock in one system",
  },
  {
    icon: Leaf,
    description: "100% paperless: Digitize histories, reports, and workflows for eco-friendly, error-free operations",
  },
  {
    icon: Eye,
    description: "Real-time insights: Instant access to medical histories, lab/radiology results, and pharmacy intersections",
  },
  {
    icon: DollarSign,
    description: "Robust finance & stock: Automated reports, inventory tracking, and predictive analytics to optimize resources",
  },
  {
    icon: Smartphone,
    description: "Scalable for all: From small clinics to large hospitals, with mobile apps and seamless data migration",
  },
  {
    icon: Shield,
    description: "Unmatched security: Enterprise-grade encryption, 99.9% uptime, and compliance with global healthcare standards",
  },
  {
    icon: Phone,
    description: "Expert support: 24/7 assistance, regular updates, and dedicated onboarding for effortless adoption",
  },
  {
    icon: TrendingUp,
    description: "Proven impact: Serving 500+ hospitals with 50K+ daily users, driving efficiency and patient satisfaction",
  },
];

const WhyChooseCard = ({ item }: { item: { icon: any; description: string } }) => {
  const IconComponent = item.icon;
  return (
    <div className="bg-bluegray_50 rounded-xl shadow-bs2 p-3 md:p-4 hover:shadow-lg transition-all group border border-transparent hover:border-teal_400/20">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-teal_50 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-teal_100 transition-colors">
        <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-teal_700" />
      </div>
      <p className="text-xs md:text-sm text-bluegray_500 leading-tight">
        {item.description}
      </p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero */}
      <section
        className="relative py-15 md:py-32 overflow-hidden bg-white_A700"
        style={{
          backgroundImage: 'url(/images/vaidhya_header.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative z-10 max-w-4xl">
            <div className="text-left">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
                About Us
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
                About {" "}
                <span className="text-teal_700">Vaidhya Sewa</span>
              </h1>
              <p className="text-base md:text-lg text-bluegray_500">
                Transforming healthcare through technology and innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Our Mission</h2>
              <p className="text-base md:text-lg text-bluegray_500 mb-6 leading-relaxed">
                To provide hospitals with total operational control through a unified platform that supports paperless processes, comprehensive patient medical histories, lab and radiology reports, integrated pharmacy management, financial reporting, and stock oversight—all within one seamless system.
              </p>
              <p className="text-bluegray_500 leading-relaxed">
                By eliminating silos and automating routine tasks, we enable healthcare teams to focus on delivering exceptional care, ensuring every decision is informed by real-time, accurate data.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-bluegray_500 mb-6 leading-relaxed">
                To pioneer a paperless healthcare ecosystem across South Asia, where our scalable solution empowers institutions of all sizes with seamless integration of reception, appointments, doctor consultations, billing, and specialized modules like pharmacy and diagnostics for transformative patient outcomes.
              </p>
              <p className="text-bluegray_500 leading-relaxed">
                We aim to create a future where hospitals operate with effortless efficiency, leveraging advanced analytics and mobile accessibility to drive growth, compliance, and unparalleled service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Platform: All-in-One Hospital Management */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Our Integrated Hospital Platform</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-3xl mx-auto">
              Experience total hospital control with Vaidhya Sewa: a responsive, cloud-based solution that integrates every essential function into one secure, paperless environment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="bg-white_A700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-teal_100 hover:border-teal_300 text-center group">
                  <div className="w-16 h-16 bg-teal_700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal_800 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white_A700 opacity-90 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold text-bluegray_900 mb-3">{feature.title}</h3>
                  <p className="text-bluegray_500 leading-relaxed text-sm md:text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Our Core Values</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              The guiding principles that define our commitment to innovative, reliable healthcare solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white_A700 rounded-lg p-6 hover:bg-teal_50 transition-colors border-l-4 border-teal_700">
                <h3 className="text-lg font-semibold text-bluegray_900 mb-3">{value.title}</h3>
                <p className="text-bluegray_500 leading-relaxed text-sm md:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-28 bg-white_A700 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-bluegray_900 mb-4">Why Choose Vaidhya Sewa?</h2>
            <p className="text-base md:text-lg text-bluegray_500 max-w-2xl mx-auto">
              Trusted by leading hospitals to transform operations through our comprehensive, integrated platform.
            </p>
          </div>

          {/* Top 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            {whyChoose.slice(0, 3).map((item, idx) => (
              <WhyChooseCard key={idx} item={item} />
            ))}
          </div>

          {/* Middle row: card - image - card */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-12 items-center mb-5">
            <div className="col-span-1 lg:col-span-1">
              <WhyChooseCard item={whyChoose[3]} />
            </div>
            <div className="relative col-span-1 lg:col-span-2">
              <div className="relative p-2">
                <div className="bg-black_900 rounded-t-[22px] max-w-[300px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[500px] mx-auto rounded-b-0 p-2 md:p-3">
                  <Image
                    src="/images/vaidhyasewadashboard.png"
                    alt="Dashboard Preview"
                    width={600}
                    height={550}
                    className="w-full h-auto rounded-lg max-w-[300px] sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px] mx-auto"
                    unoptimized
                  />
                </div>
                <Image
                  src="/images/img_bottom.png"
                  alt="bottom"
                  width={600}
                  height={30}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] sm:w-[80%] md:w-[90%] h-[7px] bg-black_900 blur-[30px] md:blur-[44px] rounded-full opacity-50"></div>
            </div>
            <div className="col-span-1 lg:col-span-1">
              <WhyChooseCard item={whyChoose[4]} />
            </div>
          </div>

          {/* Bottom 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whyChoose.slice(5).map((item, idx) => (
              <WhyChooseCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}