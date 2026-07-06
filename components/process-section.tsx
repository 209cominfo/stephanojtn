'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, BarChart3, Lightbulb, Code, Rocket, HeartHandshake, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    title: 'Découverte',
    icon: Search,
    description: 'Écoute et compréhension approfondie de vos besoins, objectifs et vision.',
    details: [
      'Analyse de vos besoins',
      'Compréhension de votre marché',
      'Identification des objectifs',
      'Définition du périmètre',
    ],
  },
  {
    step: 2,
    title: 'Analyse',
    icon: BarChart3,
    description: 'Étude approfondie de votre secteur, concurrence et opportunités.',
    details: [
      'Étude de la concurrence',
      'Analyse du positionnement',
      'Identification des opportunités',
      'Planification stratégique',
    ],
  },
  {
    step: 3,
    title: 'Conception',
    icon: Lightbulb,
    description: 'Création de concepts, maquettes et prototypes pour validation.',
    details: [
      'Concepts créatifs',
      'Maquettes visuelles',
      'Prototypes interactifs',
      'Validations itératives',
    ],
  },
  {
    step: 4,
    title: 'Développement',
    icon: Code,
    description: 'Réalisation technique avec rigueur et bonnes pratiques.',
    details: [
      'Développement front-end',
      'Intégration back-end',
      'Optimisation performance',
      'Tests et ajustements',
    ],
  },
  {
    step: 5,
    title: 'Livraison',
    icon: Rocket,
    description: 'Mise en production soignée et documentation complète.',
    details: [
      'Déploiement sécurisé',
      'Tests finaux',
      'Documentation',
      'Formation si nécessaire',
    ],
  },
  {
    step: 6,
    title: 'Accompagnement',
    icon: HeartHandshake,
    description: 'Suivi post-livraison, maintenance et évolution continue.',
    details: [
      'Support continu',
      'Maintenance proactive',
      'Évolutions et itérations',
      'Conseil stratégique',
    ],
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="relative py-24 md:py-32 section-padding bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
            Processus
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Une méthode <span className="text-gradient">éprouvée</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Un processus structuré qui garantit des résultats conformes à vos attentes, à chaque étape du projet.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                }`}
              >
                <div className={`lg:flex lg:flex-col ${index % 2 === 0 ? 'lg:items-end lg:text-right' : 'lg:items-start'} mb-8 lg:mb-0 lg:py-8`}>
                  <div className={`card-hover max-w-md ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs text-accent font-medium">Étape {step.step}</span>
                        <h3 className="heading-sm text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="body-sm mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span key={detail} className="text-xs px-2 py-1 bg-background-secondary text-foreground-muted rounded-full">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center relative">
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center z-10 shadow-lg shadow-accent/20">
                    <span className="text-background font-sora font-semibold">{step.step}</span>
                  </div>
                </div>

                <div className="hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="body-md text-foreground-muted max-w-xl mx-auto">
            Chaque projet bénéficie de cette méthodologie rigoureuse, adaptée à vos spécificités et vos contraintes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
