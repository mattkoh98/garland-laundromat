import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation } from "lucide-react";

const Location = () => {
  const [language] = useState<'en' | 'es'>('en');

  const getText = (en: string, es: string) => {
    return language === 'en' ? en : es;
  };

  const hours = [
    { day: getText('Monday', 'Lunes'), hours: '6:00 AM - 10:00 PM' },
    { day: getText('Tuesday', 'Martes'), hours: '6:00 AM - 10:00 PM' },
    { day: getText('Wednesday', 'Miércoles'), hours: '6:00 AM - 10:00 PM' },
    { day: getText('Thursday', 'Jueves'), hours: '6:00 AM - 10:00 PM' },
    { day: getText('Friday', 'Viernes'), hours: '6:00 AM - 11:00 PM' },
    { day: getText('Saturday', 'Sábado'), hours: '7:00 AM - 11:00 PM' },
    { day: getText('Sunday', 'Domingo'), hours: '7:00 AM - 9:00 PM' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('Visit Our Location', 'Visite Nuestra Ubicación')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {getText('Find us in the heart of the city', 'Encuéntrenos en el corazón de la ciudad')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <Card className="overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-laundry-light to-accent flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  {getText('Interactive Map Coming Soon', 'Mapa Interactivo Próximamente')}
                </p>
                <Button variant="outline" className="mt-4">
                  <Navigation className="w-4 h-4 mr-2" />
                  {getText('Get Directions', 'Obtener Direcciones')}
                </Button>
              </div>
            </div>
          </Card>

          {/* Location Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getText('Address', 'Dirección')}
                    </h3>
                    <p className="text-muted-foreground">
                      123 Clean Street<br />
                      Laundry City, LC 12345<br />
                      {getText('United States', 'Estados Unidos')}
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
                      {getText('Phone', 'Teléfono')}
                    </h3>
                    <p className="text-muted-foreground">
                      (555) 123-WASH<br />
                      <span className="text-sm">
                        {getText('Available 24/7 for emergencies', 'Disponible 24/7 para emergencias')}
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getText('Email', 'Correo Electrónico')}
                    </h3>
                    <p className="text-muted-foreground">
                      info@cleancare.com<br />
                      <span className="text-sm">
                        {getText('We respond within 24 hours', 'Respondemos dentro de 24 horas')}
                      </span>
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

              <div className="mt-6 p-4 bg-laundry-light rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>{getText('Note:', 'Nota:')}</strong> {getText(
                    'Last wash starts 1 hour before closing time. Pickup & delivery service available during these hours.',
                    'El último lavado comienza 1 hora antes del horario de cierre. Servicio de recogida y entrega disponible durante estos horarios.'
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
                  <span className="text-white font-bold text-xl">20</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Washing Machines', 'Lavadoras')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('High-efficiency machines for all load sizes', 'Máquinas de alta eficiencia para todos los tamaños de carga')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">15</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Dryers', 'Secadoras')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Fast-drying technology with gentle care', 'Tecnología de secado rápido con cuidado suave')}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {getText('Free WiFi', 'WiFi Gratuito')}
                </h3>
                <p className="text-muted-foreground">
                  {getText('Stay connected while you wait', 'Manténgase conectado mientras espera')}
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