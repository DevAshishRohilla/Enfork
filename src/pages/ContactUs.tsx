import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen pt-24 sm:pt-28 lg:pt-32"
      style={{
        backgroundImage: "url('./Hero background.png')",
      }}
    >
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden section-container rounded-3xl mt-2">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
                    "url('./brd.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Gradient Overlay at Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-200/30 via-purple-200/20 to-transparent" /> */}

        {/* Content */}
        <div className="relative flex flex-col gap-12 justify-between p-6 md:p-12">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 inline-flex">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    to="/"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/60" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">
            Contact
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Get in touch button and Heading Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
            {/* Get in touch button - 1 part */}
            <div className="flex justify-start">
              <button className="px-6 py-2 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/10 transition-colors animate-pulse">
                ✦ Get in touch
              </button>
            </div>

            {/* Heading - 2 parts */}
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                We're ready to
                <br />
                help you!
              </h2>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-14 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors pr-12"
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
            </div>

            {/* Message Field */}
            <Textarea
              name="message"
              placeholder="Your Message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/15 transition-colors resize-none"
            />

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-2xl bg-green-500/20 border border-green-500/50 text-green-200">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-200">
                ✗ Failed to send message. Please check the form ID and try again.
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full h-14 rounded-full text-lg font-semibold bg-black text-white border border-white hover:bg-black/80 hover:border-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
