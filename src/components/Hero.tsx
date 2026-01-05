import { ArrowRight, MapPin, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/thailand-hero.png')`
        }}
      >

      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
              Live Better for Less in Paradise
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Retire in{' '}
              <span className="text-accent">Thailand</span>
              <br />with Confidence
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From the U.S. to Thailand - Retire with Ease. We guide American retirees through every step of relocating to Thailand, from visa applications to finding your perfect home.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-warm-600 text-primary-foreground px-8 py-4 text-lg shadow-lg"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfYR0tC5P4m6-X18YQSX5fBjMze3wbAaU3cfY8YQJ7Axd4RUw/viewform?usp=dialog', '_blank')}
            >
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Happy Retirees</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">$500</div>
              <div className="text-sm text-white/80">Monthly Housing</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 right-8 hidden lg:block">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold text-primary">70% Less</div>
              <div className="text-sm text-muted-foreground">Than U.S. Living Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
