import { Card, CardContent } from "@/components/ui/card";

export const PortfolioShowcase = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1 animate-fade-in">
            <blockquote className="text-xl italic text-muted-foreground border-l-4 border-primary pl-6">
              "I don’t just build Websites —
               I teach pixels to behave, plugins to think, and brands to speak their truth."
            </blockquote>
            
            <div className="space-y-1">
              <p className="font-semibold">Ugochukwu Ogoke</p>
              <p className="text-sm text-muted-foreground">WordPress Developer</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 order-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="overflow-hidden hover-scale">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=500&fit=crop"
                  alt="Project dashboard"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover-scale mt-8">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=500&fit=crop"
                  alt="Mobile design"
                  className="w-full h-64 object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
