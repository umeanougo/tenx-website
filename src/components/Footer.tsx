
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tenx-black text-tenx-white py-12">
      <div className="tenx-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-tenx-white">TenX</span>
              <span className="ml-1 text-tenx-green font-bold">CAPITAL</span>
            </Link>
            <p className="mt-2 text-tenx-white/70 max-w-md">
              Empowering Black entrepreneurship through strategic investments and meaningful partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-4">
            <FooterLink href="/#about">About</FooterLink>
            <FooterLink href="/#portfolio">Portfolio</FooterLink>
            <FooterLink href="/#approach">Approach</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </div>
        
        <div className="border-t border-tenx-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-tenx-white/70 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} TenX Capital. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/tenx-ca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-tenx-white/80 hover:text-tenx-green transition-colors"
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
      className="text-tenx-white/80 hover:text-tenx-green transition-colors"
    >
      {children}
    </a>
  );
};

export default Footer;
