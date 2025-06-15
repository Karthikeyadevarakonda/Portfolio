import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Karthikeya Devarakonda - Portfolio',
  description: 'Trainer | Developer | Learner - Full-stack developer with expertise in Java, React, and modern web technologies',
  keywords: 'Karthikeya Devarakonda, Java Developer, Full Stack Developer, React Developer, Portfolio, Software Engineer',
  authors: [{ name: 'Karthikeya Devarakonda' }],
  openGraph: {
    title: 'Karthikeya Devarakonda - Portfolio',
    description: 'Trainer | Developer | Learner - Full-stack developer with expertise in Java, React, and modern web technologies',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karthikeya Devarakonda - Portfolio',
    description: 'Trainer | Developer | Learner - Full-stack developer with expertise in Java, React, and modern web technologies',
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}