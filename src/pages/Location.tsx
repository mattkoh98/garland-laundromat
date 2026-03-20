import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "react-router-dom";
import { getMarketConfig } from "@/lib/market";

const Location = () => {
  const { getText } = useLanguage();
  const { market } = useParams();
  const marketConfig = getMarketConfig(market);

  const hours = [
    { day: getText('Monday', 'Lunes'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Tuesday', 'Martes'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Wednesday', 'Miércoles'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Thursday', 'Jueves'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Friday', 'Viernes'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Saturday', 'Sábado'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Sunday', 'Domingo'), hours: '7:00 AM - 11:00 PM' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('Visit Our Location', 'Visite Nuestra Ubicación')}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="overflow-hidden">
            <div className="h-96">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw&q=${marketConfig.mapQuery}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`LaundroWell ${marketConfig.name} Location`}
              />
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getText("Address", "Direccion")}
                    </h3>
                    <p className="text-muted-foreground">
                      {marketConfig.addressLine1}<br />
                      {marketConfig.addressLine2}<br />
                      {getText("United States", "Estados Unidos")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getText("Phone", "Telefono")}
                    </h3>
                    <p className="text-muted-foreground">
                      <a href={`tel:${marketConfig.phoneHref}`} className="hover:text-primary transition-colors">
                        {marketConfig.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Hours Section */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  {getText('Operating Hours', 'Horarios de Operación')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {hours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground">{item.day}</span>
                    <span className="text-muted-foreground">{item.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
                <p className="text-sm text-muted-foreground">
                  <strong>{getText('Note:', 'Nota:')}</strong> {getText(
                    'LAST WASH AT 10PM. Professional drop-off services available during operating hours.',
                    'ÚLTIMO LAVADO A LAS 10PM. Servicios profesionales de entrega disponibles durante las horas de operación.'
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Facilities Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {getText('Our Facilities', 'Nuestras Instalaciones')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">85lb</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Large Capacity Washers', 'Lavadoras de Gran Capacidad')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('State-of-the-art equipment up to 85lbs capacity', 'Equipos de última generación de hasta 85 libras de capacidad')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">55lb</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('High-Capacity Dryers', 'Secadoras de Alta Capacidad')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Fast-drying technology up to 55lbs capacity', 'Tecnología de secado rápido de hasta 55 libras de capacidad')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">💳</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Card System', 'Sistema de Tarjeta')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('No coins, no mess. Easy-to-use store card system', 'Sin monedas, sin desorden. Sistema de tarjeta fácil de usar')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {getText('Our Amenities', 'Nuestras Comodidades')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Affordable Pricing', 'Precios Asequibles')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Competitive rates for all your laundry needs', 'Tarifas competitivas para todas sus necesidades de lavandería')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Professional Staff', 'Personal Profesional')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Friendly & professional staff, always attended!', '¡Personal amable y profesional, siempre atendido!')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Fast Service', 'Servicio Rápido')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Faster wash & dry with state-of-the-art equipment', 'Lavado y secado más rápido con equipos de última generación')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Safe & Clean', 'Seguro y Limpio')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Safe and clean environment for your entire family', 'Ambiente seguro y limpio para toda su familia')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Drop-off Service', 'Servicio de Entrega')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Professional drop-off services at affordable prices', 'Servicios profesionales de entrega a precios asequibles')}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Clean Bathrooms', 'Baños Limpios')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Clean and spacious bathrooms sanitized every hour', 'Baños limpios y espaciosos desinfectados cada hora')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;