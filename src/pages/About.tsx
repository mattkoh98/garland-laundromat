import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Award } from "lucide-react";

const About = () => {
  const [language] = useState<'en' | 'es'>('en');

  const getText = (en: string, es: string) => {
    return language === 'en' ? en : es;
  };

  const values = [
    {
      icon: Heart,
      title: getText('Quality Care', 'Cuidado de Calidad'),
      description: getText(
        'We treat every garment with the same care as if it were our own.',
        'Tratamos cada prenda con el mismo cuidado como si fuera nuestra.'
      )
    },
    {
      icon: Users,
      title: getText('Community First', 'Comunidad Primero'),
      description: getText(
        'Supporting our local community is at the heart of everything we do.',
        'Apoyar a nuestra comunidad local está en el corazón de todo lo que hacemos.'
      )
    },
    {
      icon: Leaf,
      title: getText('Eco-Friendly', 'Ecológico'),
      description: getText(
        'Using environmentally safe detergents and energy-efficient machines.',
        'Usando detergentes ambientalmente seguros y máquinas eficientes en energía.'
      )
    },
    {
      icon: Award,
      title: getText('Excellence', 'Excelencia'),
      description: getText(
        'Committed to providing exceptional service and customer satisfaction.',
        'Comprometidos a brindar servicio excepcional y satisfacción del cliente.'
      )
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: getText('Owner & Manager', 'Propietaria y Gerente'),
      description: getText(
        'Sarah founded CleanCare in 2020 with a vision to provide the community with reliable, high-quality laundry services.',
        'Sarah fundó CleanCare en 2020 con la visión de brindar a la comunidad servicios de lavandería confiables y de alta calidad.'
      )
    },
    {
      name: 'Miguel Rodriguez',
      role: getText('Operations Supervisor', 'Supervisor de Operaciones'),
      description: getText(
        'Miguel ensures every load meets our high standards and trains our team in best practices.',
        'Miguel asegura que cada carga cumpla con nuestros altos estándares y entrena a nuestro equipo en mejores prácticas.'
      )
    },
    {
      name: 'Lisa Chen',
      role: getText('Customer Service Lead', 'Líder de Servicio al Cliente'),
      description: getText(
        'Lisa manages customer relationships and ensures every interaction exceeds expectations.',
        'Lisa maneja las relaciones con los clientes y asegura que cada interacción supere las expectativas.'
      )
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {getText('About CleanCare', 'Acerca de CleanCare')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {getText(
              'Your trusted neighborhood laundromat committed to providing exceptional service and care for your garments.',
              'Su lavandería de confianza del vecindario comprometida a brindar servicio excepcional y cuidado para sus prendas.'
            )}
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    {getText('Our Story', 'Nuestra Historia')}
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      {getText(
                        'CleanCare Laundromat opened its doors in 2020 with a simple mission: to provide our community with reliable, high-quality laundry services in a clean, welcoming environment.',
                        'Lavandería CleanCare abrió sus puertas en 2020 con una misión simple: brindar a nuestra comunidad servicios de lavandería confiables y de alta calidad en un ambiente limpio y acogedor.'
                      )}
                    </p>
                    <p>
                      {getText(
                        'What started as a family business has grown into a cornerstone of the neighborhood, serving thousands of satisfied customers who trust us with their most precious garments.',
                        'Lo que comenzó como un negocio familiar ha crecido hasta convertirse en una piedra angular del vecindario, sirviendo a miles de clientes satisfechos que confían en nosotros con sus prendas más preciadas.'
                      )}
                    </p>
                    <p>
                      {getText(
                        'Today, we continue to evolve, adding new services like pickup and delivery while maintaining the personal touch and attention to detail that our customers love.',
                        'Hoy, continuamos evolucionando, agregando nuevos servicios como recogida y entrega mientras mantenemos el toque personal y la atención al detalle que nuestros clientes aman.'
                      )}
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-laundry-blue to-laundry-blue-dark p-8 lg:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    {getText('By the Numbers', 'En Números')}
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-white/80">
                        {getText('Happy Customers', 'Clientes Felices')}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">50,000+</div>
                      <div className="text-white/80">
                        {getText('Loads Processed', 'Cargas Procesadas')}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">99%</div>
                      <div className="text-white/80">
                        {getText('Customer Satisfaction', 'Satisfacción del Cliente')}
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">4+</div>
                      <div className="text-white/80">
                        {getText('Years of Service', 'Años de Servicio')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {getText('Our Values', 'Nuestros Valores')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {getText(
                'The principles that guide everything we do',
                'Los principios que guían todo lo que hacemos'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {getText('Meet Our Team', 'Conozca Nuestro Equipo')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {getText(
                'The dedicated professionals who make CleanCare special',
                'Los profesionales dedicados que hacen especial a CleanCare'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-laundry-blue to-laundry-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-laundry-blue to-laundry-blue-dark text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                {getText('Community Commitment', 'Compromiso con la Comunidad')}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {getText(
                  'We believe in giving back to the community that has supported us. From sponsoring local sports teams to providing free laundry services for those in need, CleanCare is proud to be a positive force in our neighborhood.',
                  'Creemos en retribuir a la comunidad que nos ha apoyado. Desde patrocinar equipos deportivos locales hasta brindar servicios de lavandería gratuitos para los necesitados, CleanCare se enorgullece de ser una fuerza positiva en nuestro vecindario.'
                )}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">12</div>
                  <div className="text-white/80">
                    {getText('Local Sponsorships', 'Patrocinios Locales')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-white/80">
                    {getText('Free Loads Donated', 'Cargas Gratuitas Donadas')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">8</div>
                  <div className="text-white/80">
                    {getText('Community Events', 'Eventos Comunitarios')}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;