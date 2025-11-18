function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 text-center">
          <h3 className="text-3xl font-bold text-white">Let’s build something beautiful</h3>
          <p className="mt-3 text-slate-300">Tell us about your project and timelines. We’ll respond within one business day.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@oneopsis.com" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100">Email us</a>
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10">Book a call</a>
          </div>

          <p className="mt-6 text-xs text-slate-400">We respect your inbox. No spam, ever.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA