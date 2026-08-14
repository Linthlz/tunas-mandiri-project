import SectionTitle from '../components/SectionTitle.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import testimonials from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="bg-honey-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionTitle
          eyebrow="Cerita Klien"
          title="Pengalaman nyata dari mereka yang telah bertumbuh bersama kami."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
