import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_hi969cm",          // Your Service ID
        "template_o8569o4",         // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "nez4_8d60TRtpJmoy"          // Your Public Key
      );

      toast({
        title: "Message Sent Successfully",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: error?.text || "Email configuration error.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <Card className="bg-slate-800 border border-slate-700 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-white hover:text-blue-400"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" />
                <a href="tel:+917569180749" className="text-white">
                  +91 7569180749
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <p className="text-white">Vizianagaram, India</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open("https://github.com/Purushotham-Dudekula", "_blank")
                  }
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>

                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/purushotham-dudekula-a44a98224",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="bg-slate-800 border border-slate-700 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <Label className="text-white">Name</Label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label className="text-white">Email</Label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <Label className="text-white">Message</Label>
                <Textarea
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;