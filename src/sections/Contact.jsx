import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import services from '../data/services.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: services[0].title, message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionTitle
            eyebrow="Kontak & Reservasi"
            title="Mari mulai percakapan pertama."
            description="Isi formulir di samping, dan tim kami akan menghubungi Anda dalam 1x24 jam kerja untuk mengonfirmasi jadwal serta psikolog yang sesuai."
          />

          <div className="mt-10 space-y-6 border-t border-plum-900/10 pt-8">
            <div>
              <p className="eyebrow">Alamat Klinik</p>
              <p className="mt-2 text-[0.98rem] text-ink-700">Jl. Jalak Putih Utama No.29A, Singaraja , Bali</p>
            </div>
            <div>
              <p className="eyebrow">Jam Operasional</p>
              <p className="mt-2 text-[0.98rem] text-ink-700">Senin — Sabtu, 09.00 — 20.00 WIB</p>
            </div>
            <div>
              <p className="eyebrow">Hubungi Langsung</p>
              <p className="mt-2 text-[0.98rem] text-ink-700">halo@tunasmandiripsikologi.id &middot; +62 812 3456 7890</p>
            </div>
          </div>

          <div className="mt-10 aspect-[16/10] w-full overflow-hidden rounded-3xl bg-plum-100">
            <iframe
              title="Lokasi Klinik Tunas Mandiri"
              className="h-full w-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=Jl.+Jalak+Putih+Utama+No.29b,+Banyuasri,+Kec.+Buleleng,+Kabupaten+Buleleng,+Bali+81116&output=embed"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] bg-plum-50 p-8 sm:p-10"
        >
          {submitted ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <span className="font-display text-4xl text-plum-700">&#10003;</span>
              <h3 className="mt-5 font-display text-2xl text-ink-900">Terima kasih, {form.name.split(' ')[0] || 'Anda'}.</h3>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-600">
                Permintaan reservasi Anda telah kami terima. Tim kami akan menghubungi Anda melalui nomor yang
                terdaftar dalam 1x24 jam kerja.
              </p>
              <Button variant="ghost" className="mt-6" onClick={() => setSubmitted(false)}>
                Kirim permintaan lain
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-900">Nama Lengkap</label>
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama Anda"
                  className="w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-plum-700"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-ink-900">Nomor WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08xx xxxx xxxx"
                  className="w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-plum-700"
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink-900">Layanan yang Diminati</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-plum-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 focus:border-plum-700"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-900">Ceritakan Singkat Kebutuhan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Opsional — membantu kami memahami situasi Anda lebih awal."
                  className="w-full resize-none rounded-xl border border-plum-900/15 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-400 focus:border-plum-700"
                />
              </div>

              <Button type="submit" full size="lg">
                Kirim Permintaan Reservasi
              </Button>
              <p className="text-center text-xs text-ink-400">
                Data Anda bersifat rahasia dan hanya digunakan untuk proses reservasi.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
