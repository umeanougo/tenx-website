
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-tenx-black">
      <div className="tenx-container">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4 text-tenx-white">Our Portfolio</h2>
          <div className="w-20 h-1 bg-tenx-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-tenx-white/90">
            We invest in visionary Black-owned businesses with exceptional growth potential and strong leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <PortfolioCard
            name="Zole"
            description="A fintech platform revolutionizing cross-border payments across African markets, making international transactions seamless and affordable."
            image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000"
            category="Financial Technology"
            websiteUrl="https://zole.app/"
          />
          <PortfolioCard
            name="OneCliq"
            description="An e-commerce solution providing small African businesses with tools to reach global markets through simplified logistics and payment processing."
            image="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&q=80&w=1000"
            category="E-Commerce"
            websiteUrl="https://www.onecliq.io/"
          />
        </div>

        <div className="text-center">
          <p className="text-tenx-white/80 mb-4">
            Interested in joining our portfolio of exceptional businesses?
          </p>
          <Button className="tenx-green-gradient" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  name: string;
  description: string;
  image: string;
  category: string;
  websiteUrl: string;
}

const PortfolioCard = ({ name, description, image, category, websiteUrl }: PortfolioCardProps) => {
  return (
    <div className="group bg-tenx-gray rounded-lg overflow-hidden shadow-md border border-tenx-green/10 hover:shadow-lg transition-all">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={`${name} company`}
          className="w-full h-60 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-tenx-black/80 text-white text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-heading font-bold text-tenx-white">{name}</h3>
          <a 
            href={websiteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-8 w-8 rounded-full flex items-center justify-center bg-tenx-green/10 text-tenx-green hover:bg-tenx-green hover:text-white transition-colors"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <p className="text-tenx-white/90 mb-4">{description}</p>
        <a 
          href={websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <Button variant="outline" className="w-full border-tenx-green/30 text-tenx-white hover:bg-tenx-green/10">
            Visit Website
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
