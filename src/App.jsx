import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Decorative grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Features />
        <About />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} One opsis. All rights reserved.
      </footer>
    </div>
  )
}

export default App