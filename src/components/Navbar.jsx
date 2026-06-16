import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { PERSONAL } from '../data/content'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Know Me', to: '/know-me' },
  { label: 'Learnings', to: '/learnings' },
  { label: 'Experiments', to: '/experiments' },
  { label: 'Experiences', to: '/experiences' },
  { label: 'Milestones', to: '/milestones' },
  { label: 'Get In Touch', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const rafRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 18)
        rafRef.current = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <style>{`
        /*
         * THE #1 SCROLL JANK FIX: Remove backdrop-filter from the fixed navbar.
         *
         * backdrop-filter: blur() on a position:fixed element that spans the full
         * viewport width means the GPU must re-blur a strip the width of the screen
         * on EVERY scroll frame. At 60fps that's 60 full-width blur operations/second.
         * No amount of React optimization can fix a CSS property that works this way.
         *
         * Replacement: a solid dark semi-transparent background that looks almost
         * identical — the blur was only ~4px of perceived depth difference — but
         * costs zero extra compositing on scroll.
         *
         * will-change: transform promotes the navbar to its own GPU layer so the
         * browser doesn't have to re-composite it with page content during scroll.
         */
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: padding 0.5s ease, background 0.5s ease, box-shadow 0.5s ease;
          will-change: transform;
        }
        .nav-root.top {
          padding: 1.3rem 0;
          background: rgba(18, 14, 12, 0.55);
          border-bottom: 1px solid transparent;
          box-shadow: none;
        }
        .nav-root.scrolled {
          padding: 0.85rem 0;
          /* Solid dark — no backdrop-filter */
          background: rgba(18, 14, 12, 0.94);
          border-bottom: 1px solid rgba(255,240,220,0.08);
          box-shadow: 0 10px 40px rgba(0,0,0,0.28);
        }
        .nav-link {
          position: relative;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-family: Inter, sans-serif;
          font-size: 0.84rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-secondary);
          transition: color 0.3s ease, background 0.3s ease;
          text-decoration: none;
        }
        .nav-link:hover { background: rgba(255,248,240,0.04); }
        .nav-link.active { color: #c67b3d; }
        .nav-link .indicator {
          position: absolute;
          left: 1rem; right: 1rem;
          bottom: 6px; height: 1px;
          background: transparent;
          transition: background 0.3s ease;
        }
        .nav-link.active .indicator {
          background: linear-gradient(to right, transparent, rgba(198,123,61,0.95), transparent);
        }
        /* Mobile drawer — solid, no blur */
        .nav-drawer {
          position: fixed;
          top: 0; left: 0;
          height: 100%; width: 82%; max-width: 340px;
          padding-top: 7rem;
          padding-bottom: 2.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(20, 16, 14, 0.97);
          border-right: 1px solid rgba(255,240,220,0.07);
          box-shadow: 0 10px 60px rgba(0,0,0,0.5);
          z-index: 40;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease;
        }
        .nav-drawer.closed { transform: translateX(-100%); opacity: 0; pointer-events: none; }
        .nav-drawer.open  { transform: translateX(0);    opacity: 1; pointer-events: auto; }
        .nav-backdrop {
          position: fixed; inset: 0; z-index: 39;
          background: rgba(10,8,7,0.65);
          transition: opacity 0.45s ease;
        }
        .nav-backdrop.closed { opacity: 0; pointer-events: none; }
        .nav-backdrop.open  { opacity: 1; pointer-events: auto; }
      `}</style>

      <nav className={`nav-root ${scrolled ? 'scrolled' : 'top'}`}>
        <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
          {/* Desktop links */}
          <div className='hidden lg:flex items-center gap-1'>
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {link.label}
                <span className='indicator' />
              </NavLink>
            ))}
          </div>

          {/* Right: logo + mobile toggle */}
          <div className='flex items-center gap-4 ml-auto lg:ml-0'>
            <NavLink
              to='/'
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.45rem',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                textDecoration: 'none',
                opacity: 1,
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{ color: 'var(--accent-primary)' }}>
                {PERSONAL.name.split(' ')[0]}
              </span>
              {PERSONAL.name.includes(' ') && (
                <span> {PERSONAL.name.split(' ').slice(1).join(' ')}</span>
              )}
            </NavLink>

            <button
              className='lg:hidden flex items-center justify-center w-10 h-10 rounded-full'
              onClick={() => setMobileOpen((o) => !o)}
              aria-label='Toggle menu'
              style={{
                color: mobileOpen
                  ? 'var(--accent-primary)'
                  : 'var(--text-secondary)',
                background: mobileOpen
                  ? 'rgba(198,123,61,0.08)'
                  : 'rgba(255,248,240,0.03)',
                border: mobileOpen
                  ? '1px solid rgba(198,123,61,0.22)'
                  : '1px solid rgba(255,240,220,0.06)',
                transition: 'all 0.3s ease',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-backdrop ${mobileOpen ? 'open' : 'closed'} lg:hidden`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`nav-drawer ${mobileOpen ? 'open' : 'closed'} lg:hidden`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            style={({ isActive }) => ({
              position: 'relative',
              padding: '1rem 1.25rem',
              borderRadius: '1rem',
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              background: isActive ? 'rgba(198,123,61,0.08)' : 'transparent',
              border: isActive
                ? '1px solid rgba(198,123,61,0.16)'
                : '1px solid transparent',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.15rem',
              letterSpacing: '0.01em',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            })}
          >
            {link.label}
            {location.pathname === link.to && (
              <span
                style={{
                  position: 'absolute',
                  right: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#c67b3d',
                  boxShadow: '0 0 10px rgba(198,123,61,0.45)',
                }}
              />
            )}
          </NavLink>
        ))}
      </div>
    </>
  )
}
