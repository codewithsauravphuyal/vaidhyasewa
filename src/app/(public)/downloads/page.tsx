import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Download, FileText, Package, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Downloads - Vaidhya Sewa",
  description: "Download brochures, APKs, PDFs, and other resources",
};

const downloadResources = [
  {
    icon: FileText,
    title: "Product Brochure",
    description: "Comprehensive overview of Vaidhya Sewa features and benefits",
    format: "PDF",
    size: "2.5 MB",
    link: "#",
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step guide for implementing Vaidhya Sewa in your hospital",
    format: "PDF",
    size: "5.2 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "User Manual",
    description: "Complete user guide for all modules and features",
    format: "PDF",
    size: "8.1 MB",
    link: "#",
  },
  {
    icon: Package,
    title: "Mobile App - Android",
    description: "Vaidhya Sewa mobile application for Android devices",
    format: "APK",
    size: "45 MB",
    link: "#",
  },
  {
    icon: Package,
    title: "Mobile App - iOS",
    description: "Vaidhya Sewa mobile application for iOS devices",
    format: "IPA",
    size: "52 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "API Documentation",
    description: "Complete API reference for developers",
    format: "PDF",
    size: "3.8 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "Security Whitepaper",
    description: "Detailed security architecture and compliance information",
    format: "PDF",
    size: "2.1 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "ROI Calculator",
    description: "Calculate return on investment for your hospital",
    format: "Excel",
    size: "1.2 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "Case Studies Pack",
    description: "Collection of success stories and case studies",
    format: "PDF",
    size: "4.5 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "Screenshot Pack",
    description: "High-resolution screenshots of all modules",
    format: "ZIP",
    size: "125 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "Demo Video",
    description: "3-minute product demo video",
    format: "MP4",
    size: "250 MB",
    link: "#",
  },
  {
    icon: FileText,
    title: "Pricing Comparison",
    description: "Detailed pricing and plan comparison",
    format: "PDF",
    size: "1.8 MB",
    link: "#",
  },
];

export default function DownloadsPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Downloads</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download brochures, mobile apps, documentation, and other resources
            </p>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadResources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div
                  key={idx}
                  className="p-6 border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {resource.format}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{resource.size}</span>
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="text-primary hover:text-primary/80"
                    >
                      <a href={resource.link}>
                        <Download className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Resource Categories</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Documentation</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ Product Brochure</li>
                <li>✓ Implementation Guide</li>
                <li>✓ User Manual</li>
                <li>✓ API Documentation</li>
                <li>✓ Security Whitepaper</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Mobile Applications</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ Android APK</li>
                <li>✓ iOS IPA</li>
                <li>✓ Installation Guide</li>
                <li>✓ Troubleshooting Guide</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Marketing Materials</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ Case Studies</li>
                <li>✓ Screenshot Pack</li>
                <li>✓ Demo Video</li>
                <li>✓ Pricing Comparison</li>
              </ul>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-dark mb-4">Business Tools</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>✓ ROI Calculator</li>
                <li>✓ TCO Analysis</li>
                <li>✓ Implementation Timeline</li>
                <li>✓ Training Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Need More Information?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for custom documentation or resources tailored to your needs.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
