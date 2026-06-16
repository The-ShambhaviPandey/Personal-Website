import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Calendar } from 'lucide-react'
import Footer from '../components/Footer'
import { getPostsBySection } from '../api/index'

const FEATURED_COLOR = '#f04f62'

const ACCENT_COLORS = [
  '#00E5FF', // cyan
  '#F72585', // magenta
  '#43AA8B', // emerald
  '#8B5CF6', // violet
  '#FFBE0B', // amber
]

function getAccent(post, index) {
  const key = post.slug || post.title || String(index)

  let hash = 0
  for (let i = 0; i < key.length; i++) {
    hash = ((hash << 5) - hash + key.charCodeAt(i)) | 0
  }

  return ACCENT_COLORS[Math.abs(hash) % ACCENT_COLORS.length]
}

// Add this above the component
function parseDate(str) {
  if (!str) return Infinity
  const cleaned = str.replace(/^(since|from)\s+/i, '').trim()
  const start = cleaned.split(/\s*[–—-]\s*/)[0].trim()
  const ts = Date.parse(start)
  return isNaN(ts) ? Infinity : ts
}

// thumbnailImage is now { type: 'url'|'upload', url } or undefined
function resolveThumbnail(thumbnailImage, fallbackIndex = 0) {
  if (!thumbnailImage)
    return FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length]
  if (typeof thumbnailImage === 'string') return thumbnailImage // legacy safety
  return (
    thumbnailImage.url ||
    FALLBACK_IMAGES[fallbackIndex % FALLBACK_IMAGES.length]
  )
}

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1400&q=80',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1400&q=80',
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    getPostsBySection('milestone')
      .then((data) => {
        const sorted = [...data].sort(
          (a, b) => parseDate(b.date) - parseDate(a.date)
        )
        setBlogs(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div
        className='flex items-center justify-center min-h-screen'
        style={{ background: '#0b0b0f' }}
      >
        <p style={{ color: '#a8a095', fontSize: 13, letterSpacing: '0.2em' }}>
          Loading…
        </p>
      </div>
    )
  }

  const featured = blogs.filter((b) => b.featured)
  const rest = blogs.filter((b) => !b.featured)

  return (
    <main style={{ background: '#0b0b0f', minHeight: '100vh' }}>
      <motion.div
        initial='hidden'
        animate='show'
        variants={container}
        className='max-w-7xl mx-auto px-6 pt-36 pb-28'
      >
        {/* ── HEADER ── */}
        <motion.div variants={item} className='mb-24'>
          <p
            className='uppercase tracking-[0.35em] text-[11px] mb-5'
            style={{ color: '#c6b49a' }}
          >
            Archive
          </p>
          <h1
            className='font-serif leading-[0.88] mb-8'
            style={{
              fontSize: 'clamp(3rem,6vw,5rem)',
              color: '#f3eee7',
              fontWeight: 500,
              letterSpacing: '-0.06em',
            }}
          >
            Words, Works
            <span style={{ color: '#c67b3d' }}>
              {' '}
              <br />& Thoughts
            </span>
          </h1>
          <p
            className='max-w-2xl'
            style={{ color: '#a8a095', fontSize: 17, lineHeight: 2 }}
          >
            Thoughts, reflections, fragments of ambition, technical breakdowns,
            unfinished philosophies, and occasional evidence that surviving your
            twenties is mostly advanced damage control with better typography.
          </p>
        </motion.div>

        {/* ── FEATURED ── */}
        {featured.length > 0 && (
          <motion.div variants={container} className='mb-24 space-y-10'>
            {featured.map((post, index) => {
              const thumbnail = resolveThumbnail(
                post.thumbnailImage ?? post.coverImage,
                index
              )
              // readTime lives on the post root; fall back to meta for older docs
              const readTime = post.readTime || post.meta?.readTime

              return (
                <motion.div
                  key={post._id}
                  variants={item}
                  whileHover={{ y: -4 }}
                  onClick={() => navigate(`/post/${post.slug}`)}
                  className='cursor-pointer overflow-hidden rounded-[32px] relative'
                  style={{
                    minHeight: 500,
                    border: `1px solid ${FEATURED_COLOR}30`,
                    background: '#111114',
                  }}
                >
                  {/* Background image */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `
                      linear-gradient(to right, rgba(10,10,12,0.97) 25%, rgba(10,10,12,0.72) 85%, rgba(10,10,12,0.30)),
                      url(https://exhibitionglobe.com/wp-content/uploads/2025/09/Maharashtra-Government-to-Build-%E2%80%98Bharat-Mandapam-Inspired-Cultural-Centres-in-Key-Cities-scaled.jpg)
                    `,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.03)',
                    }}
                  />

                  {/* Glow */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at top left, ${FEATURED_COLOR}45, transparent 45%)`,
                    }}
                  />

                  {/* Content */}
                  <div
                    className='relative z-10 flex flex-col justify-end h-full'
                    style={{ padding: '4rem' }}
                  >
                    <div className='mb-6 flex items-center gap-4 flex-wrap'>
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.3em',
                          textTransform: 'uppercase',
                          color: FEATURED_COLOR,
                        }}
                      >
                        Featured
                      </span>
                      <div
                        style={{
                          width: 45,
                          height: 1,
                          background: `${FEATURED_COLOR}55`,
                        }}
                      />
                      <span
                        style={{
                          color: '#9f9689',
                          fontSize: 12,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {post.tag}
                      </span>
                    </div>

                    <h2
                      className='font-serif leading-[0.9] max-w-4xl mb-7'
                      style={{
                        fontSize: 'clamp(2.5rem,5vw,4.5rem)',
                        color: '#f5efe6',
                        fontWeight: 500,
                        letterSpacing: '-0.06em',
                      }}
                    >
                      {post.title}
                    </h2>

                    <p
                      style={{
                        color: '#b4aca1',
                        lineHeight: 2,
                        fontSize: 16,
                        maxWidth: '65ch',
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      className='flex items-center gap-8 mt-12 flex-wrap'
                      style={{
                        color: '#8b8377',
                        fontSize: 12,
                        letterSpacing: '0.08em',
                      }}
                    >
                      <span className='flex items-center gap-2'>
                        <Calendar size={13} />
                        {post.date}
                      </span>
                      {readTime && (
                        <span className='flex items-center gap-2'>
                          <Clock size={13} />
                          {readTime}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* ── ARCHIVE ── */}
        <motion.div variants={container} className='space-y-12'>
          {rest.map((post, index) => {
            const tagColor = getAccent(post, index)
            const thumbnail = resolveThumbnail(
              post.thumbnailImage ?? post.coverImage,
              index
            )
            const readTime = post.readTime || post.meta?.readTime

            return (
              <motion.div
                key={post._id}
                variants={item}
                whileHover={{ x: 6 }}
                onClick={() => navigate(`/post/${post.slug}`)}
                className='cursor-pointer relative'
              >
                {index !== 0 && (
                  <div
                    className='absolute -top-6 left-0 right-0 h-px'
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  />
                )}

                <div className='grid md:grid-cols-[120px_240px_1fr] gap-6 items-start'>
                  {/* NUMBER */}
                  <div>
                    <p
                      className='uppercase tracking-[0.3em] text-[10px] mb-3'
                      style={{ color: tagColor }}
                    >
                      Entry
                    </p>
                    <div
                      style={{
                        fontSize: '5rem',
                        color: `${tagColor}22`,
                        fontFamily: 'serif',
                        fontWeight: 500,
                        lineHeight: 0.9,
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* IMAGE */}
                  <div
                    className='overflow-hidden rounded-2xl'
                    style={{ height: 170, background: '#111' }}
                  >
                    <img
                      src={thumbnail}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.75)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div
                      className='flex items-center gap-5 mb-5 text-xs flex-wrap'
                      style={{ color: '#7c7468' }}
                    >
                      <span className='flex items-center gap-1'>
                        <Calendar size={11} />
                        {post.date}
                      </span>
                      {readTime && (
                        <span className='flex items-center gap-1'>
                          <Clock size={11} />
                          {readTime}
                        </span>
                      )}
                    </div>

                    <h3
                      className='font-serif mb-6 leading-[0.95]'
                      style={{
                        fontSize: 'clamp(2rem,3vw,3rem)',
                        color: '#f3eee7',
                        letterSpacing: '-0.04em',
                        fontWeight: 500,
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        color: '#a8a095',
                        lineHeight: 2,
                        maxWidth: '72ch',
                        fontSize: 16,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className='mt-8 flex items-center gap-5'>
                      <span
                        style={{
                          color: tagColor,
                          fontSize: 13,
                          letterSpacing: '0.08em',
                        }}
                      >
                        Read Article →
                      </span>
                      <div
                        style={{
                          height: 1,
                          flex: 1,
                          background: `${tagColor}22`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

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
              Writing Philosophy
            </p>

            <p
              className='font-inter text-sm leading-8'
              style={{ color: '#a89f93' }}
            >
              Writing helps me slow down and think more clearly. Some ideas
              become technical deep dives. Others turn into reflections on
              growth, ambition, and the occasionally chaotic process of figuring
              things out. This archive is simply an attempt to document the
              journey honestly, one story at a time.
            </p>
          </div>
        </div>
      </motion.div>
      <Footer />
    </main>
  )
}
