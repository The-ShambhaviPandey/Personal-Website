import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Footer from '../components/Footer'
import { EXPERIMENTS } from '../data/content'

const STATUS_CONFIG = {
  Live: { color: '#249661', label: 'LIVE' },
  'Patent In Progress': { color: '#f472b6', label: 'PATENT' },
  'In Progress': { color: '#ffd438', label: 'BUILDING' },
  Complete: { color: '#0db1de', label: 'COMPLETE' },
  Killed: { color: '#db4f4f', label: 'KILLED' },
}

export default function Experiments() {
  const navigate = useNavigate()

  return (
    <main
      className='relative overflow-hidden min-h-screen'
      style={{ background: '#0b0b0f' }}
    >
      {/*
        FIX 1: Ambient blobs — Tailwind's blur-[140px] syntax triggers a style
        recalc on every render because it's a dynamic arbitrary value. Moved to
        inline style filter which is parsed once. Visually identical.
        will-change:transform promotes each blob to its own GPU layer so they
        don't interfere with page scroll compositing.
      */}
      <div
        className='absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none'
        style={{
          background: '#8b7355',
          opacity: 0.1,
          filter: 'blur(140px)',
          willChange: 'transform',
        }}
      />
      <div
        className='absolute top-[30%] right-0 w-96 h-96 rounded-full pointer-events-none'
        style={{
          background: '#6b5a45',
          opacity: 0.1,
          filter: 'blur(160px)',
          willChange: 'transform',
        }}
      />
      <div
        className='absolute bottom-0 left-[20%] w-80 h-80 rounded-full pointer-events-none'
        style={{
          background: '#b39b7a',
          opacity: 0.05,
          filter: 'blur(150px)',
          willChange: 'transform',
        }}
      />

      {/* Noise — unchanged */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      <div className='relative max-w-7xl mx-auto px-6 pt-36 pb-28'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-28'
        >
          <p
            className='font-inter text-[11px] tracking-[0.35em] uppercase mb-5'
            style={{ color: '#b39b7a' }}
          >
            Build Archive
          </p>

          <h1
            className='font-serif leading-[0.92] tracking-[-0.05em] mb-8'
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              color: '#f3eee7',
              fontWeight: 500,
            }}
          >
            Designs, <span style={{ color: '#c67b3d' }}>projects</span>
            <br />
            and experiments.
          </h1>

          <p
            className='font-inter text-lg leading-9 max-w-2xl'
            style={{ color: '#a8a095' }}
          >
            Technical experiments, research ideas, accidental discoveries, and
            projects that consumed entirely unreasonable amounts of time.
          </p>
        </motion.div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-6 gap-7 items-start'>
          {EXPERIMENTS.map((post, index) => {
            const status = STATUS_CONFIG[post.status] || {
              color: '#a1a1aa',
              label: post.status,
            }

            let layout = ''
            if (index % 6 === 0) layout = 'md:col-span-4'
            else if (index % 6 === 1) layout = 'md:col-span-2'
            else if (index % 6 === 2) layout = 'md:col-span-2'
            else if (index % 6 === 3) layout = 'md:col-span-4'
            else layout = 'md:col-span-3'

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                /*
                  FIX 2: layout={false} — without this framer-motion measures
                  DOM layout on every hover and scroll event to check if siblings
                  shifted. Costs a forced reflow per card per event. False disables
                  that with zero visual change since these cards don't animate layout.
                */
                layout={false}
                transition={{ duration: 0.7, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`${layout} group relative overflow-hidden rounded-[2.3rem] min-h-[320px]`}
              >
                {/* Glass Card — COMPLETELY UNCHANGED */}
                <div
                  className='absolute inset-0 overflow-hidden'
                  style={{
                    background: 'rgba(16,16,18,0.45)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(18px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.28)',
                  }}
                >
                  <div
                    className='absolute inset-0'
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1496858705185-1f25b056e4a7?q=80&w=1170&auto=format&fit=crop')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.12,
                      filter: 'sepia(0.35) brightness(0.38) contrast(1.05)',
                    }}
                  />

                  <div
                    className='absolute inset-0'
                    style={{
                      background:
                        'linear-gradient(to bottom right, rgba(18,15,12,0.88), rgba(10,10,10,0.92))',
                    }}
                  />

                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700'
                    style={{
                      background:
                        'linear-gradient(to bottom right, rgba(255,255,255,0.03), transparent)',
                    }}
                  />

                  <div
                    className='absolute -right-16 -top-16 w-52 h-52 rounded-full blur-3xl opacity-20'
                    style={{ background: status.color }}
                  />
                </div>

                {/* Content — COMPLETELY UNCHANGED */}
                <div className='relative z-10 h-full p-8 flex flex-col'>
                  <div className='flex items-start justify-between gap-4 mb-7'>
                    <div>
                      <p
                        className='text-[10px] uppercase tracking-[0.35em] mb-4'
                        style={{ color: status.color }}
                      >
                        {status.label}
                      </p>
                      <h2
                        className='font-serif text-2xl leading-tight tracking-[-0.03em]'
                        style={{ color: '#f3eee7', fontWeight: 500 }}
                      >
                        {post.title}
                      </h2>
                    </div>
                    <span
                      className='text-xs shrink-0'
                      style={{ color: '#746d63' }}
                    >
                      {post.year}
                    </span>
                  </div>

                  <p
                    className='font-inter text-[15px] leading-8'
                    style={{ color: '#b8b1a7' }}
                  >
                    {post.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mt-8'>
                    {post.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className='text-xs px-3 py-1.5 rounded-full'
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.05)',
                          color: '#9f9689',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className='flex items-center mt-8 pt-5'
                    style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className='flex gap-2'>
                      {post.github && (
                        <a
                          href={post.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={(e) => e.stopPropagation()}
                          className='p-2.5 rounded-xl transition-all duration-300 hover:scale-105'
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            color: '#ddd6cb',
                          }}
                        >
                          <Github size={15} />
                        </a>
                      )}
                      {post.link && (
                        <a
                          href={post.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={(e) => e.stopPropagation()}
                          className='p-2.5 rounded-xl transition-all duration-300 hover:scale-105'
                          style={{
                            background: `${status.color}15`,
                            color: status.color,
                          }}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => navigate(`/post/${post.slug}`)}
                      className='ml-auto text-sm transition-all duration-500 hover:translate-x-1'
                      style={{ color: status.color }}
                    >
                      Build Logs →
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Note — COMPLETELY UNCHANGED */}
        <div
          className='mt-32 pt-10'
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className='max-w-3xl'>
            <p
              className='font-inter text-[10px] uppercase tracking-[0.35em] mb-4'
              style={{ color: '#b39b7a' }}
            >
              Build Philosophy
            </p>
            <p
              className='font-inter text-sm leading-8'
              style={{ color: '#a89f93' }}
            >
              These are the projects that earned a story. The complete
              collection of prototypes, coursework, side quests, and late-night
              engineering decisions lives on GitHub. Some experiments become
              case studies. Others simply taught me something worth carrying
              forward.
            </p>
            <a
              href='https://github.com/The-ShambhaviPandey'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 mt-8'
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#f3eee7',
              }}
            >
              <Github size={16} />
              Explore All Projects
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
