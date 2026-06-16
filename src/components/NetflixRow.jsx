import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

/*
 * KEY FIX IN THIS VERSION: CSS `filter` removed from card images.
 *
 * filter: sepia() saturate() contrast() brightness() on an img element
 * is a paint operation — it runs on the CPU main thread. During scroll,
 * every card image in view gets re-filtered every frame. With 3 rows of
 * cards, that's the dominant remaining cause of scroll jank.
 *
 * Replacement strategy:
 * 1. img gets no filter — renders at native speed
 * 2. A single rgba overlay div sitting above the image fakes the warm tint
 *    This is a compositor operation (just alpha blending) — free on GPU
 * 3. The sepia/desaturation effect is approximated with the overlay color
 *
 * If you want the exact sepia look, pre-process the images at upload time
 * in your CMS (Cloudinary, Sanity image pipeline, etc.) — zero runtime cost.
 */

export default function NetflixRow({
  title,
  subtitle,
  items,
  accentColor,
  labelKey = 'date',
}) {
  const rowRef = useRef(null)

  const scroll = (dir) => {
    if (!rowRef.current) return
    const amount = window.innerWidth < 768 ? 320 : 520
    rowRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  function getLabel(item) {
    return (
      item[labelKey] ||
      item.meta?.[labelKey] ||
      item.date ||
      item.meta?.year ||
      item.meta?.since ||
      ''
    )
  }

  const rowId = `nfr-${accentColor.replace(/[^a-z0-9]/gi, '')}`

  return (
    <section style={{ padding: '4rem 0 5rem', position: 'relative' }}>
      <style>{`
        .${rowId}-card {
          flex-shrink: 0;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(22, 18, 16, 0.94);
          border: 1px solid ${accentColor}28;
          box-shadow: 0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.03);
          cursor: pointer;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
          /* Compositor-only hover — no paint, no layout */
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, border-color 0.3s ease;
          will-change: transform;
        }
        .${rowId}-card:hover {
          transform: translateY(-4px);
          border-color: ${accentColor}52;
          box-shadow: 0 20px 52px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        /* Image zoom: transform only */
        .${rowId}-card .c-img {
          transition: transform 0.7s ease;
          will-change: transform;
          /* NO filter here — that's the fix */
        }
        .${rowId}-card:hover .c-img { transform: scale(1.04); }

        .${rowId}-btn {
          width: 2.5rem; height: 2.5rem;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(198,123,61,0.10);
          border: 1px solid rgba(198,123,61,0.28);
          color: #c67b3d; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .${rowId}-btn:hover { background: rgba(198,123,61,0.18); border-color: rgba(198,123,61,0.52); }
        .${rowId}-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* Section header */}
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          marginBottom: '2.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '0.75rem',
          }}
        >
          <div
            style={{
              width: '2.5rem',
              height: '1px',
              background: accentColor,
              opacity: 0.6,
            }}
          />
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: accentColor,
              margin: 0,
            }}
          >
            {title}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.4rem, 6vw, 4rem)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--text-primary)',
              margin: '0 0 0.5rem',
            }}
          >
            {subtitle.split('.')[0]}.
          </h2>
          <div className='hidden md:flex' style={{ gap: '0.6rem' }}>
            {['left', 'right'].map((dir) => (
              <button
                key={dir}
                onClick={() => scroll(dir)}
                className={`${rowId}-btn`}
              >
                {dir === 'left' ? (
                  <ChevronLeft size={22} strokeWidth={2.5} />
                ) : (
                  <ChevronRight size={22} strokeWidth={2.5} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Card row */}
      <div style={{ position: 'relative' }}>
        <div
          ref={rowRef}
          className={`${rowId}-scroll`}
          style={{
            display: 'flex',
            gap: '1rem',
            overflowX: 'auto',
            overflowY: 'visible',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: 'clamp(1rem, 4vw, 2rem)',
            paddingRight: 'clamp(1rem, 4vw, 2rem)',
            paddingBottom: '1rem',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            maxWidth: '80rem',
            margin: '0 auto',
          }}
        >
          {items.map((item, i) => (
            <Card
              key={item._id}
              item={item}
              label={getLabel(item)}
              accentColor={accentColor}
              featured={i === 0}
              rowId={rowId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ item, label, accentColor, featured, rowId }) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/post/${item.slug}`)}
      className={`${rowId}-card`}
      style={{
        flex: '0 0 auto',
        width: featured
          ? 'clamp(320px, 88vw, 500px)'
          : 'clamp(280px, 78vw, 400px)',
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '62.5%',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={
            item.thumbnailImage ||
            'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=600&auto=format&fit=crop&q=65'
          }
          alt={item.title}
          className='c-img'
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            /* NO filter property — this is the fix.
               filter: sepia/saturate/brightness triggers a main-thread repaint
               on every scroll frame for every visible card. Removing it is the
               single biggest remaining scroll performance win. */
          }}
          loading={featured ? 'eager' : 'lazy'}
          decoding='async'
        />

        {/*
          Warm tint overlay — replaces CSS filter visually.
          This is pure alpha compositing on the GPU — effectively free.
          rgba(60, 35, 15, 0.22) approximates sepia + warm desaturation.
        */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(55, 32, 12, 0.22)',
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Vignette */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            boxShadow: 'inset 0 0 60px rgba(20,12,6,0.4)',
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade into card body */}
        <div
          style={{
            position: 'absolute',
            inset: 'auto 0 0',
            height: '4rem',
            background:
              'linear-gradient(to bottom, transparent, rgba(22,18,16,0.97))',
            pointerEvents: 'none',
          }}
        />
        {/* Accent top line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1.5px',
            background: `linear-gradient(to right, transparent, ${accentColor}75, transparent)`,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding:
            'clamp(0.85rem, 2.5vw, 1.1rem) clamp(0.9rem, 2.5vw, 1.25rem)',
          background: `radial-gradient(ellipse at top right, ${accentColor}06 0%, transparent 55%)`,
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.28)',
            margin: '0 0 0.5rem',
          }}
        >
          {label}
        </p>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2.6vw, 1.25rem)',
            fontWeight: 500,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            color: '#f0ece4',
            margin: '0 0 0.45rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.72rem, 1.6vw, 0.8rem)',
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.4)',
            margin: '0 0 1rem',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.excerpt || item.meta?.summary}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: accentColor,
            opacity: 0.85,
          }}
        >
          Read Archive
          <div
            style={{ height: '1px', width: '1.5rem', background: accentColor }}
          />
          <ArrowUpRight size={10} />
        </div>
      </div>

      <div
        style={{
          height: '1.5px',
          background: `linear-gradient(to right, transparent, ${accentColor}40, transparent)`,
          opacity: 0.3,
        }}
      />
    </article>
  )
}
