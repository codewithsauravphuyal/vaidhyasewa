"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  businessName: string;
  employeeSize: string;
  remark: string;
  howYouKnow: string;
}

const employeeSizeOptions = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-25", label: "11-25 employees" },
  { value: "26-50", label: "26-50 employees" },
  { value: "51-100", label: "51-100 employees" },
  { value: "101-200", label: "101-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
] as const;

const howYouKnowOptions = [
  { value: "google", label: "Google Search" },
  { value: "social-media", label: "Social Media" },
  { value: "referral", label: "Referral/Friend" },
  { value: "advertisement", label: "Advertisement" },
  { value: "event", label: "Event/Conference" },
  { value: "website", label: "Website" },
  { value: "other", label: "Other" },
] as const;

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    businessName: "",
    employeeSize: "",
    remark: "",
    howYouKnow: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const requiredFields = [
      formData.name,
      formData.email,
      formData.phone,
      formData.address,
      formData.businessName,
      formData.employeeSize,
      formData.howYouKnow,
    ];
    const hasEmptyRequired = requiredFields.some((field) => !field.trim());
    if (hasEmptyRequired) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    const phoneRegex = /^\+977\s?\d{10}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid Nepali phone number (e.g., +977 98XXXXXXXX).");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Placeholder - backend integration pending
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Signup successful! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        businessName: "",
        employeeSize: "",
        remark: "",
        howYouKnow: "",
      });
      // Redirect to pricing or thank you page
      setTimeout(() => {
        window.location.href = "/pricing";
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-bluegray_50 font-poppins py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-teal_700 hover:text-teal_700/80 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <Title className="text-primary mb-2">
            Get Started with Vaidhya Sewa
          </Title>
          <ParagraphLarge className="text-bluegray_500">
            Complete the form below to start your 30-day free trial
          </ParagraphLarge>
        </div>

        {/* Form Card */}
        <div className="bg-white_A700 rounded-lg shadow-bs2 p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-bluegray_900 font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-bluegray_900 font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your@email.com"
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-bluegray_900 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+977 98XXXXXXXX"
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Business Name */}
            <div>
              <Label htmlFor="businessName" className="text-bluegray_900 font-medium">
                Hospital/Clinic Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="businessName"
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                required
                placeholder="Enter your hospital or clinic name"
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Address */}
            <div>
              <Label htmlFor="address" className="text-bluegray_900 font-medium">
                Address <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your hospital address"
                rows={3}
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Employee Size */}
            <div>
              <Label htmlFor="employeeSize" className="text-bluegray_900 font-medium">
                Employee Size <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.employeeSize}
                onValueChange={(value) => handleSelectChange("employeeSize", value)}
                required
                disabled={loading}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select employee size" />
                </SelectTrigger>
                <SelectContent>
                  {employeeSizeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* How You Know */}
            <div>
              <Label htmlFor="howYouKnow" className="text-bluegray_900 font-medium">
                How did you know about Vaidhya Sewa? <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.howYouKnow}
                onValueChange={(value) => handleSelectChange("howYouKnow", value)}
                required
                disabled={loading}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {howYouKnowOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Remarks/Request */}
            <div>
              <Label htmlFor="remark" className="text-bluegray_900 font-medium">
                Remarks/Request
              </Label>
              <Textarea
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleInputChange}
                placeholder="Any additional information or special requests..."
                rows={4}
                disabled={loading}
                className="mt-2"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
              >
                {loading ? "Submitting..." : "Submit & Continue to Pricing"}
              </Button>
            </div>

            <p className="text-sm text-bluegray_500 text-center">
              By submitting this form, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}