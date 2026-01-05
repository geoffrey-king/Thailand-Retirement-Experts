import { FileText, Home, Plane, Users, Phone, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Visa & Legal Support",
      description: "Complete retirement visa assistance, extensions, and legal documentation for seamless relocation.",
      highlight: "Full compliance guaranteed"
    },
    {
      icon: Home,
      title: "Premium Housing Solutions",
      description: "Find luxury condos and villas under $500/month in Thailand's most desirable expat communities.",
      highlight: "Western-style comfort"
    },
    {
      icon: Heart,
      title: "Healthcare Navigation",
      description: "Access world-class hospitals and affordable healthcare that puts U.S. systems to shame.",
      highlight: "Top-tier facilities"
    },
    {
      icon: Plane,
      title: "Guided Relocation Tours",
      description: "7-10 day all-inclusive tours to experience your new life before making the move.",
      highlight: "Experience before you move"
    },
    {
      icon: Users,
      title: "Expat Community Integration",
      description: "Connect with thriving American expat communities and build lasting friendships.",
      highlight: "Instant social network"
    },
    {
      icon: Phone,
      title: "Ongoing Concierge Support",
      description: "24/7 assistance throughout your entire retirement journey with dedicated support.",
      highlight: "Always here for you"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-warm-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-4">
            Premium Retirement Services
          </div>
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need for Paradise Living
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From visa applications to luxury housing, we handle every detail of your transition to affordable paradise living in Thailand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-card hover:bg-gradient-to-br hover:from-card hover:to-warm-50">
              <CardHeader>
                <div className="bg-gradient-to-br from-warm-100 to-warm-200 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-display font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
                <div className="text-sm font-medium text-primary">
                  {service.highlight}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
