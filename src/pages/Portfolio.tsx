import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

// Import images so Vite can process and emit them correctly
import imgAllmax from "@/imgs/Allmaxmedia.png";
import imgAhvc from "@/imgs/ahvc-portfolio.webp";
import imgCaptain from "@/imgs/captain.png";
import imgHarris from "@/imgs/harris-lp.webp";
import imgLMS from "@/imgs/LMS.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Allmax Media Website",
      description: "A creative media agency and content management system showcasing media assets, blog posts, and campaigns.",
      image: imgAllmax,
      tags: ["React", "Node.js", "Typescript"],
      category: "Web Application"
    },
    {
      title: "AHVC Center for Heart & Vascular Clinic",
      description: "A comprehensive healthcare website with appointment scheduling and patient resources.",
      image: imgAhvc,
      tags: ["Wordpress", "php", "REST API"],
      category: "Website"
    },
    {
      title: "Captain Steve Portfolio website",
      description: "Maritime professional portfolio showcasing experience, projects, and certifications.",
      image: imgCaptain,
      tags: ["Wordpress", "Figma", "CRO/SEO Optimization"],
      category: "Portfolio"
    },
    {
      title: "Harris Northwest Advisors",
      description: "A leading boutique M&A advisory firm",
      image: imgHarris,
      tags: ["Wordpress", "php", "CRO/SEO Optimization"],
      category: "Consulting Website"
    },
    {
      title: "Allmax Learn Platform",
      description: "An educational content hub integrating custom learning modules, progress tracking, and user dashboards.",
      image: imgLMS,
      tags: ["React", "Node.js", "MongoDB"],
      category: "LMS"
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
      <SEOHead 
        title="Portfolio - WordPress Developer Projects | Ugochukwu Ogoke"
        description="View my portfolio of WordPress development projects including custom themes, plugins, and full website builds. Each project demonstrates my expertise in creating tailored WordPress solutions."
      />
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