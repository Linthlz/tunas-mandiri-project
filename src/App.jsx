import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ServiceDetailPage from './pages/ServiceDetailPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import ArticleDetailPage from './pages/ArticleDetailPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/layanan/:id" element={<ServiceDetailPage />} />
          <Route path="/artikel" element={<ArticlesPage />} />
          <Route path="/artikel/:id" element={<ArticleDetailPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
