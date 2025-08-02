import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Truck, Sparkles, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-laundromat.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { getText } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: getText('Wash & Fold Pickup & Delivery', 'Lavar y Doblar Recogida y Entrega'),
      description: getText('Professional cleaning and folding service', 'Servicio profesional de lavado y doblado'),
      price: getText('$3/lb', '$3/libra')
    },
    {
      icon: Truck,
      title: getText('Pickup & Delivery', 'Recogida y Entrega'),
      description: getText('Convenient door-to-door service', 'Conveniente servicio puerta a puerta'),
      price: getText('Minimum 10lbs orders', 'Pedidos mínimos de 10 libras')
    },
    {
      icon: Clock,
      title: getText('Same Day Service', 'Servicio el Mismo Día'),
      description: getText('Get your laundry back with 24 hour turnaround', 'Reciba su ropa con entrega en 24 horas'),
      price: getText('Available 7 days', 'Disponible 7 días')
    }
  ];

  const features = [
    getText('Eco-friendly detergents', 'Detergentes ecológicos'),
    getText('$0 Pickup & delivery fee', 'Cargo de recogida y entrega $0'),
    getText('Satisfaction guarantee', 'Garantía de satisfacción')
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {getText('Fresh. Clean. Reliable.', 'Fresco. Limpio. Confiable.')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {getText(
              'Your neighborhood laundromat with pickup & delivery service',
              'Su lavandería del vecindario con servicio de recogida y entrega'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.trycents.com/order/business/OTUw" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                {getText('Schedule Pickup', 'Programar Recogida')}
              </Button>
            </a>
            <Link to="/location">
              <Button variant="clean" size="lg" className="text-lg px-8 py-3">
                {getText('Visit Our Store', 'Visite Nuestra Tienda')}
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 text-lg">
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">2006 W Buckingham Rd, Garland, TX 75042</span>
              </div>
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5" />
                <a href="tel:+14693040278" className="hover:text-white transition-colors font-medium">
                  (469) 304-0278
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            🎉 {getText('First-time customers save 50% on pickup & delivery! Use code:', '¡Los clientes nuevos ahorran 50% en recogida y entrega! Use el código:')} 
            <span className="bg-white text-green-600 px-3 py-1 rounded-md ml-2 font-bold">SUMMER2025</span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {getText('Our Services', 'Nuestros Servicios')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {getText('Professional laundry care made easy', 'Cuidado profesional de ropa hecho fácil')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-primary font-bold text-lg">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                {getText('Why Choose LaundroWell?', '¿Por Qué Elegir LaundroWell?')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {getText(
                  'We\'ve been serving the community for over 4 years with reliable, high-quality laundry services.',
                  'Hemos estado sirviendo a la comunidad por más de 4 años con servicios de lavandería confiables y de alta calidad.'
                )}
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>


            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">4+</h3>
                <p className="text-muted-foreground">
                  {getText('Years of Service', 'Años de Servicio')}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">5000+</h3>
                <p className="text-muted-foreground">
                  {getText('Happy Customers', 'Clientes Felices')}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">24 Hrs</h3>
                <p className="text-muted-foreground">
                  {getText('Turn around time', 'Tiempo de entrega')}
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">99%</h3>
                <p className="text-muted-foreground">
                  {getText('Satisfaction Rate', 'Tasa de Satisfacción')}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            {getText('Ready to Experience Clean Care?', '¿Listo para Experimentar Cuidado Limpio?')}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {getText(
              'Schedule your first pickup today and discover the difference quality makes.',
              'Programe su primera recogida hoy y descubra la diferencia que hace la calidad.'
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.trycents.com/order/business/OTUw" target="_blank" rel="noopener noreferrer">
              <Button variant="clean" size="lg" className="text-lg px-8 py-3">
                <Truck className="w-5 h-5 mr-2" />
                {getText('Schedule Pickup', 'Programar Recogida')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;