import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xl">
            D
          </div>
          <span className="font-bold text-lg uppercase tracking-tight hidden sm:inline">Wordpress Developer Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/about" className="transition-colors hover:text-primary">About</Link>
          <Link to="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link to="/plugins-themes" className="transition-colors hover:text-primary">Plugins/Themes</Link>
          <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/search">
              <Search className="h-5 w-5" />
            </Link>
          </Button>

          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xl">D</div>
                    <div>
                      <DrawerTitle>Menu</DrawerTitle>
                    </div>
                  </div>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>

              <div className="p-4 flex flex-col gap-4">
                <Link to="/about" className="text-lg font-medium" onClick={() => {}}>
                  About
                </Link>
                <Link to="/portfolio" className="text-lg font-medium">Portfolio</Link>
                <Link to="/plugins-themes" className="text-lg font-medium">Plugins/Themes</Link>
                <Link to="/contact" className="text-lg font-medium">Contact</Link>
              </div>

              <DrawerFooter>
                <div className="p-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full">Let's Talk</Button>
                  </Link>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};
