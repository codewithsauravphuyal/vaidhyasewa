import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Circle } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap - Vaidhya Sewa",
  description: "Upcoming features and development roadmap for Vaidhya Sewa",
};

const roadmapItems = [
  {
    quarter: "Q1 2025",
    status: "completed",
    features: [
      { name: "AI-powered appointment scheduling", status: "completed" },
      { name: "Telemedicine integration", status: "completed" },
      { name: "Advanced analytics dashboard", status: "completed" },
    ],
  },
  {
    quarter: "Q2 2025",
    status: "in-progress",
    features: [
      { name: "Mobile app for patients", status: "in-progress" },
      { name: "Insurance claim automation", status: "in-progress" },
      { name: "Multi-language support", status: "planned" },
    ],
  },
  {
    quarter: "Q3 2025",
    status: "planned",
    features: [
      { name: "Blockchain-based medical records", status: "planned" },
      { name: "IoT device integration", status: "planned" },
      { name: "Predictive analytics", status: "planned" },
    ],
  },
  {
    quarter: "Q4 2025",
    status: "planned",
    features: [
      { name: "AI diagnostic assistance", status: "planned" },
      { name: "Voice commands", status: "planned" },
      { name: "AR/VR training modules", status: "planned" },
    ],
  },
];

function StatusIcon({ status }: { status: string }) {
  if (status === "completed") {
    return <CheckCircle2 className="h-5 w-5 text-primary" />;
  } else if (status === "in-progress") {
    return <Clock className="h-5 w-5 text-yellow-500" />;
  } else {
    return <Circle className="h-5 w-5 text-muted-foreground" />;
  }
}

export default function RoadmapPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Product Roadmap</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what's coming next in Vaidhya Sewa. We're constantly improving based on your feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {roadmapItems.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                        item.status === "completed"
                          ? "bg-primary"
                          : item.status === "in-progress"
                          ? "bg-yellow-500"
                          : "bg-muted"
                      }`}
                    >
                      {item.quarter.split(" ")[0]}
                    </div>
                    {idx !== roadmapItems.length - 1 && (
                      <div className="w-1 h-full bg-border mt-2 min-h-[100px]"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-2xl font-bold text-dark">{item.quarter}</h2>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "completed"
                            ? "bg-primary/10 text-primary"
                            : item.status === "in-progress"
                            ? "bg-yellow-500/10 text-yellow-700"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {item.status === "completed"
                          ? "Completed"
                          : item.status === "in-progress"
                          ? "In Progress"
                          : "Planned"}
                      </span>
                    </div>
                    <div className="space-y-3">
                      {item.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                          <StatusIcon status={feature.status} />
                          <span className="text-foreground">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark mb-4">Have Feature Requests?</h2>
            <p className="text-muted-foreground mb-8">
              We value your input! Share your ideas and help shape the future of Vaidhya Sewa.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Submit Feature Request</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

