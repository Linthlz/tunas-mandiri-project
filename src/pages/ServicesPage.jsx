import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FAQ from '../sections/FAQ.jsx'
import CTA from '../sections/CTA.jsx'
import services from '../data/services.js'

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Layanan Kami</p>
          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.12] text-ink-900 sm:text-5xl">
            Layanan psikologi yang menyesuaikan kebutuhan Anda.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-relaxed text-ink-600">
            Pilih layanan yang paling sesuai, atau hubungi tim kami untuk membantu menentukan
            langkah yang paling tepat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  )
}
