import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Sparkles, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-laundromat.jpg";
import OpeningSpecialFront from "@/assets/EDDM bilingual - final-1.png";
import OpeningSpecialBack from "@/assets/EDDM bilingual - final-2.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { getMarketConfig } from "@/lib/market";

const Home = () => {
  const { getText } = useLanguage();
  const { market } = useParams();
  const marketConfig = getMarketConfig(market);
  const basePath = `/${marketConfig.key}`;

  const services = [
    {
      icon: Sparkles,
      title: getText('Self-Service Laundry', 'Lavandería de Autoservicio'),
      description: getText('Clean, modern machines in a comfortable space', 'Máquinas modernas y un espacio cómodo'),
      price: getText('Great prices every day', 'Excelentes precios todos los días')
    },
    {
      icon: Clock,
      title: getText('Wash & Fold Drop-Off', 'Servicio de Lavado y Doblado'),
      description: getText('Professional cleaning and folding service', 'Servicio profesional de lavado y doblado'),
      price: getText('Call for current pricing', 'Llame para precios actuales')
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
    getText('Clean, comfortable environment', 'Ambiente limpio y cómodo'),
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
              `Your neighborhood laundromat in ${marketConfig.name} with self-service and wash & fold options`,
              `Su lavandería de confianza en ${marketConfig.name} con opciones de autoservicio y lavado y doblado`
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`${basePath}/location`}>
              <Button variant="clean" size="lg" className="text-lg px-8 py-3">
                {getText('Get Directions', 'Obtener Direcciones')}
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90 text-lg">
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">{marketConfig.fullAddress}</span>
              </div>
              <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Phone className="w-5 h-5" />
                <a href={`tel:${marketConfig.phoneHref}`} className="hover:text-white transition-colors font-medium">
                  {marketConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {marketConfig.key === "san-antonio" && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
              <div>
                <p className="inline-flex items-center rounded-full bg-laundry-blue/10 text-laundry-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                  {getText('Opening Special', 'Especial de Apertura')}
                </p>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {getText('Next Level Laundromat Grand Opening', 'Gran Apertura de Next Level Laundromat')}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                  {getText(
                    'Check your mailer or visit our store to see our bilingual grand‑opening offers, designed to make your first visit easy and affordable.',
                    'Revise su correo o visite nuestra tienda para ver nuestras ofertas bilingües de gran apertura, diseñadas para que su primera visita sea fácil y económica.'
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <img
                    src={OpeningSpecialFront}
                    alt="Grand opening bilingual mailer front"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-border/60 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <img
                    src={OpeningSpecialBack}
                    alt="Grand opening bilingual mailer back"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Free Dry Promo — Garland only */}
      {marketConfig.key === "garland" && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <p className="inline-flex items-center rounded-full bg-laundry-blue/10 text-laundry-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                {getText('Exclusive Offer', 'Oferta Exclusiva')}
              </p>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {getText('Free Dry With Every Wash', 'Secado Gratis con Cada Lavado')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {getText(
                  'At our Garland location, every self-service wash cycle comes with a free dryer cycle. Wash and dry for the price of one.',
                  'En nuestra ubicación de Garland, cada ciclo de lavado de autoservicio incluye un ciclo de secado gratis. Lave y seque por el precio de uno.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-medium transition-all duration-300 transform hover:scale-105 border-laundry-blue/20">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-laundry-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-7 h-7 text-laundry-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {getText('Wash Your Clothes', 'Lave Su Ropa')}
                  </h3>
                  <p className="text-muted-foreground">
                    {getText('Use any of our modern self-service washing machines', 'Use cualquiera de nuestras modernas lavadoras de autoservicio')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-laundry-blue to-laundry-blue-dark border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-1">
                    {getText('You Get', 'Usted Recibe')}
                  </p>
                  <h3 className="text-4xl font-black text-white mb-1">
                    {getText('FREE', 'GRATIS')}
                  </h3>
                  <p className="text-2xl font-bold text-white/90">
                    {getText('Dryer Cycle', 'Ciclo de Secado')}
                  </p>
                  <p className="text-white/70 text-sm mt-3">
                    {getText('No coupons needed', 'Sin cupones necesarios')}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300 transform hover:scale-105 border-laundry-blue/20">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-laundry-blue/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-laundry-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {getText('Save Every Visit', 'Ahorre en Cada Visita')}
                  </h3>
                  <p className="text-muted-foreground">
                    {getText('Available 7 days a week — no limits, no fine print', 'Disponible 7 días a la semana — sin límites, sin letra pequeña')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              {getText('Valid at LaundroWell Garland location only · 2006 W Buckingham Rd, Garland, TX 75042', 'Válido solo en LaundroWell Garland · 2006 W Buckingham Rd, Garland, TX 75042')}
            </p>
          </div>
        </section>
      )}

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
                  'We\'ve been serving the community for over 10 years with reliable, high-quality laundry services.',
                  'Hemos estado sirviendo a la comunidad por más de 10 años con servicios de lavandería confiables y de alta calidad.'
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
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
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
              `Visit us at our ${marketConfig.name} location and discover the difference quality makes.`,
              `Visítenos en nuestra ubicación de ${marketConfig.name} y descubra la diferencia que hace la calidad.`
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`${basePath}/location`}>
              <Button variant="clean" size="lg" className="text-lg px-8 py-3">
                <MapPin className="w-5 h-5 mr-2" />
                {getText('Get Directions', 'Obtener Direcciones')}
              </Button>
            </Link>
            <a href={`tel:${marketConfig.phoneHref}`}>
              <Button variant="clean" size="lg" className="text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                {getText('Call the Store', 'Llamar a la Tienda')}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;