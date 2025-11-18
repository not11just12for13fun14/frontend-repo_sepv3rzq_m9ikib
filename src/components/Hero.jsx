import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-8">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-md">Fintech • Secure • Modern</span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            One opsis
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"> A new way to see your finances</span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-xl">
            We craft minimalist, glass-morphic experiences that make complex financial workflows simple, secure, and delightful.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">Get in touch</a>
            <a href="#features" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">Explore features</a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-slate-400">
            <div className="text-sm"><span className="text-white font-semibold">ISO-ready</span> security</div>
            <div className="text-sm"><span className="text-white font-semibold">Realtime</span> analytics</div>
            <div className="text-sm"><span className="text-white font-semibold">API-first</span> platform</div>
          </div>
        </div>

        <div className="relative h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(2,6,23,0.35)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

export default Hero;