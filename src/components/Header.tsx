import { Calendar, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-warm-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
            <Sun className="text-primary-foreground w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-primary">Thailand Retirement</h1>
            <p className="text-sm text-muted-foreground">Retire Better for Less in Paradise</p>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">Why Thailand</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors font-medium">Success Stories</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
        </nav>

        <Button 
          className="bg-primary hover:bg-warm-600 text-primary-foreground shadow-lg"
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfYR0tC5P4m6-X18YQSX5fBjMze3wbAaU3cfY8YQJ7Axd4RUw/viewform?usp=dialog', '_blank')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Free Consultation
        </Button>
      </div>
    </header>
  );
};

export default Header;
