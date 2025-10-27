import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Stripe"],
      category: "Web Application"
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with advanced search, mapping, and virtual tour features.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Firebase", "Maps API"],
      category: "Web Portal"
    },
    {
      title: "Healthcare Dashboard",
      description: "HIPAA-compliant patient management system with appointment scheduling and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      tags: ["React", "PostgreSQL", "WebRTC"],
      category: "Dashboard"
    },
    {
      title: "Content Management System",
      description: "Custom CMS built for content creators with drag-and-drop page builder.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&fit=crop",
      tags: ["Next.js", "GraphQL", "MongoDB"],
      category: "CMS"
    },
    {
      title: "Analytics Platform",
      description: "Data visualization tool with real-time metrics and customizable reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "D3.js", "Python"],
      category: "Analytics"
    },
   /** {
      title: "Social Media App",
      description: "Community platform with user profiles, messaging, and content sharing features.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile App"
    } **/
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              A selection of projects I've worked on. Each project represents a unique challenge 
              and solution tailored to client needs.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-elegant transition-all duration-300 group cursor-pointer hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary text-primary-foreground p-2 rounded-full">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
