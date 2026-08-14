import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from './Button.jsx'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/layanan', label: 'Layanan' },
  { to: '/artikel', label: 'Artikel' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(76,29,149,0.08)]'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-900 font-display text-lg text-honey-400">
            T
          </span>
          <span className="font-display text-[1.05rem] leading-tight text-ink-900">
            Tunas Mandiri
            <span className="block text-xs font-sans font-medium tracking-wide text-plum-700">
              Psychology Indonesia
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-[0.95rem] font-medium transition-colors ${
                  isActive ? 'text-plum-900' : 'text-ink-600 hover:text-plum-800'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative pb-1">
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-honey-400"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button as={Link} to="/kontak" size="sm">
            Konsultasi Sekarang
          </Button>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-6 bg-ink-900 transition-transform ${open ? 'translate-y-[6.5px] rotate-45' : ''}`}
          />
          <span className={`h-[1.5px] w-6 bg-ink-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-[1.5px] w-6 bg-ink-900 transition-transform ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-plum-100 bg-white lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-[0.98rem] font-medium ${
                    isActive ? 'bg-plum-50 text-plum-900' : 'text-ink-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2">
              <Button as={Link} to="/kontak" full onClick={() => setOpen(false)}>
                Konsultasi Sekarang
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
