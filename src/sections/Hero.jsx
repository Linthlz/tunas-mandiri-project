import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* soft ambient shapes */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[26rem] w-[26rem] rounded-full bg-plum-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-honey-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            Biro Psikologi Tunas Mandiri Indonesia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-balance font-display text-[2.75rem] leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.4rem]"
          >
            Ruang tumbuh untuk
            <span className="italic text-plum-700"> pikiran</span> yang lebih
            <span className="relative whitespace-nowrap">
              <span className="relative z-10"> tenang</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-honey-200/80" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-600"
          >
            Kami mendampingi Anda memahami diri, memulihkan luka, dan berkembang melalui
            konsultasi psikologi yang hangat, profesional, dan berbasis bukti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button as={Link} to="/kontak" size="lg">
              Konsultasi Sekarang
            </Button>
            <Button as={Link} to="/layanan" variant="outline" size="lg">
              Lihat Layanan
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 border-t border-plum-900/10 pt-8"
          >
            <div>
              <p className="font-display text-2xl text-plum-900">10+</p>
              <p className="text-xs text-ink-600">Tahun melayani</p>
            </div>
            <div className="h-8 w-px bg-plum-900/10" />
            <div>
              <p className="font-display text-2xl text-plum-900">480+</p>
              <p className="text-xs text-ink-600">Sesi konsultasi</p>
            </div>
            <div className="h-8 w-px bg-plum-900/10" />
            <div>
              <p className="font-display text-2xl text-plum-900">5+</p>
              <p className="text-xs text-ink-600">Mitra Institusi</p>
            </div>
          </motion.div>
        </div>

        {/* Signature visual: a hand-drawn "growth line" — the sprout motif rendered
            as a single continuous path, not an icon glyph, animating on load. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md rounded-[2.5rem] bg-plum-900 p-10"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-plum-700/40 via-transparent to-honey-400/10" />
          <svg viewBox="0 0 320 320" className="relative h-full w-full" fill="none">
            <motion.path
              d="M60 260 C 60 200, 90 190, 90 150 C 90 110, 60 100, 60 60"
              stroke="#FEF9C3"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
            />
            <motion.path
              d="M160 280 C 160 210, 130 195, 130 140 C 130 90, 175 70, 175 30"
              stroke="#FACC15"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.2, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="175" cy="30" r="6"
              fill="#FEF9C3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            />
            <motion.path
              d="M250 250 C 250 190, 215 185, 215 130 C 215 80, 250 75, 250 40"
              stroke="#FEF9C3"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.35 }}
              transition={{ duration: 1.6, delay: 0.55, ease: 'easeInOut' }}
            />
          </svg>
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-lg italic text-white/90">Grow &middot; Heal &middot; Thrive</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
