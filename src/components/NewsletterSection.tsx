"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Web3Forms access key - get yours from https://web3forms.com
  const ACCESS_KEY =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "c1f39320-fb5f-4a36-ba18-e8027eb00b8e";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading toast
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Create FormData object with custom email formatting
      const submitFormData = new FormData();
      submitFormData.append("access_key", ACCESS_KEY);
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email);
      submitFormData.append("message", formData.query);

      // Custom subject line
      submitFormData.append(
        "subject",
        `🚀 New Portfolio Contact: ${formData.name}`
      );

      // Custom email template with better formatting
      const customMessage = `
📧 NEW CONTACT FROM PORTFOLIO WEBSITE
═══════════════════════════════════════

👤 CONTACT DETAILS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.query || "No message provided"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Received: ${new Date().toLocaleString()}
🌐 Source: Portfolio Website
💻 Reply to: ${formData.email}

═══════════════════════════════════════
This message was sent via your portfolio contact form.
Reply directly to this email to respond to ${formData.name}.
      `;

      submitFormData.append("message", customMessage);

      // Additional Web3Forms customization fields
      submitFormData.append("from_name", `${formData.name} (Portfolio)`);
      submitFormData.append("replyto", formData.email);
      submitFormData.append("ccemail", ""); // Add CC email if needed

      // Custom redirect URL (optional)
      // submitFormData.append("redirect", "https://yoursite.com/thank-you");

      // Honeypot for spam protection
      submitFormData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitFormData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", query: "" });

        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! 🎉", {
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 5000,
        });

        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error: unknown) {
      console.error("Error sending email:", error);

      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);

      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";

      if (errorMessage.includes("access_key")) {
        toast.error("Configuration Error", {
          description:
            "Contact form not configured properly. Using fallback method.",
          duration: 4000,
        });
      } else {
        toast.error("Message Failed", {
          description: "Couldn&apos;t send message. Opening email client...",
          duration: 4000,
        });
      }

      // Fallback to mailto if Web3Forms fails
      setTimeout(() => {
        handleMailtoFallback();
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Alternative: mailto fallback if you don't want to use Web3Forms
  const handleMailtoFallback = () => {
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nQuery:\n${formData.query}`;
    const mailtoLink = `mailto:faissk196@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, "_blank");

    toast.success("Opening Email Client", {
      description: "Your default email application should open now.",
      duration: 3000,
    });
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Get In Touch</h2>
      </div>

      <Card className="bg-gray-900/50 border-gray-800">
        <CardContent className="p-6">
          <p className="text-gray-300 text-sm mb-6">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you. Drop me a message and I&apos;ll get back to you as
            soon as possible.
          </p>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="text-green-400 text-lg font-semibold mb-2">
                ✅ Message Sent Successfully!
              </div>
              <p className="text-gray-400 text-sm">
                Thank you for reaching out. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com *"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="query"
                  value={formData.query}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hi..."
                  rows={4}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 resize-none"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 font-medium flex-1 md:flex-none disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Fallback mailto button */}
                <Button
                  type="button"
                  onClick={handleMailtoFallback}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 px-6"
                >
                  Email Direct
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                * Required fields. Alternatively, you can email me directly at{" "}
                <a
                  href="mailto:faissk196@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  faissk196@gmail.com
                </a>
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default NewsletterSection;
