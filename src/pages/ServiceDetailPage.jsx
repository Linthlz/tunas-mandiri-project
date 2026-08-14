import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import services from '../data/services.js'
import Button from '../components/Button.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTA from '../sections/CTA.jsx'

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) return <Navigate to="/layanan" replace />

  const others = services.filter((s) => s.id !== id).slice(0, 3)

  return (
    <>
      <section className="bg-cream px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <Link to="/layanan" className="text-sm font-medium text-plum-700 hover:underline">
            &#8592; Kembali ke Layanan
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <span className="font-display text-sm text-plum-500">{service.mark}</span>
            <h1 className="mt-3 text-balance font-display text-4xl leading-[1.1] text-ink-900 sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-600">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-plum-900/10 p-8 sm:grid-cols-3 sm:p-10">
          <div>
            <p className="eyebrow">Durasi</p>
            <p className="mt-2 font-display text-lg text-ink-900">{service.duration}</p>
          </div>
          <div>
            <p className="eyebrow">Format</p>
            <p className="mt-2 font-display text-lg text-ink-900">{service.format}</p>
          </div>
          <div>
            <p className="eyebrow">Cocok Untuk</p>
            <ul className="mt-2 space-y-1 text-sm text-ink-700">
              {service.forWhom.map((f) => (
                <li key={f}>&mdash; {f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/kontak" size="lg">
            Reservasi Layanan Ini
          </Button>
        </div>
      </section>

      <section className="bg-plum-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-ink-900">Layanan lain yang mungkin relevan</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
