'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, PenTool, Layout, Globe, ShoppingCart, Monitor, UserCheck, Settings, Zap } from 'lucide-react';

const services = [
  {
    category: 'Brand Identity',
    icon: Palette,
    color: 'from-cyan-500/20 to-cyan-500/5',
    items: [
      {
        title: 'Logo Design',
        description: 'Création de logos distinctifs et mémorables qui incarnent votre identité.',
        icon: PenTool,
      },
      {
        title: 'Identité Visuelle',
        description: 'Charte graphique complète : couleurs, typographies, éléments visuels.',
        icon: Palette,
      },
    ],
  },
  {
    category: 'Marketing & Communication',
    icon: Zap,
    color: 'from-teal-500/20 to-teal-500/5',
    items: [
      {
        title: 'Supports Marketing',
        description: 'Brochures, flyers, présentations professionnelles et supports print.',
        icon: Layout,
      },
      {
        title: 'Affiches & Publicités',
        description: 'Créations visuelles impactantes pour vos campagnes.',
        icon: Monitor,
      },
    ],
  },
  {
    category: 'Web & Digital',
    icon: Globe,
    color: 'from-blue-500/20 to-blue-500/5',
    items: [
      {
        title: 'Landing Pages',
        description: 'Pages d\'atterrissage optimisées pour la conversion.',
        icon: Layout,
      },
      {
        title: 'Sites Vitrines',
        description: 'Sites web élégants et professionnels pour votre présence en ligne.',
        icon: Globe,
      },
      {
        title: 'Boutiques en ligne',
        description: 'E-commerce complet sous CMS : Shopify, WordPress, etc.',
        icon: ShoppingCart,
      },
    ],
  },
  {
    category: 'UX/UI & Accompagnement',
    icon: UserCheck,
    color: 'from-sky-500/20 to-sky-500/5',
    items: [
      {
        title: 'UI/UX Design',
        description: 'Interfaces intuitives et expériences utilisateur optimisées.',
        icon: UserCheck,
      },
      {
        title: 'Accompagnement Digital',
        description: 'Conseil et maintenance pour votre présence digitale.',
        icon: Settings,
      },
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="relative py-24 md:py-32 section-padding bg-background-secondary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
            Services
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Des solutions <span className="text-gradient">complètes</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            De la création de votre identité visuelle au développement de votre plateforme digitale, je prends en charge l&apos;ensemble de votre présence en ligne.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.category}
              variants={cardVariants}
              className="group"
            >
              <div className="card-hover h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="heading-sm text-foreground">{service.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {service.items.map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <item.icon className="w-4 h-4 text-accent/70" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-foreground-muted">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
