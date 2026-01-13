"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
<<<<<<< HEAD
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
=======
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Hospital Administrator",
    hospital: "City General Hospital",
    image: "/images/img_ellipse70.png",
    text: "Vaidhya Sewa has changed the way we manage healthcare operations at City General Hospital. The Vaidhya Sewa team worked closely with our medical staff and administration to customize the system according to our specific needs, making our healthcare management seamless and paperless.",
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Chief Medical Officer",
    hospital: "Metro Healthcare",
    image: "/images/img_ellipse70_1.png",
    text: "Excellent hospital management solution. Our staff adapted quickly and patient satisfaction improved significantly. The system has transformed how we handle patient records and billing operations.",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    hospital: "Sunrise Clinic",
    image: "/images/img_ellipse70_2.png",
    text: "The best investment we made for our hospital. Streamlined operations, better patient care, and excellent customer support. Vaidhya Sewa has made our daily operations so much more efficient.",
  },
  {
    name: "Anil Thapa",
    role: "IT Manager",
    hospital: "Everest Care Hospital",
    image: "/images/img_ellipse70.png",
    text: "Easy to use and perfectly fits our workflow. The support team is very responsive and helpful. Implementation was smooth and our team was up and running in no time.",
  },
];

const makeInfinite = (arr: typeof testimonials) => [...arr, ...arr, ...arr];

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Carousel functionality (from login page)
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const currentPosition = useRef<number>(0);
  const startX = useRef<number>(0);
  const savedPos = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  
  const infinite = makeInfinite(testimonials);
  const speed = 0.3; // Slower speed for single card view

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Calculate current testimonial index based on position
  const getCurrentIndex = useCallback(() => {
    if (!trackRef.current) return 0;
    const container = trackRef.current.parentElement;
    if (!container) return 0;
    const cardWidth = container.offsetWidth;
    const singleSetWidth = testimonials.length * cardWidth;
    const position = currentPosition.current % singleSetWidth;
    return Math.floor(position / cardWidth) % testimonials.length;
  }, []);

  // Update current index periodically for pagination dots
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex(getCurrentIndex());
    }, 100);
    return () => clearInterval(interval);
  }, [getCurrentIndex]);

  // Smooth auto-scroll animation
  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    if (!isPaused && !isDragging.current) {
      currentPosition.current += speed;
    }

    const container = track.parentElement;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    const singleSetWidth = testimonials.length * cardWidth;
    const fullWidth = singleSetWidth * 3; // Three sets for infinite loop

    if (currentPosition.current >= fullWidth) {
      currentPosition.current = 0;
    }

    track.style.transform = `translateX(-${currentPosition.current}px)`;

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  // Drag handlers
  const handleDown = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;

    isDragging.current = true;
    startX.current = clientX;
    savedPos.current = currentPosition.current;
    track.style.cursor = "grabbing";
  };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !trackRef.current) return;

    const walk = (clientX - startX.current) * 1.5;
    currentPosition.current = savedPos.current - walk;

    trackRef.current.style.transform = `translateX(-${currentPosition.current}px)`;
  };

  const stopDragging = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
    }
  };

  // Jump to specific testimonial on dot click
  const goToTestimonial = (index: number) => {
    if (index === currentTestimonialIndex || !trackRef.current) return;
    const container = trackRef.current.parentElement;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    const singleSetWidth = testimonials.length * cardWidth;
    const currentSet = Math.floor(currentPosition.current / singleSetWidth);
    const targetPosition = (currentSet * singleSetWidth) + (index * cardWidth);
    currentPosition.current = targetPosition;
    setCurrentTestimonialIndex(index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (!agreeToTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    try {
      setLoading(true);
      // Placeholder - backend integration pending
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Account created successfully! Please check your email to verify your account.");
      // Reset form
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeToTerms(false);
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      // Placeholder - backend integration pending
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.info("Google sign-up will be available soon");
    } catch (error) {
      toast.error("Failed to sign up with Google");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Promotional Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-teal_400/10 flex-col justify-between p-8 xl:p-12 relative overflow-hidden">
        <div className="space-y-6 xl:space-y-8 z-10">
          <div className="space-y-3 xl:space-y-4">
<<<<<<< HEAD
            <Title className="text-primary leading-tight">
              Start your journey with Vaidhya Sewa.
            </Title>
            <ParagraphLarge className="text-secondary max-w-md">
              Join hundreds of hospitals already using our comprehensive management system to streamline their operations.
            </ParagraphLarge>
=======
            <h1 className="text-4xl xl:text-5xl font-bold text-teal_700 leading-tight">
              Start your journey with Vaidhya Sewa.
            </h1>
            <p className="text-base xl:text-lg text-teal_600 max-w-md">
              Join hundreds of hospitals already using our comprehensive management system to streamline their operations.
            </p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-lg mx-auto min-h-[280px] xl:min-h-[320px] select-none">
            <div
              ref={trackRef}
              className="flex cursor-grab gap-6 xl:gap-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                setIsPaused(false);
                stopDragging();
              }}
              onMouseDown={(e) => handleDown(e.pageX)}
              onMouseMove={(e) => handleMove(e.pageX)}
              onMouseUp={stopDragging}
              onTouchStart={(e) => handleDown(e.touches[0].clientX)}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
              onTouchEnd={stopDragging}
            >
              {infinite.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full"
                  style={{ width: "100%" }}
                >
                  <div className="bg-white rounded-2xl p-6 xl:p-8 shadow-lg flex flex-col h-full min-h-[280px] xl:min-h-[320px] relative">
                    <p className="text-gray_700 text-sm xl:text-base leading-relaxed mb-4 xl:mb-6">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author Box */}
                    <div className="bg-gray_50 rounded-xl p-3 xl:p-4 mt-auto">
                      <div className="flex items-center gap-3 xl:gap-4">
                        <div className="relative flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            className="rounded-full w-10 h-10 xl:w-12 xl:h-12"
                            unoptimized
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray_900 text-sm xl:text-base">{testimonial.name}</p>
                          <p className="text-xs xl:text-sm text-gray_600">{testimonial.role} · {testimonial.hospital}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex gap-1.5 xl:gap-2 justify-center mt-4 xl:mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`rounded-full transition-all ${
                  index === currentTestimonialIndex
                    ? "bg-teal_400 w-5 xl:w-6 h-1.5 xl:h-2"
                    : "bg-teal_400/30 hover:bg-teal_400/50 w-1.5 xl:w-2 h-1.5 xl:h-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 bg-white mt-10 lg:mt-0">
        <div className="w-full max-w-md space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-1 sm:space-y-2">
<<<<<<< HEAD
            <SubTitle className="text-primary">Create your Account.</SubTitle>
            <Paragraph className="text-gray_600">Join Vaidhya Sewa today and transform your hospital operations.</Paragraph>
=======
            <h2 className="text-2xl sm:text-3xl font-bold text-teal_700">Create your Account.</h2>
            <p className="text-sm sm:text-base text-gray_600">Join Vaidhya Sewa today and transform your hospital operations.</p>
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
          </div>

          {/* Google Sign Up Button */}
          <Button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={loading}
            variant="outline"
            className="w-full h-11 sm:h-12 border-gray_300 hover:bg-gray_50 text-gray_700 font-medium flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray_300"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-white text-gray_500 font-medium">OR</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray_700 mb-1.5 sm:mb-2">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="w-full h-11 sm:h-12 text-sm sm:text-base border-gray_300 focus:border-teal_400 focus:ring-teal_400"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray_700 mb-1.5 sm:mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full h-11 sm:h-12 text-sm sm:text-base border-gray_300 focus:border-teal_400 focus:ring-teal_400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray_700 mb-1.5 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  className="w-full h-11 sm:h-12 text-sm sm:text-base border-gray_300 focus:border-teal_400 focus:ring-teal_400 pr-10"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray_500 hover:text-gray_700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray_500 mt-1">Must be at least 8 characters</p>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray_700 mb-1.5 sm:mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password..."
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                  className="w-full h-11 sm:h-12 text-sm sm:text-base border-gray_300 focus:border-teal_400 focus:ring-teal_400 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray_500 hover:text-gray_700"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 text-teal_400 border-gray_300 rounded focus:ring-teal_400 mt-0.5"
                required
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray_700 cursor-pointer">
                I agree to the{" "}
                <Link href="/terms" className="text-teal_400 hover:text-teal_700 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-teal_400 hover:text-teal_700 font-medium">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              disabled={loading}
<<<<<<< HEAD
              className="w-full h-11 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base"
=======
              className="w-full h-11 sm:h-12 bg-teal_400 hover:bg-teal_700 text-white font-semibold text-sm sm:text-base"
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
            >
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </form>

          {/* Login Link */}
          <p className="text-center text-xs sm:text-sm text-gray_600">
            Already have an account?{" "}
<<<<<<< HEAD
            <Link href="/login" className="text-primary hover:text-primary/80 font-semibold">
=======
            <Link href="/login" className="text-teal_400 hover:text-teal_700 font-semibold">
>>>>>>> 030d0ce8e34eb3421922967b2c849bfe0d9580a6
              Log in
            </Link>
          </p>

          {/* Version Number */}
          <p className="text-xs text-gray_400 text-right">version: 1.0.0</p>
        </div>
      </div>
    </div>
  );
}

