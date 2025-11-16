"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageCircle, Phone, Mail, MapPin, Clock10, CheckCircle, Settings, Link2, UserCheck, Fingerprint, Handshake } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    hospitalName: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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
        setFormData({ name: "", hospitalName: "", email: "", phone: "", message: "", preferredContact: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      items: ["info@vaidhyasewa.com", "support@vaidhyasewa.com", "hamroyouthit@gmail.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      items: ["+977 9746888890", "+977 9741776222"],
    },
    {
      icon: MapPin,
      title: "Address",
      items: ["Itahari-06 Pragati Marga,", "Sunsari, Koshi Province, Nepal"],
    },
    {
      icon: Clock10,
      title: "Office Hours",
      items: ["Sunday - Friday: 10:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM"],
    },
  ];

  const quickLinks = [
    {
      href: "https://wa.me/977981234567",
      label: "Chat on WhatsApp",
    },
    {
      href: "https://m.me/vaidhyasewa",
      label: "Message on Messenger",
    },
  ];

  const preferredContacts = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
    { value: "either", label: "Either is fine" },
  ];

  const supportCards = [
    {
      icon: CheckCircle,
      color: "primary",
      title: "Getting Started",
      description: "Everything you need to know to get started and get to work in Vaidhya Sewa.",
    },
    {
      icon: Settings,
      color: "primary",
      title: "Admin Settings",
      description: "Learn how to manage your current workspace or your enterprise space.",
    },
    {
      icon: Link2,
      color: "primary",
      title: "Server Setup",
      description: "Connect, simplify, and automate. Discover the power of apps and tools.",
    },
    {
      icon: UserCheck,
      color: "primary",
      title: "Login and Verification",
      description: "Read on to learn how to sign in with your email address, or your Apple or Google.",
    },
    {
      icon: Fingerprint,
      color: "primary",
      title: "Account Setup",
      description: "Adjust your profile and preferences to make Vaidhya Sewa work just for you.",
    },
    {
      icon: Handshake,
      color: "primary",
      title: "Trust & Safety",
      description: "Trust our current database and learn how we distribute your data.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative py-15 md:py-32 overflow-hidden bg-white_A700"
        style={{
          backgroundImage: 'url(/images/vaidhya_header.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative z-10 max-w-4xl">
            <div className="text-left">
              <p className="text-blue_A400 font-medium text-sm md:text-base lg:text-lg mb-4">
                Contact Us
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-[36px] font-semibold text-bluegray_900 mb-4">
                Get in Touch with {" "}
                <span className="text-teal_700">Vaidhya Sewa</span>
              </h1>
              <p className="text-base md:text-lg text-bluegray_500">
                Have questions? We'd love to hear from you.
                <br />
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-bluegray_50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="border border-white rounded-lg p-6 bg-white shadow-sm">
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
                    <p className="text-xs text-gray-500 mt-1">Your message will be sent through email.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method *
                    </label>
                    <RadioGroup
                      onValueChange={(value: string) => handleSelectChange("preferredContact", value)}
                      value={formData.preferredContact}
                      className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-8"
                    >
                      {preferredContacts.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`preferred-${option.value}`} />
                          <Label htmlFor={`preferred-${option.value}`}>{option.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="space-y-2 bg-bluegray_50 p-4 rounded-md">
                    <h3 className="text-sm font-medium text-gray-700">What to expect:</h3>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>We respond to all inquiries within 24 hours</li>
                      <li>Technical support queries are prioritized</li>
                      <li>Partnership requests will be forwarded to our team</li>
                    </ul>
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
            </div>

            {/* Contact Info */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-dark mb-8">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map(({ icon: Icon, title, items }, index) => (
                  <div key={index} className="flex gap-4">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{title}</h3>
                      {items.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-muted-foreground">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-8 border-t">
                  <h3 className="font-semibold text-dark mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    {quickLinks.map(({ href, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <MessageCircle className="h-5 w-5" />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t">
                  <h3 className="font-semibold text-dark mb-4">Follow us</h3>
                  <div className="space-y-3">
                    <div className="flex mt-4 sm:mt-0 gap-4 justify-center sm:justify-start">
                      <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">Facebook page</span>
                      </a>
                      <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                        <span className="sr-only">Instagram page</span>
                      </a>
                      <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" /></svg>
                        <span className="sr-only">Twitter page</span>
                      </a>
                      <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                        </svg>
                        <span className="sr-only">TikTok page</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Need support?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Want answer right away? Select your reference below for answers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportCards.map(({ icon: Icon, color, title, description }, index) => {
              const colorClasses = {
                primary: "bg-primary/5 border-primary/20 text-primary",
                green: "bg-green-50 border-green-200 text-green-700",
                red: "bg-red-50 border-red-200 text-red-700",
                blue: "bg-blue-50 border-blue-200 text-blue-700",
                orange: "bg-orange-50 border-orange-200 text-orange-700",
              };
              return (
                <div
                  key={index}
                  className={`border rounded-lg p-6 ${colorClasses[color as keyof typeof colorClasses]}`}
                >
                  <div className={`mb-4 p-2 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-sm`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{title}</h3>
                  <p className="text-sm leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Our Location</h2>
          <div className="w-full h-96 rounded-lg border border-border flex items-center justify-center overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13729.835190413354!2d87.26201523988661!3d26.66133852302847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d001adcd50d%3A0x81e065f0034706e2!2sYouth%20IT!5e0!3m2!1sen!2snp!4v1763279910481!5m2!1sen!2snp"
              className="w-full h-full"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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