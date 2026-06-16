import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getPostBySlug } from '../api/index'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'

const LABEL_SECTIONS = ['milestone', 'experience', 'experiment', 'learning']

const SECTION_LABELS = {
  milestone: 'Milestone',
  experience: 'Experience',
  experiment: 'Experiment',
  learning: 'Learning',
  _default: 'Thoughts & Reflections',
}

const SECTION_COLORS = {
  milestone: '#FF6B1A',
  experience: '#1A8CFF',
  experiment: '#FFD700',
  learning: '#00E676',
  _default: '#A855F7',
}

const SECTION_GLOWS = {
  milestone: 'rgba(255, 107, 26, 0.08)',
  experience: 'rgba(26, 140, 255, 0.08)',
  experiment: 'rgba(255, 215, 0, 0.08)',
  learning: 'rgba(0, 230, 118, 0.08)',
  _default: 'rgba(168, 85, 247, 0.08)',
}

const BACK_LINKS = {
  milestone: { href: '/milestones', label: 'Back to Milestones' },
  experience: { href: '/experiences', label: 'Back to Experiences' },
  experiment: { href: '/experiments', label: 'Back to Experiments' },
  learning: { href: '/learnings', label: 'Back to Learnings' },
  _default: { href: '/', label: 'Back to Home' },
}

function resolvePostMeta(post) {
  const allSections = [post.section, ...(post.crossSections || [])]
  const labelSection = allSections.find((s) => LABEL_SECTIONS.includes(s))
  return labelSection || '_default'
}

const T = {
  eyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
  },
  hero: {
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    lineHeight: 0.95,
    letterSpacing: '-0.04em',
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 17,
    lineHeight: 2,
    fontWeight: 400,
    color: 'rgba(243,236,224,0.82)',
  },
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
  },
}

const ANIMATION_STYLES = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(1.04); }
    to   { opacity: 1; transform: scale(1);    }
  }
  .anim-fade-up  { animation: fadeUp  0.7s cubic-bezier(0.22,1,0.36,1) both; }
  .anim-scale-in { animation: scaleIn 1s   cubic-bezier(0.22,1,0.36,1) both; }
  .back-link { transition: all 0.2s ease; }
  .back-link:hover { transform: translateX(-3px); }
  .resource-link { transition: all 0.25s ease; }
  .resource-link:hover { transform: translateX(4px); opacity: 1 !important; }
  @media (max-width: 980px) {
    .editorial-layout { grid-template-columns: 1fr !important; }
    .editorial-sidebar { position: relative !important; top: auto !important; margin-top: 48px; }
  }
