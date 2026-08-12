import ProjectCard from './ProjectCard';

const projectsData = [
  {
    number: '01',
    title: 'Orbit Finance',
    category: 'Digital Product',
    description:
      'A modern financial platform designed to make complex money management feel simple.',
    image: '/images/orbit-finance.svg',
    spanClass: 'lg:col-span-2',
  },
  {
    number: '02',
    title: 'Forma',
    category: 'Brand Identity',
    description:
      'A bold visual identity created for a modern architecture studio.',
    image: '/images/forma.svg',
    spanClass: 'lg:col-span-1',
  },
  {
    number: '03',
    title: 'Northline',
    category: 'E-commerce',
    description:
      'A premium online shopping experience for a contemporary lifestyle brand.',
    image: '/images/northline.svg',
    spanClass: 'lg:col-span-1',
  },
  {
    number: '04',
    title: 'Arc Health',
    category: 'Web Experience',
    description:
      'A calm and accessible digital experience for a healthcare technology company.',
    image: '/images/arc-health.svg',
    spanClass: 'lg:col-span-2',
  },
  {
    number: '05',
    title: 'Mono House',
    category: 'Digital Experience',
    description:
      'An immersive digital presence for a modern architecture and interiors studio.',
    image: '/images/mono-house.svg',
    spanClass: 'lg:col-span-1',
  },
  {
    number: '06',
    title: 'Pulse',
    category: 'Mobile Product',
    description:
      'A focused product experience designed around simplicity and engagement.',
    image: '/images/pulse.svg',
    spanClass: 'lg:col-span-1',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 relative bg-dark/95 border-t border-zinc-900">
      {/* Subtle background element */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Label & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              SELECTED WORK
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white uppercase">
              Projects we're proud of.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 font-sans max-w-md text-sm sm:text-base">
            A selection of recent projects built with strategic clarity, high-end craft, and technical precision.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
