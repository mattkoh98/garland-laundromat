import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { getText } = useLanguage();

  const faqs = [
    {
      question: getText('What are your washing machine sizes?', '¿Cuáles son los tamaños de sus lavadoras?'),
      answer: getText(
        'We have regular (up to 20 lbs), large (up to 35 lbs), and extra-large (up to 50 lbs) washing machines to accommodate all your laundry needs.',
        'Tenemos lavadoras regulares (hasta 20 libras), grandes (hasta 35 libras) y extra grandes (hasta 50 libras) para acomodar todas sus necesidades de lavandería.'
      )
    },
    {
      question: getText('Do you accept credit cards?', '¿Aceptan tarjetas de crédito?'),
      answer: getText(
        'Yes, we accept all major credit cards, debit cards, and cash. We also have a convenient mobile payment system.',
        'Sí, aceptamos todas las principales tarjetas de crédito, tarjetas de débito y efectivo. También tenemos un conveniente sistema de pago móvil.'
      )
    },
    {
      question: getText('Do you offer pickup or delivery?', '¿Ofrecen servicio de recogida o entrega?'),
      answer: getText(
        'No, we currently do not offer pickup or delivery service. All services are available in-store, including self-service and wash & fold drop-off.',
        'No, actualmente no ofrecemos servicio de recogida ni entrega. Todos los servicios están disponibles en la tienda, incluido autoservicio y servicio de lavado y doblado.'
      )
    },
    {
      question: getText('What detergents do you use?', '¿Qué detergentes usan?'),
      answer: getText(
        'We use high-quality, eco-friendly detergents that are gentle on fabrics and safe for sensitive skin. If you have specific preferences or allergies, please let us know.',
        'Usamos detergentes ecológicos de alta calidad que son suaves con las telas y seguros para pieles sensibles. Si tiene preferencias específicas o alergias, por favor háganoslo saber.'
      )
    },
    {
      question: getText('Can you handle special garments?', '¿Pueden manejar prendas especiales?'),
      answer: getText(
        'Yes, we can handle delicate items, dry-clean only garments, and specialty items. Please inform our staff about any special care instructions when dropping off your items.',
        'Sí, podemos manejar artículos delicados, prendas solo de tintorería y artículos especiales. Por favor informe a nuestro personal sobre cualquier instrucción especial de cuidado al dejar sus artículos.'
      )
    },
    {
      question: getText('What if I\'m not satisfied with the service?', '¿Qué pasa si no estoy satisfecho con el servicio?'),
      answer: getText(
        'Customer satisfaction is our top priority. If you\'re not completely satisfied, we\'ll rewash your items for free or provide a full refund. Just let us know within 24 hours of your visit.',
        'La satisfacción del cliente es nuestra máxima prioridad. Si no está completamente satisfecho, lavaremos sus artículos nuevamente gratis o proporcionaremos un reembolso completo. Solo háganoslo saber dentro de 24 horas de su visita.'
      )
    },
    {
      question: getText('Do you offer discounts for regular customers?', '¿Ofrecen descuentos para clientes regulares?'),
      answer: getText(
        'Yes! Regular customers receive a 10% discount on all services. First-time customers can use code SUMMER2025 for 50% off their first order.',
        '¡Sí! Los clientes regulares reciben un 10% de descuento en todos los servicios. Los clientes nuevos pueden usar el código SUMMER2025 para 50% de descuento en su primer pedido.'
      )
    },
    {
      question: getText('How do I know when my laundry is ready?', '¿Cómo sé cuándo está lista mi ropa?'),
      answer: getText(
        'When you drop off your laundry, our staff will provide an estimated completion time. You can return at that time or call us if you\'d like an update.',
        'Cuando deje su ropa, nuestro personal le proporcionará una hora estimada de finalización. Puede regresar a esa hora o llamarnos si desea una actualización.'
      )
    },
    {
      question: getText('What are your busiest hours?', '¿Cuáles son sus horas más ocupadas?'),
      answer: getText(
        'Our busiest times are typically Saturday mornings and Sunday afternoons. For faster service, we recommend visiting during weekday mornings or early evenings.',
        'Nuestros tiempos más ocupados son típicamente los sábados por la mañana y los domingos por la tarde. Para un servicio más rápido, recomendamos visitar durante las mañanas de días laborables o temprano en las tardes.'
      )
    },
    {
      question: getText('Do you provide laundry bags or baskets?', '¿Proporcionan bolsas o canastas de lavandería?'),
      answer: getText(
        'We will use what you provide when you drop off your laundry. If not, we will use disposable bags.',
        'Usaremos lo que usted proporcione cuando deje su ropa. Si no, usaremos bolsas desechables.'
      )
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('Frequently Asked Questions', 'Preguntas Frecuentes')}
          </h1>
          <p className="text-xl text-muted-foreground">
            {getText(
              'Find answers to common questions about our services',
              'Encuentre respuestas a preguntas comunes sobre nuestros servicios'
            )}
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card>
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-laundry-blue to-laundry-blue-dark text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">
                {getText('Still have questions?', '¿Aún tiene preguntas?')}
              </h2>
              <p className="text-white/90 mb-6">
                {getText(
                  'Our friendly staff is here to help! Contact us and we\'ll be happy to assist you.',
                  '¡Nuestro personal amigable está aquí para ayudar! Contáctenos y estaremos felices de asistirle.'
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+12102579402" className="inline-block">
                  <button className="bg-white text-laundry-blue px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    {getText('Call Us: (210) 257-9402', 'Llámenos: (210) 257-9402')}
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;