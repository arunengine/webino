import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark/95 border-t border-zinc-900 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-800/60">
          
          {/* Left Column: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white">
              <span className="font-display tracking-wider">NOVA</span>
              <span className="text-zinc-400 font-light font-sans text-xl">Studio</span>
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
            </a>
            <p className="text-lg font-medium text-zinc-300 font-display">
              "Designing what comes next."
            </p>
            <p className="text-sm text-zinc-500 max-w-sm">
              A premium digital creative agency focused on design system architecture, modern web development, and digital product strategy.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-300 tracking-wider mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-300 tracking-wider mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                >
                  Instagram
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                >
                  Behance
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© {currentYear} NOVA Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
