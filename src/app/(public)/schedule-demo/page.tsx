"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Herosection } from "@/components/hero_section";
import { Title, TitleSmall, SubTitle, Header, SubHeader, H4, Paragraph, ParagraphLarge, Small, Muted, Inline } from "@/components/ui/typography";
import { Calendar, CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import CTA from "@/components/cta_section";

const HeroData = {
  subtitle: "Schedule a Demo",
  title: "Schedule",
  title_2: "a Demo",
  description: ["Experience Vaidhya Sewa firsthand", "See how our system can transform your hospital operations"],
};

const healthInstitutionSizes = [
  { value: "1-25", label: "1-25 Bedded" },
  { value: "26-50", label: "26-50 Bedded" },
  { value: "51-100", label: "51-100 Bedded" },
  { value: "101-200", label: "101-200 Bedded" },
  { value: "201+", label: "Above 201 Bedded" },
];

const hospitalTypes = [
  { value: "general", label: "General Hospital" },
  { value: "specialty", label: "Specialty Hospital" },
  { value: "clinic", label: "Clinic" },
  { value: "diagnostic", label: "Diagnostic Center" },
  { value: "nursing", label: "Nursing Home" },
  { value: "other", label: "Other" },
];

const countries = [
  { value: "nepal", label: "Nepal" },
  { value: "india", label: "India" },
  { value: "bangladesh", label: "Bangladesh" },
  { value: "sri-lanka", label: "Sri Lanka" },
  { value: "other", label: "Other" },
];

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We'll contact you within 24 hours",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose a time that works for you",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Demo",
    description: "Tailored to your specific needs",
  },
];

export default function ScheduleDemoPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    address: "",
    organizationName: "",
    healthInstitutionSize: "",
    hospitalType: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }));
  };

  const validateForm = (): boolean => {
    const requiredFields = [
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone,
      formData.country,
      formData.address,
      formData.organizationName,
      formData.hospitalType,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      toast.error("Please fill in all required fields.");
      return false;
    }

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the Privacy Policy and Terms of Use.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Demo request submitted successfully! Our sales associate will contact you within 24 hours.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        organizationName: "",
        healthInstitutionSize: "",
        hospitalType: "",
        agreeToTerms: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white_A700 font-poppins">
      {/* Hero */}
      <Herosection {...HeroData} />

      {/* Schedule Demo Form */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <SubTitle className="text-primary mb-4">Schedule a demo</SubTitle>
              <ParagraphLarge className="text-bluegray_500 max-w-2xl mx-auto">
                Kindly complete the form, and our dedicated sales associate will contact you within the next 24 hours.
              </ParagraphLarge>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Form */}
              <div className="md:col-span-2">
                <div className="bg-white_A700 rounded-xl shadow-lg p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-bluegray_900 font-medium mb-2 block">
                          First Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your first name"
                          disabled={loading}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-bluegray_900 font-medium mb-2 block">
                          Last Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your last name"
                          disabled={loading}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-bluegray_900 font-medium mb-2 block">
                        Email address <span className="text-primary">*</span>
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
                        className="w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-bluegray_900 font-medium mb-2 block">
                        Phone Number <span className="text-primary">*</span>
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
                        className="w-full"
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <Label htmlFor="country" className="text-bluegray_900 font-medium mb-2 block">
                        Country <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => handleSelectChange("country", value)}
                        required
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.value} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Address */}
                    <div>
                      <Label htmlFor="address" className="text-bluegray_900 font-medium mb-2 block">
                        Address <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your address"
                        rows={3}
                        disabled={loading}
                        className="w-full"
                      />
                    </div>

                    {/* Organization Name */}
                    <div>
                      <Label htmlFor="organizationName" className="text-bluegray_900 font-medium mb-2 block">
                        Organization Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="organizationName"
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your organization name"
                        disabled={loading}
                        className="w-full"
                      />
                    </div>

                    {/* Health Institution Size */}
                    <div>
                      <Label htmlFor="healthInstitutionSize" className="text-bluegray_900 font-medium mb-2 block">
                        Health Institution Size
                      </Label>
                      <Select
                        value={formData.healthInstitutionSize}
                        onValueChange={(value) => handleSelectChange("healthInstitutionSize", value)}
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select institution size" />
                        </SelectTrigger>
                        <SelectContent>
                          {healthInstitutionSizes.map((size) => (
                            <SelectItem key={size.value} value={size.value}>
                              {size.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Hospital Type */}
                    <div>
                      <Label htmlFor="hospitalType" className="text-bluegray_900 font-medium mb-2 block">
                        Hospital Type <span className="text-primary">*</span>
                      </Label>
                      <Select
                        value={formData.hospitalType}
                        onValueChange={(value) => handleSelectChange("hospitalType", value)}
                        required
                        disabled={loading}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select hospital type" />
                        </SelectTrigger>
                        <SelectContent>
                          {hospitalTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start gap-3 pt-4">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={handleCheckboxChange}
                        disabled={loading}
                        className="mt-1"
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm text-bluegray_500 cursor-pointer leading-relaxed"
                      >
                        By clicking "Submit" I agree to the{" "}
                        <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium underline">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms" className="text-primary hover:text-primary/80 font-medium underline">
                          Terms of Use
                        </Link>
                        .
                      </Label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                      >
                        {loading ? "Submitting..." : "Submit Request"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Benefits Sidebar */}
              <div className="md:col-span-1">
                <div className="space-y-6">
                  <div className="bg-white_A700 rounded-xl shadow-lg p-6">
                    <Header className="text-primary mb-6">Why Schedule a Demo?</Header>
                    <div className="space-y-6">
                      {benefits.map((benefit, idx) => {
                        const IconComponent = benefit.icon;
                        return (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <IconComponent className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <H4 className="text-primary mb-1">{benefit.title}</H4>
                              <Paragraph className="text-bluegray_500 text-sm">
                                {benefit.description}
                              </Paragraph>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/20">
                    <Header className="text-primary mb-4">Need Immediate Help?</Header>
                    <div className="space-y-3">
                      <a
                        href="mailto:info@vaidhyasewa.com"
                        className="flex items-center gap-3 text-bluegray_700 hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        <Small>info@vaidhyasewa.com</Small>
                      </a>
                      <a
                        href="tel:+9779746888890"
                        className="flex items-center gap-3 text-bluegray_700 hover:text-primary transition-colors"
                      >
                        <Phone className="h-5 w-5 text-primary" />
                        <Small>+977 9746888890</Small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}
