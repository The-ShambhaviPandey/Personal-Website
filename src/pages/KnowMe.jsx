import Footer from '../components/Footer'
import { KNOW_ME } from '../data/content'
import { motion } from 'framer-motion'
import Me from '../assets/Me.jpeg'


export default function KnowMe() {
  return (
    <main
      className='relative overflow-hidden min-h-screen'
      style={{ background: '#0a0a0a' }}
    >
      {/* Ambient Background */}
      <div className='absolute top-0 left-0 w-48 h-48 lg:w-72 lg:h-72 bg-[#8b7355]/10 blur-[100px] lg:blur-[140px] rounded-full pointer-events-none' />
      <div className='absolute top-[40%] right-0 w-64 h-64 lg:w-96 lg:h-96 bg-[#6b5a45]/10 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 left-[30%] w-56 h-56 lg:w-80 lg:h-80 bg-[#b39b7a]/5 blur-[110px] lg:blur-[150px] rounded-full pointer-events-none' />

      {/* Noise Texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.025] mix-blend-soft-light bg-[url('/noise.png')]" />

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-36 pb-20 lg:pb-28'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className='font-inter text-[10px] sm:text-[11px] tracking-[0.35em] uppercase mb-4 sm:mb-5'
            style={{ color: '#b39b7a' }}
          >
            About
          </p>

          <div
            className='w-16 sm:w-20 h-px mb-10 sm:mb-16'
            style={{
              background:
                'linear-gradient(to right, rgba(255,255,255,0.28), rgba(255,255,255,0.02))',
            }}
          />
        </motion.div>

        {/* Main Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-24 items-start'>
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Hero */}
            <div className='mb-12 sm:mb-16 lg:mb-20'>
              <h1
                className='font-serif text-4xl sm:text-5xl lg:text-7xl leading-[0.98] tracking-[-0.02em]'
                style={{ color: '#f3eee7', fontWeight: 500 }}
              >
                Hi,
                <br />
                I'm <span style={{ color: '#c67b3d' }}>Shambhavi.</span>
              </h1>

              <p
                className='mt-5 sm:mt-7 text-base sm:text-lg lg:text-[21px] leading-8 lg:leading-9 max-w-xl font-inter'
                style={{ color: '#a8a095' }}
              >
                Building systems, stories and everything in between.
              </p>
            </div>

            {/* Editorial Body */}
            <div className='relative pl-5 sm:pl-8'>
              {/* Vertical Line */}
              <div
                className='absolute left-0 top-2 bottom-2 w-px'
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.02))',
                }}
              />

              {/* Intro */}
              <p
                className='font-inter text-[16px] sm:text-[18px] leading-8 sm:leading-9 tracking-[0.01em] mb-8 sm:mb-12'
                style={{ color: '#ddd6cb' }}
              >
                {KNOW_ME.intro}
              </p>

              {/* Body */}
              <div className='space-y-6 sm:space-y-8'>
                {KNOW_ME.body.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className='font-inter text-[15px] sm:text-[16px] leading-7 sm:leading-8 tracking-[0.01em]'
                    style={{ color: '#b8b1a7' }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className='relative lg:sticky lg:top-24'
          >
            <div className='relative flex justify-center items-center'>
              {/* Ambient Glow */}
              <div className='absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] bg-[#8b7355]/10 blur-[90px] lg:blur-[120px] rounded-full' />

              {/* Secondary Glow */}
              <div className='absolute top-10 right-0 w-28 h-28 sm:w-40 sm:h-40 bg-[#b39b7a]/10 blur-[70px] lg:blur-[90px] rounded-full' />

              {/* Decorative Line */}
              <div
                className='absolute bottom-12 -right-4 sm:-right-6 w-16 sm:w-24 h-px rotate-12'
                style={{
                  background:
                    'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />

              {/* Luxury Back Glow */}
              <div
                className='absolute -inset-4 rounded-[36px] opacity-40 blur-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, rgba(179,155,122,0.18), rgba(90,72,52,0.04))',
                }}
              />

              {/* Image Container */}
              <motion.div
                className='
                  relative z-10
                  w-full
                  max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]
                  rounded-[20px] sm:rounded-[28px]
                  overflow-hidden
                  border border-white/10
                  bg-[#111]
                  p-2 sm:p-3
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                  transition duration-700
                  hover:scale-[1.01]
                '
              >
                {/* Warm Overlay */}
                <div
                  className='absolute inset-0 z-20 pointer-events-none'
                  style={{
                    background:
                      'linear-gradient(to bottom, rgba(120,92,62,0.08), rgba(15,12,10,0.18))',
                    mixBlendMode: 'multiply',
                  }}
                />

                {/* Film Grain */}
                <div
                  className='absolute inset-0 z-20 opacity-[0.06] pointer-events-none'
                  style={{
                    backgroundImage: "url('/noise.png')",
                    mixBlendMode: 'soft-light',
                  }}
                />

                {/* Vignette */}
                <div
                  className='absolute inset-0 z-20 pointer-events-none'
                  style={{
                    background:
                      'radial-gradient(circle at center, transparent 45%, rgba(0,0,0,0.38) 100%)',
                  }}
                />

                {/* Image */}
                <motion.img
                  src={Me}
                  alt='Portrait'
                  className='w-full h-full object-cover rounded-[14px] sm:rounded-[20px]'
                  style={{
                    filter:
                      'brightness(1.02) contrast(0.87) saturate(1.2) hue-rotate(-3deg)',
                    transform: 'scale(1.01)',
                  }}
                />
              </motion.div>
            </div>

            {/* Facts */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.1 },
                },
              }}
              className='mt-10 sm:mt-14'
            >
              <div
                className='border-t pt-8 sm:pt-12 space-y-7 sm:space-y-10'
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {KNOW_ME.facts.map((group) => (
                  <motion.div
                    key={group.category}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: 'easeOut' },
                      },
                    }}
                    className='group transition-all duration-500'
                  >
                    <p
                      className='font-serif text-[11px] sm:text-[12px] uppercase tracking-[0.28em] mb-3 sm:mb-4'
                      style={{ color: '#c67b3d' }}
                    >
                      {group.category}
                    </p>

                    <div className='flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-2'>
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className='text-xs sm:text-sm transition-colors duration-300'
                          style={{ color: '#ddd6cb' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Final Note */}
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
              A Final Note
            </p>

            <p
              className='font-inter text-sm leading-8'
              style={{ color: '#a89f93' }}
            >
              Beyond the titles, projects, and milestones, I'm simply someone
              who enjoys learning, creating, and leaving things a little better
              than I found them. I'm still figuring things out, still growing,
              and still excited about what comes next.
              <br></br>
              This page captures who I am today. Hopefully future versions of me
              will keep learning, stay curious, and occasionally remember to
              touch grass between projects.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
