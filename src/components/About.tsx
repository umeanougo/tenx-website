
import { Users, Gem, Heart, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#fff7ea]">
      <div className="tenx-container">
        <div className="mb-12 text-center">
          <h2 className="heading-lg mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-tenx-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-tenx-black/90">
            Founded by a collective of 10 visionary entrepreneurs, TenX Capital was born from a shared mission to create generational wealth and equity while upholding Christian values.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="heading-md mb-4">Our Mission</h3>
            <p className="mb-6 text-tenx-black/90">
              At TenX Capital, we're committed to scaling exceptional businesses through strategic investments, mentorship, and a wealth of collective experience.
            </p>
            <p className="text-tenx-black/90">
              Our foundation is built on Christian principles, driving us to create lasting impact and generational prosperity for the communities we serve.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-tenx-black/5 p-1 rounded-lg">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=987&ixlib=rb-4.0.3" 
                alt="TenX Capital Team Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h3 className="heading-md text-center mb-10">Our Core Values</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Users className="h-10 w-10 text-tenx-green" />}
            title="Community" 
            description="We believe in uplifting our community through intentional investment and mentorship."
          />
          <ValueCard 
            icon={<Gem className="h-10 w-10 text-tenx-green" />}
            title="Excellence" 
            description="We pursue excellence in all we do, from investment selection to partnership development."
          />
          <ValueCard 
            icon={<Heart className="h-10 w-10 text-tenx-green" />}
            title="Faith" 
            description="Our Christian values guide our decisions, relationships, and vision for generational impact."
          />
          <ValueCard 
            icon={<Briefcase className="h-10 w-10 text-tenx-green" />}
            title="Legacy" 
            description="We're building lasting wealth and creating opportunities that extend beyond our lifetime."
          />
        </div>
      </div>
    </section>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-tenx-white p-6 rounded-lg shadow-sm border border-tenx-green/20 hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-heading font-bold mb-2 text-tenx-black">{title}</h4>
      <p className="text-tenx-black/80">{description}</p>
    </div>
  );
};

export default About;
