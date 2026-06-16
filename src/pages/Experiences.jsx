import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { EXPERIENCES } from '../data/content'

const TYPE_COLORS = {
  'Open-Source': { accent: '#b39b7a', glow: '#b39b7a40' },
  Internship: { accent: '#7bbfe0', glow: '#34aeeb40' },
  Community: { accent: '#64d622', glow: '#64d62240' },
  Freelance: { accent: '#a8895f', glow: '#a8895f40' },
}

const DEFAULT_COLOR = { accent: '#a1a1aa', glow: '#a1a1aa40' }

export default function Experiences() {
  const navigate = useNavigate()
  const trackRef = useRef(null)

  const scroll = (direction) => {
    if (!trackRef.current) return
    const container = trackRef.current
    const cardWidth = container.querySelector('[data-card]')?.offsetWidth || 0
    container.scrollBy({
      left: direction === 'left' ? -(cardWidth + 40) : cardWidth + 40,
      behavior: 'smooth',
    })
  }

  return (
    <main
      className='relative overflow-hidden'
      style={{ background: '#0b0b0f', minHeight: '100vh' }}
    >
      {/* Ambient Background */}
      <div className='absolute top-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-[#8b7355]/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none' />
      <div className='absolute top-[35%] right-0 w-64 h-64 lg:w-96 lg:h-96 bg-[#6b5a45]/10 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 left-[20%] w-56 h-56 lg:w-80 lg:h-80 bg-[#b39b7a]/5 blur-[110px] lg:blur-[150px] rounded-full pointer-events-none' />

      {/* Noise */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      <div className='relative max-w-[1700px] mx-auto pt-24 sm:pt-32 lg:pt-36 pb-20 lg:pb-32'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 sm:mb-20 lg:mb-24 px-5 sm:px-6 text-center'
        >
          <p
            className='text-[10px] sm:text-[11px] uppercase tracking-[0.35em] mb-4'
            style={{ color: '#b39b7a' }}
          >
            Career Timeline
          </p>

          <h1
            className='font-serif leading-[0.92] tracking-[-0.03em] sm:tracking-[-0.05em] mb-5 sm:mb-8 mx-auto'
            style={{
              fontSize: 'clamp(2.2rem, 8vw, 6rem)',
              color: '#f3eee7',
              fontWeight: 500,
              maxWidth: '900px',
            }}
          >
            Places that shaped
            <br />
            how I <span style={{ color: '#c67b3d' }}>build</span>
          </h1>

          <p
            className='font-inter text-[15px] sm:text-lg leading-7 sm:leading-9 max-w-sm sm:max-w-2xl mx-auto'
            style={{ color: '#a8a095' }}
          >
            Internships, communities, leadership roles, and technical work that
            taught me more than any 'industry-ready' PowerPoint ever did.
          </p>
        </motion.div>

        {/* ── MOBILE: vertical stack (below md) ── */}
        <div className='md:hidden px-5 flex flex-col gap-5'>
          {EXPERIENCES.map((exp, index) => {
            const colors = TYPE_COLORS[exp.type] || DEFAULT_COLOR
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              >
                <div
                  onClick={() => navigate(`/post/${exp.slug}`)}
                  className='relative overflow-hidden rounded-2xl cursor-pointer active:scale-[0.985] transition-transform duration-200'
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {/* Glass */}
                  <div
                    className='absolute inset-0'
                    style={{
                      background: 'rgba(18,18,20,0.72)',
                      backdropFilter: 'blur(18px)',
                    }}
                  />

                  {/* Corner glow */}
                  <div
                    className='absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl opacity-25'
                    style={{ background: colors.accent }}
                  />

                  {/* Left accent bar */}
                  <div
                    className='absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl'
                    style={{
                      background: `linear-gradient(to bottom, ${colors.accent}, transparent)`,
                    }}
                  />

                  {/* Content */}
                  <div className='relative z-10 p-5 pl-6'>
                    {/* Type + duration row */}
                    <div className='flex items-center justify-between mb-3'>
                      <span
                        className='text-[9px] uppercase tracking-[0.3em]'
                        style={{ color: colors.accent }}
                      >
                        {exp.type}
                      </span>
                      <span
                        className='text-[11px]'
                        style={{ color: '#746d63' }}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    {/* Role */}
                    <h2
                      className='font-serif leading-tight tracking-[-0.02em] mb-1'
                      style={{
                        fontSize: 'clamp(1.35rem, 5.5vw, 1.7rem)',
                        color: '#f3eee7',
                        fontWeight: 500,
                      }}
                    >
                      {exp.role}
                    </h2>

                    <p
                      className='font-inter text-sm mb-0.5'
                      style={{ color: '#b39b7a' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className='font-inter text-xs mb-4'
                      style={{ color: '#7c7468' }}
                    >
                      {exp.location}
                    </p>

                    {/* Divider */}
                    <div
                      className='h-px mb-4'
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />

                    {/* Bullets */}
                    <div className='flex flex-col gap-2.5 mb-4'>
                      {exp.bullets.slice(0, 2).map((bullet) => (
                        <div key={bullet} className='flex items-start gap-3'>
                          <div
                            className='w-1.5 h-1.5 rounded-full mt-[7px] shrink-0'
                            style={{ background: colors.accent }}
                          />
                          <p
                            className='font-inter text-[13px] leading-[1.6]'
                            style={{ color: '#b8b1a7' }}
                          >
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className='flex flex-wrap gap-1.5 mb-4'>
                      {exp.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className='text-[10px] px-2.5 py-1 rounded-full'
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            color: '#9f9689',
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className='pt-3'
                      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <span
                        className='text-xs float-right'
                        style={{ color: colors.accent }}
                      >
                        Read Experience →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── DESKTOP: horizontal carousel (md and above) ── */}
        <div className='hidden md:block'>
          {/* Controls */}
          <div className='flex justify-end mb-10 px-6'>
            <div className='flex items-center gap-3'>
              <button
                onClick={() => scroll('left')}
                className='w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-x-1 hover:scale-105'
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#f3eee7',
                  backdropFilter: 'blur(10px)',
                }}
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className='w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:translate-x-1 hover:scale-105'
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#f3eee7',
                  backdropFilter: 'blur(10px)',
                }}
              >
                →
              </button>
            </div>
          </div>

          {/* Timeline track */}
          <div className='relative'>
            <div
              className='absolute top-6 left-0 right-0'
              style={{
                height: '1px',
                background:
                  'linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
              }}
            />

            <div
              ref={trackRef}
              className='flex gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10 px-[8vw]'
              style={{ scrollBehavior: 'smooth' }}
            >
              {EXPERIENCES.map((exp, index) => {
                const colors = TYPE_COLORS[exp.type] || DEFAULT_COLOR
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.05 }}
                    className='min-w-[62vw] lg:min-w-[52vw] xl:min-w-[46vw] max-w-[820px] snap-center relative pt-16 flex-shrink-0'
                    data-card
                  >
                    {/* Timeline Dot */}
                    <div
                      className='absolute top-[18px] left-10 w-4 h-4 rounded-full z-20'
                      style={{
                        background: colors.accent,
                        boxShadow: `0 0 20px ${colors.glow}`,
                      }}
                    />

                    {/* Connector */}
                    <div
                      className='absolute top-8 left-[47px]'
                      style={{
                        width: '1px',
                        height: '38px',
                        background: `linear-gradient(to bottom, ${colors.accent}, transparent)`,
                      }}
                    />

                    {/* Card */}
                    <div
                      onClick={() => navigate(`/post/${exp.slug}`)}
                      className='relative group overflow-hidden rounded-[2.3rem] cursor-pointer transition-all duration-500 hover:-translate-y-2'
                    >
                      <div
                        className='absolute inset-0'
                        style={{
                          background: 'rgba(18,18,20,0.58)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          backdropFilter: 'blur(18px)',
                        }}
                      />
                      <div
                        className='absolute inset-0'
                        style={{
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1496858705185-1f25b056e4a7?q=80&w=1170&auto=format&fit=crop')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          opacity: 0.08,
                          filter: 'grayscale(1) brightness(0.4) contrast(1.1)',
                        }}
                      />
                      <div
                        className='absolute -top-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-20'
                        style={{ background: colors.accent }}
                      />
                      <div
                        className='absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700'
                        style={{
                          background: `radial-gradient(circle at top left, ${colors.accent}20, transparent 65%)`,
                        }}
                      />

                      <div className='relative z-10 p-8 lg:p-10 flex flex-col'>
                        <div className='mb-7'>
                          <div className='flex items-start justify-between gap-4 mb-5'>
                            <span
                              className='text-[10px] uppercase tracking-[0.35em]'
                              style={{ color: colors.accent }}
                            >
                              {exp.type}
                            </span>
                            <span
                              className='text-xs shrink-0'
                              style={{ color: '#746d63' }}
                            >
                              {exp.duration}
                            </span>
                          </div>
                          <h2
                            className='font-serif text-[2.3rem] leading-tight tracking-[-0.03em] mb-3'
                            style={{ color: '#f3eee7', fontWeight: 500 }}
                          >
                            {exp.role}
                          </h2>
                          <p
                            className='font-inter text-base'
                            style={{ color: '#b39b7a' }}
                          >
                            {exp.company}
                          </p>
                          <p
                            className='font-inter text-sm mt-2'
                            style={{ color: '#8b8175' }}
                          >
                            {exp.location}
                          </p>
                        </div>

                        <div
                          className='h-px mb-7'
                          style={{
                            background:
                              'linear-gradient(to right, rgba(255,255,255,0.08), transparent)',
                          }}
                        />

                        <div className='flex flex-col gap-4'>
                          {exp.bullets.slice(0, 3).map((bullet) => (
                            <div
                              key={bullet}
                              className='flex items-start gap-4'
                            >
                              <div
                                className='w-2 h-2 rounded-full mt-2 shrink-0'
                                style={{ background: colors.accent }}
                              />
                              <p
                                className='font-inter text-[14px] leading-6'
                                style={{ color: '#b8b1a7' }}
                              >
                                {bullet}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className='flex flex-wrap gap-2 mt-8'>
                          {exp.skills.slice(0, 5).map((skill) => (
                            <span
                              key={skill}
                              className='text-xs px-3 py-1.5 rounded-full'
                              style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                color: '#9f9689',
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div
                          className='flex items-center mt-8 pt-5'
                          style={{
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                          }}
                        >
                          <span
                            className='ml-auto text-sm transition-all duration-300 group-hover:translate-x-1'
                            style={{ color: colors.accent }}
                          >
                            Read Experience →
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className='mt-32 pt-10'
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className='max-w-3xl'>
            <p
              className='font-inter text-[10px] uppercase tracking-[0.35em] mb-4'
              style={{ color: '#b39b7a' }}
            >
              Working Philosophy
            </p>

            <p
              className='font-inter text-sm leading-8'
              style={{ color: '#a89f93' }}
            >
              Every experience contributes something valuable. Some teach
              technical depth. Others develop leadership, communication, and
              resilience. Growth often happens at the intersection of all three.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
