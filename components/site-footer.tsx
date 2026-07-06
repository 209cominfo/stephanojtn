'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const footerLinks = {
  navigation: [
    { label: 'À propos', href: '#about' },
    { label: 'Parcours', href: '#journey' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#projects' },
  ],
  services: [
    { label: 'Brand Identity', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'E-commerce', href: '#services' },
  ],
};

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background-secondary border-t border-border">
      <div className="container-max section-padding py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-sora text-xl font-semibold text-foreground mb-4">
                JAOTIANA<span className="text-gradient"> Stéphano</span>
              </h3>
              <p className="body-sm max-w-xs">
                Digital Designer, Web Developer et Brand Identity Specialist. Plus de 4 ans d&apos;expérience à votre service.
              </p>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-sora font-medium text-foreground mb-4">Navigation</h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-sora font-medium text-foreground mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-sora font-medium text-foreground mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:stephanojtn@gmail.com"
                    className="text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    stephanojtn@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/261324202242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground-muted hover:text-accent transition-colors"
                  >
                    +261 32 420 2242
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-sm text-foreground-muted flex items-center gap-1">
              <span>{currentYear} JAOTIANA Stéphano.</span>
              <span>Tous droits réservés.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
