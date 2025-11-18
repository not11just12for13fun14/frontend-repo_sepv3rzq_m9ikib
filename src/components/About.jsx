function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white">Design with purpose</h2>
              <p className="mt-4 text-slate-300 leading-relaxed">
                We are a product studio focused on elegant, reliable systems for financial operations. Our approach blends rigorous engineering with high‑end design to deliver products that feel effortless.
              </p>
              <p className="mt-3 text-slate-300 leading-relaxed">
                From issuing to reconciliation, we partner with companies to ship secure tools that teams love to use.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-slate-200">
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-cyan-400" /> Glass‑morphic UI systems</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-indigo-400" /> Card program orchestration</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-sky-400" /> Compliance and audit tooling</li>
              <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-blue-400" /> Embedded finance experiences</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About