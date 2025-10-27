import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import meImg from "@/imgs/me.png";

export const Hero = () => {
  return (
  <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[hsl(var(--hero-bg))]" 
           style={{ background: 'var(--gradient-hero)' }} 
      />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm a WordPress Developer.
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl opacity-95">
              <p>
                I've been building custom WordPress sites for over 5 years. I live and breathe WordPress.
              </p>
              <p>My custom-built websites are fast loading, accessible, and easy to manage.
                My custom themes and plugins are built from the ground up to meet your specific needs 
                without the bloat of off-the-shelf solutions.
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
          
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={meImg}
                alt="Portrait of me"
                className="w-full h-full object-cover object-top"
              />

              {/* subtle gradient overlay for polish */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

              {/* decorative ring */}
              <div className="pointer-events-none absolute -inset-1 rounded-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
