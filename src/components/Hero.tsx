
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff7ea] text-tenx-black">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603126857599-f935e8c9d7e8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      />
      <div className="tenx-container relative z-10 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="heading-xl mb-6 text-tenx-black">
            Empowering Black Entrepreneurship Through Strategic Investments
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-tenx-black/90">
            TenX Capital is a private equity firm founded by ten visionary Nigerian entrepreneurs, dedicated to identifying and investing in high-potential Black-owned businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-tenx-green hover:bg-tenx-green/90 text-white"
              onClick={() => {
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-tenx-green text-tenx-black hover:bg-tenx-green/10"
              onClick={() => {
                document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Our Approach
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#fff7ea] to-transparent"></div>
    </div>
  );
};

export default Hero;
