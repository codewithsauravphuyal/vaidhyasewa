import { Metadata } from "next";
import Image from "next/image";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
import { Linkedin, Mail, Github, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - Vaidhya Sewa",
  description: "Meet the talented team behind Vaidhya Sewa - dedicated professionals working to transform healthcare management",
};

const HeroData = {
  subtitle: "Our Team",
  title: "Meet Our",
  title_2: "Team",
  description: ["Dedicated professionals working together to transform healthcare management"],
};

const teamMembers = [
  {
    name: "Saurav Phuyal",
    role: "Founder & CEO",
    image: "/images/img_ellipse70.png",
    bio: "Visionary leader with extensive experience in healthcare technology and business development.",
    email: "saurav@vaidhyasewa.com",
    linkedin: "https://linkedin.com/in/sauravphuyal",
    expertise: ["Healthcare Technology", "Business Strategy", "Leadership"],
  },
  {
    name: "Development Team",
    role: "Software Engineers",
    image: "/images/img_ellipse70_1.png",
    bio: "Expert developers building robust, scalable solutions for healthcare management.",
    email: "dev@vaidhyasewa.com",
    linkedin: "https://linkedin.com/company/vaidhyasewa",
    expertise: ["Full-Stack Development", "System Architecture", "Quality Assurance"],
  },
  {
    name: "Design Team",
    role: "UI/UX Designers",
    image: "/images/img_ellipse70_2.png",
    bio: "Creative minds crafting intuitive and beautiful user experiences.",
    email: "design@vaidhyasewa.com",
    linkedin: "https://linkedin.com/company/vaidhyasewa",
    expertise: ["User Experience", "Interface Design", "User Research"],
  },
  {
    name: "Support Team",
    role: "Customer Success",
    image: "/images/img_ellipse70.png",
    bio: "Committed professionals ensuring exceptional customer experience and satisfaction.",
    email: "support@vaidhyasewa.com",
    linkedin: "https://linkedin.com/company/vaidhyasewa",
    expertise: ["Customer Support", "Training", "Implementation"],
  },
];

const values = [
  {
    title: "Innovation",
    description: "We continuously push boundaries to deliver cutting-edge healthcare solutions.",
  },
  {
    title: "Excellence",
    description: "We strive for perfection in every aspect of our work and service delivery.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and collective problem-solving.",
  },
  {
    title: "Integrity",
    description: "We maintain the highest standards of honesty and ethical conduct.",
  },
];

export default function OurTeamPage() {
  return (
    <div className="w-full bg-white_A700 font-poppins">
      {/* Hero */}
      <Herosection {...HeroData} />

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
              Our Team
            </Muted>
            <Title className="text-primary mb-6">
              The People Behind Vaidhya Sewa
            </Title>
            <ParagraphLarge className="text-bluegray_500 max-w-2xl mx-auto">
              A diverse team of passionate professionals dedicated to revolutionizing healthcare management through technology.
            </ParagraphLarge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white_A700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary/10 border-4 border-primary/20 group-hover:border-primary transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <Header className="text-primary mb-2">{member.name}</Header>
                <Muted className="text-secondary mb-4">{member.role}</Muted>
                <Paragraph className="text-bluegray_500 mb-4 text-sm">
                  {member.bio}
                </Paragraph>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={`LinkedIn ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Muted className="text-primary font-medium text-sm md:text-base lg:text-lg mb-4">
              Our Values
            </Muted>
            <SubTitle className="text-primary mb-6">
              What Drives Us
            </SubTitle>
            <ParagraphLarge className="text-bluegray_500 max-w-2xl mx-auto">
              The core principles that guide our team and shape our culture.
            </ParagraphLarge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white_A700 rounded-lg p-6 hover:bg-primary/5 transition-colors border-l-4 border-primary"
              >
                <H4 className="text-primary mb-3">{value.title}</H4>
                <Paragraph className="text-bluegray_500">{value.description}</Paragraph>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 md:py-24 bg-white_A700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <Header className="text-primary mb-4">Join Our Team</Header>
            <ParagraphLarge className="text-bluegray_500 mb-8">
              We're always looking for talented individuals who share our passion for transforming healthcare through technology. If you're interested in joining our team, we'd love to hear from you.
            </ParagraphLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
              <a
                href="mailto:careers@vaidhyasewa.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold rounded-lg transition-colors"
              >
                View Openings
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
