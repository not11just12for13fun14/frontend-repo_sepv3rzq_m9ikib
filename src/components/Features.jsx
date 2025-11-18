import { Shield, Sparkles, Clock, Globe } from 'lucide-react'

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:border-cyan-300/40 hover:bg-white/10">
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(100%_100%_at_0%_0%,rgba(56,189,248,0.15)_0%,rgba(255,255,255,0)_50%)]" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 ring-1 ring-white/10 text-cyan-200">
          <Icon size={20} />
        </div>
        <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    { icon: Shield, title: 'Bank‑grade security', desc: 'Transparent security with encryption, SSO, audit trails, and granular access controls.' },
    { icon: Sparkles, title: 'Polished UX', desc: 'Glass-morphic UI with a focus on minimalism and clarity for complex flows.' },
    { icon: Clock, title: 'Real-time insights', desc: 'Stream processing and dashboards give you up‑to‑the‑second signals.' },
    { icon: Globe, title: 'API-first platform', desc: 'Integrate easily with our REST and Webhook APIs built for scale.' },
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-xl" />
        <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-indigo-400/10 blur-xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for modern finance teams</h2>
          <p className="mt-3 text-slate-300">Tools that help you orchestrate card programs, payments, and compliance with confidence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <FeatureCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features