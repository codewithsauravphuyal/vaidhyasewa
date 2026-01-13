import { Herosection } from "@/components/hero_section";
import { Metadata } from "next";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Privacy Policy - Vaidhya Sewa",
  description: "Privacy policy for Vaidhya Sewa",
};

const HeroData = {
  subtitle: "Legal",
  title: "Privacy",
  title_2: "Policy",
  description: ["We are committed to protecting your privacy.", "Learn how we handle your personal information."],
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <Herosection {...HeroData} />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-sm max-w-none space-y-8 text-gray-600 dark:text-gray-300">
            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">1. Introduction</SubTitle>
              <Paragraph>
                Vaidhya Sewa ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">2. Information We Collect</SubTitle>
              <Paragraph>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</Paragraph>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4 md:ml-0">
                <li>Personal Data: Name, email address, phone number, hospital/clinic name</li>
                <li>Usage Data: Browser type, IP address, pages visited, time spent on pages</li>
                <li>Healthcare Data: Patient information, medical records (when using our service)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">3. Use of Your Information</SubTitle>
              <Paragraph>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</Paragraph>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4 md:ml-0">
                <li>Generate invoices and send billing information</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site</li>
                <li>Email you regarding an order/account/subscription</li>
                <li>Improve the Site</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">4. Disclosure of Your Information</SubTitle>
              <Paragraph>We may share information we have collected about you in certain situations:</Paragraph>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4 md:ml-0">
                <li>By Law or to Protect Rights</li>
                <li>Third-Party Service Providers</li>
                <li>Affiliates</li>
                <li>Business Transfers</li>
              </ul>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">5. Security of Your Information</SubTitle>
              <Paragraph>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">6. Contact Us</SubTitle>
              <Paragraph>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </Paragraph>
              <Paragraph className="mt-2 font-medium">
                Email: info@vaidhyasewa.com<br />
                Address: Itahari, Sunsari, Nepal
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}