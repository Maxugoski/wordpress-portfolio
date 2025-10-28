import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "6+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="About Me - WordPress Developer with 6+ Years Experience"
        description="WordPress developer specializing in custom theme and plugin development. Creator of WordWise AI plugin and AllmaxExp theme. Expert in full-stack WordPress development with 6+ years experience."
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Me</h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-xl">
                  I'm a seasoned WordPress developer with 6+ years of experience, specializing in creating 
                  custom themes and powerful plugins that transform WordPress websites into exceptional 
                  digital experiences.
                </p>
                
                <p>
                  Throughout my career, I've developed innovative WordPress solutions for businesses 
                  of all sizes. My portfolio includes the WordWise AI plugin, which revolutionizes 
                  content creation with AI integration, and the AllmaxExp theme, showcasing my ability 
                  to create modern, performance-optimized WordPress themes.
                </p>
                
                <p>
                  My approach combines deep WordPress expertise with clean code practices and modern 
                  development techniques. I specialize in building scalable, maintainable WordPress 
                  solutions that empower businesses to grow their online presence effectively.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={index}
                  className="text-center hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">My Expertise</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">WordPress Plugin Development</h3>
                  <p className="text-muted-foreground">
                    Expert in creating custom WordPress plugins that extend functionality and integrate 
                    modern technologies. My plugins, like WordWise AI, demonstrate my ability to 
                    integrate complex features while maintaining excellent performance and user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">WordPress Theme Development</h3>
                  <p className="text-muted-foreground">
                    Skilled in crafting custom WordPress themes that combine beautiful design with 
                    powerful functionality. I create themes that are fast, responsive, and optimized 
                    for search engines, as demonstrated by my AllmaxExp theme.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Full-Stack WordPress Development</h3>
                  <p className="text-muted-foreground">
                    Comprehensive expertise in WordPress ecosystem including custom post types, 
                    taxonomies, REST API, and database optimization. I ensure each project follows 
                    WordPress coding standards and best practices for maintainability and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
