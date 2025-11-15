"use client";

import { Metadata } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

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
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Screenshots Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore all features of Vaidhya Sewa through our comprehensive screenshot gallery
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Screenshots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredScreenshots.map((screenshot) => (
              <button
                key={screenshot.id}
                onClick={() => setSelectedImage(screenshot)}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-dark text-sm">{screenshot.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{screenshot.category}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <p className="text-muted-foreground">Screenshot Preview</p>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-dark mb-2">{selectedImage.title}</h2>
                <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
                <div className="flex gap-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
