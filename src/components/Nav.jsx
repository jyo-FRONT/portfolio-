import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F7F6F3]/90 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <nav className="max-w-[1100px] mx-auto px-6 md:px-10 h-[64px] flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-sans font-semibold text-[15px] tracking-tight text-ink hover:opacity-60 transition-opacity"
        >
          Jiho Lee
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('work')}
            className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
          >
            About
          </button>
          <a
            href="mailto:jiho05974@gmail.com"
            className="font-sans text-[14px] text-muted hover:text-ink transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#F7F6F3] border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4"
        >
          <button onClick={() => scrollTo('work')} className="text-left font-sans text-[15px] text-ink">Work</button>
          <button onClick={() => scrollTo('about')} className="text-left font-sans text-[15px] text-ink">About</button>
          <a href="mailto:jiho05974@gmail.com" className="font-sans text-[15px] text-ink">Contact</a>
        </motion.div>
      )}
    </motion.header>
  )
}
