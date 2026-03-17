import { personalInfo } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-bg-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="font-display font-black text-2xl">
              <span className="text-violet">R</span>
              <span className="text-text-primary">J</span>
            </div>
            <div className="h-6 w-px bg-bg-border" />
            <span className="font-mono text-xs text-text-faint tracking-[0.2em]">
              RAHUL JOBIT · {new Date().getFullYear()}
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {['#about', '#skills', '#projects', '#experience', '#contact'].map(href => (
              <a
                key={href}
                href={href}
                className="font-mono text-xs text-text-faint hover:text-violet transition-colors tracking-wider capitalize"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-bg-border text-text-faint hover:text-violet hover:border-violet/40 transition-all"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href={personalInfo.behance}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-bg-border text-text-faint hover:text-violet hover:border-violet/40 transition-all"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.971 10.757c-.073 1.322.718 2.218 2.221 2.218 1.343 0 2.05-.761 2.353-2.218h-4.574zM13.462 13.88c-1.177 1.677-3.154 2.447-4.961 2.447C5.33 16.327 3 14.312 3 10.99c0-3.282 2.33-5.312 5.501-5.312 3.18 0 5.186 1.75 5.186 4.832v1.029H5.847c0 1.854 1.365 2.888 3.164 2.888 1.195 0 2.258-.526 2.852-1.548l1.599.999z"/>
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-bg-border text-text-faint hover:text-violet hover:border-violet/40 transition-all"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-bg-border/50 text-center">
          <p className="font-mono text-[10px] text-text-faint tracking-widest">
            DESIGNED &amp; DEVELOPED BY RAHUL JOBIT · BUILT WITH REACT + VITE + TAILWIND CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
