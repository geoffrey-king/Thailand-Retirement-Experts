import { Sun, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-warm-900 to-warm-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <Sun className="text-primary-foreground w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">My Thai Retirement</h3>
              <p className="text-sm text-warm-300">Retire Better for Less in Paradise</p>
            </div>
          </div>
          
          <p className="text-warm-200 leading-relaxed max-w-xl">
            Your trusted partner for affordable luxury retirement in Thailand. Expert guidance for Americans seeking financial freedom and tropical paradise living.
          </p>

          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-warm-300">Our Services</h4>
            <ul className="space-y-2 text-warm-200">
              <li>Free Consultations ($99 value)</li>
              <li>Retirement Planning</li>
              <li>Guided Tours</li>
              <li>Visa & Legal Support</li>
            </ul>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-warm-600 text-primary-foreground px-8 py-4 text-lg shadow-lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfYR0tC5P4m6-X18YQSX5fBjMze3wbAaU3cfY8YQJ7Axd4RUw/viewform?usp=dialog', '_blank')}
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="border-t border-warm-700 mt-12 pt-8 text-center text-warm-400">
          <p>&copy; 2025 My Thai Retirement. All rights reserved.</p>
          <p className="mt-2 text-sm">Helping Americans retire better since 2014 • 500+ Success Stories</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
