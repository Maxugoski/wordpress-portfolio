import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Briefcase } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, value: "10+", label: "Years Experience" },
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Award, value: "50+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Me</h1>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <p className="text-xl">
                  I'm a passionate web developer dedicated to creating exceptional digital experiences 
                  that combine beautiful design with powerful functionality.
                </p>
                
                <p>
                  With over a decade of experience in web development, I've worked with businesses 
                  of all sizes—from startups to established enterprises—helping them build their 
                  online presence and achieve their goals.
                </p>
                
                <p>
                  My approach focuses on understanding your unique needs and crafting custom solutions 
                  that aren't just visually appealing, but also fast, accessible, and easy to maintain. 
                  I believe in clean code, modern best practices, and delivering projects that stand 
                  the test of time.
                </p>
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
                  <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                  <p className="text-muted-foreground">
                    Expert in modern JavaScript frameworks including React, Vue, and TypeScript. 
                    I create responsive, accessible interfaces that work seamlessly across all devices.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                  <p className="text-muted-foreground">
                    Proficient in Node.js, Python, and various database technologies. I build 
                    robust server-side applications and RESTful APIs that power modern web apps.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Strong eye for design and user experience. I ensure every project not only 
                    looks great but provides an intuitive, delightful experience for users.
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
