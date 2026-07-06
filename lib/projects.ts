export type ProjectCategory =
  | 'Brand Identity'
  | 'Web Development'
  | 'Application'
  | 'UI Design'
  | 'Digital Marketing'
  | 'Print'
  | 'Logo'
  | 'E-commerce';

export interface Project {
  slug: string;
  title: string;
  company: string;
  country: string;
  year: string;
  category: ProjectCategory;
  description: string;
  mission: string;
  context: string;
  objective: string;
  contribution: string[];
  results: string[];
  technologies: string[];
  badges: string[];
  status: string;
  featured: boolean;
  link?: string;
  images: {
    cover: string;
    gallery: string[];
  };
}

export const projectCategories = [
  'Tous',
  'Brand Identity',
  'Web Development',
  'Application',
  'UI Design',
  'Digital Marketing',
  'Print',
  'Logo',
  'E-commerce',
] as const;

export const projects: Project[] = [
  {
    slug: 'ksph-gold',
    title: 'KSPH Gold',
    company: 'KSPH Group',
    country: 'France',
    year: '2024',
    category: 'Brand Identity',
    description:
      'Refonte complète de l’identité visuelle d’un groupe hôtelier premium, de la signature de marque à ses supports numériques et imprimés.',
    mission:
      'Créer une identité premium et cohérente pour renforcer la perception de luxe sur les marchés internationaux.',
    context:
      'Le groupe souhaitait moderniser son image sans rompre avec son héritage, tout en rendant ses supports plus crédibles pour des visiteurs B2B et institutionnels.',
    objective:
      'Unifier la communication, renforcer la différenciation et préparer les supports de vente pour un déploiement multi-canal.',
    contribution: ['Brand strategy', 'Identity design', 'UI system', 'Print production', 'Campaign assets'],
    results: ['Logo officiel déployé', 'Supports imprimés livrés', 'Charte brand utilisée en production'],
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
    badges: ['Brand Identity', 'Print', 'Marketing', 'QR Code'],
    status: 'En production',
    featured: true,
    images: {
      cover: '/projects/ksph-gold/cover.svg',
      gallery: [
        '/projects/ksph-gold/cover.svg',
        '/projects/ksph-gold/desktop.svg',
        '/projects/ksph-gold/mobile.svg',
      ],
    },
  },
  {
    slug: 'ksph-pv',
    title: 'KSPH PV',
    company: 'KSPH Group',
    country: 'Belgique',
    year: '2023',
    category: 'Web Development',
    description:
      'Landing page premium pensée pour générer des leads qualifiés avec un récit clair, une expérience fluide et un fort niveau de conversion.',
    mission:
      'Transformer un message institutionnel en une expérience web haut de gamme, rapide et orientée résultat.',
    context:
      'Le besoin était de créer un point d’entrée performant pour de nouveaux prospects et de simplifier la conversion sur mobile.',
    objective:
      'Mettre en ligne une landing page élégante, précise et optimisée pour la conversion et le référencement.',
    contribution: ['UX writing', 'Visual direction', 'Front-end development', 'SEO', 'Responsive'],
    results: ['Landing page mise en production', 'Taux de conversion amélioré', 'SEO structuré'],
    technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'TypeScript'],
    badges: ['SEO', 'UI Design', 'Web', 'Lead Gen'],
    status: 'Live',
    featured: true,
    images: {
      cover: '/projects/ksph-pv/cover.svg',
      gallery: [
        '/projects/ksph-pv/cover.svg',
        '/projects/ksph-pv/desktop.svg',
        '/projects/ksph-pv/mobile.svg',
      ],
    },
  },
  {
    slug: 'fehl',
    title: 'FEHL',
    company: 'FEHL',
    country: 'Luxembourg',
    year: '2022',
    category: 'Digital Marketing',
    description:
      'Campagne multi-support avec identité visuelle cohérente, print, digital et assets de communication pour des événements B2B.',
    mission:
      'Créer un dispositif de visibilité plus fort pour une marque en pleine croissance.',
    context:
      'La marque avait besoin d’une présence plus assertive lors d’événements professionnels et de supports de prospecting cohérents.',
    objective:
      'Unifier les assets de communication pour un impact plus fort sur le terrain et en ligne.',
    contribution: ['Visual identity', 'Roll-up design', 'Collateral', 'Social assets', 'Event kit'],
    results: ['Roll-up utilisé en salons', 'Supports marketing déployés', 'Image de marque renforcée'],
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    badges: ['Print', 'Marketing', 'Event', 'Brand'],
    status: 'Déployé',
    featured: false,
    images: {
      cover: '/projects/fehl/cover.svg',
      gallery: [
        '/projects/fehl/cover.svg',
        '/projects/fehl/desktop.svg',
        '/projects/fehl/mobile.svg',
      ],
    },
  },
  {
    slug: 'pebge',
    title: 'PEBGE',
    company: 'PEBGE',
    country: 'Allemagne',
    year: '2024',
    category: 'Application',
    description:
      'Application web de gestion et tableau de bord permettant de superviser des opérations quotidiennes avec une expérience claire et fiable.',
    mission:
      'Simplifier l’exploitation quotidienne et rendre les données exploitables pour les équipes internes.',
    context:
      'L’entreprise disposait de plusieurs outils dispersés et recherchait un espace de pilotage centralisé.',
    objective:
      'Créer un tableau de bord moderne, responsive et pensés pour l’usage quotidien.',
    contribution: ['Product design', 'Dashboard UX', 'Front-end development', 'Data visualization'],
    results: ['Application déployée', 'Pilotage centralisé', 'Réduction des temps de traitement'],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    badges: ['Dashboard', 'Product', 'UI Design', 'App'],
    status: 'Production',
    featured: true,
    images: {
      cover: '/projects/pebge/cover.svg',
      gallery: [
        '/projects/pebge/cover.svg',
        '/projects/pebge/desktop.svg',
        '/projects/pebge/mobile.svg',
      ],
    },
  },
  {
    slug: 'atelier-viviane',
    title: 'Atelier Viviane',
    company: 'Atelier Viviane',
    country: 'Suisse',
    year: '2021',
    category: 'Logo',
    description:
      'Identité de marque complète pour une maison de couture contemporaine, depuis le logo jusqu’aux assets de lancement.',
    mission:
      'Développer une signature forte et premium adaptée à un positionnement haut de gamme.',
    context:
      'La marque avait besoin d’une identité distincte, élégante et parfaitement adaptée à l’univers du luxe.',
    objective:
      'Créer un système visuel cohérent pour les supports imprimés et la présence numérique.',
    contribution: ['Logo system', 'Brand guidelines', 'Packaging', 'Social visuals'],
    results: ['Logo utilisé sur le site officiel', 'Supports de lancement prêts', 'Image de marque consolidée'],
    technologies: ['Illustrator', 'Figma', 'Photoshop'],
    badges: ['Logo', 'Brand Identity', 'Luxury', 'Print'],
    status: 'Live',
    featured: false,
    images: {
      cover: '/projects/atelier-viviane/cover.svg',
      gallery: [
        '/projects/atelier-viviane/cover.svg',
        '/projects/atelier-viviane/desktop.svg',
        '/projects/atelier-viviane/mobile.svg',
      ],
    },
  },
];
