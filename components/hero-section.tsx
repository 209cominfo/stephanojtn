'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Cpu } from 'lucide-react';
import Link from 'next/link';
import homeHero from './images/home-hero.jpeg';

const HeroBackground = () => {
  return (
    <>
      <Image
        src={homeHero}
        alt="Image de présentation"
        fill
        className="absolute inset-0 object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_45%),linear-gradient(to_bottom,_rgba(15,23,42,0.85),_rgba(15,23,42,0.1))]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
    </>
  );
};

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 container-max section-padding py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
          >
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground-muted">Disponible pour de nouveaux projets</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-xl mb-4"
          >
            <span className="text-foreground">JAOTIANA</span>
            <span className="block text-gradient">Stéphano</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <p className="heading-sm text-foreground-muted mb-2">Digital Designer · Web Developer · Brand Identity Specialist</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-lg max-w-2xl mx-auto mb-10"
          >
            Je conçois des identités visuelles, des expériences web modernes et des solutions digitales performantes pour les entreprises.
            <span className="block mt-2 text-foreground font-medium">Plus de 4 ans d&apos;expérience dans le design, le branding et le développement web.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="#projects" className="btn-primary">
              <span>Voir mes projets</span>
              <ArrowDown className="w-4 h-4" />
            </Link>
            <Link href="#contact" className="btn-secondary">
              <span>Me contacter</span>
              <Mail className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-foreground-muted">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border border-foreground-muted/30 flex items-start justify-center p-1"
            >
              <motion.div className="w-1 h-2 bg-accent rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
