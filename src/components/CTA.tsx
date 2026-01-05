import { Calendar, ArrowRight, Clock, Shield, Users, Gift, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-warm-700 via-primary to-warm-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 left-10 text-white/10 animate-pulse">
        <Sun size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/10 animate-pulse delay-1000">
        <Sun size={80} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            <Gift className="w-4 h-4 mr-2" />
            Limited Time: Free Retirement Assessment
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Ready to Escape High U.S. Living Costs?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Book your free consultation today and discover how you can live better for 70% less in tropical paradise. Our experts will create your personalized Thailand retirement plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/15 border-white/30 text-white backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Clock className="w-10 h-10 mx-auto mb-4 text-white/90" />
              <h3 className="text-lg font-display font-semibold mb-2">Free 30-Minute Assessment</h3>
              <p className="text-white/80">Personalized retirement cost analysis and Thailand suitability review</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 border-white/30 text-white backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Shield className="w-10 h-10 mx-auto mb-4 text-white/90" />
              <h3 className="text-lg font-display font-semibold mb-2">Expert Guidance</h3>
              <p className="text-white/80">Visa strategies, housing options, and healthcare navigation</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/15 border-white/30 text-white backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <Users className="w-10 h-10 mx-auto mb-4 text-white/90" />
              <h3 className="text-lg font-display font-semibold mb-2">Custom Retirement Plan</h3>
              <p className="text-white/80">Tailored strategy for your budget, lifestyle, and timeline</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-warm-50 px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            <Calendar className="w-6 h-6 mr-3" />
            Get Your FREE Thailand Retirement Plan
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          
          <div className="space-y-2">
            <p className="text-sm text-white/80">
              No obligation • 500+ Americans served • A+ BBB Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
