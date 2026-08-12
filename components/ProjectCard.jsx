import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className={`group relative rounded-2xl overflow-hidden bg-zinc-900/60 border border-zinc-800/80 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between ${project.spanClass || ''}`}>
      
      {/* Image Container with Zoom & Overlay */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden bg-zinc-950">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.number === '01'}
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Top Badges: Category & Project Number */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-dark/80 backdrop-blur-md border border-zinc-700/60 text-zinc-300">
            {project.category}
          </span>
          <span className="w-8 h-8 rounded-full bg-dark/80 backdrop-blur-md border border-zinc-700/60 flex items-center justify-center font-mono text-xs text-zinc-400 font-semibold group-hover:border-accent group-hover:text-accent transition-colors">
            {project.number}
          </span>
        </div>

        {/* Hover Arrow Icon Floating on Image */}
        <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-accent/40 z-20">
          <ArrowUpRight className="w-6 h-6" />
        </div>
      </div>

      {/* Content Container Below Image */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow bg-zinc-900/80 backdrop-blur-sm">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2.5 text-zinc-400 text-sm md:text-base leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500 group-hover:text-zinc-300">
          <span>VIEW CASE STUDY</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>

    </div>
  );
}
