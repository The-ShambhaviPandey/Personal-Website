import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import Footer from '../components/Footer'
import { PERSONAL } from '../data/content'

export default function Contact() {
  return (
    <main
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* BACKGROUND IMAGE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1639153695772-f73e6fe958fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          opacity: 0.88,
          transform: 'scale(1.05)',
        }}
      />

      {/* OLD MONEY OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(22,17,15,0.25) 0%,
              rgba(22,17,15,0.55) 100%
            ),
            linear-gradient(
              to right,
              rgba(22,17,15,0.18) 0%,
              rgba(22,17,15,0.28) 40%,
              rgba(22,17,15,0.45) 75%,
              rgba(22,17,15,0.62) 100%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className='relative z-10'>
        <div className='max-w-6xl mx-auto px-5 sm:px-6 pt-24 sm:pt-32 lg:pt-36 pb-16 sm:pb-24'>
          <div className='grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-16 lg:gap-20 items-start'>
            {/* LEFT */}
            <div className='md:sticky md:top-32'>
              <p
                className='text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-4 sm:mb-6'
                style={{
                  color: 'var(--accent-primary)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Contact
              </p>

              <h1
                className='leading-[0.92] tracking-[-0.04em] sm:tracking-[-0.05em] mb-5 sm:mb-8'
                style={{
                  fontSize: 'clamp(2.4rem, 8vw, 6rem)',
                  color: 'var(--text-primary)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 600,
                }}
              >
                Interesting
                <br />
                conversations
                <br />
                start here.
              </h1>

              <p
                className='text-base sm:text-lg leading-8 sm:leading-9 max-w-lg mb-7 sm:mb-10'
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                I enjoy discussing engineering, systems, writing, design,
                research, and ambitious ideas that are slightly unreasonable but
                exciting anyway.
              </p>

              {/* STATUS */}
              <div
                className='inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl'
                style={{
                  background: 'rgba(30, 24, 20, 0.82)',
                  border: '1px solid rgba(255,240,220,0.08)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.22)',
                }}
              >
                <div
                  className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0'
                  style={{
                    background: '#7a9b76',
                    boxShadow: '0 0 12px rgba(122,155,118,0.45)',
                  }}
                />
                <span
                  className='text-xs sm:text-sm leading-snug'
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Available for internships, collaborations, and opportunities
                </span>
              </div>
            </div>

            {/* RIGHT — cards */}
            <div className='flex flex-col gap-3 sm:gap-5'>
              <ContactCard
                href={`mailto:${PERSONAL.email}`}
                icon={<Mail size={20} />}
                label='Email'
                value={PERSONAL.email}
                accentColor='#7c4a43'
                description='Best place for opportunities, collaborations, or conversations.'
              />
              <ContactCard
                href={PERSONAL.linkedin}
                icon={<Linkedin size={20} />}
                label='LinkedIn'
                value={PERSONAL.linkedin.replace('https://', '')}
                accentColor='#506074'
                description='Professional profile, experience, and updates.'
              />
              <ContactCard
                href={PERSONAL.github}
                icon={<Github size={20} />}
                label='GitHub'
                value={PERSONAL.github.replace('https://', '')}
                accentColor='#6f7b5c'
                description='Projects, experiments, and technical work.'
              />
              <ContactCard
                href={PERSONAL.resumeUrl}
                icon={<FileText size={20} />}
                label='Resume'
                value='Download Resume'
                accentColor='#a67c52'
                description='Experience, skills, education, and selected work.'
                download={`Shambhavi_Pandey_Resume_${new Date().toISOString().split('T')[0]}.pdf`}
              />
            </div>
          </div>
        </div>

        {/* CLOSING NOTE */}
        <div className='px-5 sm:px-6 pb-12 sm:pb-16'>
          <div
            className='max-w-4xl mx-auto relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] p-8 sm:p-10 md:p-14'
            style={{
              background: 'rgba(30, 24, 20, 0.72)',
              border: '1px solid rgba(255,240,220,0.08)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
            }}
          >
            {/* Ambient Glow */}
            <div
              className='absolute -top-24 -right-24 w-72 h-72 rounded-full'
              style={{ background: 'rgba(198,123,61,0.07)' }}
            />

            <div
              className='absolute -bottom-20 -left-20 w-64 h-64 rounded-full'
              style={{ background: 'rgba(124,74,67,0.07)' }}
            />

            {/* Film Grain */}
            <div
              className='absolute inset-0 pointer-events-none'
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
                backgroundSize: '100% 3px',
                opacity: 0.15,
                mixBlendMode: 'soft-light',
              }}
            />

            <div className='relative z-10 text-center'>
              <p
                className='text-[10px] sm:text-xs uppercase tracking-[0.35em] mb-4'
                style={{
                  color: 'var(--accent-primary)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Closing Note
              </p>

              <h3
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                  color: 'var(--text-primary)',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                }}
              >
                Thank you for
                <br />
                visiting.
              </h3>

              <p
                className='mt-6 mx-auto max-w-2xl text-sm sm:text-base leading-7 sm:leading-8'
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                This archive is a collection of projects, experiments, lessons,
                and stories that have shaped who I am becoming. Some pieces
                reflect success, others document failure, but all of them
                represent genuine curiosity and growth.
                <br></br>
                None are finished. And neither am I.
              </p>

              <p
                className='mt-5 mx-auto max-w-2xl text-sm sm:text-base leading-7 sm:leading-8'
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                I'm still learning, building, writing, and figuring things out.
                If something here resonated with you, I'd be glad to hear from
                you.
              </p>

              <div
                className='mt-8 flex items-center justify-center gap-4'
                style={{
                  color: 'var(--text-muted)',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '1px',
                    background: 'rgba(198,123,61,0.35)',
                  }}
                />

                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                  }}
                >
                  Shambhavi
                </span>

                <div
                  style={{
                    width: '3rem',
                    height: '1px',
                    background: 'rgba(198,123,61,0.35)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}

function ContactCard({
  href,
  icon,
  label,
  value,
  accentColor,
  description,
  download,
}) {
  return (
    <a
      href={href}
      target={download ? '_self' : '_blank'}
      rel='noopener noreferrer'
      download={typeof download === 'string' ? download : download ? true : undefined}
      className='group relative overflow-hidden flex items-start gap-4 sm:gap-5 p-5 sm:p-7 rounded-[1.5rem] sm:rounded-[2rem]'
      style={{
        background: 'rgba(30, 24, 20, 0.78)',
        border: '1px solid rgba(255,240,220,0.08)',
        boxShadow: '0 10px 40px rgba(0,0,0,0.28)',
        transition:
          'transform 500ms ease, border-color 500ms ease, box-shadow 500ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accentColor}40`
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.01)'
        e.currentTarget.style.boxShadow = `0 18px 50px ${accentColor}18`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,240,220,0.08)'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.28)'
      }}
    >
      {/* HOVER GLOW */}
      <div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700'
        style={{
          background: `radial-gradient(circle at top left, ${accentColor}18, transparent 68%)`,
        }}
      />

      {/* FILM TEXTURE */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '100% 3px',
          opacity: 0.18,
          mixBlendMode: 'soft-light',
        }}
      />

      {/* ICON */}
      <div
        className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10'
        style={{
          background: `${accentColor}12`,
          border: `1px solid ${accentColor}35`,
          color: accentColor,
        }}
      >
        {icon}
      </div>

      {/* TEXT */}
      <div className='flex-1 min-w-0 relative z-10'>
        <p
          className='text-[10px] sm:text-[11px] uppercase tracking-[0.18em] mb-0.5 sm:mb-1'
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {label}
        </p>

        <p
          className='text-base sm:text-xl truncate'
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 600,
          }}
        >
          {value}
        </p>

        <p
          className='text-[11px] sm:text-xs mt-1 sm:mt-1.5 leading-5 sm:leading-6'
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {description}
        </p>
      </div>

      {/* ARROW */}
      <div
        className='flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 relative z-10 self-center'
        style={{ color: accentColor, fontSize: '1.1rem' }}
      >
        →
      </div>
    </a>
  )
}
