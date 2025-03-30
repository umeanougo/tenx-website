
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tenx-navy text-white py-12">
      <div className="tenx-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="font-heading text-2xl font-bold text-white">10X</span>
              <span className="ml-1 text-tenx-gold font-bold">LEGACY</span>
            </Link>
            <p className="mt-2 text-white/70 max-w-md">
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
        
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} 10X Legacy. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <FooterSocialLink href="#" label="Twitter" />
            <FooterSocialLink href="#" label="LinkedIn" />
            <FooterSocialLink href="#" label="Instagram" />
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
      className="text-white/80 hover:text-tenx-gold transition-colors"
    >
      {children}
    </a>
  );
};

interface FooterSocialLinkProps {
  href: string;
  label: string;
}

const FooterSocialLink = ({ href, label }: FooterSocialLinkProps) => {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-tenx-gold transition-colors"
      aria-label={label}
    >
      {label}
    </a>
  );
};

export default Footer;
