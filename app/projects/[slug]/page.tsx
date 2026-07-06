import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BadgeCheck, Sparkles } from 'lucide-react';
import { projects } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="container-max section-padding py-20 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background-card/60 px-4 py-2 text-sm text-foreground-muted transition-all duration-300 hover:border-accent/30 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">{project.company}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-accent"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-border/70 bg-background-card/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Pays</p>
                  <p className="mt-2 text-base font-medium text-foreground">{project.country}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Année</p>
                  <p className="mt-2 text-base font-medium text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Catégorie</p>
                  <p className="mt-2 text-base font-medium text-foreground">{project.category}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Statut</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-base font-medium text-foreground">
                    <BadgeCheck className="h-4 w-4 text-accent" />
                    {project.status}
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-border/60 bg-background/70 p-5">
                <div className="flex items-center gap-2 text-accent">
                  <Sparkles className="h-4 w-4" />
                  <p className="text-sm uppercase tracking-[0.24em]">Mission</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-foreground-muted">{project.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max section-padding py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Contexte</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Un projet pensé pour un usage réel.
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground-muted">{project.context}</p>
          </div>

          <div className="rounded-[30px] border border-border/70 bg-background-card/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Objectif</p>
                <p className="mt-3 text-base leading-7 text-foreground-muted">{project.objective}</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Ma contribution</p>
                <ul className="mt-3 space-y-2 text-base text-foreground-muted">
                  {project.contribution.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-max section-padding pb-20">
        <div className="overflow-hidden rounded-[34px] border border-border/70 bg-background-card/70 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
          <img
            src={project.images.cover}
            alt={project.title}
            className="h-[380px] w-full rounded-[28px] object-cover sm:h-[460px]"
          />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {project.images.gallery.map((image) => (
            <div key={image} className="overflow-hidden rounded-[24px] border border-border/70 bg-background-card/70 p-3">
              <img src={image} alt={project.title} className="h-60 w-full rounded-[18px] object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="container-max section-padding pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[30px] border border-border/70 bg-background-card/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Résultat</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Une livraison concrète et prête à l’usage.
            </h2>
            <p className="mt-5 text-lg leading-8 text-foreground-muted">
              {project.results.join(' • ')}
            </p>
          </div>

          <div className="rounded-[30px] border border-border/70 bg-background-card/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Technologies</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-sm text-foreground-muted"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/60 bg-background/70 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-foreground-muted">Impact</p>
              <p className="mt-3 text-base leading-7 text-foreground-muted">
                Le projet a été conçu pour durer, évoluer et transmettre une image solide au quotidien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
