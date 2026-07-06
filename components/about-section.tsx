'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Code, Users, Target } from 'lucide-react';

const values = [
  {
    icon: Palette,
    title: 'Design centré utilisateur',
    description: 'Chaque élément visuel est pensé pour l\'expérience et l\'impact.',
  },
  {
    icon: Code,
    title: 'Solutions techniques robustes',
    description: 'Un code propre, performant et maintenable sur le long terme.',
  },
  {
    icon: Users,
    title: 'Approche collaborative',
    description: 'Une communication transparente à chaque étape du projet.',
  },
  {
    icon: Target,
    title: 'Résultats mesurables',
    description: 'Des livrables concrets qui atteignent vos objectifs business.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 md:py-32 section-padding bg-background-secondary">
      <div className="container-max" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <motion.span variants={itemVariants} className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
              À propos
            </motion.span>
            <motion.h2 variants={itemVariants} className="heading-lg text-foreground mb-6">
              Créer des expériences digitales qui <span className="text-gradient">comptent</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="body-lg mb-6">
              Je suis un professionnel passionné par la création de solutions digitales complètes. Mon approche combine créativité design et rigueur technique pour livrer des projets qui transforment la présence en ligne de mes clients.
            </motion.p>
            <motion.p variants={itemVariants} className="body-md mb-8">
              Avec plus de 4 ans d&apos;expérience, j&apos;ai développé une expertise qui va au-delà du simple développement. Je prends en charge l&apos;ensemble de votre identité numérique : de la création de votre image de marque à la mise en ligne de votre plateforme digitale, en passant par la stratégie de communication visuelle.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['Brand Identity', 'Web Development', 'UI/UX Design', 'Digital Strategy'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-sm text-foreground mb-2">{value.title}</h3>
                <p className="body-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
