import Hero from '../sections/Hero.jsx'
import Stats from '../sections/Stats.jsx'
import About from '../sections/About.jsx'
import Services from '../sections/Services.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import ConsultationProcess from '../sections/ConsultationProcess.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import Articles from '../sections/Articles.jsx'
import CTA from '../sections/CTA.jsx'
import FAQ from '../sections/FAQ.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <ConsultationProcess />
      <Testimonials />
      <Articles />
      <FAQ />
      <CTA />
    </>
  )
}
