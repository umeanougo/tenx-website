
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-tenx-white/90 backdrop-blur-md border-b border-tenx-green/20">
      <div className="tenx-container py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/dd9fbdc0-1bba-4cfb-8914-3d397008f1c3.png" 
              alt="TenX Capital Logo" 
              className="h-18" // Increased from h-10 to approximately 80% bigger
            />
          </Link>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="text-tenx-black"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-tenx-white z-40 animate-fade-in">
                  <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <NavLink to="/#about" onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/#portfolio" onClick={toggleMenu}>Portfolio</NavLink>
                    <NavLink to="/#approach" onClick={toggleMenu}>Approach</NavLink>
                    <NavLink to="/#contact" onClick={toggleMenu}>Contact</NavLink>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-6">
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/#portfolio">Portfolio</NavLink>
              <NavLink to="/#approach">Approach</NavLink>
              <NavLink to="/#contact">Contact</NavLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Extract the section ID from the URL
    const sectionId = to.split('#')[1];
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Call the additional onClick handler if provided (for mobile menu)
    if (onClick) onClick();
  };

  return (
    <a 
      href={to} 
      className="text-tenx-black font-medium hover:text-tenx-green transition-colors"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
