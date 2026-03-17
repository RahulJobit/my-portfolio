import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { skills } from '../data'

function SkillBar({ name, level, inView, delay }) {
  return (
    <div
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-sm text-text-primary">{name}</span>
        <span className="font-mono text-xs text-text-muted">{level}%</span>
      </div>
      <div className="h-1 bg-bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet to-violet-light transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : '0%', transitionDelay: delay }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 font-display font-black text-text-faint/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
      >
        SKILLS
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              02 — Skills
            </p>
            <h2
              className={`section-title transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Tools &amp; <span className="gradient-text">Technologies</span>
            </h2>
          </div>
          <p
            className={`mt-4 lg:mt-0 lg:max-w-xs font-body text-text-muted text-sm leading-relaxed transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            From pixel-perfect design to containerized deployments — a full-spectrum toolkit.
          </p>
        </div>

        {/* Tab bar */}
        <div
          className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {skills.map((s, i) => (
            <button
              key={s.category}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl font-display font-medium text-sm transition-all duration-300 ${
                activeTab === i
                  ? 'bg-violet text-white shadow-[0_0_20px_#7c5cfc44]'
                  : 'border border-bg-border text-text-muted hover:border-violet/40 hover:text-text-primary'
              }`}
            >
              <span className="mr-2">{s.icon}</span>
              {s.category}
            </button>
          ))}
        </div>

        {/* Skill content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bar chart */}
          <div className="card p-8 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{skills[activeTab].icon}</span>
              <div>
                <div className="font-display font-bold text-text-primary">{skills[activeTab].category}</div>
                <div className="font-mono text-xs text-text-muted mt-0.5">Proficiency levels</div>
              </div>
            </div>
            {skills[activeTab].items.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                inView={inView}
                delay={`${400 + i * 100}ms`}
              />
            ))}
          </div>

          {/* All skills grid */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((cat, ci) => (
              <div
                key={cat.category}
                className={`card p-5 cursor-pointer transition-all duration-300 ${
                  activeTab === ci ? 'border-violet/50 shadow-[0_0_20px_#7c5cfc20]' : 'hover:border-bg-border/60'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + ci * 80}ms` }}
                onClick={() => setActiveTab(ci)}
              >
                <div className={`text-xl mb-3 bg-gradient-to-br ${cat.color} bg-clip-text text-transparent`}>
                  {cat.icon}
                </div>
                <div className="font-display font-semibold text-text-primary text-sm mb-2">{cat.category}</div>
                <div className="space-y-1">
                  {cat.items.map(item => (
                    <div key={item.name} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet/60 flex-shrink-0" />
                      <span className="font-body text-xs text-text-muted">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div
          className={`mt-16 card p-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-display font-semibold text-text-primary">GitHub Contributions</div>
              <div className="font-mono text-xs text-text-muted mt-1">@RahulJobit · Activity graph</div>
            </div>
            <a
              href="https://github.com/RahulJobit"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-violet hover:underline"
            >
              View Profile ↗
            </a>
          </div>
          <div className="rounded-xl overflow-hidden bg-bg-dark border border-bg-border">
            <img
              src="https://ghchart.rshah.org/7c5cfc/RahulJobit"
              alt="GitHub Contribution Graph"
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-center justify-end gap-4">
            <span className="font-mono text-[10px] text-text-faint">Less</span>
            {['#1a1a2e', '#2d1b6b', '#4a2fa8', '#6b3fd1', '#7c5cfc'].map(color => (
              <div
                key={color}
                className="w-3 h-3 rounded-sm"
                style={{ background: color }}
              />
            ))}
            <span className="font-mono text-[10px] text-text-faint">More</span>
          </div>
        </div>
      </div>
    </section>
  )
}
