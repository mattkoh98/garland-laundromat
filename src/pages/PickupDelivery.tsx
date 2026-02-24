import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Truck, Clock, Star, Gift, Calculator, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const PickupDelivery = () => {
  const { getText } = useLanguage();
  const [weight, setWeight] = useState<number>(10);
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [isRepeatCustomer, setIsRepeatCustomer] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    instructions: '',
    pickupDate: '',
    pickupTime: '',
    preferences: ''
  });
  const { toast } = useToast();



  const calculatePrice = () => {
    let basePrice = weight * 3; // $3/lb
    
    if (isRepeatCustomer) {
      basePrice *= 0.9; // 10% discount
    }
    
    if (isFirstTime && promoCode.toUpperCase() === 'SUMMER2025') {
      basePrice *= 0.5; // 50% discount
    }
    
    return basePrice.toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderForm.name || !orderForm.phone || !orderForm.address) {
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

    if (weight < 10) {
      toast({
        title: getText("Minimum Order", "Pedido Mínimo"),
        description: getText(
          "Minimum order is 10 lbs.",
          "El pedido mínimo es de 10 libras."
        ),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: getText("Order Scheduled!", "¡Pedido Programado!"),
      description: getText(
        "Your pickup has been scheduled. We'll contact you to confirm the time.",
        "Su recogida ha sido programada. Lo contactaremos para confirmar la hora."
      )
    });

    // Reset form
    setOrderForm({
      name: '',
      phone: '',
      email: '',
      address: '',
      instructions: '',
      pickupDate: '',
      pickupTime: '',
      preferences: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderForm({
      ...orderForm,
      [e.target.name]: e.target.value
    });
  };

  const features = [
    {
      icon: Truck,
      title: getText('Free Pickup & Delivery', 'Recogida y Entrega Gratuita'),
      description: getText('On orders $30 and above', 'En pedidos de $30 y más')
    },
    {
      icon: Clock,
      title: getText('24-48 Hour Turnaround', 'Entrega en 24-48 Horas'),
      description: getText('Quick and reliable service', 'Servicio rápido y confiable')
    },
    {
      icon: Star,
      title: getText('Premium Care', 'Cuidado Premium'),
      description: getText('Professional wash, dry, and fold', 'Lavado, secado y doblado profesional')
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('Pickup & Delivery Service', 'Servicio de Recogida y Entrega')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {getText(
              'Convenient laundry service delivered to your door',
              'Servicio de lavandería conveniente entregado a su puerta'
            )}
          </p>
        </div>

        {/* Promo Banner */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Gift className="w-6 h-6" />
                <h2 className="text-2xl font-bold">
                  {getText('Special Offers', 'Ofertas Especiales')}
                </h2>
              </div>
              <p className="text-lg mb-4">
                🎉 {getText('First-time customers save 50%! Use code:', '¡Los clientes nuevos ahorran 50%! Use el código:')} 
                <span className="bg-white text-green-600 px-3 py-1 rounded-md ml-2 font-bold">SUMMER2025</span>
              </p>
              <p className="text-lg">
                ⭐ {getText('Repeat customers always get 10% off!', '¡Los clientes habituales siempre obtienen 10% de descuento!')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pricing Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-primary" />
                <span>{getText('Price Calculator', 'Calculadora de Precios')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="weight" className="text-foreground">
                  {getText('Estimated Weight (lbs)', 'Peso Estimado (libras)')}
                </Label>
                <Input
                  id="weight"
                  type="number"
                  min="10"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {getText('Minimum 10 lbs required', 'Mínimo 10 libras requeridas')}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="firstTime"
                    checked={isFirstTime}
                    onCheckedChange={(checked) => {
                      setIsFirstTime(checked as boolean);
                      if (checked) setIsRepeatCustomer(false);
                    }}
                  />
                  <label htmlFor="firstTime" className="text-sm text-foreground">
                    {getText('First-time customer', 'Cliente nuevo')}
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="repeat"
                    checked={isRepeatCustomer}
                    onCheckedChange={(checked) => {
                      setIsRepeatCustomer(checked as boolean);
                      if (checked) setIsFirstTime(false);
                    }}
                  />
                  <label htmlFor="repeat" className="text-sm text-foreground">
                    {getText('Repeat customer (10% off)', 'Cliente habitual (10% descuento)')}
                  </label>
                </div>
              </div>

              {isFirstTime && (
                <div>
                  <Label htmlFor="promoCode" className="text-foreground">
                    {getText('Promo Code', 'Código Promocional')}
                  </Label>
                  <Input
                    id="promoCode"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="SUMMER2025"
                    className="mt-1"
                  />
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-foreground">
                    {getText('Total Price:', 'Precio Total:')}
                  </span>
                  <span className="font-bold text-primary text-xl">
                    ${calculatePrice()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {getText('Base rate: $3/lb', 'Tarifa base: $3/libra')}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Order Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                {getText('Schedule Pickup', 'Programar Recogida')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    {getText('Full Name', 'Nombre Completo')} *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={orderForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      {getText('Phone', 'Teléfono')} *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={orderForm.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      {getText('Email', 'Email')}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={orderForm.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" className="text-foreground">
                    {getText('Pickup Address', 'Dirección de Recogida')} *
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={orderForm.address}
                    onChange={handleInputChange}
                    placeholder={getText(
                      'Street address, apartment/unit, city, state, zip',
                      'Dirección, apartamento/unidad, ciudad, estado, código postal'
                    )}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pickupDate" className="text-foreground">
                      {getText('Preferred Date', 'Fecha Preferida')}
                    </Label>
                    <Input
                      id="pickupDate"
                      name="pickupDate"
                      type="date"
                      value={orderForm.pickupDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="pickupTime" className="text-foreground">
                      {getText('Preferred Time', 'Hora Preferida')}
                    </Label>
                    <Select
                      value={orderForm.pickupTime}
                      onValueChange={(value) => setOrderForm({...orderForm, pickupTime: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={getText('Select time', 'Seleccione hora')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          {getText('Morning (8AM-12PM)', 'Mañana (8AM-12PM)')}
                        </SelectItem>
                        <SelectItem value="afternoon">
                          {getText('Afternoon (12PM-5PM)', 'Tarde (12PM-5PM)')}
                        </SelectItem>
                        <SelectItem value="evening">
                          {getText('Evening (5PM-8PM)', 'Noche (5PM-8PM)')}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="instructions" className="text-foreground">
                    {getText('Special Instructions', 'Instrucciones Especiales')}
                  </Label>
                  <Textarea
                    id="instructions"
                    name="instructions"
                    value={orderForm.instructions}
                    onChange={handleInputChange}
                    placeholder={getText(
                      'Delivery instructions, special requests, etc.',
                      'Instrucciones de entrega, solicitudes especiales, etc.'
                    )}
                  />
                </div>

                <div>
                  <Label htmlFor="preferences" className="text-foreground">
                    {getText('Washing Preferences', 'Preferencias de Lavado')}
                  </Label>
                  <Textarea
                    id="preferences"
                    name="preferences"
                    value={orderForm.preferences}
                    onChange={handleInputChange}
                    placeholder={getText(
                      'Detergent preferences, temperature settings, etc.',
                      'Preferencias de detergente, configuración de temperatura, etc.'
                    )}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Truck className="w-4 h-4 mr-2" />
                  {getText('Schedule Pickup', 'Programar Recogida')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {getText('How It Works', 'Cómo Funciona')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: getText('Schedule', 'Programar'),
                description: getText('Book online or call us', 'Reserve en línea o llámenos')
              },
              {
                step: '2',
                title: getText('Pickup', 'Recogida'),
                description: getText('We collect your laundry', 'Recogemos su ropa')
              },
              {
                step: '3',
                title: getText('Clean', 'Lavar'),
                description: getText('Professional wash & fold', 'Lavado y doblado profesional')
              },
              {
                step: '4',
                title: getText('Deliver', 'Entregar'),
                description: getText('Fresh laundry delivered', 'Ropa fresca entregada')
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Need Help? */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-laundry-blue to-laundry-blue-dark text-white">
            <CardContent className="p-8 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                {getText('Need Help?', '¿Necesita Ayuda?')}
              </h2>
              <p className="text-white/90 mb-6">
                {getText(
                  'Call us with any questions about our services.',
                  'Llámenos si tiene alguna pregunta sobre nuestros servicios.'
                )}
              </p>
              <a href="tel:+12102579402" className="inline-block">
                <Button variant="clean" size="lg">
                  <Phone className="w-4 h-4 mr-2" />
                  {getText('Call (210) 257-9402', 'Llamar (210) 257-9402')}
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PickupDelivery;