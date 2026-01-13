import { Herosection } from "@/components/hero_section";
import { Metadata } from "next";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Terms of Service - Vaidhya Sewa",
  description: "Terms of service for Vaidhya Sewa",
};

const HeroData = {
  subtitle: "Legal",
  title: "Terms of",
  title_2: "Service",
  description: ["Our terms and conditions outline the rules", "for accessing and using Vaidhya Sewa services."],
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <Herosection {...HeroData} />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-sm max-w-none space-y-8 text-gray-600 dark:text-gray-300">
            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">1. Agreement to Terms</SubTitle>
              <Paragraph>
                By accessing and using this website and Vaidhya Sewa services, you accept and agree to be bound by and comply with these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">2. Use License</SubTitle>
              <Paragraph>
                Permission is granted to temporarily download one copy of the materials (information or software) on Vaidhya Sewa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </Paragraph>
              <ul className="list-disc list-inside space-y-2 mt-2 ml-4 md:ml-0">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">3. Disclaimer</SubTitle>
              <Paragraph>
                The materials on Vaidhya Sewa's website are provided on an 'as is' basis. Vaidhya Sewa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">4. Limitations</SubTitle>
              <Paragraph>
                In no event shall Vaidhya Sewa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vaidhya Sewa's website.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">5. Accuracy of Materials</SubTitle>
              <Paragraph>
                The materials appearing on Vaidhya Sewa's website could include technical, typographical, or photographic errors. Vaidhya Sewa does not warrant that any of the materials on its website are accurate, complete, or current.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">6. Links</SubTitle>
              <Paragraph>
                Vaidhya Sewa has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vaidhya Sewa of the site. Use of any such linked website is at the user's own risk.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">7. Modifications</SubTitle>
              <Paragraph>
                Vaidhya Sewa may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">8. Governing Law</SubTitle>
              <Paragraph>
                These terms and conditions are governed by and construed in accordance with the laws of Nepal, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </Paragraph>
            </div>

            <div className="space-y-4">
              <SubTitle className="text-primary mb-4">9. Contact Information</SubTitle>
              <Paragraph>
                If you have any questions about these Terms of Service, please contact us at:
              </Paragraph>
              <Paragraph className="mt-2 font-medium">
                Email: legal@vaidhyasewa.com<br />
                Address: Kathmandu, Nepal
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}