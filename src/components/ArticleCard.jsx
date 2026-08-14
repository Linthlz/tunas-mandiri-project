import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/artikel/${article.id}`} className="group flex h-full flex-col">
        <div className="relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <span className="relative z-10 font-display text-sm text-honey-200 p-6">
            {article.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col pt-5">
          <p className="text-xs font-medium text-ink-400">
            {article.date} &middot; {article.readTime}
          </p>

          <h3 className="mt-2 font-display text-lg leading-snug text-ink-900 group-hover:text-plum-800">
            {article.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
            {article.excerpt}
          </p>

          <span className="mt-4 inline-flex items-center text-sm font-semibold text-plum-700">
            Baca artikel
            <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1">
              &#8594;
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}