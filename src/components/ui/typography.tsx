import * as React from "react"

import { cn } from "@/lib/utils"

const Title = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
<<<<<<< HEAD
      "text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl",
=======
      "text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl",
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
      className
    )}
    {...props}
  />
))
Title.displayName = "Title"

const TitleSmall = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "text-xl font-bold leading-tight tracking-tighter sm:text-2xl md:text-3xl",
      className
    )}
    {...props}
  />
))
TitleSmall.displayName = "TitleSmall"

const SubTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-xl font-semibold leading-none tracking-tight sm:text-2xl md:text-3xl", className)}
    {...props}
  />
))
SubTitle.displayName = "SubTitle"

const Header = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight sm:text-xl md:text-2xl",
      className
    )}
    {...props}
  />
))
Header.displayName = "Header"

const SubHeader = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-semibold leading-none tracking-tight sm:text-lg md:text-xl", className)}
    {...props}
  />
))
SubHeader.displayName = "SubHeader"

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-sm font-semibold leading-tight sm:text-base md:text-lg", className)}
    {...props}
  />
))
H4.displayName = "H4"

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed sm:text-base", className)}
    {...props}
  />
))
Paragraph.displayName = "Paragraph"

const ParagraphLarge = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
<<<<<<< HEAD
    className={cn("text-sm text-muted-foreground leading-relaxed sm:text-base", className)}
=======
    className={cn("text-base text-muted-foreground leading-relaxed sm:text-lg", className)}
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
    {...props}
  />
))
ParagraphLarge.displayName = "ParagraphLarge"

const Small = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <small
    ref={ref}
    className={cn("text-xs text-muted-foreground leading-relaxed sm:text-sm", className)}
    {...props}
  />
))
Small.displayName = "Small"

const Muted = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-xs text-muted-foreground sm:text-sm", className)}
    {...props}
  />
))
Muted.displayName = "Muted"

const Inline = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("font-medium leading-none", className)}
    {...props}
  />
))
Inline.displayName = "Inline"

export {
  Title,
  TitleSmall,
  SubTitle,
  Header,
  SubHeader,
  H4,
  Paragraph,
  ParagraphLarge,
  Small,
  Muted,
  Inline,
}