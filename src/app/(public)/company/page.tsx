import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Code, Globe, Award, Users, Zap, Shield, Heart, TrendingUp, Building2, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Youth IT - Vaidhya Sewa",
  description: "Youth IT - The innovative technology company behind Vaidhya Sewa. Building cutting-edge healthcare solutions.",
};

const HeroData = {
  subtitle: "About Youth IT",
  title: "Built by",
  title_2: "Youth IT",
  description: ["Innovative technology solutions for modern healthcare", "Transforming healthcare through cutting-edge technology"],
};

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions designed to meet your specific business needs and requirements.",
  },
  {
    icon: Globe,
    title: "Web & Mobile Applications",
    description: "Modern, responsive applications that work seamlessly across all devices and platforms.",
  },
  {
    icon: Shield,
    title: "Enterprise Solutions",
    description: "Scalable, secure systems built for organizations of all sizes with robust security measures.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Helping businesses modernize their operations with innovative technology solutions.",
  },
];

const achievements = [
  {
    number: "500+",
    label: "Projects Delivered",
    icon: Award,
  },
  {
    number: "100+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "10+",
    label: "Years Experience",
    icon: TrendingUp,
  },
  {
    number: "24/7",
    label: "Support Available",
    icon: Heart,
  },
];

const whyChoose = [
  {
    title: "Expert Team",
    description: "Our team consists of experienced developers, designers, and consultants with deep industry knowledge.",
  },
  {
    title: "Innovation First",
    description: "We stay ahead of technology trends and implement the latest best practices in all our projects.",
  },
  {
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with clients to ensure solutions exceed expectations.",
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes ensure reliable, bug-free software delivery.",
  },
];

export default function CompanyPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero */}
      <Herosection {...HeroData} />

      {/* About Youth IT */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
                About Youth IT
              </Muted>
              <SubTitle className="text-primary mb-6">
                Leading Technology Solutions Provider
              </SubTitle>
              <ParagraphLarge className="text-bluegray_500 mb-6">
                Youth IT is a forward-thinking technology company specializing in developing innovative software solutions for healthcare and other industries. With a passion for excellence and a commitment to quality, we've been at the forefront of digital transformation.
              </ParagraphLarge>
              <Paragraph className="text-bluegray_500 mb-6">
                Our team of skilled developers, designers, and consultants work collaboratively to deliver cutting-edge solutions that drive business growth and operational efficiency. We combine technical expertise with industry insights to create products that truly make a difference.
              </Paragraph>
              <Paragraph className="text-bluegray_500">
                Vaidhya Sewa is one of our flagship products, representing our dedication to transforming healthcare management through technology. We're proud to have built a comprehensive hospital management system that serves hundreds of healthcare facilities across the region.
              </Paragraph>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <H4 className="text-primary mb-2">Our Mission</H4>
                      <Paragraph className="text-bluegray_500">
                        To empower businesses with innovative technology solutions that drive growth, efficiency, and success.
                      </Paragraph>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                      <H4 className="text-primary mb-2">Our Vision</H4>
                      <Paragraph className="text-bluegray_500">
                        To be the leading technology partner for businesses seeking digital transformation and innovation.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
              Our Achievements
            </Muted>
            <SubTitle className="text-primary mb-6">
              Numbers That Speak
            </SubTitle>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={idx}
                  className="bg-white_A700 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <TitleSmall className="text-primary mb-2">{achievement.number}</TitleSmall>
                  <Paragraph className="text-bluegray_500">{achievement.label}</Paragraph>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
              Our Services
            </Muted>
            <SubTitle className="text-primary mb-6">
              What We Offer
            </SubTitle>
            <ParagraphLarge className="text-bluegray_500 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs.
            </ParagraphLarge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white_A700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <Header className="text-primary mb-3">{service.title}</Header>
                  <Paragraph className="text-bluegray_500">{service.description}</Paragraph>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Youth IT */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
              Why Choose Us
            </Muted>
            <SubTitle className="text-primary mb-6">
              What Sets Us Apart
            </SubTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white_A700 rounded-lg p-6 hover:bg-primary/5 transition-colors border-l-4 border-secondary"
              >
                <H4 className="text-primary mb-3">{item.title}</H4>
                <Paragraph className="text-bluegray_500">{item.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Youth IT */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <Header className="text-primary mb-4">Get in Touch with Youth IT</Header>
            <ParagraphLarge className="text-bluegray_500 mb-8">
              Interested in our services? Have a project in mind? We'd love to hear from you and discuss how we can help bring your vision to life.
            </ParagraphLarge>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <H4 className="text-primary mb-2">Email</H4>
                <a href="mailto:hamroyouthit@gmail.com" className="text-bluegray_500 hover:text-primary transition-colors">
                  hamroyouthit@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <H4 className="text-primary mb-2">Phone</H4>
                <a href="tel:+9779746888890" className="text-bluegray_500 hover:text-primary transition-colors">
                  +977 9746888890
                </a>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <H4 className="text-primary mb-2">Location</H4>
                <Paragraph className="text-bluegray_500 text-sm">
                  Itahari-06, Sunsari, Nepal
                </Paragraph>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                <a href="mailto:hamroyouthit@gmail.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Credit */}
      <section className="py-12 bg-primary/5 border-t border-primary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <Muted className="text-primary font-semibold">
                Website Built by Youth IT
              </Muted>
            </div>
            <Paragraph className="text-bluegray_500 mb-4">
              This website was designed and developed by <Inline className="text-primary font-semibold">Youth IT</Inline>, a leading technology solutions provider. 
              We specialize in creating modern, responsive, and high-performance web applications.
            </Paragraph>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hamroyouthit@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <Small>Contact Youth IT</Small>
              </a>
              <span className="text-bluegray_300">•</span>
              <a
                href="/company"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Building2 className="h-4 w-4" />
                <Small>Learn More About Youth IT</Small>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
