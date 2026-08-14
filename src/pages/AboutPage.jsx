import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import CTA from '../sections/CTA.jsx'

const values = [
  { mark: 'I', title: 'Integritas', desc: 'Kami menjunjung kejujuran dan etika profesi dalam setiap proses pendampingan.' },
  { mark: 'E', title: 'Empati', desc: 'Setiap cerita didengar dengan penuh perhatian, tanpa buru-buru menyimpulkan.' },
  { mark: 'K', title: 'Kompetensi', desc: 'Psikolog kami terus mengembangkan keilmuan melalui pelatihan dan supervisi berkala.' },
  { mark: 'K', title: 'Kerahasiaan', desc: 'Privasi klien adalah prioritas mutlak dalam setiap tahap layanan.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Tentang Kami</p>
          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.12] text-ink-900 sm:text-5xl">
            Kami percaya pemulihan dimulai dari perasaan didengar.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-600">
            Biro Psikologi Tunas Mandiri Indonesia berdiri sebagai ruang aman bagi siapa pun yang ingin
            memahami dirinya lebih dalam tanpa penghakiman, tanpa terburu-buru.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-plum-50 p-10"
          >
            <p className="eyebrow">Visi</p>
            <p className="mt-4 font-display text-2xl leading-snug text-ink-900">
              Menjadi biro psikologi terpercaya yang menumbuhkan kesejahteraan mental masyarakat Indonesia.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-honey-50 p-10"
          >
            <p className="eyebrow">Misi</p>
            <ul className="mt-4 space-y-3 text-[0.98rem] leading-relaxed text-ink-700">
              <li>1. Menyediakan layanan psikologi yang mudah diakses dan berkualitas.</li>
              <li>2. Mendampingi individu, pasangan, dan keluarga secara personal.</li>
              <li>3. Mengedukasi masyarakat tentang kesehatan mental secara berkelanjutan.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-plum-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionTitle
            eyebrow="Nilai Kami"
            title="Empat prinsip yang mendasari setiap layanan."
            light
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 p-8 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-honey-400 font-display text-lg text-plum-950">
                  {v.mark}
                </span>
                <h3 className="mt-5 font-display text-lg text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-100/70">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
        <SectionTitle
          eyebrow="Pendekatan Kami"
          title="Layanan yang disesuaikan, bukan satu resep untuk semua orang."
          description="Setiap klien memiliki latar belakang dan kecepatan pemulihan yang berbeda. Karena itu, psikolog kami menyusun pendekatan secara individual — memadukan metode berbasis bukti dengan pemahaman konteks budaya dan kehidupan Anda sehari-hari."
          align="center"
        />
        <div className="mt-9">
          <Button as={Link} to="/layanan" size="lg">
            Jelajahi Layanan Kami
          </Button>
        </div>
      </section>

      <CTA />
    </>
  )
}
