import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-plum-900 px-8 py-16 text-center sm:px-16"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-plum-700/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-honey-400/20 blur-3xl" />
        <p className="eyebrow relative text-honey-400">Mulai Langkah Pertama</p>
        <h2 className="relative mt-4 text-balance font-display text-3xl leading-tight text-white sm:text-4xl">
          Anda tidak perlu menunggu sampai semuanya terasa berat.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-plum-100/80">
          Jadwalkan sesi konsultasi pertama Anda hari ini dan biarkan kami mendampingi proses tumbuh Anda.
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button as={Link} to="/kontak" variant="secondary" size="lg">
            Konsultasi Sekarang
          </Button>
          <Button as={Link} to="/layanan" variant="ghost" size="lg" className="text-white hover:bg-white/10">
            Lihat Layanan
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
