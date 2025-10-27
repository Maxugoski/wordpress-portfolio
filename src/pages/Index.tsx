import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClientLogos } from "@/components/ClientLogos";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Services } from "@/components/Services";
import { BlogPreview } from "@/components/BlogPreview";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ClientLogos />
      <PortfolioShowcase />
      <Services />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Index;
