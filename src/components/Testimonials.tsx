import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert & Mary Johnson",
      age: "Retired Teachers, 67 & 65",
      location: "Chiang Mai, Thailand",
      text: "My Thai Retirement saved us from financial stress. We're living like royalty on our Social Security - luxury condo, world-class healthcare, and incredible food for $1,400/month total. Best decision we ever made!",
      rating: 5,
      savings: "Saving $2,800/month vs. Florida"
    },
    {
      name: "David Chen",
      age: "Early Retiree, 52",
      location: "Bangkok, Thailand", 
      text: "I achieved FIRE at 50 thanks to Thailand's low costs. The team handled everything - visa, housing, banking. Now I live in a luxury high-rise for what I paid for a studio apartment in San Francisco.",
      rating: 5,
      savings: "Living on $1,600/month vs. $4,500 in SF"
    },
    {
      name: "Susan Williams",
      age: "Veteran, 61",
      location: "Phuket, Thailand",
      text: "On my pension alone, I'm living better than I ever did in the U.S. Private healthcare, beachfront living, and a vibrant expat community. The ongoing support has been incredible.",
      rating: 5,
      savings: "Luxury lifestyle on veteran's pension"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warm-100 text-warm-700 rounded-full text-sm font-medium mb-4">
            Real Success Stories
          </div>
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">
            Americans Living Their Best Life in Thailand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how real retirees transformed their golden years with affordable luxury living in paradise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary to-accent transform rotate-45 translate-x-8 -translate-y-8"></div>
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-display font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.age}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm font-medium text-primary mt-2 bg-warm-50 px-3 py-1 rounded-full inline-block">
                    {testimonial.savings}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
