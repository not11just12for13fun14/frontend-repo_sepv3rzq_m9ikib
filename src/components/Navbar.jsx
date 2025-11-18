import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 shadow-[0_8px_30px_rgba(56,189,248,0.45)]" />
          <span className="text-white font-semibold text-lg tracking-tight">One opsis</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('home')} className="text-slate-300 hover:text-white transition-colors">Home</button>
          <button onClick={() => scrollTo('features')} className="text-slate-300 hover:text-white transition-colors">Features</button>
          <button onClick={() => scrollTo('about')} className="text-slate-300 hover:text-white transition-colors">About</button>
          <button onClick={() => scrollTo('contact')} className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors">Contact</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            <button onClick={() => scrollTo('home')} className="text-left text-slate-200 py-2">Home</button>
            <button onClick={() => scrollTo('features')} className="text-left text-slate-200 py-2">Features</button>
            <button onClick={() => scrollTo('about')} className="text-left text-slate-200 py-2">About</button>
            <button onClick={() => scrollTo('contact')} className="text-left text-slate-900 bg-white rounded-lg py-2 px-3">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;