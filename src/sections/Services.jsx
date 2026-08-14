import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Button from '../components/Button.jsx'
import services from '../data/services.js'

export default function Services() {
  return (
    <section className="bg-plum-50/60 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle
            eyebrow="Layanan Kami"
            title="Dukungan psikologis untuk setiap tahap kehidupan."
            description="Dari konsultasi individu hingga program korporat, setiap layanan dirancang dengan pendekatan yang disesuaikan kebutuhan Anda."
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button as={Link} to="/layanan" variant="outline">
            Lihat Semua Layanan
          </Button>
        </div>
      </div>
    </section>
  )
}
