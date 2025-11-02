import Navigation from "@/components/marketing/Navigation";
import Hero from "@/components/marketing/Hero";
import ValueProposition from "@/components/marketing/ValueProposition";
import Features from "@/components/marketing/Features";
// import QuantumSafeSDK from "@/components/marketing/QuantumSafeSDK";
import QuantZenNutshell from "@/components/marketing/QuantZenNutshell";
import ComparisonSection from "@/components/marketing/ComparisonSection";
import ThreatMitigationTable from "@/components/marketing/ThreatMitigationTable";
import AudienceCards from "@/components/marketing/AudienceCards";
import StandardsSection from "@/components/marketing/StandardsSection";
import Footer from "@/components/marketing/Footer";
import SectionDivider from "@/components/ui/section-divider";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      
      <SectionDivider variant="gradient" />
      
      {/* <QuantumSafeSDK /> */}
      <ValueProposition />
      
      <SectionDivider variant="dots" />
      
      <Features />
      
      <SectionDivider variant="wave" />
      
      <QuantZenNutshell />
      
      <SectionDivider variant="line" />
      
      <ComparisonSection />
      
      <SectionDivider variant="gradient" />
      
      <ThreatMitigationTable />
      
      <SectionDivider variant="dots" />
      
      <AudienceCards />
      
      <SectionDivider variant="particles" />
      
      <StandardsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
