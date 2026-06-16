import { useState, useEffect } from 'react'
import HeroSlider from '../components/HeroSlider'
import NetflixRow from '../components/NetflixRow'
import Footer from '../components/Footer'
import { getPostsBySection } from '../api/index'

const BG_IMAGE =
  'https://images.unsplash.com/photo-1638129640863-d1f283b8ffdb?q=70&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

function parseDate(str) {
  if (!str) return Infinity
  const cleaned = str.replace(/^(since|from)\s+/i, '').trim()
  const start = cleaned.split(/\s*[–—-]\s*/)[0].trim()
  const ts = Date.parse(start)
  return isNaN(ts) ? Infinity : ts
}

function normalisePosts(posts = []) {
  return posts
    .map((post) => ({
      ...post,
      thumbnailImage: !post.thumbnailImage
        ? undefined
        : typeof post.thumbnailImage === 'string'
          ? post.thumbnailImage
          : post.thumbnailImage.url,
    }))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
}

/* ── Magazine issue bar ── */
function IssueBar() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1.5rem clamp(1rem, 4vw, 2rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,240,220,0.08)',
        gap: '1rem',
        flexWrap: 'wrap',
        color: 'rgba(250, 225, 192,0.5)',
      }}
    >
      <span
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'rgba(250, 225, 192,0.5)',
        }}
      >
        Portfolio — Vol. I
      </span>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(250, 225, 192,0.5)',
        }}
      >
        <span>Design</span>
        <span style={{ color: 'rgba(243,233,220,0.3)' }}>—</span>
        <span>Engineering</span>
        <span style={{ color: 'rgba(243,233,220,0.3)' }}>—</span>
        <span>Writing</span>
      </div>

      <span
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: 'var(--accent-primary)',
        }}
      >
        {year}
      </span>
    </div>
  )
}

/* ── Hairline divider ── */
function SectionDivider() {
  return (
    <div
      style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '0 clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div style={{ height: '1px', background: 'rgba(255,240,220,0.06)' }} />
    </div>
  )
}

export default function Home() {
  const [proud, setProud] = useState([])
  const [failed, setFailed] = useState([])
  const [obsessing, setObsessing] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getPostsBySection('proud'),
      getPostsBySection('failed'),
      getPostsBySection('obsessing'),
    ])
      .then(([p, f, o]) => {
        setProud(normalisePosts(p))
        setFailed(normalisePosts(f))
        setObsessing(normalisePosts(o))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <main>
      {/*
        Inject the background CSS once via a <style> tag.
        KEY FIXES vs original:
        1. backgroundAttachment: 'local' → REMOVED.
           'local' scrolls the bg with the element, causing a repaint on every
           scroll tick. 'scroll' (default) is handled by the compositor without
           touching the main thread at all.
        2. Inline SVG noise string → moved to .home-canvas-noise CSS class.
           Inline data-URIs in style attributes are re-parsed on every render.
           A CSS class is parsed once by the browser at stylesheet load time.
        3. Added contain: 'paint' on the canvas wrapper so the browser knows
           no child can paint outside the box — reduces what the engine checks
           during scroll reflows.
      */}
      <style>{`
        .home-canvas {
          position: relative;
          isolation: isolate;
          contain: paint;
        }
        .home-canvas-bg {
          position: absolute;
          inset: 0;
          background-image: url("${BG_IMAGE}");
          background-size: cover;
          background-position: center top;
          /* 'scroll' (the default) — no repaint on scroll, handled by compositor */
          background-attachment: scroll;
          z-index: 0;
        }
        .home-canvas-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(22,17,15,0.72) 0%,
            rgba(22,17,15,0.66) 40%,
            rgba(22,17,15,0.70) 100%
          );
          z-index: 1;
        }
        .home-canvas-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 35%;
          background: radial-gradient(ellipse at top, rgba(198,123,61,0.06), transparent 70%);
          z-index: 2;
          pointer-events: none;
        }
        .home-canvas-noise {
          position: absolute;
          inset: 0;
          opacity: 0.018;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
          z-index: 3;
          pointer-events: none;
        }
        .home-canvas-content {
          position: relative;
          z-index: 4;
        }
        @media (prefers-reduced-motion: reduce) {
          .home-canvas-noise { display: none; }
        }
      `}</style>

      <HeroSlider />

      {/*
        The texture image is pinned as a single background across the
        entire section. All three NetflixRow sections sit on top of it
        as one unified canvas.
      */}
      <div className='home-canvas'>
        <div aria-hidden='true' className='home-canvas-bg' />
        <div aria-hidden='true' className='home-canvas-scrim' />
        <div aria-hidden='true' className='home-canvas-glow' />
        <div aria-hidden='true' className='home-canvas-noise' />

        {/* Content — sits above all bg layers */}
        <div className='home-canvas-content'>
          {loading ? (
            <div
              style={{
                padding: '8rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--text-muted)',
                }}
              >
                Loading the archive…
              </p>
            </div>
          ) : (
            <>
              <IssueBar />

              <NetflixRow
                id='proud'
                title='Highlights'
                subtitle='Work I genuinely feel good about.'
                items={proud}
                accentColor='#f472b6'
                labelKey='date'
                issueNumber='01'
              />

              <SectionDivider />

              <NetflixRow
                id='failed'
                title='Dead Ends'
                subtitle="Honest catalogue of what didn't work."
                items={failed}
                accentColor='#f87171'
                labelKey='date'
                issueNumber='02'
              />

              <SectionDivider />

              <NetflixRow
                id='obsessing'
                title='Rabbit Holes'
                subtitle='Things living rent-free in my head.'
                items={obsessing}
                accentColor='#c084fc'
                labelKey='date'
                issueNumber='03'
              />
            </>
          )}

          {/* Closing Note */}
          <div className='px-6 mt-20 pb-10'>
            <div
              className='max-w-3xl rounded-3xl px-6 sm:px-8 py-6 sm:py-7 mx-auto'
              style={{
                background: 'rgba(11,11,15,0.75)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.28)',
              }}
            >
              <p
                className='text-[10px] uppercase tracking-[0.35em] mb-3'
                style={{ color: '#b39b7a' }}
              >
                Ongoing Story
              </p>

              <p
                className='font-inter text-sm sm:text-base leading-7 sm:leading-8'
                style={{ color: '#b8b1a7' }}
              >
                This archive highlights moments worth documenting, not the
                entirety of the journey. Between milestones, failed experiments,
                and temporary obsessions lies the quieter work of learning,
                building, and steadily becoming better at both.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
