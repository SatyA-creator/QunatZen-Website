import Navigation from "@/components/marketing/Navigation";
import Hero from "@/components/marketing/Hero";
import ValueProposition from "@/components/marketing/ValueProposition";
import Features from "@/components/marketing/Features";
import QuantZenNutshell from "@/components/marketing/QuantZenNutshell";
import ComparisonSection from "@/components/marketing/ComparisonSection";
import ThreatMitigationTable from "@/components/marketing/ThreatMitigationTable";
import AudienceCards from "@/components/marketing/AudienceCards";
import StandardsSection from "@/components/marketing/StandardsSection";
import Footer from "@/components/marketing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <ValueProposition />
      <Features />
      <QuantZenNutshell />
      <ComparisonSection />
      <ThreatMitigationTable />
      <AudienceCards />
      <StandardsSection />
      <Footer />
    </div>
  );
};

export default Index;
