import { Palette, Code, Sparkles, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Palette: Palette,
  Code: Code,
  Sparkles: Sparkles,
  ArrowUpRight: ArrowUpRight,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || Palette;

  return (
    <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-8 hover:border-accent/50 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-accent/10 transform hover:-translate-y-1">
      {/* Top Header inside card: Icon & Number */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-md">
            <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="font-mono text-sm font-semibold text-zinc-500 group-hover:text-accent transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-white tracking-wide mb-3 group-hover:text-accent-light transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-relaxed font-sans">
          {service.description}
        </p>
      </div>

      {/* Card Footer accent line */}
      <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
        <span>EXPLORE CAPABILITIES</span>
        <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );
}
