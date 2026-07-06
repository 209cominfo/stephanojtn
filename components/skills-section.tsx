'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, PenTool, Globe, ShoppingCart, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Développement',
    icon: Code,
    color: 'from-cyan-500/20 to-cyan-600/5',
    skills: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'React/Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    title: 'Design & Graphisme',
    icon: Palette,
    color: 'from-blue-500/20 to-blue-600/5',
    skills: [
      { name: 'UI/UX Design', level: 92 },
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Adobe Illustrator', level: 88 },
      { name: 'Adobe InDesign', level: 85 },
      { name: 'Figma', level: 92 },
    ],
  },
  {
    title: 'Branding',
    icon: PenTool,
    color: 'from-teal-500/20 to-teal-600/5',
    skills: [
      { name: 'Identité Visuelle', level: 95 },
      { name: 'Logo Design', level: 93 },
      { name: 'Charte Graphique', level: 94 },
      { name: 'Direction Artistique', level: 88 },
      { name: 'Print Design', level: 90 },
    ],
  },
  {
    title: 'CMS & E-commerce',
    icon: ShoppingCart,
    color: 'from-sky-500/20 to-sky-600/5',
    skills: [
      { name: 'WordPress', level: 90 },
      { name: 'Shopify', level: 88 },
      { name: 'Wix', level: 85 },
      { name: 'Webflow', level: 82 },
      { name: 'Squarespace', level: 80 },
    ],
  },
  {
    title: 'Marketing Digital',
    icon: Globe,
    color: 'from-indigo-500/20 to-indigo-600/5',
    skills: [
      { name: 'SEO', level: 85 },
      { name: 'Social Media Design', level: 90 },
      { name: 'Landing Pages', level: 92 },
      { name: 'Email Marketing', level: 82 },
      { name: 'Analytics', level: 78 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-emerald-500/20 to-emerald-600/5',
    skills: [
      { name: 'Communication', level: 95 },
      { name: 'Gestion de Projet', level: 90 },
      { name: 'Adaptabilité', level: 94 },
      { name: 'Résolution de Problèmes', level: 92 },
      { name: 'Travail d\'Équipe', level: 93 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 section-padding bg-background-secondary overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-sora text-sm uppercase tracking-widest mb-4">
            Compétences
          </span>
          <h2 className="heading-lg text-foreground mb-6">
            Expertise <span className="text-gradient">technique</span>
          </h2>
          <p className="body-md max-w-2xl mx-auto">
            Un panel de compétences complet couvrant le design, le développement et la stratégie digitale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              <div className="card-hover h-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="heading-sm text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-foreground">{skill.name}</span>
                          <span className="text-xs text-accent">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-background-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-accent-hover rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </motion.div>
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
