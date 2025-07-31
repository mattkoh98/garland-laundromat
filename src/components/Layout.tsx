import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', nameEs: 'Inicio' },
    { name: 'Location', href: '/location', nameEs: 'Ubicación' },
    { name: 'About', href: '/about', nameEs: 'Acerca de' },
    { name: 'FAQ', href: '/faq', nameEs: 'Preguntas' },
    { name: 'Contact', href: '/contact', nameEs: 'Contacto' },
    { name: 'Pickup/Delivery', href: '/pickup-delivery', nameEs: 'Recogida/Entrega' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const getText = (en: string, es: string) => {
    return language === 'en' ? en : es;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-fresh-white shadow-soft border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full"></div>
              <span className="text-xl font-bold text-foreground">
                {getText('LaundroWell Garland', 'LaundroWell Garland')}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {language === 'en' ? item.name : item.nameEs}
                </Link>
              ))}
              
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
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {language === 'en' ? item.name : item.nameEs}
                  </Link>
                ))}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full"></div>
                <span className="text-xl font-bold text-foreground">
                  {getText('LaundroWell Garland', 'LaundroWell Garland')}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {getText(
                  'Your trusted neighborhood laundromat in Garland, TX providing clean, reliable service with state-of-the-art equipment.',
                  'Su lavandería de confianza del vecindario en Garland, TX brindando servicio limpio y confiable con equipos de última generación.'
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
                <li><Link to="/pickup-delivery" className="hover:text-primary transition-colors">
                  {getText('Pickup & Delivery', 'Recogida y Entrega')}
                </Link></li>
                <li><Link to="/faq" className="hover:text-primary transition-colors">
                  {getText('FAQ', 'Preguntas Frecuentes')}
                </Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                {getText('Contact', 'Contacto')}
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>LaundroWell@hotmail.com</p>
                <p>2006 W Buckingham Rd<br />Garland, TX 75042</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 LaundroWell Garland. {getText('All rights reserved.', 'Todos los derechos reservados.')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;