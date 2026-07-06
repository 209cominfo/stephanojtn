'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, Globe, MapPin, Briefcase, Clock, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    question: 'Travaillez-vous avec des clients internationaux ?',
    answer: 'Oui, je collabore régulièrement avec des clients à l\'international, principalement en Europe. La Communication se fait principalement par email, WhatsApp et visioconférence. Je m\'adapte à vos fuseaux horaires et préférences de communication.',
    icon: Globe,
  },
  {
    question: 'Travaillez-vous à distance ?',
    answer: 'Absolument. L\'ensemble de mon workflow est optimisé pour le travail à distance. J\'utilise des outils collaboratifs modernes (Figma, Notion, Slack, etc.) pour une Communication fluide et transparente. Les livrables sont transmis dématérialisés, avec des présentations en visio si nécessaire.',
    icon: MapPin,
  },
  {
    question: 'Quels types de projets réalisez-vous ?',
    answer: 'Je prends en charge une large gamme de projets digitaux : identité visuelle et branding, création de logos, supports de communication et marketing, affiches publicitaires, brochures, landing pages, sites vitrines, sites web complets, boutiques en ligne sous CMS, et conception UI/UX. J\'accompagne également dans la stratégie digitale.',
    icon: Briefcase,
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Les délais varient selon la complexité du projet. Un logo peut être réalisé en 1-2 semaines, une identité visuelle complète en 3-4 semaines, et un site web en 4-8 semaines. Je fournis toujours un planning détaillé avant le début du projet et je respecte les engagements.',
    icon: Clock,
  },
  {
    question: 'Proposez-vous des révisions ?',
    answer: 'Oui, chaque projet inclut des révisions définies dans le devis initial. Mon processus collaboratif vise à valider chaque étape pour minimiser les révisions majeures. Les retours sont toujours pris en compte avec professionnalisme.',
    icon: CheckCircle2,
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 section-padding bg-background-secondary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur mes services et modalités de collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card relative overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-accent/20' : 'bg-accent/10'
                  }`}>
                    <faq.icon className={`w-5 h-5 transition-colors ${
                      openIndex === index ? 'text-accent' : 'text-accent/70'
                    }`} />
                  </div>
                  <h3 className={`font-medium transition-colors ${
                    openIndex === index ? 'text-foreground' : 'text-foreground-muted'
                  }`}>
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-border">
                      <p className="body-sm pl-14">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
