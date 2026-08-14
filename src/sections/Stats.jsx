import { motion } from 'framer-motion'

const stats = [
  { value: '90%', label: 'Klien merasa lebih baik setelah 3 sesi' },
  { value: '5+', label: 'Mitra Institusi di lembaga pendidikan' },
  { value: '4.5/5', label: 'Rata-rata penilaian klien' },
  { value: '24 jam', label: 'Waktu respons maksimal reservasi' },
]

export default function Stats() {
  return (
    <section className="border-y border-plum-900/8 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="font-display text-3xl text-plum-900 sm:text-4xl">{s.value}</p>
            <p className="mt-2 max-w-[16ch] text-sm leading-snug text-ink-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
