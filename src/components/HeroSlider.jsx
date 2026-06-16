import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HERO_SLIDES } from '../data/content'

const SLIDE_DURATION = 5000
const CROSSFADE_MS = 800
const TEXT_FADE_MS = 200
const TEXT_DELAY_MS = 200

// Preload only the next image to avoid loading all at once
function preloadImage(src) {
  const img = new Image()
  img.src = src
}

function SlideText({ slide, style, downloadFileName }) {
  return (
    <div
      className='absolute inset-0 flex items-center justify-center pointer-events-none'
      style={style}
    >
      <div
        className='w-full mx-auto text-center pointer-events-auto'
        style={{ maxWidth: '64rem', padding: '0 1.25rem' }}
      >
        <p
          className='uppercase mb-4'
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.6rem, 2vw, 0.72rem)',
            fontWeight: 600,
            letterSpacing: '0.28em',
            color: slide.accent,
            opacity: 0.9,
          }}
        >
          {slide.eyebrow}
        </p>

        <h1
          className='mb-4 md:mb-6'
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.6rem, 8vw, 7.5rem)',
            fontWeight: 600,
            lineHeight: 0.95,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            textRendering: 'optimizeLegibility',
          }}
        >
          {slide.headline}
        </h1>

        <p
          className='mx-auto mb-8 md:mb-12'
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.85rem, 2.5vw, 1.2rem)',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: '0.01em',
            color: 'var(--text-secondary)',
            opacity: 0.92,
            maxWidth: '36rem',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {slide.subline}
        </p>

        {slide.cta.type === 'download' ? (
          <a
            href={slide.cta.href}
            download={downloadFileName}
            className='inline-flex items-center gap-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95'
            style={{
              background: slide.accent,
              color: '#f5ede3',
              boxShadow: '0 8px 30px rgba(0,0,0,0.28)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.7rem, 2vw, 0.82rem)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding:
                'clamp(0.65rem, 2vw, 0.875rem) clamp(1.25rem, 4vw, 2rem)',
            }}
          >
            {slide.cta.label}
            <ChevronRight size={14} />
          </a>
        ) : (
          <Link
            to={slide.cta.href}
            className='inline-flex items-center gap-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95'
            style={{
              background: slide.accent,
              color: '#f5ede3',
              boxShadow: '0 8px 30px rgba(0,0,0,0.28)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.7rem, 2vw, 0.82rem)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding:
                'clamp(0.65rem, 2vw, 0.875rem) clamp(1.25rem, 4vw, 2rem)',
            }}
          >
            {slide.cta.label}
            <ChevronRight size={14} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)
  // Track which images have been loaded so we don't re-request them
  const [loadedImages, setLoadedImages] = useState(() => new Set([0]))
  const currentRef = useRef(0)
  const fadingRef = useRef(false)
  const intervalRef = useRef(null)

  const goTo = useCallback((idx) => {
    if (fadingRef.current) return
    if (idx === currentRef.current) return
    fadingRef.current = true
    setPrevIdx(currentRef.current)
    setCurrent(idx)
    currentRef.current = idx

    // Mark next image as needed and preload the one after
    setLoadedImages((prev) => {
      const next = new Set(prev)
      next.add(idx)
      return next
    })

    // Preload the image after next
    const afterNext = (idx + 1) % HERO_SLIDES.length
    preloadImage(HERO_SLIDES[afterNext].image)

    setTimeout(
      () => {
        setPrevIdx(null)
        fadingRef.current = false
      },
      CROSSFADE_MS + TEXT_DELAY_MS + TEXT_FADE_MS
    )
  }, [])

  const next = useCallback(() => {
    goTo((currentRef.current + 1) % HERO_SLIDES.length)
  }, [goTo])

  const prev = useCallback(() => {
    goTo((currentRef.current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [goTo])

  // Single interval — cleared and reset if next changes (it doesn't, but safe)
  useEffect(() => {
    intervalRef.current = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(intervalRef.current)
  }, [next])

  // Preload slide 1 on mount so first transition is smooth
  useEffect(() => {
    if (HERO_SLIDES.length > 1) {
      preloadImage(HERO_SLIDES[1].image)
    }
  }, [])

  const slide = HERO_SLIDES[current]
  const prevSlide = prevIdx !== null ? HERO_SLIDES[prevIdx] : null
  const downloadFileName = `Shambhavi_Pandey_Resume_${new Date().toISOString().split('T')[0]}.pdf`

  return (
    <section
      className='relative w-full min-h-screen overflow-hidden'
      style={{ background: '#0a0a0a' }}
    >
      {/*
        KEY CHANGE: Only render slides that have been visited (lazy).
        The first slide is always rendered. Others render on first visit
        and then stay mounted (opacity: 0) to avoid re-layout on transition.
      */}
      {HERO_SLIDES.map((s, i) => {
      const shouldRender = loadedImages.has(i)
      if (!shouldRender) {
        return <div key={s.id} className='absolute inset-0' style={{ zIndex: 1, opacity: 0 }} />
      }

      return (
        <div
          key={s.id}
          className='absolute inset-0'
          style={{
            zIndex: 1,
            opacity: i === current ? 1 : 0,
            willChange: 'opacity',
            transition: `opacity ${CROSSFADE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
          }}
        >
          <img
            src={s.image}
            alt=''
            aria-hidden='true'
            className='absolute inset-0 w-full h-full object-cover'
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding='async'
            style={{
              transform: 'scale(1.02)',
              transformOrigin: 'center',
              willChange: 'transform',
            }}
          />

          {/* Per-slide dark overlay */}
          <div
            aria-hidden='true'
            className='absolute inset-0'
            style={{
              background: `linear-gradient(
                to top,
                rgba(0,0,0,${Math.min((s.darkOverlay || 0) + 0.82, 1)}) 0%,
                rgba(0,0,0,${Math.min((s.darkOverlay || 0) + 0.35, 1)}) 55%,
                rgba(0,0,0,${Math.min((s.darkOverlay || 0) + 0.15, 1)}) 100%
              )`,
            }}
          />

          {/* Extra darkening — slide 2 only */}
          {i === 1 && (
            <div
              aria-hidden='true'
              className='absolute inset-0'
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 25%, rgba(0,0,0,0.55) 45%, transparent 50%)',
                pointerEvents: 'none',
              }}
            />
          )}
        </div>
      )
    })}


      {/* Noise grain — moved to CSS pseudo-element via className to avoid inline SVG re-parsing */}
      <div
        className='absolute inset-0 pointer-events-none hero-noise'
        style={{ zIndex: 3 }}
      />

      {/* Ambient glow */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          zIndex: 3,
          background:
            'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(176,139,95,0.07) 0%, transparent 72%)',
        }}
      />

      {prevSlide && (
        <SlideText
          key={`text-prev-${prevIdx}`}
          slide={prevSlide}
          downloadFileName={downloadFileName}
          style={{
            zIndex: 9,
            animation: `fadeOut ${TEXT_FADE_MS}ms ease ${TEXT_DELAY_MS}ms both`,
          }}
        />
      )}

      <SlideText
        key={`text-curr-${current}`}
        slide={slide}
        downloadFileName={downloadFileName}
        style={{
          zIndex: 10,
          animation: `fadeInUp ${TEXT_FADE_MS + 100}ms cubic-bezier(0.22,1,0.36,1) ${TEXT_DELAY_MS}ms both`,
        }}
      />

      {/* Slide indicators */}
      <div
        className='absolute flex items-center gap-3'
        style={{
          bottom: 'clamp(1.25rem, 4vw, 3rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
        }}
      >
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className='transition-all duration-300'
            style={{
              width: i === current ? '2rem' : '0.5rem',
              height: '0.5rem',
              borderRadius: '9999px',
              background:
                i === current ? slide.accent : 'rgba(255,255,255,0.2)',
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className='absolute top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center'
        style={{
          left: '1.5rem',
          zIndex: 20,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'var(--text-secondary)',
        }}
        aria-label='Previous slide'
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className='absolute top-1/2 -translate-y-1/2 p-2.5 rounded-full transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center'
        style={{
          right: '1.5rem',
          zIndex: 20,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'var(--text-secondary)',
        }}
        aria-label='Next slide'
      >
        <ChevronRight size={18} />
      </button>

      {/* Progress bar */}
      <div
        className='absolute bottom-0 left-0 h-px w-full'
        style={{ background: 'rgba(255,255,255,0.06)', zIndex: 20 }}
      >
        <div
          key={current}
          className='h-full'
          style={{
            background: slide.accent,
            animation: `progressBar ${SLIDE_DURATION}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Noise via CSS — avoids inline SVG re-parse on every render */
        .hero-noise {
          opacity: 0.06;
          mix-blend-mode: soft-light;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .hero-noise { display: none; }
        }
      `}</style>
    </section>
  )
}
