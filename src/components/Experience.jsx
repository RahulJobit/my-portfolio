import { useInView } from '../hooks/useInView'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 font-display font-black text-text-faint/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', whiteSpace: 'nowrap' }}
      >
        EXP
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            04 — Experience
          </p>
          <h2
            className={`section-title transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Career <span className="gradient-text">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet via-violet/30 to-transparent transition-all duration-1000 ${
              inView ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            } origin-top hidden md:block`}
            style={{ transitionDelay: '200ms' }}
          />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="md:pl-24">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl items-center justify-center text-2xl z-10"
                    style={{
                      background: `${exp.color}18`,
                      border: `2px solid ${exp.color}44`,
                      boxShadow: `0 0 20px ${exp.color}22`,
                    }}
                  >
                    {i === 0 ? '🏢' : '🚀'}
                  </div>

                  {/* Card */}
                  <div
                    className="card p-8 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 group"
                    style={{ borderColor: 'transparent' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = `${exp.color}44`}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-xl text-text-primary mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="font-body text-sm" style={{ color: exp.color }}>
                            {exp.company}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-text-faint" />
                          <span
                            className="font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full"
                            style={{ background: `${exp.color}18`, color: exp.color }}
                          >
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-bg-border bg-bg-dark">
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-text-faint">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                      </div>
                    </div>

                    <p className="font-body text-text-muted leading-relaxed mb-6 text-sm">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {exp.highlights.map(h => (
                        <div key={h} className="flex items-start gap-3">
                          <div
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          <span className="font-body text-xs text-text-muted leading-relaxed">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* End node: what's next */}
            <div
              className={`relative transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="md:pl-24">
                <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-2xl items-center justify-center z-10 bg-violet/10 border-2 border-dashed border-violet/40">
                  <span className="text-2xl">✦</span>
                </div>
                <div className="card p-8 border-dashed border-bg-border/60 bg-bg-dark/50">
                  <h3 className="font-display font-bold text-xl gradient-text mb-2">What's Next?</h3>
                  <p className="font-body text-sm text-text-muted">
                    Open to exciting full-time roles, freelance projects, and startup collaborations. Let's build something great together.
                  </p>
                  <a href="#contact" className="mt-4 inline-flex btn-primary text-sm py-2 px-4">
                    Get In Touch ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
