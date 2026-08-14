import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'

const reasons = [
  {
    mark: '01',
    title: 'Psikolog yang tepat untuk Anda',
    desc: 'Kami mencocokkan Anda dengan psikolog berdasarkan keluhan, preferensi, dan kenyamanan personal — bukan asal jadwal kosong.',
  },
  {
    mark: '02',
    title: 'Privasi dijaga sepenuhnya',
    desc: 'Setiap sesi dan data klien dijaga kerahasiaannya sesuai kode etik psikologi Indonesia.',
  },
  {
    mark: '03',
    title: 'Fleksibel: tatap muka atau daring',
    desc: 'Anda memilih format yang paling nyaman, tanpa mengorbankan kualitas pendampingan.',
  },
  {
    mark: '04',
    title: 'Pendampingan berkelanjutan',
    desc: 'Kami memantau perkembangan Anda dari sesi ke sesi, bukan sekadar pertemuan satu kali.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-plum-950 py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-plum-700/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Mengapa Memilih Kami"
          title="Kepercayaan dibangun lewat konsistensi, bukan janji."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.mark}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-plum-950 p-8 sm:p-10"
            >
              <span className="font-display text-sm text-honey-400">{r.mark}</span>
              <h3 className="mt-4 font-display text-xl text-white">{r.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-plum-100/70">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
