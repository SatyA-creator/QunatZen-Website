import Navigation from "@/components/marketing/Navigation";
import Hero from "@/components/marketing/Hero";
import ValueProposition from "@/components/marketing/ValueProposition";
import Features from "@/components/marketing/Features";
import Stats from "@/components/marketing/Stats";
import DeveloperCTA from "@/components/marketing/DeveloperCTA";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <Stats />
        <DeveloperCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
