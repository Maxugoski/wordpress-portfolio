import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                D
              </div>
              <span className="font-bold">Web Developer</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building fast, accessible, and beautiful web applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Performance Optimization</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="https://x.com/whoisugoski" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="https://github.com/Maxugoski" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/ugochukwu-ogoke-212508177/" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ugochukwu's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
