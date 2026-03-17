import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data'

const filters = ['All', 'UI/UX', 'Development', 'DevOps', 'Startup']

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`card group relative overflow-hidden transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } hover:border-transparent hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] cursor-default`}
      style={{ transitionDelay: `${200 + index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${project.bgGlow}18 0%, transparent 70%)` }}
      />
      <div
        className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-opacity-40 transition-all duration-500 pointer-events-none"
        style={{ borderColor: `${project.color}66` }}
      />

      <div className="p-7">
        {/* Icon + Featured badge */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-display transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${project.color}18`, border: `1px solid ${project.color}33` }}
          >
            {project.icon}
          </div>
          {project.featured && (
            <span
              className="font-mono text-[10px] tracking-widest px-3 py-1 rounded-full"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}33` }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-xl text-text-primary mb-3 group-hover:transition-colors duration-200"
          style={{ color: hovered ? project.color : undefined }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide px-2.5 py-1 rounded-lg bg-bg-dark border border-bg-border text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-bg-border">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Source
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="ml-auto flex items-center gap-1.5 font-mono text-xs transition-colors"
            style={{ color: project.color }}
          >
            Live Demo
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.includes(activeFilter)))

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-text-faint/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
      >
        WORK
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              03 — Projects
            </p>
            <h2
              className={`section-title transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>

          {/* Filters */}
          <div
            className={`mt-6 lg:mt-0 flex flex-wrap gap-2 transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-violet text-white'
                    : 'border border-bg-border text-text-muted hover:border-violet/30 hover:text-text-primary'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a href="https://github.com/RahulJobit" target="_blank" rel="noreferrer" className="btn-outline">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            See All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
