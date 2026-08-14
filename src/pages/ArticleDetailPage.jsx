import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import articles from '../data/articles.js'
import ArticleCard from '../components/ArticleCard.jsx'
import CTA from '../sections/CTA.jsx'

export default function ArticleDetailPage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) return <Navigate to="/artikel" replace />

  const others = articles.filter((a) => a.id !== id).slice(0, 3)

  return (
    <>
      <section className="bg-cream px-6 pb-14 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-3xl">
          <Link to="/artikel" className="text-sm font-medium text-plum-700 hover:underline">
            &#8592; Kembali ke Artikel
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6"
          >
            <p className="eyebrow">{article.category}</p>

            <h1 className="mt-4 text-balance font-display text-4xl leading-[1.12] text-ink-900 sm:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 text-sm text-ink-400">
              {article.date} &middot; {article.readTime}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto aspect-[21/9] max-w-5xl px-6 lg:px-10">
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <div className="space-y-6">
          {article.content.map((para, i) => (
            <p key={i} className="text-[1.05rem] leading-relaxed text-ink-700">
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-plum-50/60 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-ink-900">Artikel lainnya</h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((a, i) => (
              <ArticleCard key={a.id} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}