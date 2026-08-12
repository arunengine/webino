import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden bg-grid-pattern bg-noise"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="max-w-4xl space-y-8">
          
          {/* Small Agency Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm text-xs font-mono text-zinc-300 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
            <span className="text-zinc-200">INDEPENDENT DIGITAL AGENCY</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-display tracking-tight text-white uppercase leading-[0.92] select-none">
            We create <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Digital
            </span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-300 to-purple-400">
              Experiences.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-normal max-w-2xl leading-relaxed pt-2">
            We combine strategy, design, and technology to create digital experiences that people remember.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-dark bg-white rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-white/10 group"
            >
              View Our Work
              <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-dark" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-zinc-900/80 border border-zinc-700/80 rounded-full hover:bg-zinc-800 hover:border-accent/60 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">
        <a
          href="#services"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-zinc-500 hover:text-white uppercase transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-accent transition-transform group-hover:translate-y-1 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
