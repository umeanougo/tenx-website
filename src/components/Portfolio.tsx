
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-[#fff7ea]">
      <div className="tenx-container">
        <div className="mb-16 text-center">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-tenx-green mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-tenx-black/90">
            We invest in visionary businesses with exceptional growth potential and strong leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <PortfolioCard
            name="Zole"
            description="A fintech platform revolutionizing cross-border payments across global markets, making international transactions seamless and affordable."
            logoSrc="/lovable-uploads/a355d237-bd7a-4817-88eb-69c1a0dc15db.png"
            category="Financial Technology"
            websiteUrl="https://zole.app/"
          />
          <PortfolioCard
            name="OneCliq"
            description="A powerful AI-driven platform that turns consumer conversations into marketing campaigns, helping businesses collect data and generate insights."
            logoSrc="/lovable-uploads/7804040c-3fce-4095-b7b4-86db3ebc5599.png"
            category="Marketing Technology"
            websiteUrl="https://www.onecliq.io/"
          />
        </div>

        <div className="text-center">
          <p className="text-tenx-black/80 mb-6">
            Interested in joining our portfolio of exceptional businesses?
          </p>
          <Button 
            className="tenx-green-gradient" 
            size="lg" 
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
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
  logoSrc: string;
  category: string;
  websiteUrl: string;
}

const PortfolioCard = ({ name, description, logoSrc, category, websiteUrl }: PortfolioCardProps) => {
  return (
    <div className="group bg-tenx-white rounded-lg overflow-hidden shadow-md border border-tenx-green/20 hover:shadow-lg transition-all">
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="h-16 flex items-center">
            <img
              src={logoSrc}
              alt={`${name} logo`}
              className="h-full object-contain"
            />
          </div>
          <span className="inline-block bg-tenx-green/10 text-tenx-black text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-heading font-bold text-tenx-black">{name}</h3>
            <a 
              href={websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full flex items-center justify-center bg-tenx-green/10 text-tenx-green hover:bg-tenx-green hover:text-white transition-colors"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <p className="text-tenx-black/90 mb-4">{description}</p>
        </div>
        <a 
          href={websiteUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full mt-6"
        >
          <Button variant="outline" className="w-full border-tenx-green text-tenx-black hover:bg-tenx-green/10">
            Visit Website
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
