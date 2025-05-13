
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone } from "lucide-react";

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
    <section id="contact" className="section-padding bg-[#fff7ea]">
      <div className="tenx-container">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-tenx-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-tenx-black/90">
            Interested in learning more about our investment approach or discussing potential opportunities? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-tenx-white shadow-sm p-8 rounded-lg border border-tenx-green/20">
              <h3 className="heading-sm mb-6 text-tenx-black">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Mail className="h-5 w-5 text-tenx-green" />}
                  title="Email Us"
                  detail="admin@tenxcapital.ca"
                />
                <ContactInfo 
                  icon={<Phone className="h-5 w-5 text-tenx-green" />}
                  title="Call Us"
                  detail="+1 514 778 4873"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-tenx-white shadow-sm p-8 rounded-lg border border-tenx-green/20">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-tenx-black">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-tenx-green/20 bg-tenx-white text-tenx-black focus:border-tenx-green"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-tenx-black">
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
                    className="border-tenx-green/20 bg-tenx-white text-tenx-black focus:border-tenx-green"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-tenx-black">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your business or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-tenx-green/20 bg-tenx-white text-tenx-black focus:border-tenx-green"
                />
              </div>

              <Button
                type="submit"
                className="bg-tenx-green hover:bg-tenx-green/90 text-white w-full sm:w-auto"
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
        <h4 className="text-sm font-medium text-tenx-black/80">{title}</h4>
        <p className="text-tenx-black">{detail}</p>
      </div>
    </div>
  );
};

export default Contact;
