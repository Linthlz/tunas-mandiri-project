import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import Button from '../components/Button.jsx'
import aboutImage from '../img/asset.jpeg'

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-4/5 w-full overflow-hidden rounded-4xl">
            <img
              src={aboutImage}
              alt="Tunas Mandiri Psychology"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -right-6 w-52 rounded-2xl bg-white p-6 shadow-[0_24px_48px_-20px_rgba(76,29,149,0.25)] sm:-right-10">
            <p className="font-display text-3xl text-plum-900">10+</p>
            <p className="mt-1 text-sm text-ink-600">
              tahun mendampingi proses tumbuh & pulih klien kami
            </p>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="Tentang Kami"
            title="Didirikan untuk menjadi tempat yang aman, bukan sekadar tempat berkonsultasi."
            description="Tunas Mandiri Psychology hadir dari keyakinan sederhana: setiap orang berhak atas ruang yang aman untuk bertumbuh, memahami dirinya, dan pulih dengan caranya sendiri, didampingi oleh psikolog yang benar-benar mendengarkan."
          />

          <ul className="mt-8 space-y-5">
            {[
              ['Pendekatan berbasis bukti', 'Metode yang digunakan telah teruji secara klinis dan terus diperbarui.'],
              ['Psikolog berlisensi', 'Seluruh psikolog kami tersertifikasi dan terikat kode etik profesi.'],
              ['Ruang tanpa penghakiman', 'Setiap cerita didengar dengan empati, tanpa label dan asumsi.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-honey-400" />
                <div>
                  <p className="font-display text-[1.05rem] text-ink-900">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button as={Link} to="/tentang" variant="outline">
              Selengkapnya Tentang Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}