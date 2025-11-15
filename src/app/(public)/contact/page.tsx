"use client";

import { useState } from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    hospitalName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        setFormData({ name: "", hospitalName: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Hospital/Clinic Name *
                  </label>
                  <Input
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    required
                    placeholder="Hospital or clinic name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+977 98XXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your needs..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email</h3>
                    <p className="text-muted-foreground">info@vaidhyasewa.com</p>
                    <p className="text-muted-foreground">support@vaidhyasewa.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Phone</h3>
                    <p className="text-muted-foreground">+977 1 4123456</p>
                    <p className="text-muted-foreground">+977 98 1234567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="font-semibold text-dark mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a
                      href="https://wa.me/977981234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                    <a
                      href="https://m.me/vaidhyasewa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Message on Messenger
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-border flex items-center justify-center">
            <p className="text-muted-foreground">Map coming soon</p>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Check our FAQ page for common questions and answers.
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="/faq">View FAQ</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
