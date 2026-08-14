import { motion } from 'framer-motion'

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) {
  const isCenter = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? 'text-honey-400' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`text-balance font-display text-3xl leading-[1.15] sm:text-4xl ${
          light ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[1.05rem] leading-relaxed ${light ? 'text-plum-100/80' : 'text-ink-600'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
