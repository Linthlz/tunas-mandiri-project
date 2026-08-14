import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Button from '../components/Button.jsx'
import articles from '../data/articles.js'

export default function Articles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionTitle
          eyebrow="Artikel & Edukasi"
          title="Wawasan seputar kesehatan mental untuk keseharian Anda."
        />
        <Button as={Link} to="/artikel" variant="ghost" className="hidden sm:inline-flex">
          Lihat semua artikel &#8594;
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a, i) => (
          <ArticleCard key={a.id} article={a} index={i} />
        ))}
      </div>
    </section>
  )
}