`

export default function PostPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setNotFound(false)
    setImgError(false)
    getPostBySlug(slug)
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div
        style={{
          background: '#0b0908',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            color: '#b7aa98',
            letterSpacing: '0.2em',
            fontSize: 12,
            textTransform: 'uppercase',
          }}
        >
          Loading...
        </p>
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div
        style={{
          background: '#0b0908',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <p style={{ color: '#d8cfc3' }}>Post not found.</p>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: 'none',
            border: 'none',
            color: '#b08968',
            cursor: 'pointer',
          }}
        >
          Go back
        </button>
      </div>
    )
  }

  const metaKey = resolvePostMeta(post)
  const back = BACK_LINKS[metaKey]
  const sectionLabel = SECTION_LABELS[metaKey]
  const accent = SECTION_COLORS[metaKey]
  const glowBg = SECTION_GLOWS[metaKey]

  const coverSrc =
    post.coverImage && !imgError
      ? typeof post.coverImage === 'string'
        ? post.coverImage
        : post.coverImage.url
      : null

  return (
    <main
      style={{
        background:
          'linear-gradient(to bottom, #120f0d 0%, #0f0c0a 18%, #0b0908 42%, #090807 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{ANIMATION_STYLES}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.055,
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")',
          mixBlendMode: 'soft-light',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          background:
            'radial-gradient(circle at center, transparent 38%, rgba(0,0,0,0.22) 100%)',
        }}
      />

      {coverSrc && (
        <div
          className='anim-scale-in'
          style={{
            width: '100%',
            height: 'clamp(180px, 35vw, 450px)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={coverSrc}
            alt={post.title}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.72) saturate(0.7) contrast(1.12)',
              transform: 'scale(1.03)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.65) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.10), transparent 45%)',
            }}
          />
        </div>
      )}

      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 84px) clamp(20px, 5vw, 72px) 140px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div className='anim-fade-up' style={{ marginBottom: 48 }}>
          <Link
            to={back.href}
            className='back-link'
            style={{
              color: '#a89a88',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '10px 16px',
              borderRadius: 8,
              backdropFilter: 'blur(12px)',
              background: 'rgba(255,255,255,0.02)',
              fontSize: 13,
            }}
          >
            <ArrowLeft size={15} />
            {back.label}
          </Link>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginBottom: 'clamp(48px, 7vw, 90px)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 540,
              height: 240,
              background: `${accent}12`,
              filter: 'blur(120px)',
              pointerEvents: 'none',
            }}
          />

          <p
            className='anim-fade-up'
            style={{ ...T.eyebrow, color: accent, marginBottom: 20 }}
          >
            {sectionLabel}
          </p>

          <div
            style={{
              width: 56,
              height: 1,
              background: accent,
              opacity: 0.7,
              margin: '0 auto 26px',
            }}
          />

          <h1
            className='anim-fade-up'
            style={{
              ...T.hero,
              fontSize: 'clamp(2.4rem, 8vw, 6rem)',
              color: '#f3e9dc',
              marginBottom: 24,
            }}
          >
            {post.title}
          </h1>
        </div>

        {post.excerpt && (
          <div
            style={{
              maxWidth: 920,
              margin: '0 auto clamp(48px, 7vw, 90px)',
              display: 'flex',
              gap: 24,
            }}
          >
            <div
              style={{
                width: 2,
                background: accent,
                opacity: 0.7,
                borderRadius: 999,
              }}
            />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.2rem, 3vw, 2.0rem)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                color: '#ece2d5',
                margin: 0,
              }}
            >
              {post.excerpt}
            </p>
          </div>
        )}

        <div
          className='editorial-layout'
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 280px',
            gap: '72px',
            alignItems: 'start',
          }}
        >
          <div style={{ minWidth: 0 }}>
            {post.contentReady && post.content ? (
              <RichContent html={post.content} accent={accent} />
            ) : (
              <PlaceholderContent post={post} accent={accent} glowBg={glowBg} />
            )}
          </div>

          <aside
            className='editorial-sidebar'
            style={{
              position: 'sticky',
              top: 120,
            }}
          >
            <div
              style={{
                borderLeft: `1px solid ${accent}25`,
                paddingLeft: 24,
              }}
            >
              <p
                style={{
                  ...T.label,
                  color: accent,
                  marginBottom: 24,
                }}
              >
                ARTICLE DETAILS
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 22,
                }}
              >
                {post.date && (
                  <SidebarField label='Published'>
                    <p
                      style={{
                        ...T.body,
                        fontSize: 14,
                      }}
                    >
                      {post.date}
                    </p>
                  </SidebarField>
                )}

                {post.readTime && (
                  <SidebarField label='Read Time'>
                    <p
                      style={{
                        ...T.body,
                        fontSize: 14,
                      }}
                    >
                      {post.readTime}
                    </p>
                  </SidebarField>
                )}

                {post.certificate && (
                  <SidebarField label='Certificate'>
                    <a
                      href={post.certificate}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        ...T.body,
                        fontSize: 14,
                        color: accent,
                        textDecoration: 'none',
                      }}
                    >
                      Verify Here
                    </a>
                  </SidebarField>
                )}

                {post.linkedin && (
                  <SidebarField label='LinkedIn'>
                    <a
                      href={post.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{
                        ...T.body,
                        fontSize: 14,
                        textDecoration: 'none',
                      }}
                    >
                      View Post
                    </a>
                  </SidebarField>
                )}

                {post.resources?.length > 0 && (
                  <SidebarField label='Resources'>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                      }}
                    >
                      {post.resources.map((r, i) => {
                        const isInternal = r.url?.startsWith('/')

                        return isInternal ? (
                          <Link
                            key={i}
                            to={r.url}
                            className='resource-link'
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              textDecoration: 'none',
                              fontSize: 13,
                              opacity: 0.85,
                              fontFamily: "'Inter', sans-serif",
                              color: 'rgba(243,236,224,0.82)',
                            }}
                          >
                            <span
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                background: `${accent}15`,
                                border: `1px solid ${accent}30`,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 10,
                                flexShrink: 0,
                              }}
                            >
                              ↗
                            </span>

                            {r.heading}
                          </Link>
                        ) : (
                          <a
                            key={i}
                            href={r.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='resource-link'
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 8,
                              textDecoration: 'none',
                              fontSize: 13,
                              opacity: 0.85,
                              fontFamily: "'Inter', sans-serif",
                              color: 'rgba(243,236,224,0.82)',
                            }}
                          >
                            <span
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                background: `${accent}15`,
                                border: `1px solid ${accent}30`,
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: 10,
                                flexShrink: 0,
                              }}
                            >
                              ↗
                            </span>

                            {r.heading}
                          </a>
                        )
                      })}
                    </div>
                  </SidebarField>
                )}
              </div>
            </div>
          </aside>
        </div>

        {post.gallery?.length > 0 && <ImageCarousel images={post.gallery} />}
      </div>

      <Footer />
    </main>
  )
}

function SidebarField({ label, children }) {
  return (
    <div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#8f8476',
          marginBottom: 8,
        }}
      >
        {label}
      </p>
      {children}
    </div>
  )
}

function RichContent({ html, accent }) {
  return (
    <>
      <style>{`
        .rich-post h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 700; line-height: 1;
          letter-spacing: -0.04em; color: #f3e9dc;
          margin: 4rem 0 1.5rem;
        }
        .rich-post h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600; letter-spacing: -0.03em;
          line-height: 1; color: #f3e9dc;
          margin: 5rem 0 1.5rem;
        }
        .rich-post h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600; line-height: 1.15; color: #f0e6d8;
          margin: 3rem 0 1rem;
        }
        .rich-post h4 {
          font-family: 'Inter', sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: ${accent}; margin: 2.5rem 0 0.75rem;
        }
        .rich-post h4 a {
          color: ${accent} !important;
          text-decoration: none;
        }
        .rich-post h4 a:hover { text-decoration: underline; }
        .rich-post p {
          font-family: 'Inter', sans-serif;
          font-size: 17px; font-weight: 400;
          line-height: 2; letter-spacing: 0.01em;
          color: rgba(243,236,224,0.82);
          margin: 0 0 1.9rem; max-width: 74ch;
        }
        .rich-post strong { color: #f3e9dc; font-weight: 600; }
        .rich-post em     { color: #d8c7b3; }
        .rich-post a      { color: ${accent}; text-decoration: underline; text-underline-offset: 4px; }
        .rich-post blockquote {
          border-left: 1px solid ${accent};
          margin: 4rem 0; padding: 0.5rem 0 0.5rem 2.2rem;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3vw, 2.4rem);
          font-style: italic; font-weight: 500;
          color: #f3e9dc; line-height: 1.5;
          letter-spacing: -0.02em; opacity: 0.95;
        }
        .rich-post ul, .rich-post ol {
          list-style: none; padding-left: 0; margin: 2rem 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .rich-post li {
          display: flex; gap: 12px;
          color: rgba(243,236,224,0.82); line-height: 1.9;
        }
        .rich-post li::before { content: '—'; color: ${accent}; opacity: 0.7; }
        .rich-post code {
          background: rgba(255,255,255,0.05); padding: 3px 8px;
          border-radius: 4px; color: ${accent}; font-size: 14px;
        }
        .rich-post pre {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid ${accent};
          padding: 1.6rem; overflow-x: auto;
          border-radius: 8px; margin: 2.5rem 0;
        }
        .rich-post img {
          width: 100%; border-radius: 14px; margin: 4rem 0;
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          filter: saturate(0.88);
        }
        .rich-post figure img { margin: 0; }
        .rich-post figure { margin: 4rem 0; }
        .rich-post figcaption {
          margin-top: 14px; font-size: 13px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: rgba(243,236,224,0.52); text-align: center;
        }
        .rich-post hr { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 4rem 0; }
        .rich-post iframe { border-radius: 12px; max-width: 100%; }
        .rich-post details summary { color: #f3e9dc; }
      `}</style>
      <div className='rich-post' dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

function PlaceholderContent({ post, accent, glowBg }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      {post.meta?.description && <p style={T.body}>{post.meta.description}</p>}

      {post.meta?.bullets?.length > 0 && (
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {post.meta.bullets.map((b, i) => (
            <li
              key={i}
              style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
            >
              <span style={{ color: accent, opacity: 0.7 }}>—</span>
              <span style={T.body}>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div
        style={{
          marginTop: 20,
          padding: '24px 28px',
          background: glowBg,
          border: `1px solid ${accent}20`,
          borderLeft: `2px solid ${accent}60`,
          borderRadius: 8,
        }}
      >
        <p style={{ color: '#b6a695', lineHeight: 1.8, margin: 0 }}>
          Full article currently being written.
        </p>
      </div>
    </div>
  )
}
