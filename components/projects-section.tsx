'use client';

import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '@/lib/projects';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24 md:py-32 section-padding">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/3 blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.35em] text-accent">
            Réalisations
          </span>
          <h2 className="heading-lg mb-6 text-foreground">
            Projets <span className="text-gradient">livrés avec méthode</span>
          </h2>
          <p className="body-md mx-auto">
            Chaque mission combine stratégie, design, développement et déploiement. Les projets présentés ici sont issus d’environnements réels, avec des livrables utilisés par des clients opérationnels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          <div className="rounded-[24px] border border-border/70 bg-background-card/70 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Clients</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">10+</p>
          </div>
          <div className="rounded-[24px] border border-border/70 bg-background-card/70 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Pays</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">5</p>
          </div>
          <div className="rounded-[24px] border border-border/70 bg-background-card/70 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Statut</p>
            <p className="mt-3 text-3xl font-semibold text-foreground">Live</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent text-background shadow-[0_12px_30px_rgba(6,182,212,0.2)]'
                  : 'border border-border/70 bg-background-card/70 text-foreground-muted hover:border-accent/30 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[30px] border border-border/70 bg-background-card/70 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_30px_90px_rgba(6,182,212,0.16)]"
              >
                <div className="relative overflow-hidden rounded-[24px]">
                  <img
                    src={project.images.cover}
                    alt={project.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground backdrop-blur">
                    {project.category}
                  </div>

                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-background/70 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-foreground-muted backdrop-blur">
                    {project.country}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 flex items-center gap-2 text-accent">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-[11px] uppercase tracking-[0.3em]">{project.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-foreground-muted">{project.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.badges.slice(0, 4).map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-foreground-muted"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{project.company}</p>
                    <p className="text-sm text-foreground-muted">{project.status}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition-all duration-300 hover:border-accent/40 hover:bg-accent/15"
                  >
                    Voir l'étude de cas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
