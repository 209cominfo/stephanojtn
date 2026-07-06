import './globals.css';
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jaotiana.dev'),
  title: 'JAOTIANA Stéphano - Digital Designer & Web Developer',
  description: 'Plus de 4 ans d\'expérience dans le design, le branding et le développement web. Je conçois des identités visuelles, des expériences web modernes et des solutions digitales performantes.',
  keywords: ['digital designer', 'web developer', 'brand identity', 'UI/UX', 'freelance', 'branding', 'development'],
  authors: [{ name: 'JAOTIANA Stéphano' }],
  creator: 'JAOTIANA Stéphano',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jaotiana.dev',
    title: 'JAOTIANA Stéphano - Digital Designer & Web Developer',
    description: 'Plus de 4 ans d\'expérience dans le design, le branding et le développement web.',
    siteName: 'JAOTIANA Stéphano Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JAOTIANA Stéphano - Digital Designer & Web Developer',
    description: 'Plus de 4 ans d\'expérience dans le design, le branding et le développement web.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-inter">{children}</body>
    </html>
  );
}
