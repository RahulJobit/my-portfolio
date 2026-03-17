import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data'


export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
  
    try {
      const response = await fetch("https://formspree.io/f/xqeygzgr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
  
      if (response.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
  
        setTimeout(() => {
          setStatus('idle')
        }, 3000)
  
      } else {
        setStatus('error')
      }
  
    } catch (error) {
      setStatus('error')
    }
  }

  const contacts = [
    { icon: '📧', label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: '📱', label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: '💼', label: 'Behance', value: 'behance.net/rahuljobit', href: personalInfo.behance },
    { icon: '⌨', label: 'GitHub', value: 'github.com/RahulJobit', href: personalInfo.github },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-text-faint/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(6rem, 18vw, 18rem)', whiteSpace: 'nowrap' }}
      >
        CONTACT
      </div>

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className={`section-label mb-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            05 — Contact
          </p>
          <h2
            className={`section-title mb-6 transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p
            className={`font-body text-text-muted max-w-lg mx-auto transition-all duration-700 delay-200 ${inView ? 'opacity-100' : 'opacity-0'}`}
          >
            Have a project in mind or just want to say hi? My inbox is always open. I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="space-y-4 mb-10">
              {contacts.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 card hover:border-violet/40 hover:shadow-[0_0_20px_#7c5cfc15] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet/10 border border-violet/20 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-text-faint tracking-widest mb-0.5">{c.label}</div>
                    <div className="font-body text-sm text-text-primary group-hover:text-violet transition-colors truncate max-w-[200px]">
                      {c.value}
                    </div>
                  </div>
                  <svg className="ml-auto text-text-faint group-hover:text-violet transition-colors flex-shrink-0" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="card p-6 border-violet/20 bg-violet/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE NOW</span>
              </div>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Currently open to freelance projects, full-time positions, and startup collaborations.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">

             {/* Honeypot spam protection */}
             <input type="text" name="_gotcha" style={{ display: "none" }} />

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-text-faint tracking-widest block">YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-bg-dark border border-bg-border rounded-xl px-4 py-3 font-body text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet/60 focus:shadow-[0_0_0_3px_#7c5cfc15] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] text-text-faint tracking-widest block">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-bg-dark border border-bg-border rounded-xl px-4 py-3 font-body text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet/60 focus:shadow-[0_0_0_3px_#7c5cfc15] transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-faint tracking-widest block">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry / Collaboration / Just saying hi"
                  className="w-full bg-bg-dark border border-bg-border rounded-xl px-4 py-3 font-body text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet/60 focus:shadow-[0_0_0_3px_#7c5cfc15] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-faint tracking-widest block">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-bg-dark border border-bg-border rounded-xl px-4 py-3 font-body text-sm text-text-primary placeholder-text-faint focus:outline-none focus:border-violet/60 focus:shadow-[0_0_0_3px_#7c5cfc15] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full btn-primary justify-center text-base py-4 ${
                  status === 'sent' ? 'bg-green-500 hover:bg-green-500 shadow-[0_0_30px_#22c55e44]' : ''
                }`}
              > 
                  {status === 'error' && (
                    <p className="text-red-400 text-sm mt-3 text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                {status === 'idle' && (
                  <>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}

                {status === 'sending' && (
                  <>
                    <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Sending…
                  </>
                )}

                {status === 'sent' && (
                  <>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
