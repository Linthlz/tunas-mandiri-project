import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/layanan/${service.id}`}
        className="group flex h-full flex-col rounded-3xl border border-plum-900/8 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-plum-900/0 hover:shadow-[0_24px_48px_-24px_rgba(76,29,149,0.28)]"
      >
        <span className="font-display text-sm text-plum-500">{service.mark}</span>
        <h3 className="mt-4 font-display text-xl text-ink-900 group-hover:text-plum-800">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-600">{service.short}</p>
        <span className="mt-6 inline-flex items-center text-sm font-semibold text-plum-700">
          Pelajari layanan
          <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
            &#8594;
          </span>
        </span>
      </Link>
    </motion.div>
  )
}
