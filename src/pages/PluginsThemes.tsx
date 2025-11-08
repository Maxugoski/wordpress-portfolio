import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const PluginsThemes = () => {
  const plugins = [
    {
      title: "Wordwise AI",
      type: "Plugin",
      description: "A ChatGPT-style WordPress plugin powered by the Gemini API, designed to help creators write smarter inside the WordPress dashboard.",
      link: "https://github.com/Maxugoski/wordwise-ai",
      github: "https://github.com/Maxugoski/wordwise-ai"
    }
  ];

  const themes = [
    {
      title: "AllmaxExp",
      type: "Theme",
      description: "A professional media company WordPress theme. Clean, modern, and optimized for media organizations.",
      link: "https://github.com/Maxugoski/AllmaxExp",
      demo: "https://github.com/Maxugoski/AllmaxExp"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="WordPress Plugins & Themes | Ugochukwu Ogoke"
        description="Explore my custom WordPress plugins and themes available on GitHub. Including Wordwise AI plugin and AllmaxExp theme, created with modern development practices."
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Plugins & Themes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              All of my plugins are available only on GitHub. I am no longer comfortable hosting my code on WordPress.org given recent actions by Matt Mullenweg..
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">WordPress Plugins</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {plugins.map((plugin, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-elegant transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{plugin.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">
                      {plugin.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{plugin.description}</p>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <a href={plugin.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Plugin
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={plugin.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12">WordPress Themes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {themes.map((theme, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-elegant transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{theme.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">
                      {theme.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{theme.description}</p>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <a href={theme.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Theme
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={theme.demo} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
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

export default PluginsThemes;