import { CheckCircle, Award, DollarSign, Stethoscope, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const benefits = [
    "Western-style housing under $500/month vs $2,000+ in the U.S.",
    "World-class healthcare at 70% less cost than America",
    "Delicious meals for $2-$5 vs $15-$25 in the U.S.",
    "Year-round tropical climate perfect for active living",
    "Established expat communities with 24/7 English support",
    "Total monthly budget of $1,200-$1,800 for luxury living"
  ];

  const stats = [
    { icon: DollarSign, value: "$500", label: "Monthly Housing", description: "Luxury condos" },
    { icon: Stethoscope, value: "70%", label: "Healthcare Savings", description: "World-class care" },
    { icon: Heart, value: "$3", label: "Average Meal", description: "Restaurant quality" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-warm-50 to-warm-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-warm-200 text-warm-800 rounded-full text-sm font-medium mb-4">
                Why Thailand?
              </div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Retire Better for Less in Paradise
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                While housing costs soar in America, thousands of smart retirees have discovered Thailand's secret: luxury living at a fraction of U.S. costs. Experience dignity, comfort, and adventure without breaking the bank.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-warm-600 text-primary-foreground shadow-lg"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              Schedule Your Free Consultation
            </Button>
          </div>

          <div className="space-y-8">
            <img 
              src="https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=600&h=400"
              alt="Luxury tropical living in Thailand"
              className="rounded-2xl shadow-2xl"
            />
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  <div className="text-xs text-primary">{stat.description}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-lg border-l-4 border-primary">
              <div className="flex items-center mb-2">
                <Award className="w-6 h-6 text-primary mr-2" />
                <span className="font-display font-semibold text-foreground">Trusted by 500+ American Retirees</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Join the community of Americans who've discovered affordable luxury in Thailand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
