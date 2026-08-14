import Contact from '../sections/Contact.jsx'

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream px-6 pb-4 pt-16 lg:px-10 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Kontak</p>
          <h1 className="mt-5 text-balance font-display text-4xl leading-[1.12] text-ink-900 sm:text-5xl">
            Kami siap mendengarkan Anda.
          </h1>
        </div>
      </section>
      <Contact />
    </>
  )
}
