import { useState, useEffect } from "react";


const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courts", href: "#courts" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <a href="#home" className="flex items-center gap-2 group">
          {/* Hardcoded SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-10 w-10 text-emerald-500 group-hover:text-emerald-400 transition-colors"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3" />
            <path d="M14.5 10.5L12 8l-2.5 2.5c-.83.83-.83 2.17 0 3s2.17.83 3 0l2-2v-4zM12 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            <path d="M17.5 6.5c-1.38-1.38-3.62-1.38-5 0l-6 6c-1.38 1.38-1.38 3.62 0 5s3.62 1.38 5 0l6-6c1.38-1.38 1.38-3.62 0-5zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </svg>

          {/* Dynamic Text Logo */}
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              PARRA<span className="text-emerald-500">SMASH</span>
            </span>
            <span className={`text-[0.65rem] font-bold tracking-[0.2em] uppercase leading-none mt-1 transition-colors duration-300 ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>
              Badminton Center
            </span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className={`text-sm font-semibold tracking-wide relative group transition-colors duration-200 ${scrolled ? "text-gray-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
                }`}
            >
              {l.name}
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full ${scrolled ? "bg-emerald-500" : "bg-white"
                  }`}
              />
            </a>
          ))}

          <a
            href="#courts"
            className="ml-2 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"
          }`}
      >
        <div className="bg-white/98 backdrop-blur-xl border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={close}
              className="py-3 text-base font-semibold text-gray-700 hover:text-emerald-600 border-b border-gray-100 last:border-0 transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#courts"
            onClick={close}
            className="mt-4 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full transition-colors shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
