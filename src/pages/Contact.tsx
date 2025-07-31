import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [language] = useState<'en' | 'es'>('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const getText = (en: string, es: string) => {
    return language === 'en' ? en : es;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: getText("Error", "Error"),
        description: getText(
          "Please fill in all required fields.",
          "Por favor complete todos los campos requeridos."
        ),
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: getText("Message Sent!", "¡Mensaje Enviado!"),
      description: getText(
        "Thank you for contacting us. We'll get back to you within 24 hours.",
        "Gracias por contactarnos. Le responderemos dentro de 24 horas."
      )
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('Contact Us', 'Contáctenos')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {getText(
              'Get in touch with us for any questions or to schedule service',
              'Póngase en contacto con nosotros para cualquier pregunta o para programar servicio'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
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
                      <a href="tel:+15551234927" className="hover:text-primary transition-colors">
                        (555) 123-WASH
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getText('Available 24/7', 'Disponible 24/7')}
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
                      <a href="mailto:info@cleancare.com" className="hover:text-primary transition-colors">
                        info@cleancare.com
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {getText('We respond within 24 hours', 'Respondemos dentro de 24 horas')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {getText('Hours', 'Horarios')}
                    </h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>{getText('Mon-Thu', 'Lun-Jue')}: 6:00 AM - 10:00 PM</p>
                      <p>{getText('Fri-Sat', 'Vie-Sáb')}: 6:00 AM - 11:00 PM</p>
                      <p>{getText('Sunday', 'Domingo')}: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {getText('Send us a Message', 'Envíenos un Mensaje')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        {getText('Full Name', 'Nombre Completo')} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={getText('Enter your full name', 'Ingrese su nombre completo')}
                        className="mt-1"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        {getText('Email Address', 'Dirección de Email')} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={getText('Enter your email', 'Ingrese su email')}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        {getText('Phone Number', 'Número de Teléfono')}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={getText('Enter your phone number', 'Ingrese su número de teléfono')}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        {getText('Subject', 'Asunto')}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={getText('Message subject', 'Asunto del mensaje')}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {getText('Message', 'Mensaje')} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={getText(
                        'Tell us how we can help you...',
                        'Díganos cómo podemos ayudarle...'
                      )}
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    {getText('Send Message', 'Enviar Mensaje')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {getText('Emergency Contact', 'Contacto de Emergencia')}
              </h2>
              <p className="text-white/90 mb-6">
                {getText(
                  'Need urgent assistance? Our emergency line is available 24/7 for existing pickup/delivery customers.',
                  '¿Necesita asistencia urgente? Nuestra línea de emergencia está disponible 24/7 para clientes existentes de recogida/entrega.'
                )}
              </p>
              <a href="tel:+15551234927" className="inline-block">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {getText('Call Emergency Line', 'Llamar Línea de Emergencia')}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;