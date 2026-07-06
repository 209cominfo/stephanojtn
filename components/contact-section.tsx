'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MessageCircle, Mail, ArrowRight, Cpu, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  projectType: z.string().min(1, 'Sélectionnez un type de projet'),
  budget: z.string().optional(),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const encodeFormData = (formData: Record<string, string | undefined>) =>
  Object.entries(formData)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value ?? '')}`)
    .join('&');

const projectTypes = [
  'Identité visuelle / Branding',
  'Site web / Landing page',
  'E-commerce / Boutique en ligne',
  'UI/UX Design',
  'Application web',
  'Supports marketing',
  'Autre',
];

const budgetRanges = [
  '< 500€',
  '500€ - 1000€',
  '1000€ - 2500€',
  '2500€ - 5000€',
  '5000€+',
  'À discuter',
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': 'contact',
          name: data.name,
          email: data.email,
          subject: data.subject,
          projectType: data.projectType,
          budget: data.budget,
          message: data.message,
        }),
      });

      setIsSubmitted(true);
      reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 section-padding bg-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/2 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8"
          >
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground-muted">Disponible pour de nouveaux projets</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-lg text-foreground mb-6"
          >
            Vous avez un projet ou une idée <span className="text-gradient">à concrétiser</span> ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="body-md max-w-2xl mx-auto"
          >
            Remplissez le formulaire ci-dessous pour discuter de votre projet. Je vous répondrai dans les 24 heures.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="heading-md text-foreground mb-3">Message envoyé !</h3>
                  <p className="text-foreground-muted">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="relative space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className="input-field"
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="input-field"
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Sujet <span className="text-accent">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      {...register('subject')}
                      className="input-field"
                      placeholder="Objet de votre message"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                        Type de projet <span className="text-accent">*</span>
                      </label>
                      <select
                        id="projectType"
                        {...register('projectType')}
                        className="input-field"
                      >
                        <option value="">Sélectionnez...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-sm text-red-400">{errors.projectType.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        {...register('budget')}
                        className="input-field"
                      >
                        <option value="">Sélectionnez...</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message')}
                      className="input-field resize-none"
                      placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="heading-md text-foreground mb-6">Autres moyens de contact</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/261324202242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-card border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">WhatsApp</h4>
                    <p className="text-sm text-foreground-muted">+261 32 420 2242</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:stephanojtn@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background-card border border-border hover:border-accent/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Email</h4>
                    <p className="text-sm text-foreground-muted">stephanojtn@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="font-medium text-foreground mb-4">Informations</h4>
              <ul className="space-y-3 text-sm text-foreground-muted">
                <li>Temps de réponse : sous 24 heures</li>
                <li>Disponibilité : Lun - Sam, 9h - 18h (UTC+3)</li>
                <li>Langues : Français, Anglais</li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-8 border-t border-border"
            >
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-sora font-semibold text-gradient mb-1">4+</div>
                  <p className="text-xs text-foreground-muted">Années d&apos;expérience</p>
                </div>
                <div>
                  <div className="text-3xl font-sora font-semibold text-gradient mb-1">50+</div>
                  <p className="text-xs text-foreground-muted">Projets réalisés</p>
                </div>
                <div>
                  <div className="text-3xl font-sora font-semibold text-gradient mb-1">100%</div>
                  <p className="text-xs text-foreground-muted">Clients satisfaits</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
