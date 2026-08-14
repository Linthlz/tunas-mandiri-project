import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle.jsx'

const steps = [
  { mark: '01', title: 'Reservasi', desc: 'Isi formulir singkat atau hubungi tim kami untuk memilih psikolog dan jadwal.' },
  { mark: '02', title: 'Sesi Awal', desc: 'Psikolog mengenal situasi Anda dan menyusun pendekatan yang paling sesuai.' },
  { mark: '03', title: 'Proses Pendampingan', desc: 'Sesi berjalan secara berkala sesuai kesepakatan, dengan evaluasi rutin.' },
  { mark: '04', title: 'Evaluasi & Tindak Lanjut', desc: 'Melihat perkembangan bersama dan menentukan langkah selanjutnya.' },
]

export default function ConsultationProcess() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionTitle
        eyebrow="Alur Konsultasi"
        title="Proses yang jelas dari awal hingga Anda merasa lebih baik."
        align="center"
      />

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 top-6 hidden h-px bg-plum-900/10 lg:block" />
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.mark}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-plum-900 font-display text-base text-honey-400">
                {s.mark}
              </span>
              <h3 className="mt-5 font-display text-lg text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
