import { Linkedin, Github, FileText } from 'lucide-react'
import { PERSONAL } from '../data/content'


export default function Footer() {
  return (
    <footer
      className='relative overflow-hidden'
      style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem) 1rem' }}
    >
      {/* Background image */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496858705185-1f25b056e4a7?q=72&w=1170&auto=format&fit=crop')",
          backgroundSize: '105% 105%',
          backgroundPosition: 'center',
        }}
      />

      {/* Vignette */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,0.15), rgba(0,0,0,0.55))',
        }}
      />

      {/* Glass card */}
      <div
        className='absolute inset-0 flex items-center justify-center'
        style={{ padding: '0 1rem' }}
      >
        <div
          className='w-full rounded-2xl md:rounded-3xl'
          style={{
            maxWidth: '56rem',
            background: 'rgba(25,20,18,0.68)',
            border: '1px solid rgba(255,255,255,0.10)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.45)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className='relative z-10 w-full mx-auto'
        style={{ maxWidth: '56rem' }}
      >
        <div
          style={{
            padding: 'clamp(1.75rem, 5vw, 4rem) clamp(1.25rem, 5vw, 2.5rem)',
          }}
        >
          {/* Header */}
          <div
            className='text-center'
            style={{ marginBottom: 'clamp(1.5rem, 4vw, 3.5rem)' }}
          >
            <p
              className='uppercase'
              style={{
                letterSpacing: '0.4em',
                fontSize: '0.65rem',
                marginBottom: '1rem',
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Contact Archive
            </p>

            <h2
              style={{
                // Fluid: readable on 320px, impressive on desktop
                fontSize: 'clamp(1.6rem, 6vw, 4.2rem)',
                lineHeight: 1.0,
                color: '#f3e9dc',
              }}
            >
              Let's build something
              <br />
              that outlives trends.
            </h2>

            <p
              className='mx-auto'
              style={{
                marginTop: '1rem',
                fontSize: 'clamp(0.78rem, 2vw, 0.9rem)',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '30rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              For work that values depth over noise and execution over
              announcements.
            </p>
          </div>

          {/* Email — wraps on small screens */}
          <div
            className='text-center'
            style={{
              marginTop: 'clamp(1rem, 4vw, 2.5rem)',
              marginBottom: 'clamp(1.5rem, 4vw, 3.5rem)',
              paddingTop: 'clamp(2rem, 5vw, 4rem)',
            }}
          >
            <a
              href={`mailto:${PERSONAL.email}`}
              style={{
                color: '#f3e9dc',
                fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)',
                letterSpacing: '0.04em',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                wordBreak: 'break-all', // long emails won't overflow on 320px
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#c67b3d')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#f3e9dc')}
            >
              {PERSONAL.email}
            </a>
          </div>

          <div
            className='flex justify-center flex-wrap'
            style={{
              gap: 'clamp(0.5rem, 2vw, 1rem)',
              marginBottom: 'clamp(1rem, 3vw, 2.5rem)',
            }}
          >
            <Social
              href={PERSONAL.linkedin}
              icon={<Linkedin size={14} />}
              label='LinkedIn'
            />

            <Social
              href={PERSONAL.github}
              icon={<Github size={14} />}
              label='GitHub'
            />

            <a
              href={PERSONAL.resumeUrl}
              download={`Shambhavi_Pandey_Resume_${new Date().toISOString().split('T')[0]}.pdf`}
              className="flex items-center gap-2 rounded-full transition-all duration-300"
              style={{
                padding: 'clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.85rem, 3vw, 1.25rem)',
                fontSize: 'clamp(0.72rem, 2vw, 0.875rem)',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = 'rgba(198,123,61,0.5)'
                e.currentTarget.style.color = '#f3e9dc'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
            >
              <FileText size={14} />
              Resume
            </a>
          </div>

          {/* Divider */}
          <div
            className='mx-auto'
            style={{
              height: '1px',
              width: '8rem',
              marginBottom: 'clamp(0.75rem, 2vw, 2rem)',
              background:
                'linear-gradient(to right, transparent, rgba(255,255,255,0.18), transparent)',
            }}
          />

          {/* Footer note */}
          <p
            className='text-center'
            style={{
              fontSize: '0.7rem',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.12em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Built by <span style={{ color: '#c67b3d' }}>{PERSONAL.name}</span> ·{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}

function Social({ href, icon, label }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-2 rounded-full transition-all duration-300'
      style={{
        // Slightly smaller padding on mobile
        padding: 'clamp(0.35rem, 1.5vw, 0.5rem) clamp(0.85rem, 3vw, 1.25rem)',
        fontSize: 'clamp(0.72rem, 2vw, 0.875rem)',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'rgba(255,255,255,0.7)',
        fontFamily: 'Inter, sans-serif',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.borderColor = 'rgba(198,123,61,0.5)'
        e.currentTarget.style.color = '#f3e9dc'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
      }}
    >
      {icon}
      {label}
    </a>
  )
}
