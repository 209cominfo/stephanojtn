'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Parcours', href: '#journey' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Processus', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollYProgress, scrollY } = useScroll();

  const headerBackground = useTransform(scrollY, [0, 100], ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.95)']);
  const headerBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);
  const headerBorder = useTransform(scrollY, [0, 100], ['rgba(38, 38, 38, 0)', 'rgba(38, 38, 38, 0.5)']);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace('#', ''));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBackground,
          backdropFilter: headerBlur,
          borderBottomColor: headerBorder,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b backdrop-saturate-150"
      >
        <div className="container-max section-padding py-4">
          <nav className="flex items-center justify-between">
            <motion.a
              href="#hero"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sora text-lg font-semibold text-foreground hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
            >
              JAOTIANA<span className="text-gradient">.</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:flex items-center gap-1"
            >
              {navItems.slice(0, 6).map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-sm rounded-lg transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-accent bg-accent/10'
                      : 'text-foreground-muted hover:text-foreground hover:bg-background-card'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm px-4 py-2"
              >
                Contact
              </button>
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed top-[61px] left-0 right-0 z-40 bg-background-secondary/95 backdrop-blur-lg overflow-hidden border-b border-border"
      >
        <nav className="container-max section-padding py-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-accent bg-accent/10'
                    : 'text-foreground-muted hover:text-foreground hover:bg-background-card'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </motion.div>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-background/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
