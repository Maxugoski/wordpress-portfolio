import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[hsl(var(--hero-bg))]" 
           style={{ background: 'var(--gradient-hero)' }} 
      />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          <div className="space-y-8 text-hero-foreground animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm a WordPress Developer.
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl opacity-95">
              <p>
                I've been building custom WordPress sites for over 10 years. I specialize in creating fast, accessible, and maintainable websites.
              </p>
              <p>
                My custom themes and plugins are built from the ground up to meet your specific needs without the bloat of off-the-shelf solutions.
              </p>
            </div>
            
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-hero-foreground text-hero-bg hover:bg-hero-foreground/90 shadow-elegant group"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-hero-foreground/10 backdrop-blur-sm" />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
