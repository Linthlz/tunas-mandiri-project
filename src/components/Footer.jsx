import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-plum-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey-400 font-display text-lg text-plum-950">
                T
              </span>
              <span className="font-display text-[1.05rem] text-white">
                Tunas Mandiri
                <span className="block text-xs font-sans font-medium tracking-wide text-honey-200">
                  Psychology Indonesia
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-plum-100/70">
              Biro psikologi yang mendampingi Anda tumbuh, pulih, dan berkembang — dengan pendekatan
              yang hangat dan profesional.
            </p>
            <p className="mt-6 font-display text-sm italic text-honey-200">Grow &middot; Heal &middot; Thrive</p>
          </div>

          <div>
            <p className="eyebrow text-honey-200/90">Navigasi</p>
            <ul className="mt-4 space-y-3 text-sm text-plum-100/80">
              <li><Link to="/" className="hover:text-white">Beranda</Link></li>
              <li><Link to="/tentang" className="hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/layanan" className="hover:text-white">Layanan</Link></li>
              <li><Link to="/artikel" className="hover:text-white">Artikel</Link></li>
              <li><Link to="/kontak" className="hover:text-white">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-honey-200/90">Layanan</p>
            <ul className="mt-4 space-y-3 text-sm text-plum-100/80">
              <li><Link to="/layanan/konseling-individu" className="hover:text-white">Konseling Individu</Link></li>
              <li><Link to="/layanan/konseling-pasangan" className="hover:text-white">Konseling Pasangan</Link></li>
              <li><Link to="/layanan/psikologi-anak-remaja" className="hover:text-white">Anak & Remaja</Link></li>
              <li><Link to="/layanan/psikotes-karier" className="hover:text-white">Psikotes & Karier</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-honey-200/90">Klinik</p>
            <ul className="mt-4 space-y-3 text-sm text-plum-100/80">
              <li>Jl. Jalak Putih Utama No.29A, Singaraja , Bali</li>
              <li>Senin — Sabtu, 09.00 — 20.00 WIB</li>
              <li>halo@tunasmandiripsikologi.id</li>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-plum-100/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Biro Psikologi Tunas Mandiri Indonesia. Seluruh hak cipta dilindungi.</p>
         
        </div>
      </div>
    </footer>
  )
}
