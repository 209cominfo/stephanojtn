'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Briefcase, Rocket, Award, Globe, Star } from 'lucide-react';

const timelineData = [
  {
    year: '2021',
    title: 'Début du parcours professionnel',
    icon: GraduationCap,
    highlight: 'Entrée à l\'IST-D',
    description: 'Admission à l\'Institut Supérieur de la Technologie d\'Antsiranana en DTS Technologie de l\'Information et Multimédia. Début d\'une formation orientée pratique avec des projets réels pour des entreprises.',
    achievements: [
      'Formation DTS en Technologie de l\'Information',
      'Premiers projets professionnels',
      'Immersion dans le monde de l\'entreprise',
      'Développement de compétences en multimédia',
    ],
  },
  {
    year: '2022',
    title: 'Progression et projets',
    icon: Briefcase,
    highlight: 'Stages et réalisations',
    description: 'Participation active à des projets de développement web et de communication numérique. Création d\'applications de gestion et d\'interfaces utilisateur pour des clients réels.',
    achievements: [
      'Applications de gestion',
      'Interfaces utilisateurs',
      'Projets de communication numérique',
      'Travail en équipe professionnelle',
    ],
  },
  {
    year: '2023',
    title: 'Expertise technique',
    icon: Star,
    highlight: 'Approfondissement',
    description: 'Consolidation des compétences en développement web, branding et design graphique. Réalisation de projets complets intégrant identité visuelle et solutions digitales.',
    achievements: [
      'Projets de branding complets',
      'Solutions web complexes',
      'Design graphique avancé',
      'Intégration multimédia',
    ],
  },
  {
    year: '2024',
    title: 'Diplôme et transition',
    icon: Award,
    highlight: 'Obtention du DTS',
    description: 'Validation du diplôme DTS en Technologie de l\'Information et Multimédia. Formation reconnue pour son orientation pratique et ses projets professionnels concrets.',
    achievements: [
      'Diplôme DTS obtenu',
      'Portfolio professionnel étoffé',
      'Expérience terrain validée',
      'Compétences transversales maîtrisées',
    ],
  },
  {
    year: '2025',
    title: 'Freelance international',
    icon: Globe,
    highlight: 'Collaborations internationales',
    description: 'Début des collaborations avec des clients internationaux. Réalisation de projets d\'identité visuelle, landing pages, sites web complets et boutiques en ligne pour des entreprises européennes.',
    achievements: [
      'Clients internationaux',
      'Identités visuelles européennes',
      'Sites web et e-commerce',
      'Communication digitale globale',
    ],
  },
  {
    year: '2026',
    title: 'Expertise consolidée',
    icon: Rocket,
    highlight: '+4 ans d\'expérience',
    description: 'Plus de quatre années d\'expérience cumulées. Expertise complète en design, branding, développement web et stratégie digitale. Prêt à accompagner des projets ambitieux.',
    achievements: [
      'Expertise complète',
      'Projets internationaux aboutis',
      'Méthodologie professionnelle',
      'Vision stratégique affinée',
    ],
  },
];

export function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [activeYear, setActiveYear] = useState(timelineData.length - 1);

  return (
    <section id="journey" className="relative py-24 md:py-32 section-padding bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
            Mon parcours
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Une évolution <span className="text-gradient">continue</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Chaque année a été une étape clé dans la construction de mon expertise et de ma vision professionnelle.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {timelineData.map((item, index) => (
              <motion.button
                key={item.year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveYear(index)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-sora font-medium text-sm sm:text-base transition-all duration-300 ${
                  activeYear === index
                    ? 'bg-accent text-background shadow-lg shadow-accent/20'
                    : 'bg-background-card text-foreground-muted border border-border hover:border-accent/30'
                }`}
              >
                {item.year}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  {(() => {
                    const IconComponent = timelineData[activeYear].icon;
                    return <IconComponent className="w-8 h-8 text-accent" />;
                  })()}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                  <h3 className="heading-md text-foreground">{timelineData[activeYear].title}</h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20">
                    {timelineData[activeYear].highlight}
                  </span>
                </div>

                <p className="body-md mb-6">{timelineData[activeYear].description}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {timelineData[activeYear].achievements.map((achievement, idx) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground-muted">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-2 text-foreground-muted text-sm">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <span>Plus de 4 ans d&apos;expérience professionnelle</span>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
