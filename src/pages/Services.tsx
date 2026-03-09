import { Home, Building2, Sparkles, ArrowUpDown, Clock, Paintbrush, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    desc: "Regular or one-time cleaning for your home. We handle kitchens, bathrooms, living rooms, bedrooms — every room gets the Gleam treatment.",
    features: ["Dusting & wiping all surfaces", "Floor mopping & vacuuming", "Kitchen & bathroom sanitization", "Bed making & room tidying"],
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Keep your workplace clean and professional. A tidy office boosts productivity and leaves a great impression on clients.",
    features: ["Desk & workstation cleaning", "Restroom sanitization", "Floor care & maintenance", "Trash removal & recycling"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "An intensive, top-to-bottom clean for spaces that need extra love. Perfect for seasonal refreshes or special occasions.",
    features: ["Behind & under furniture", "Window & blind cleaning", "Appliance deep clean", "Grout & tile scrubbing"],
  },
  {
    icon: ArrowUpDown,
    title: "Move-in / Move-out Cleaning",
    desc: "Moving? Let us make sure your old place is spotless for the next tenant, or your new home is fresh and ready.",
    features: ["Full property cleaning", "Cabinet & closet wiping", "Wall spot cleaning", "Final inspection walkthrough"],
  },
  {
    icon: Clock,
    title: "Recurring Cleaning Plans",
    desc: "Set it and forget it. Choose weekly, bi-weekly, or monthly plans and enjoy a consistently clean space.",
    features: ["Flexible scheduling", "Consistent cleaning team", "Priority booking", "Discounted rates"],
  },
  {
    icon: Paintbrush,
    title: "Post-Construction Cleaning",
    desc: "Just finished renovating? We'll clear the dust, debris, and mess so you can enjoy your refreshed space.",
    features: ["Debris & dust removal", "Surface polishing", "Window cleaning", "Final detail inspection"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Cleaning Solutions for Every <span className="text-primary">Space</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                From homes to offices, we offer a full range of professional cleaning services across Ibadan, Oyo State.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="glass-card p-8 hover-lift h-full flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need a Custom Cleaning Plan?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8">
              We're happy to create a tailored package that fits your needs and budget.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
