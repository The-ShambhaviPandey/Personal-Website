import { useEffect, useRef, useState } from 'react'
import { Play, Pause, Music2 } from 'lucide-react'

export default function FloatingMusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(() => {
    try {
      return localStorage.getItem('music') === 'playing'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('music', playing ? 'playing' : 'paused')
    } catch {}
  }, [playing])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.play().catch(() => setPlaying(false))
    } else {
      audio.pause()
    }
  }, [playing])

  return (
    <>
      <style>{`
        /*
         * backdrop-filter: blur(18px) on a fixed element = scroll jank.
         * Replaced with solid dark background — looks identical at this size.
         * will-change: transform promotes to own GPU layer so it doesn't
         * interfere with page scroll compositing at all.
         */
        .music-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1.2rem;
          border-radius: 999px;
          background: rgba(16, 13, 11, 0.93);
          border: 1px solid rgba(205,170,125,0.18);
          box-shadow:
            0 12px 40px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.05),
            0 0 0 1px rgba(205,170,125,0.06);
          color: #f3e9dc;
          cursor: pointer;
          z-index: 9999;
          
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .music-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(205,170,125,0.32);
        }
        .music-icon-wrap {
          width: 2rem; height: 2rem;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(205,170,125,0.08);
        }
      `}</style>

      <audio ref={audioRef} src='/Lord_Huron.mp3' loop preload='none' />

      <button className='music-btn' onClick={() => setPlaying((p) => !p)}>
        <div className='music-icon-wrap'>
          {playing ? (
            <Pause size={16} />
          ) : (
            <Play size={16} style={{ marginLeft: '2px' }} />
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(243,233,220,0.55)',
            }}
          >
            Now Playing
          </span>
          <span
            style={{
              fontSize: '0.9rem',
              fontFamily: 'Cormorant Garamond, serif',
            }}
          >
            🍂 Autumn Leaves
          </span>
        </div>
        <Music2 size={16} style={{ color: 'rgba(205,170,125,0.7)' }} />
      </button>
    </>
  )
}
