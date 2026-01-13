"use client";

import { Metadata } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";
import { Herosection } from "@/components/hero_section";
import CTA from "@/components/cta_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

const HeroData = {
  subtitle: "Screenshot",
  title: "Screenshots of",
  title_2: "Vaidhya Sewa",
  description: ["Explore all features of Vaidhya Sewa through", "screenshot gallery"],
};

const categories = ["All", "Dashboard", "Billing", "Pharmacy", "Lab", "Settings", "Reports"];

const screenshots = [
  { id: 1, title: "Main Dashboard", category: "Dashboard", description: "Overview of all hospital operations" },
  { id: 2, title: "Patient List", category: "Dashboard", description: "Manage all patients" },
  { id: 3, title: "OPD Management", category: "Dashboard", description: "Out-patient department operations" },
  { id: 4, title: "IPD Management", category: "Dashboard", description: "In-patient department operations" },
  { id: 5, title: "Billing Dashboard", category: "Billing", description: "Billing overview and analytics" },
  { id: 6, title: "Invoice Generation", category: "Billing", description: "Create and manage invoices" },
  { id: 7, title: "Payment Tracking", category: "Billing", description: "Track payments and receipts" },
  { id: 8, title: "Insurance Claims", category: "Billing", description: "Manage insurance claims" },
  { id: 9, title: "Pharmacy Inventory", category: "Pharmacy", description: "Medicine stock management" },
  { id: 10, title: "Prescriptions", category: "Pharmacy", description: "Prescription management" },
  { id: 11, title: "Stock Alerts", category: "Pharmacy", description: "Low stock notifications" },
  { id: 12, title: "Expiry Tracking", category: "Pharmacy", description: "Medicine expiry management" },
  { id: 13, title: "Lab Tests", category: "Lab", description: "Test order management" },
  { id: 14, title: "Test Results", category: "Lab", description: "Result entry and tracking" },
  { id: 15, title: "Lab Reports", category: "Lab", description: "Generate lab reports" },
  { id: 16, title: "Quality Control", category: "Lab", description: "QC parameters" },
  { id: 17, title: "Doctor Schedule", category: "Settings", description: "Manage doctor availability" },
  { id: 18, title: "User Management", category: "Settings", description: "Manage system users" },
  { id: 19, title: "Hospital Settings", category: "Settings", description: "Configure hospital details" },
  { id: 20, title: "Financial Reports", category: "Reports", description: "Revenue and expense reports" },
];

export default function ScreenshotsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof screenshots[0] | null>(null);

  const filteredScreenshots =
    selectedCategory === "All"
      ? screenshots
      : screenshots.filter((s) => s.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero */}
      <Herosection {...HeroData} />
      
      {/* Gallery Introduction */}
      <section className="py-8 md:py-16 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <Title className="text-primary mb-4">
              Screenshots Gallery
            </Title>
            <ParagraphLarge className="text-muted-foreground max-w-2xl mx-auto">
              Explore all features of Vaidhya Sewa through our comprehensive screenshot gallery
            </ParagraphLarge>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-8 md:py-16 lg:py-24 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 md:mb-12 max-w-full overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}  // Added for React key prop
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md hover:shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Screenshots Grid */}
          {filteredScreenshots.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No screenshots found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredScreenshots.map((screenshot) => (
                <button
                  key={screenshot.id}
                  onClick={() => setSelectedImage(screenshot)}
                  className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`View ${screenshot.title} screenshot`}
                >
                  <div className="aspect-[4/3] sm:aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative">
                    <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute inset-0 m-auto" />
                    {/* Placeholder for actual screenshot image */}
                    {/* <Image src={`/screenshots/${screenshot.id}.jpg`} alt={screenshot.title} fill className="object-cover" /> */}
                  </div>
                  <div className="p-3 sm:p-4">
                    <H4 className="text-primary leading-tight line-clamp-2">
                      {screenshot.title}
                    </H4>
                    <Small className="text-muted-foreground mt-1">{screenshot.category}</Small>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in-0 zoom-in-95"
          onClick={() => setSelectedImage(null)}
          aria-modal="true"
          role="dialog"
          aria-label={`${selectedImage.title} screenshot preview`}
        >
          <div 
            className="relative max-w-2xl sm:max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 right-1 sm:-top-6 md:-top-8 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-teal-500 hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 mt-10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-[16/9] sm:aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative">
                {/* Placeholder for modal image */}
                {/* <Image src={`/screenshots/${selectedImage.id}.jpg`} alt={selectedImage.title} fill className="object-contain" /> */}
                <p className="text-muted-foreground text-sm sm:text-base px-4 py-2">Screenshot Preview</p>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <SubTitle className="text-primary mb-2 sm:mb-3">
                  {selectedImage.title}
                </SubTitle>
                <Paragraph className="text-muted-foreground mb-4 sm:mb-6">
                  {selectedImage.description}
                </Paragraph>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <CTA />
    </div>
  );
}