import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Submit to Formspree endpoint (configured to forward to ugochukwuogoke@gmail.com)
      const response = await fetch('https://formspree.io/f/mkgpjqrr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      } else {
        const payload = await response.json().catch(() => ({}));
        console.error('Formspree error', payload);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      alert('Sorry, there was an error sending your message. Please try again or contact me directly at ugochukwuogoke@gmail.com');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Contact Me - WordPress Developer"
        description="Get in touch for WordPress development services. Expert in custom themes and plugins with 6+ years experience. Available for freelance projects and consultations."
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Have a project in mind? Let's discuss how we can work together to bring your vision to life.
            </p>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>ugochukwuogoke@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+2348137960837</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Nigeria</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Social</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">GitHub</span>
                      <a
                        href="https://github.com/Maxugoski"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                        aria-label="GitHub profile"
                      >
                        github.com/Maxugoski
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="font-medium">LinkedIn</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                        aria-label="LinkedIn profile (update link)"
                      >
                        linkedin.com/in/ugochukwu-ogoke-212508177/
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="font-medium">Twitter</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                        aria-label="Twitter profile (update link)"
                      >
                        twitter.com/whoisugoski
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="font-medium">Instagram</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                        aria-label="Instagram profile (update link)"
                      >
                        instagram.com/whoisugoski
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                    {/* Honeypot to catch bots */}
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
                    <input type="hidden" name="_subject" value="New message from portfolio site" />

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" name="name" placeholder="Your name" required aria-label="Your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required aria-label="Your email" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" name="subject" placeholder="What's this about?" required aria-label="Subject" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Tell me about your project..." 
                        rows={6}
                        required 
                        aria-label="Message"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
