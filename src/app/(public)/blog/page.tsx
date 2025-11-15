"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = ["All", "Hospital Tips", "Health Tech", "Pharmacy", "Lab", "Billing"];

const blogPosts = [
  {
    id: 1,
    title: "5 Ways Digital Systems Improve Patient Care",
    excerpt: "Learn how hospital management systems enhance patient experience and outcomes.",
    category: "Health Tech",
    date: "Nov 15, 2024",
    author: "Dr. Ramesh Kumar",
    image: "blog-1",
  },
  {
    id: 2,
    title: "Streamlining Pharmacy Operations with HMS",
    excerpt: "Best practices for managing pharmacy inventory and prescriptions digitally.",
    category: "Pharmacy",
    date: "Nov 12, 2024",
    author: "Priya Sharma",
    image: "blog-2",
  },
  {
    id: 3,
    title: "Lab Test Management: From Order to Report",
    excerpt: "Complete guide to managing lab operations efficiently with digital systems.",
    category: "Lab",
    date: "Nov 10, 2024",
    author: "Dr. Neha Singh",
    image: "blog-3",
  },
  {
    id: 4,
    title: "Reducing Billing Errors in Healthcare",
    excerpt: "How automated billing systems reduce errors and improve revenue collection.",
    category: "Billing",
    date: "Nov 8, 2024",
    author: "Arun Patel",
    image: "blog-4",
  },
  {
    id: 5,
    title: "Hospital Management Best Practices",
    excerpt: "Essential tips for optimizing hospital operations and staff efficiency.",
    category: "Hospital Tips",
    date: "Nov 5, 2024",
    author: "Dr. Ramesh Kumar",
    image: "blog-5",
  },
  {
    id: 6,
    title: "The Future of Healthcare Technology",
    excerpt: "Exploring emerging trends in healthcare IT and digital transformation.",
    category: "Health Tech",
    date: "Nov 1, 2024",
    author: "Tech Team",
    image: "blog-6",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Healthcare insights, tips, and industry updates
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
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
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <p className="text-muted-foreground">Article Image</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-dark mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-xs text-muted-foreground">By {post.author}</span>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No articles found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest healthcare insights and Vaidhya Sewa updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
