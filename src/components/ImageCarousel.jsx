import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ images = [] }) {
  const [current, setCurrent] = useState(0)

  if (!images.length) return null

  const activeImage = images[current]

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section
      style={{
        marginTop: '6rem',
      }}
    >
      {/* heading */}
      <div
        style={{
          marginBottom: '1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(243,236,224,0.55)',
          }}
        >
          Gallery
        </p>
      </div>

      {/* image container */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.02)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.45)',
        }}
      >
        <img
          src={activeImage?.url}
          alt={activeImage?.caption || `Gallery image ${current + 1}`}
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            maxHeight: '600px',
          }}
        />

        {/* left arrow */}
        <button
          onClick={prev}
          aria-label='Previous image'
          style={arrowStyle('left')}
        >
          <ChevronLeft size={18} />
        </button>

        {/* right arrow */}
        <button
          onClick={next}
          aria-label='Next image'
          style={arrowStyle('right')}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* caption */}
      {activeImage?.caption && (
        <p
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            color: 'rgba(243,236,224,0.6)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          {activeImage.caption}
        </p>
      )}

      {/* indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '1.4rem',
        }}
      >
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
            style={{
              width: idx === current ? '30px' : '8px',
              height: '8px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              background: idx === current ? '#f3e9dc' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>
    </section>
  )
}

function arrowStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: '18px',
    transform: 'translateY(-50%)',
    width: '42px',
    height: '42px',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.08)',
    background: 'rgba(0,0,0,0.38)',
    backdropFilter: 'blur(12px)',
    color: '#f3e9dc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  }
}
