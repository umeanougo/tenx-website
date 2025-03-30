
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message received",
      description: "Thank you for reaching out. We'll be in touch soon!",
    });
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="tenx-container">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-tenx-navy">Get in Touch</h2>
          <div className="w-20 h-1 bg-tenx-gold mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-tenx-navy/80">
            Interested in learning more about our investment approach or discussing potential opportunities? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-tenx-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-tenx-gold" />}
                  title="Email Us"
                  detail="info@10xlegacy.com"
                />
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-tenx-gold" />}
                  title="Call Us"
                  detail="+1 (234) 567-8900"
                />
                <ContactInfo 
                  icon={<MapPin className="h-5 w-5 text-tenx-gold" />}
                  title="Visit Us"
                  detail="123 Legacy Tower, Lagos, Nigeria"
                />
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <SocialButton href="#" label="Twitter" />
                  <SocialButton href="#" label="LinkedIn" />
                  <SocialButton href="#" label="Instagram" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-tenx-navy">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-tenx-navy/20 focus:border-tenx-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-tenx-navy">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-tenx-navy/20 focus:border-tenx-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-tenx-navy">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-tenx-navy/20 focus:border-tenx-gold"
                />
              </div>

              <Button
                type="submit"
                className="tenx-gold-gradient w-full sm:w-auto"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const ContactInfo = ({ icon, title, detail }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-white/70">{title}</h4>
        <p className="text-white">{detail}</p>
      </div>
    </div>
  );
};

interface SocialButtonProps {
  href: string;
  label: string;
}

const SocialButton = ({ href, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tenx-gold transition-colors"
      aria-label={label}
    >
      <span className="text-xs font-medium">{label.charAt(0)}</span>
    </a>
  );
};

export default Contact;
