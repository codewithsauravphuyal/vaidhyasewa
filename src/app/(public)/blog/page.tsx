"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Herosection } from "@/components/hero_section";

const HeroData = {
  subtitle: "Blog",
  title: "Latest Blog of",
  title_2: "Vaidhya Sewa",
  description: ["Explore all Healthcare insights, tips, and industry updates"],
};

const categories = ["All", "Coming Soon"];

const blogPosts = [
  {
    id: 1,
    title: "Coming Soon",
    excerpt: "Coming Soon",
    category: "Coming Soon",
    date: "Coming Soon",
    author: "Coming Soon",
    image: "Coming Soon",
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
    <div className="w-full min-h-screen bg-background">
      {/* Hero */}
      <Herosection {...HeroData} />
      
      {/* Search & Filter */}
      <section className="py-8 sm:py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 sm:h-12"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 max-w-full overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
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
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center relative">
                    {/* Placeholder for actual blog image */}
                    {/* <Image src={`/images/blogs/${post.image}.jpg`} alt={post.title} fill className="object-cover" /> */}
                    <p className="text-muted-foreground text-sm sm:text-base px-4 py-2">Article Image</p>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 sm:mb-6 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">By {post.author}</span>
                      <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-base sm:text-lg text-muted-foreground">No articles found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Get the latest healthcare insights and Vaidhya Sewa updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <Input placeholder="Enter your email" type="email" className="h-10 sm:h-12" />
            <Button className="h-10 sm:h-12 bg-primary hover:bg-primary/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}