import ServiceCard from './ServiceCard';

const servicesData = [
  {
    number: '01',
    title: 'UI/UX DESIGN',
    icon: 'Palette',
    description:
      'Thoughtful interfaces and user experiences designed around real people and real business goals.',
  },
  {
    number: '02',
    title: 'WEB DEVELOPMENT',
    icon: 'Code',
    description:
      'Fast, scalable and responsive websites built with modern technologies.',
  },
  {
    number: '03',
    title: 'BRANDING',
    icon: 'Sparkles',
    description:
      'Distinctive visual identities that give ambitious brands a memorable presence.',
  },
  {
    number: '04',
    title: 'DIGITAL STRATEGY',
    icon: 'ArrowUpRight',
    description:
      'Digital strategies that connect creativity, technology and measurable business outcomes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-dark">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            SERVICES & EXPERTISE
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-white uppercase">
            What we do
          </h2>
          <p className="mt-4 text-lg text-zinc-400 font-normal leading-relaxed">
            From first idea to final interaction, we build digital experiences that move businesses forward.
          </p>
        </div>

        {/* 4 Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
