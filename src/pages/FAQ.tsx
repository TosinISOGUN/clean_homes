import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    q: "What areas in Ibadan do you serve?",
    a: "We serve all major areas across Ibadan including Bodija, Jericho, Ring Road, Mokola, Challenge, UI, Agodi, Iyaganku, Dugbe, and surrounding neighborhoods. If you're unsure whether we cover your area, just reach out!",
  },
  {
    q: "How do I book a cleaning session?",
    a: "You can book through our Contact page, call us directly, or send us a message via WhatsApp. We'll discuss your needs, schedule a convenient time, and confirm your booking.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use professional-grade, eco-friendly cleaning products that are effective yet safe for your family, pets, and the environment. If you have specific product preferences, let us know.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the size of your space, the type of cleaning needed, and the frequency. Contact us for a free, no-obligation quote tailored to your specific needs.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "No! We come fully equipped with all the cleaning products and tools needed. You don't need to provide anything — just let us in and we'll handle the rest.",
  },
  {
    q: "Can I schedule recurring cleaning?",
    a: "Absolutely! We offer weekly, bi-weekly, and monthly recurring cleaning plans at discounted rates. It's the easiest way to keep your space consistently clean.",
  },
  {
    q: "Are your cleaners insured and vetted?",
    a: "Yes. Every member of our team goes through a thorough background check and is professionally trained. Your safety and trust are our top priorities.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "We offer a 100% satisfaction guarantee. If you're not happy with any aspect of our service, let us know within 24 hours and we'll re-clean the area at no extra cost.",
  },
];

const FAQItem = ({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-border">
    <button
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-left group"
    >
      <span className="font-display text-base md:text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
        {q}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-muted-foreground font-body leading-relaxed">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="text-primary font-body font-semibold text-sm tracking-wider uppercase">
                FAQ
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Got questions? We've got answers. Here are the most common things our clients ask.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
