
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tenx-white text-tenx-black py-12 border-t border-tenx-green/20">
      <div className="tenx-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/dd9fbdc0-1bba-4cfb-8914-3d397008f1c3.png" 
                alt="TenX Capital Logo" 
                className="h-10" 
              />
            </Link>
            <p className="mt-2 text-tenx-gray max-w-md">
              Empowering Black entrepreneurship through strategic investments and meaningful partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-4">
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/#portfolio">Portfolio</FooterLink>
            <FooterLink href="/#approach">Approach</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-tenx-green/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-tenx-gray text-sm mb-4 sm:mb-0">
            &copy; {currentYear} TenX Capital. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/tenx-ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-tenx-gray hover:text-tenx-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-tenx-gray hover:text-tenx-green transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;
