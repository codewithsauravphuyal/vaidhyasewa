import React from "react";

interface HeroProps {
  subtitle?: string;
  title: string;
  title_2: string;
  description: string | string[];
}

export function Herosection({ title, title_2, description, subtitle }: HeroProps) {
  const lines = typeof description === "string" ? description.split("\n") : description;

  return (
    <section
      className="
        relative 
        py-16 md:py-32 
        overflow-hidden 
        bg-white_A700
        before:absolute before:inset-0 before:bg-white_A700/80 
        before:z-0 md:before:bg-transparent
        bg-[url('/images/vaidhya_header.png')] 
        bg-cover bg-top bg-no-repeat
      "
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 max-w-4xl pt-20 md:pt-0">
          <div className="text-left">
            {subtitle && (
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
                {subtitle}
              </p>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
              {title} <span className="text-teal_700">{title_2}</span>
            </h1>

            <p className="text-base md:text-lg text-bluegray_500">
              {lines.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
