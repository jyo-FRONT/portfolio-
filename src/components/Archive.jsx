import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const archive = [
  { year: '2024', title: 'Kakao Order — Checkout Redesign', category: 'Service Planning', company: 'Kakao Corp.' },
  { year: '2024', title: 'Naver Smart Store — Seller Onboarding', category: 'Product Planning', company: 'Naver' },
  { year: '2024', title: 'LG U+ MyPage — Information Architecture', category: 'IA / UX', company: 'LG U+' },
  { year: '2023', title: 'Toss Pay — Checkout Flow v2', category: 'Service Planning', company: 'Toss' },
  { year: '2023', title: 'Coupang Eats Pro — B2B Launch', category: 'Feature Planning', company: 'Coupang' },
  { year: '2023', title: 'Shinhan SOL — Savings Product Flow', category: 'Fintech Planning', company: 'Shinhan Bank' },
  { year: '2022', title: 'KB Liiv M — MVNO Service Planning', category: 'Service Design', company: 'KB Financial' },
  { year: '2022', title: 'Hyundai Card — Benefit Discovery', category: 'Product Planning', company: 'Hyundai Card' },
  { year: '2022', title: 'Kakao T — Intercity Bus Feature', category: 'Feature Spec', company: 'Kakao Mobility' },
  { year: '2021', title: 'Watcha — Content Discovery Redesign', category: 'Service Planning', company: 'Watcha' },
  { year: '2021', title: 'Market Kurly — Subscription Tier', category: 'Growth Planning', company: 'Kurly' },
  { year: '2021', title: 'Lotteria App — Order & Loyalty', category: 'Service Planning', company: 'Lotteria' },
  { year: '2020', title: 'Baedal Minjok — Group Order', category: 'Feature Planning', company: 'Woowa Brothers' },
  { year: '2020', title: 'SKT 0 — Youth Plan Redesign', category: 'Service Strategy', company: 'SK Telecom' },
]

function ArchiveRow({ item, index, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="grid grid-cols-[60px_1fr] md:grid-cols-[72px_1fr_160px_140px] gap-x-6 py-4 border-b border-border group hover:bg-black/[0.02] transition-colors -mx-3 px-3 rounded"
    >
      <span className="font-sans text-[13px] text-muted self-center">{item.year}</span>
      <span className="font-sans text-[14px] md:text-[15px] font-medium text-ink self-center">{item.title}</span>
      <span className="hidden md:block font-sans text-[13px] text-muted self-center">{item.category}</span>
      <span className="hidden md:block font-sans text-[13px] text-muted self-center text-right">{item.company}</span>
    </motion.div>
  )
}

export default function Archive() {
  const [expanded, setExpanded] = useState(false)
  const { ref, visible } = useScrollReveal()
  const displayed = expanded ? archive : archive.slice(0, 6)

  return (
    <section className="max-w-[1100px] mx-auto px-6 md:px-10 pb-24 md:pb-32">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="font-sans text-[13px] font-medium tracking-widest uppercase text-muted mb-2">Archive</p>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] text-ink tracking-tight leading-[1.1]">
              All projects
            </h2>
          </div>
          <span className="font-sans text-[13px] text-muted hidden md:block">{archive.length} total</span>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden md:grid grid-cols-[72px_1fr_160px_140px] gap-x-6 pb-3 border-b border-border mb-0"
        >
          <span className="font-sans text-[11px] tracking-widest uppercase text-muted">Year</span>
          <span className="font-sans text-[11px] tracking-widest uppercase text-muted">Project</span>
          <span className="font-sans text-[11px] tracking-widest uppercase text-muted">Type</span>
          <span className="font-sans text-[11px] tracking-widest uppercase text-muted text-right">Company</span>
        </motion.div>

        <div>
          {displayed.map((item, i) => (
            <ArchiveRow key={i} item={item} index={i} visible={visible} />
          ))}
        </div>

        {!expanded && archive.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={visible ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-8"
          >
            <button
              onClick={() => setExpanded(true)}
              className="font-sans text-[13px] text-muted hover:text-ink transition-colors underline underline-offset-4"
            >
              Show all {archive.length} projects
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
