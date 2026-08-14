import SectionTitle from '../components/SectionTitle.jsx'
import FAQItem from '../components/FAQItem.jsx'
import faqs from '../data/faqs.js'

export default function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
      <SectionTitle
        eyebrow="Pertanyaan Umum"
        title="Hal-hal yang sering ditanyakan sebelum memulai."
        align="center"
      />
      <div className="mt-12">
        {faqs.map((faq, i) => (
          <FAQItem key={faq.question} faq={faq} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  )
}
