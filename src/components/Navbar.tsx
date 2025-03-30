
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
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-tenx-gold/20">
      <div className="tenx-container py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-heading text-2xl font-bold text-tenx-navy">10X</span>
            <span className="ml-1 text-tenx-gold font-bold">LEGACY</span>
          </Link>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>

              {isMenuOpen && (
                <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
                  <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <NavLink to="/#about" onClick={toggleMenu}>About</NavLink>
                    <NavLink to="/#portfolio" onClick={toggleMenu}>Portfolio</NavLink>
                    <NavLink to="/#approach" onClick={toggleMenu}>Approach</NavLink>
                    <NavLink to="/#contact" onClick={toggleMenu}>Contact</NavLink>
                    <Button className="tenx-gold-gradient">Schedule Call</Button>
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
              <Button className="tenx-gold-gradient">Schedule Call</Button>
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
  return (
    <a 
      href={to} 
      className="text-tenx-navy font-medium hover:text-tenx-gold transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Navbar;
