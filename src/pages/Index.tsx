import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Professional WordPress Developer | Ugochukwu Ogoke"
        description="Experienced WordPress developer creating fast, accessible, and beautiful custom websites. Specializing in modern WordPress development and user-centric design."
      />
      <div className="min-h-screen">
        <Header />
        <Hero />
        <ClientLogos />
        <PortfolioShowcase />
        <Services />
        <Footer />
      </div>
    </>
  );
};

export default Index;