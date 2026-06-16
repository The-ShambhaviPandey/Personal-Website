import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { LEARNINGS } from '../data/content'

const TYPE_COLORS = {
  'In Progress': '#0db1de',
  Course: '#f472b6',
  Certification: '#db4f4f',
  'Self-Study': '#05f234',
}

function getTypeColor(type) {
  for (const [key, color] of Object.entries(TYPE_COLORS)) {
    if (type?.toLowerCase().includes(key.toLowerCase())) {
      return color
    }
  }
  return '#a1a1aa'
}

export default function Learned() {
  const navigate = useNavigate()

  const sortedLearnings = [...LEARNINGS]

  return (
    <main
      className='relative overflow-hidden'
      style={{
        background: '#0b0b0f',
        minHeight: '100vh',
      }}
    >
      {/* Ambient Backgrounds */}
      <div className='absolute top-0 left-0 w-72 h-72 bg-[#8b7355]/10 blur-[140px] rounded-full pointer-events-none' />
      <div className='absolute top-[35%] right-0 w-96 h-96 bg-[#6b5a45]/10 blur-[160px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 left-[20%] w-80 h-80 bg-[#b39b7a]/5 blur-[150px] rounded-full pointer-events-none' />

      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-soft-light bg-[url('/noise.png')]" />

      <div className='relative max-w-5xl mx-auto px-6 pt-36 pb-28'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className='font-inter text-[11px] tracking-[0.35em] uppercase mb-5'
            style={{ color: '#b39b7a' }}
          >
            Learning Archive
          </p>

          <h1
            className='font-serif mb-8 leading-[0.95] tracking-[-0.03em]'
            style={{
              fontSize: 'clamp(3.2rem, 7vw, 5.8rem)',
              color: '#f3eee7',
              fontWeight: 500,
            }}
          >
            Things that shaped
            <br />
            how I <span style={{ color: '#c67b3d' }}>think</span>
          </h1>

          <p
            className='font-inter text-lg leading-9 max-w-2xl mb-28'
            style={{ color: '#a8a095' }}
          >
            Courses, systems, tools, and technical skills that help me approach
            engineering and problem-solving.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>
          {/* Vertical Line */}
          <div
            className='absolute left-[12px] top-0 bottom-0 w-px'
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.02))',
            }}
          />

          <div className='flex flex-col gap-24'>
            {sortedLearnings.map((post, index) => {
              const color = getTypeColor(post.type)

              return (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative
                    group
                    ${index % 2 === 0 ? 'pl-14' : 'pl-24'}
                  `}
                >
                  {/* Accent Line */}
                  <div
                    className='absolute left-0 top-5 h-px w-8 transition-all duration-500 group-hover:w-12'
                    style={{
                      background: `linear-gradient(90deg, ${color}, transparent)`,
                      boxShadow: `0 0 10px ${color}66`,
                      opacity: 0.9,
                    }}
                  />

                  {/* Content Panel */}
                  <div
                    className='
                      relative
                      overflow-hidden
                      rounded-[32px]
                      px-8
                      py-8
                      transition-all
                      duration-500
                      group-hover:scale-[1.02]
                      group-hover:-translate-y-1
                    '
                    style={{
                      border: `1px solid ${color}22`,
                      boxShadow: '0 10px 40px rgba(0,0,0,0.28)',
                      backdropFilter: 'blur(16px)',
                      background: 'rgba(12, 12, 12, 0.32)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 40px ${color}33, 0 18px 60px rgba(0,0,0,0.35)`
                      e.currentTarget.style.borderColor = `${color}55`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        '0 10px 40px rgba(0,0,0,0.28)'
                      e.currentTarget.style.borderColor = `${color}22`
                    }}
                  >
                    {/* Background Image */}
                    <div
                      className='absolute inset-0'
                      style={{
                        opacity: 0.18,
                        filter: 'sepia(0.35) saturate(0.7) brightness(0.55)',
                        transform: 'scale(1.08)',
                      }}
                    />

                    {/* Warm Overlay */}
                    <div
                      className='absolute inset-0'
                      style={{
                        background:
                          'linear-gradient(to bottom right, rgba(22,18,14,0.72), rgba(10,10,10,0.82))',
                      }}
                    />

                    {/* Top Glow */}
                    <div
                      className='absolute inset-0'
                      style={{
                        background:
                          'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 28%)',
                      }}
                    />

                    {/* Noise Texture */}
                    <div
                      className='absolute inset-0 opacity-[0.035] mix-blend-soft-light'
                      style={{ backgroundImage: "url('/noise.png')" }}
                    />

                    {/* Actual Content */}
                    <div className='relative z-10'>
                      {/* Top Row */}
                      <div className='flex items-center gap-4 mb-6 flex-wrap'>
                        <span
                          className='font-inter text-[10px] uppercase tracking-[0.32em]'
                          style={{ color }}
                        >
                          {post.type}
                        </span>

                        <span
                          className='text-[10px]'
                          style={{ color: '#5f5a52' }}
                        >
                          /
                        </span>

                        <span
                          className='font-inter text-[10px] uppercase tracking-[0.25em]'
                          style={{ color: '#9d9386' }}
                        >
                          {post.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className='
                          font-serif
                          text-2xl
                          md:text-[2rem]
                          leading-tight
                          tracking-[-0.03em]
                        '
                        style={{
                          color: '#f5efe6',
                          fontWeight: 500,
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p
                        className='mt-7 max-w-2xl font-inter text-[15px] leading-8'
                        style={{ color: '#c4bbaf' }}
                      >
                        {post.description}
                      </p>

                      {/* Bottom Row */}
                      <div className='flex items-center justify-between flex-wrap gap-y-5 mt-10'>
                        {/* Tags */}
                        <div className='flex flex-wrap gap-x-3 gap-y-2'>
                          {post.tags.map((tag, idx) => (
                            <span
                              key={tag}
                              className='
                                text-xs
                                tracking-wide
                                transition-all
                                duration-300
                                group-hover:text-[#e4dbcf]
                              '
                              style={{ color: '#95897b' }}
                            >
                              {idx !== 0 && '•'} {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Notes — uses slug for routing */}
                        <button
                          onClick={() => navigate(`/post/${post.slug}`)}
                          className='
                            text-sm
                            tracking-[0.08em]
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                          '
                          style={{ color }}
                        >
                          View Notes →
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
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
              Learning Philosophy
            </p>

            <p
              className='font-inter text-sm leading-8'
              style={{ color: '#a89f93' }}
            >
              This archive captures some of the concepts, systems, and
              technologies I've intentionally invested time in understanding. It
              isn't exhaustive. Learning is less about collecting certificates
              and more about building the ability to adapt, question
              assumptions, and keep improving one idea at a time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
