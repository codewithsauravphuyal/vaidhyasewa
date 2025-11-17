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

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    businessName: "",
    employeeSize: "",
    remark: "",
    howYouKnow: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          <Link href="/" className="inline-flex items-center text-teal_700 hover:text-teal_700/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-bluegray_900 mb-2">
            Get Started with Vaidhya Sewa
          </h1>
          <p className="text-base md:text-lg text-bluegray_500">
            Complete the form below to start your 30-day free trial
          </p>
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
                onChange={handleChange}
                required
                placeholder="Enter your full name"
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
                onChange={handleChange}
                required
                placeholder="your@email.com"
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
                onChange={handleChange}
                required
                placeholder="+977 98XXXXXXXX"
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
                onChange={handleChange}
                required
                placeholder="Enter your hospital or clinic name"
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
                onChange={handleChange}
                required
                placeholder="Enter your hospital address"
                rows={3}
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
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select employee size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-25">11-25 employees</SelectItem>
                  <SelectItem value="26-50">26-50 employees</SelectItem>
                  <SelectItem value="51-100">51-100 employees</SelectItem>
                  <SelectItem value="101-200">101-200 employees</SelectItem>
                  <SelectItem value="201-500">201-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
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
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="referral">Referral/Friend</SelectItem>
                  <SelectItem value="advertisement">Advertisement</SelectItem>
                  <SelectItem value="event">Event/Conference</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
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
                onChange={handleChange}
                placeholder="Any additional information or special requests..."
                rows={4}
                className="mt-2"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-teal_700 hover:bg-teal_700/90 text-white_A700 font-semibold py-6 text-lg"
              >
                {loading ? "Submitting..." : "Submit & Continue to Pricing"}
              </Button>
            </div>

            <p className="text-sm text-bluegray_500 text-center">
              By submitting this form, you agree to our{" "}
              <Link href="/terms" className="text-teal_700 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-teal_700 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

