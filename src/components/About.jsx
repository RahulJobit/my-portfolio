import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data'

const highlights = [
  { icon: '🎨', label: 'UI/UX Designer', desc: 'Figma-first design workflows' },
  { icon: '⚙', label: 'Startup Founder', desc: 'GearViewTech · Gear View platform' },
  { icon: '🐳', label: 'DevOps Practitioner', desc: 'Docker · CI/CD · GitHub Actions' },
  { icon: '🛡', label: 'Cybersecurity Learner', desc: 'Kali Linux · Bug Bounty' },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Oversized background text */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-text-faint/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
      >
        ABOUT
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              01 — About Me
            </p>
            <h2
              className={`section-title mb-8 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Designer who<br />
              <span className="gradient-text">codes</span>, developer<br />
              who <span className="gradient-text">designs</span>.
            </h2>
            <div
              className={`space-y-5 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {personalInfo.bio.split('\n\n').map((para, i) => (
                <p key={i} className="font-body text-text-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <div
              className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {[
                { label: '📍 India' },
                { label: '🎓 Self-taught Dev' },
                { label: '🚀 Open to work' },
              ].map(tag => (
                <span
                  key={tag.label}
                  className="px-4 py-2 rounded-full border border-bg-border bg-bg-card font-body text-sm text-text-muted"
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div
              className={`mt-8 flex gap-4 transition-all duration-700 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2.5 px-5">
                GitHub Profile ↗
              </a>
              <a href={personalInfo.behance} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2.5 px-5">
                Behance ↗
              </a>
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`card p-6 hover:border-violet/40 hover:shadow-[0_0_30px_#7c5cfc15] transition-all duration-500 group cursor-default ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <div className="font-display font-semibold text-text-primary text-sm mb-1 group-hover:text-violet transition-colors">
                  {h.label}
                </div>
                <div className="font-body text-xs text-text-muted leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
