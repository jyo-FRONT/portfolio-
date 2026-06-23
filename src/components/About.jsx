import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  'Service Planning', 'Feature Spec', 'User Research', 'Information Architecture',
  'Wireframing', 'Stakeholder Alignment', 'A/B Testing', 'Data Analysis',
  'PRD Writing', 'Agile / Scrum', 'OKR Setting', 'Competitive Analysis',
]

const experiences = [
  {
    company: 'Kakao Corp.',
    role: 'Senior Service Planner',
    period: '2022 — Present',
    desc: 'Leading service planning for Kakao Order and Kakao Pay verticals. Defined product direction across 3 major product lines with cross-functional teams of 20+.',
  },
  {
    company: 'Coupang',
    role: 'Service Planner',
    period: '2021 — 2022',
    desc: 'Owned the end-to-end planning of Coupang Eats Pro (B2B) from scoping through launch. Collaborated with engineering, design, and legal across 8 months.',
  },
  {
    company: 'Toss (Viva Republica)',
    role: 'Associate Planner',
    period: '2019 — 2021',
    desc: 'Built feature specs and service logic for Toss Pay\'s checkout ecosystem. Introduced structured user-story templates adopted across the product team.',
  },
]

export default function About() {
  const { ref: topRef, visible: topVisible } = useScrollReveal()
  const { ref: expRef, visible: expVisible } = useScrollReveal()
  const { ref: skillRef, visible: skillVisible } = useScrollReveal()

  return (
    <section id="about" className="max-w-[1100px] mx-auto px-6 md:px-10 pb-32">
      {/* Divider */}
      <div className="w-full h-px bg-border mb-24" />

      {/* Top intro */}
      <div ref={topRef} className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={topVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-4">About</p>
          <h2 className="font-display text-[clamp(32px,4vw,52px)] text-ink tracking-tight leading-[1.1]">
            I plan services people actually <span className="italic">use.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={topVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col justify-end gap-5"
        >
          <p className="font-sans text-[15px] text-muted leading-[1.8]">
            I'm Jiho Lee, a service planner based in Seoul. For over five years I've been turning fuzzy business problems into structured, user-centered product plans — writing specs that engineers can build from and designers can own.
          </p>
          <p className="font-sans text-[15px] text-muted leading-[1.8]">
            My background spans fintech, e-commerce, and mobility. I care deeply about the gap between what users need and what gets shipped, and I work to close it through research, clear documentation, and relentless stakeholder alignment.
          </p>
          <div className="pt-2">
            <a
              href="mailto:jiho05974@gmail.com"
              className="group inline-flex items-center gap-2 font-sans text-[14px] font-medium text-ink hover:opacity-60 transition-opacity"
            >
              jiho05974@gmail.com
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <div ref={expRef} className="mb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={expVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-8"
        >
          Experience
        </motion.p>
        <div className="flex flex-col divide-y divide-border">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={expVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8"
            >
              <div>
                <p className="font-sans font-semibold text-[15px] text-ink mb-1">{exp.company}</p>
                <p className="font-sans text-[13px] text-muted">{exp.role}</p>
                <p className="font-sans text-[12px] text-muted/70 mt-1">{exp.period}</p>
              </div>
              <p className="font-sans text-[15px] text-muted leading-[1.8]">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div ref={skillRef}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={skillVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-6"
        >
          Skills & Tools
        </motion.p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={skillVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="font-sans text-[13px] text-ink bg-tag px-4 py-2 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
