import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import LaundroWellLogo from "@/assets/LaundroWellLogo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, getText } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: 'Next Level Laundromat', href: '/next-level-laundromat', nameEs: 'Next Level Laundromat' },
    { name: 'Home', href: '/', nameEs: 'Inicio' },
    { name: 'Location', href: '/location', nameEs: 'Ubicación' },
    { name: 'FAQ', href: '/faq', nameEs: 'Preguntas' },
  ];



  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-fresh-white shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={LaundroWellLogo} 
                alt="LaundroWell Logo" 
                className="h-12 md:h-16 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const isFeatured = item.name === 'Next Level Laundromat';

                if (item.external) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    >
                      {language === 'en' ? item.name : item.nameEs}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isFeatured
                        ? `px-3 py-1 rounded-full border ${
                            isActive
                              ? 'bg-primary text-white border-primary shadow-sm'
                              : 'border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 hover:text-primary'
                          }`
                        : `hover:text-primary ${
                            isActive
                              ? 'text-primary border-b-2 border-primary'
                              : 'text-muted-foreground'
                          }`
                    }`}
                  >
                    {language === 'en' ? item.name : item.nameEs}
                  </Link>
                );
              })}
              
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-1"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-1"
              >
                <Globe size={16} />
                <span>{language.toUpperCase()}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href;
                  const isFeatured = item.name === 'Next Level Laundromat';

                  if (item.external) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                      >
                        {language === 'en' ? item.name : item.nameEs}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-sm font-medium transition-colors ${
                        isFeatured
                          ? `px-3 py-1 rounded-full border ${
                              isActive
                                ? 'bg-primary text-white border-primary shadow-sm'
                                : 'border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 hover:text-primary'
                            }`
                          : `hover:text-primary ${
                              isActive
                                ? 'text-primary'
                                : 'text-muted-foreground'
                            }`
                      }`}
                    >
                      {language === 'en' ? item.name : item.nameEs}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-fresh-white border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src={LaundroWellLogo} 
                  alt="LaundroWell Logo" 
                  className="h-8 object-contain"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                {getText(
                  'Your trusted neighborhood laundromat in San Antonio, TX providing clean, reliable service with state-of-the-art equipment.',
                  'Su lavandería de confianza del vecindario en San Antonio, TX brindando servicio limpio y confiable con equipos de última generación.'
                )}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {getText('Quick Links', 'Enlaces Rápidos')}
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/location" className="hover:text-primary transition-colors">
                  {getText('Location & Hours', 'Ubicación y Horarios')}
                </Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">
                  {getText('FAQ', 'Preguntas Frecuentes')}
                </Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {getText('Address', 'Dirección')}
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>107 Latch Dr #110<br />San Antonio, TX 78213</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {getText('Phone', 'Teléfono')}
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><a href="tel:+12102579402" className="hover:text-primary transition-colors">(210) 257-9402</a></p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LaundroWell San Antonio. {getText('All rights reserved.', 'Todos los derechos reservados.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;