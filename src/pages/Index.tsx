import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Home, Building2, Star, ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-clean.jpg";

const stats = [
  { value: "200+", label: "Happy Clients" },
  { value: "500+", label: "Spaces Cleaned" },
  { value: "100%", label: "Satisfaction" },
  { value: "24/7", label: "Support" },
];

const services = [
  {
    icon: Home,
    title: "Home Cleaning",
    desc: "Thorough cleaning of your living spaces — bedrooms, kitchens, bathrooms, and more.",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Keep your workspace pristine and productive with our professional office cleaning.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Intensive cleaning for those spaces that need extra care and attention to detail.",
  },
];

const testimonials = [
  {
    name: "Adunola F.",
    text: "Gleam transformed my apartment! Every surface was spotless. I've never felt more comfortable in my own home.",
    rating: 5,
  },
  {
    name: "Tunde O.",
    text: "Our office has never looked better. The team is professional, punctual, and thorough. Highly recommend!",
    rating: 5,
  },
  {
    name: "Blessing A.",
    text: "I use Gleam for my deep cleaning every month. Consistent quality every single time. Wonderful service!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sparkling clean living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent font-body font-semibold text-sm tracking-wider uppercase">
                Ibadan's Trusted Cleaners
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Spaces That
              <br />
              <span className="text-accent">Sparkle</span> &amp; Shine
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-lg">
              Professional home and office cleaning services in Ibadan, Oyo State. We bring the gleam to every corner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Book a Cleaning <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:bg-primary-foreground/10 transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 font-body text-sm mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                What We Offer
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
                Our Cleaning Services
              </h2>
              <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto">
                From regular home cleaning to intensive deep cleans, we've got your space covered.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="glass-card p-8 hover-lift h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold font-body hover:gap-3 transition-all"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                Why Gleam
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
                Why Clients Love Working With Us
              </h2>
              <div className="space-y-5">
                {[
                  "Trained and vetted cleaning professionals",
                  "Eco-friendly cleaning products used",
                  "Flexible scheduling — we work around you",
                  "100% satisfaction guarantee on every job",
                  "Serving homes and offices across Ibadan",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground font-body">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {testimonials.slice(0, 2).map((t) => (
                  <div key={t.name} className="glass-card p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                      "{t.text}"
                    </p>
                    <span className="text-foreground font-body font-semibold text-sm">
                      — {t.name}
                    </span>
                  </div>
                ))}
                <div className="col-span-2 glass-card p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonials[2].rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                    "{testimonials[2].text}"
                  </p>
                  <span className="text-foreground font-body font-semibold text-sm">
                    — {testimonials[2].name}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for a Spotless Space?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8">
              Get in touch today and let us bring the sparkle to your home or office.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-base hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
