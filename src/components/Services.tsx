import { Code, Zap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom built to your specific needs",
      description: "Your business needs more than a generic template with minor customization. Off the rack solutions are bloated with features you don't need."
    },
    {
      icon: Zap,
      title: "Minimal dependencies",
      description: "I use industry standard tools when they make sense, and build your unique functionality from scratch for optimal performance."
    },
    {
      icon: FileText,
      title: "As easy to edit as a document",
      description: "The content management system is intuitive and straightforward. You don't need technical knowledge to update your site."
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How I develop websites
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
