import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Kakao Order',
    category: 'Service Planning · UX Strategy',
    year: '2024',
    description: 'Redesigned the core ordering flow for Kakao's food delivery vertical, reducing drop-off rates by 31% through streamlined service logic and contextual nudges.',
    color: '#F5E6C8',
    accent: '#C8A96E',
  },
  {
    id: 2,
    title: 'Naver Smart Store',
    category: 'Product Planning · Growth',
    year: '2024',
    description: 'Led end-to-end service planning for seller onboarding improvements, resulting in a 22% increase in first-month activation rates across SME merchants.',
    color: '#D6E8D6',
    accent: '#5A8A5A',
  },
  {
    id: 3,
    title: 'Toss Pay Checkout',
    category: 'Service Planning · IA',
    year: '2023',
    description: 'Restructured the payment confirmation flow with clearer information architecture and progressive disclosure patterns, cutting support inquiries by 40%.',
    color: '#D8D8F0',
    accent: '#5A5AA0',
  },
  {
    id: 4,
    title: 'Coupang Eats Pro',
    category: 'Feature Planning · B2B',
    year: '2023',
    description: 'Defined the feature set and service logic for a new B2B catering product from zero to launch, coordinating across 4 cross-functional teams over 8 months.',
    color: '#F0DDD8',
    accent: '#A05A4A',
  },
]

function ProjectCard({ project, index }) {
  const { ref, visible } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.08 }}
      className="group cursor-default"
    >
      {/* Thumbnail */}
      <div
        className="w-full aspect-[4/3] rounded-2xl mb-5 overflow-hidden flex items-center justify-center relative"
        style={{ backgroundColor: project.color }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: project.color, filter: 'brightness(0.95)' }}
        />
        <div className="relative flex flex-col items-center justify-center gap-3 px-8 text-center">
          <span
            className="font-display italic text-[clamp(28px,4vw,48px)] leading-tight tracking-tight"
            style={{ color: project.accent }}
          >
            {project.title}
          </span>
          <div
            className="w-8 h-px"
            style={{ backgroundColor: project.accent, opacity: 0.5 }}
          />
          <span
            className="font-sans text-[11px] tracking-widest uppercase font-medium opacity-60"
            style={{ color: project.accent }}
          >
            {project.year}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <span className="font-sans text-[11px] tracking-wider uppercase text-muted font-medium">
          {project.category}
        </span>
        <span className="font-sans text-[11px] text-muted shrink-0">{project.year}</span>
      </div>

      <h3 className="font-sans font-semibold text-[18px] text-ink mb-2 tracking-tight">
        {project.title}
      </h3>
      <p className="font-sans text-[14px] text-muted leading-relaxed">
        {project.description}
      </p>
    </motion.div>
  )
}

export default function Work() {
  const { ref: headRef, visible: headVisible } = useScrollReveal()

  return (
    <section id="work" className="max-w-[1100px] mx-auto px-6 md:px-10 py-24 md:py-32">
      <div ref={headRef}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-3"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(32px,4.5vw,56px)] text-ink tracking-tight leading-[1.1] mb-16"
        >
          Projects I'm proud of.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
