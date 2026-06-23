import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function Hero({ onWorkClick }) {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-20 pt-[120px] max-w-[1100px] mx-auto px-6 md:px-10">
      <div className="max-w-[760px]">
        <motion.p
          {...fadeUp(0.1)}
          className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-6"
        >
          Service Planner
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display text-[clamp(44px,7vw,88px)] leading-[1.05] tracking-[-0.02em] text-ink text-balance mb-8"
        >
          Turning ideas into{' '}
          <span className="italic">experiences</span>{' '}
          that actually work.
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="font-sans text-[16px] md:text-[18px] text-muted leading-relaxed max-w-[520px] mb-12"
        >
          Service planner with 5+ years shaping digital products — from concept to launch. I bridge user needs, business goals, and technical constraints into clear, buildable plans.
        </motion.p>

        <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <button
            onClick={onWorkClick}
            className="group inline-flex items-center gap-3 bg-ink text-bg font-sans text-[14px] font-medium px-6 py-3.5 rounded-full hover:bg-ink/80 transition-colors"
          >
            View selected work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

          <div className="flex items-center gap-8">
            <div>
              <p className="font-display italic text-[30px] md:text-[34px] text-ink leading-none">5+</p>
              <p className="font-sans text-[12px] text-muted mt-1">Years of experience</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <p className="font-display italic text-[30px] md:text-[34px] text-ink leading-none">40+</p>
              <p className="font-sans text-[12px] text-muted mt-1">Projects delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
