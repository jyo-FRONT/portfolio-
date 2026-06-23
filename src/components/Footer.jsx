import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Footer() {
  const { ref, visible } = useScrollReveal()

  return (
    <footer ref={ref} className="border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-[1100px] mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <p className="font-sans text-[13px] text-muted">
          © 2024 Jiho Lee — Service Planner
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:jiho05974@gmail.com"
            className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
          >
            Email
          </a>
          <a
            href="#"
            className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="font-sans text-[13px] text-muted hover:text-ink transition-colors"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
