import Navigation from "@/components/marketing/Navigation";
import Hero from "@/components/marketing/Hero";
import ValueProposition from "@/components/marketing/ValueProposition";
import Features from "@/components/marketing/Features";
import Stats from "@/components/marketing/Stats";
import QuantZenNutshell from "@/components/marketing/QuantZenNutshell";
import ComparisonSection from "@/components/marketing/ComparisonSection";
import ThreatMitigationTable from "@/components/marketing/ThreatMitigationTable";
import AudienceCards from "@/components/marketing/AudienceCards";
import StandardsSection from "@/components/marketing/StandardsSection";
import DeveloperCTA from "@/components/marketing/DeveloperCTA";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Features />
      <Stats />
      <QuantZenNutshell />
      <ComparisonSection />
      <ThreatMitigationTable />
      <AudienceCards />
      <StandardsSection />
      <DeveloperCTA />
      <Footer />
    </div>
  );
};

export default Index;
