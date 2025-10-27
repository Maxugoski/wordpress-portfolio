import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xl">
            D
          </div>
          <span className="font-bold text-lg uppercase tracking-tight">Developer Portfolio</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link 
            to="/about" 
            className="transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className="transition-colors hover:text-primary"
          >
            Portfolio
          </Link>
          <Link 
            to="/plugins-themes" 
            className="transition-colors hover:text-primary"
          >
            Plugins/Themes
          </Link>
          <Link 
            to="/contact" 
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};
