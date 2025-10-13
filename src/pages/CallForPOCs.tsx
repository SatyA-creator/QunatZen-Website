import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import {
  Users,
  Rocket,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Mail,
  Calendar,
  Award
} from "lucide-react";

// -----------------------------------------------------------------------------
// Updated CallForPOCs component
// - This version aligns with your ORIGINAL content (shown in comments below)
// - AI-added/extra text is marked with comments like: /* AI-ADDED */
// - Original verbatim items are included and labeled: /* ORIGINAL */
// -----------------------------------------------------------------------------

const CallForPOCs = () => {
  // ====== Who should apply (from your ORIGINAL content) ======
  const whoShouldApply = [
    "Wallets",
    "Custody providers",
    "Exchanges",
    "Bridges",
    "High‑valued dApps (governance, withdrawals, oracles)"
  ];

  // ====== What you get (start with ORIGINAL items, then optional extras) ======
  const benefits = [
    /* ORIGINAL: Priority SDK support, reference contracts, and integration workshops. */
    "Priority SDK support",
    "Reference contracts & integration workshops",
    /* ORIGINAL: Access to managed verification service (beta) and audit templates. */
    "Access to managed verification service (beta) and audit templates",
    /* ORIGINAL: Co‑marketing + early adopter badge; eligibility for grant credits. */
    "Co‑marketing + early adopter badge; eligibility for grant credits",

    /* AI-ADDED: the following are optional, keep or remove as you like */
    "Direct collaboration with engineering team" /* AI-ADDED */,
    "Priority technical support & dedicated account management" /* AI-ADDED */,
    "Reduced licensing fees for early adopters" /* AI-ADDED */,
    "Access to quantum cryptography expertise and training" /* AI-ADDED */
  ];

  // ====== POC requirements (use the ORIGINAL exact pilot duration) ======
  const pocRequirements = [
    /* ORIGINAL: 4 - 6 week scoped pilot (1–2 critical flows). */
    "4–6 week scoped pilot (1–2 critical flows)",
    /* ORIGINAL: Integration summary + metrics (latency, gas, user impact). */
    "Integration summary + metrics (latency, gas, user impact)",
    /* ORIGINAL: Joint case study on outcomes. */
    "Joint case study on outcomes",

    /* AI-ADDED: optional practical requirements to help screening */
    "Technical team capable of SDK integration and testing" /* AI-ADDED */,
    "Willingness to provide feedback and participate in review sessions" /* AI-ADDED */
  ];

  // ====== Collaboration buckets (reworked to include your original targets) ======
  const collaborationTypes = [
    {
      icon: Users,
      title: "Wallets & Custody",
      description: "Secure key management and transaction signing",
      benefits: ["Priority SDK support", "Reference contracts", "Integration workshops"]
    },
    {
      icon: Globe,
      title: "Exchanges & Bridges",
      description: "High‑throughput flows and cross‑chain security",
      benefits: ["Integration support", "Audit templates", "Performance guidance"]
    },
    {
      icon: Shield,
      title: "High‑valued dApps",
      description: "Governance, withdrawal, oracle and admin flows",
      benefits: ["Case study collaboration", "Security validation", "Co‑marketing"]
    }
    /* NOTE: Previously the page had additional categories like 'Enterprise Partners',
       'DeFi Protocols', and 'Research Institutions'. Those are fine but were not in
       your ORIGINAL short list — include them only if you want broader outreach. */
  ];

  // ====== Short stats (aligned to ORIGINAL pilot duration) ======
  const stats = [
    { number: "50+", label: "Partners Sought", icon: Users },
    { number: "4-6", label: "Week Pilot", icon: Calendar },
    { number: "Included", label: "Support & Templates", icon: Award }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

      <div className="bg-gradient-to-br from-background to-secondary/10 w-full">
        <div className="h-16" />

        {/* ====== Hero (TITLE matches ORIGINAL) ====== */}
        <section className="py-20 w-full">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">CALL FOR POCs</h1>

              {/* ORIGINAL short tagline (kept concise) */}
              <p className="text-lg text-muted-foreground mb-6">
                {/* ORIGINAL: Who should apply, What you get, What we ask are below. */}
                Be among the first to pilot QuantZen™. Apply for a scoped POC to validate
                quantum‑resistant security in your critical flows.
              </p>

              <div className="flex justify-center gap-4 flex-wrap">
                {/* ORIGINAL CTAs: Start a POC · Book a Technical Deep‑Dive */}
                <Button variant="quantum" size="lg" className="group">
                  <Shield className="w-5 h-5 mr-2" />
                  Start a POC
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button variant="outline" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Technical Deep‑Dive
                </Button>
              </div>
            </motion.div>

            {/* ====== Quick "Who should apply" inline summary (from ORIGINAL) ====== */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm text-muted-foreground mt-6"
            >
              {whoShouldApply.map((w) => (
                <div key={w} className="p-2">
                  • {w}
                </div>
              ))}
            </motion.div>

            {/* ====== Stats (aligned) ====== */}
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {stats.map((s) => (
                <Card key={s.label} className="p-5 text-center">
                  <s.icon className="w-6 h-6 text-quantum-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-quantum-primary">{s.number}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ====== What you get (verbatim ORIGINAL items included) ====== */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-4">What You Get</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <Card key={i} className="p-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 text-green-500" />
                  <div className="text-sm leading-relaxed">{b}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ====== What we ask / POC Requirements (ORIGINAL) ====== */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-4">What We Ask</h2>

            <Card className="p-6">
              <div className="space-y-3">
                {pocRequirements.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-quantum-primary text-white flex items-center justify-center font-bold text-sm">{idx + 1}</div>
                    <div className="text-sm leading-relaxed">{r}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ====== Collaboration buckets (targets from ORIGINAL) ====== */}
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-quantum-primary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-6">Who We Want To Collaborate With</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {collaborationTypes.map((c) => (
                <Card key={c.title} className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-quantum-primary/10">
                      <c.icon className="w-6 h-6 text-quantum-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{c.title}</h3>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {c.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-quantum-primary" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ====== Application Form (OPTIONAL — AI-ADDED but useful) ====== */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Apply: Start A POC</h2>

            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Organization Name *</label>
                    <Input placeholder="Your company or organization" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Industry / Sector</label>
                    <Input placeholder="DeFi, Enterprise, Exchanges, etc." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-1">Describe the POC scope *</label>
                  <Textarea placeholder={`Suggested: 4–6 week pilot focusing on 1–2 critical flows`} className="min-h-[120px]" />
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="quantum">Submit Application</Button>
                  <div className="text-sm text-muted-foreground">{/* AI-ADDED */} We'll review your application and get back to you within 48 hours.</div>
                </div>
              </form>
            </Card>

            <div className="mt-4 text-sm text-muted-foreground">
              {/* ORIGINAL quick alternative: Book a Technical Deep‑Dive */}
              Or <Button variant="link">Book a Technical Deep‑Dive</Button>
            </div>
          </div>
        </section>

        {/* ====== Contact Alternative (keeps your original 'Book a Technical Deep‑Dive' idea) ====== */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-6 text-center">
              <Zap className="w-10 h-10 mx-auto mb-3 text-quantum-primary" />
              <h3 className="font-semibold mb-2">Prefer to discuss directly?</h3>
              <p className="text-sm text-muted-foreground mb-4">Book a technical deep‑dive with our engineering team.</p>
              <div className="flex justify-center gap-3">
                <Button variant="outline">Schedule Demo</Button>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </Card>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default CallForPOCs;
