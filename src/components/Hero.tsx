
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-tenx-navy text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603126857599-f935e8c9d7e8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
      <div className="tenx-container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="heading-xl mb-6">
            Empowering Black Entrepreneurship Through Strategic Investments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-tenx-cream/90">
            10X Legacy is a private equity firm founded by ten visionary Nigerian entrepreneurs, dedicated to identifying and investing in high-potential Black-owned businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="tenx-gold-gradient">
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Our Approach
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
