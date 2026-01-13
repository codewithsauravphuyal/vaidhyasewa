import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroProps {
  subtitle?: string;
  title: string;
  title_2: string;
  description: string | string[];
  image?: string;
}

export function Herosection({ title, title_2, description, subtitle, image = "healthcare" }: HeroProps) {
  const lines = typeof description === "string" ? description.split("\n") : description;
  

  return (
    <section className="relative min-h-[300px] md:min-h-[500px] overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Blur Effect */}
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      {/* primary Overlay */}
      <div className="absolute inset-0 bg-primary/60 z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center mt-20">
        <div className="max-w-4xl mx-auto text-center py-8 md:py-16">
          {subtitle && (
            <p className={cn(
              "font-medium text-sm md:text-base lg:text-lg mb-4",
              "text-white/90"
            )}>
              {subtitle}
            </p>
          )}

          <h1 className={cn(
            "text-3xl md:text-4xl lg:text-[42px] font-semibold mb-6",
            "text-white leading-tight"
          )}>
            {title} <span className="text-white">{title_2}</span>
          </h1>

          <p className={cn(
            "text-base md:text-lg lg:text-xl",
            "text-white/90 leading-relaxed"
          )}>
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}