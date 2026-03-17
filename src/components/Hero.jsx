import { useEffect, useState } from 'react'
import { personalInfo } from '../data'

const roles = ['UI/UX Designer', 'React Developer', 'DevOps Enthusiast', 'Cybersecurity Learner', 'Startup Founder']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = roles[roleIdx]
    let i = typing ? displayed.length : displayed.length - 1

    if (typing && displayed === target) {
      const t = setTimeout(() => setTyping(false), 2200)
      return () => clearTimeout(t)
    }
    if (!typing && displayed === '') {
      const t = setTimeout(() => {
        setRoleIdx(p => (p + 1) % roles.length)
        setTyping(true)
      }, 400)
      return () => clearTimeout(t)
    }

    const speed = typing ? 60 : 35
    const t = setTimeout(() => {
      setDisplayed(typing ? target.slice(0, i + 1) : target.slice(0, i))
    }, speed)
    return () => clearTimeout(t)
  }, [displayed, typing, roleIdx])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#7c5cfc 1px, transparent 1px), linear-gradient(90deg, #7c5cfc 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-amber-accent/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />

      {/* Decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-violet/5 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-violet/8" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Label */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet/30 bg-violet/10 mb-8 opacity-0 animate-fade-up"
              style={{ animationFillMode: 'forwards' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              <span className="font-mono text-xs text-violet tracking-widest">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1
              className="font-display font-extrabold leading-[0.9] mb-6 opacity-0 animate-fade-up"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', animationDelay: '100ms', animationFillMode: 'forwards' }}
            >
              <span className="block text-text-primary">Rahul</span>
              <span className="block gradient-text">Jobit</span>
            </h1>

            {/* Typewriter */}
            <div
              className="h-10 mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
              <span className="font-mono text-lg text-text-muted">
                &gt; <span className="text-violet-light">{displayed}</span>
                <span className="animate-blink text-violet">|</span>
              </span>
            </div>

            {/* Bio blurb */}
            <p
              className="font-body text-text-muted text-lg leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
            >
              Crafting interfaces people love and systems that scale — from pixel-perfect Figma designs to Dockerized CI/CD pipelines.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
            >
              <a href="#projects" className="btn-primary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
              <a
                href="/RAHUL_JOBIT_DEVOPS_RESUME.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-text-muted font-body text-sm hover:text-violet transition-colors"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
            >
              <span className="font-mono text-xs text-text-faint tracking-widest">FIND ME ON</span>
              <div className="h-px flex-1 max-w-[40px] bg-bg-border" />
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link group">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href={personalInfo.behance} target="_blank" rel="noreferrer" className="social-link group">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 10.757c-.073 1.322.718 2.218 2.221 2.218 1.343 0 2.05-.761 2.353-2.218h-4.574zM13.462 13.88c-1.177 1.677-3.154 2.447-4.961 2.447C5.33 16.327 3 14.312 3 10.99c0-3.282 2.33-5.312 5.501-5.312 3.18 0 5.186 1.75 5.186 4.832v1.029H5.847c0 1.854 1.365 2.888 3.164 2.888 1.195 0 2.258-.526 2.852-1.548l1.599.999zM5.847 10.093h5.636c-.135-1.754-1.241-2.738-2.757-2.738-1.598 0-2.677.945-2.879 2.738z"/>
                </svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link group">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Avatar / Visual */}
          <div
            className="relative opacity-0 animate-fade-up flex-shrink-0"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/40 to-amber-accent/20 blur-2xl animate-glow-pulse" />
              {/* Avatar circle */}
              <div className="relative w-full h-full rounded-full bg-bg-card border-2 border-violet/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-transparent to-amber-accent/10" />
                {/* Monogram */}
                <div className="relative z-10 text-center">
                  <span
                    className="font-display font-black gradient-text block"
                    style={{ fontSize: '5rem', lineHeight: 1 }}
                  >
                    RJ
                  </span>
                  <span className="font-mono text-xs text-text-faint tracking-[0.3em] block mt-1">DESIGNER·DEV</span>
                </div>
                {/* Floating badges */}
                <div className="absolute top-4 right-0 translate-x-1/2 bg-bg-card border border-violet/30 rounded-xl px-3 py-1.5 shadow-lg">
                  <span className="font-mono text-xs text-violet">UI/UX ✦</span>
                </div>
                <div className="absolute bottom-8 left-0 -translate-x-1/2 bg-bg-card border border-amber-accent/30 rounded-xl px-3 py-1.5 shadow-lg">
                  <span className="font-mono text-xs text-amber-accent">DevOps ⚙</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              {[
                { label: 'Projects', value: '6+' },
                { label: 'Skills', value: '12+' },
                { label: 'Years', value: '2+' },
              ].map(stat => (
                <div key={stat.label} className="card px-4 py-2 text-center min-w-[70px]">
                  <div className="font-display font-bold text-lg text-violet">{stat.value}</div>
                  <div className="font-mono text-[10px] text-text-faint tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-[10px] text-text-faint tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet to-transparent" />
        </div>
      </div>

      <style>{`
        .social-link {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          border: 1px solid var(--border, #1e1e32);
          color: #8b8aa8;
          transition: all 0.2s;
        }
        .social-link:hover {
          color: #7c5cfc;
          border-color: #7c5cfc66;
          background: #7c5cfc11;
        }
      `}</style>
    </section>
  )
}
