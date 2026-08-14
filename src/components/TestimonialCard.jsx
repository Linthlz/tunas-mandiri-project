import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full flex-col rounded-3xl bg-plum-50 p-8"
    >
      <span className="font-display text-4xl leading-none text-honey-400">&#8220;</span>
      <blockquote className="mt-2 flex-1 text-[1.02rem] leading-relaxed text-ink-900">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between border-t border-plum-900/10 pt-5">
        <div>
          <p className="font-display text-[0.95rem] text-ink-900">{testimonial.name}</p>
          <p className="text-xs text-ink-600">{testimonial.role}</p>
        </div>
        <span className="eyebrow tracking-normal text-plum-700">
          {testimonial.rating}.0 / 5.0
        </span>
      </figcaption>
    </motion.figure>
  )
}
