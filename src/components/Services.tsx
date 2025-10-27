import { Code, Zap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom built to your specific needs",
      description: "Your business needs more than a generic theme with minor customization. Off the rack themes are bloated with features you don't need."
    },
    {
      icon: Zap,
      title: "Minimal plugins",
      description: "Plugins are easy to install but hard to remove. Websites with dozens of plugins can become a house of cards – you don't know what will happen if you deactivate one. I use industry standard plugins when they make sense (like a contact form), and build your unique functionality from scratch."
    },
    {
      icon: FileText,
      title: "As easy to edit as a Word document",
      description: "The purpose of a CMS is to let you manage content yourself, without the need of a developer. I focus on crafting the backend editing experience to be as easy to use as the frontend. You can see this in action in Cultivate Category Pages."
    },
    {
      icon: Zap,
      title: "Faster than your competitors",
      description: "A 0.1 second improvement of mobile site speed can increase conversion rates by 8-10%. I can deliver speed and efficiency no off-the-shelf theme can match."
    },
    {
      icon: Code,
      title: "Accessible to all users",
      description: "15% of visitors experience some level of disability, and accessibility lawsuits are increasing. I build websites that meet the Web Content Accessibility Guidelines (WCAG) 2.1 standards."
    },
    {
      icon: FileText,
      title: "Built to last",
      description: "The web changes fast, but you don't need a new website every few years. I can build you a solid foundation that will adapt to your future needs."
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How I develop websites
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
