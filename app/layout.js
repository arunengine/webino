import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'NOVA Studio — Digital Design Agency',
  description: 'We create bold digital experiences through strategy, design and technology. Specializing in UI/UX, Web Development, Branding, and Digital Strategy.',
  keywords: ['Digital Agency', 'UI/UX Design', 'Web Development', 'Branding', 'Digital Experience', 'NOVA Studio'],
  authors: [{ name: 'NOVA Studio' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-dark text-zinc-100 antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
