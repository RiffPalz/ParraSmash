import heroBg from "../assets/images/main_bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Badminton court"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-gray-950/60 via-gray-950/30 to-gray-950/80" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">

        {/* Badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Now Accepting Reservations
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
            Game
          </span>
          <br />at Parrasmash
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Premium badminton courts at your fingertips. Book in minutes, play with confidence.{" "}
          <span className="text-xs text-gray-500 italic">
            (This is a demo project — all details are fictional.)
          </span>
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#courts"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all duration-200 hover:-translate-y-1"
          >
            Reserve a Court
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-full border border-white/20 transition-all duration-200"
          >
            Learn More
          </a>
        </div>

        {/* Stats row */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "6+",       label: "Courts" },
            { value: "500+",     label: "Happy Players" },
            { value: "6AM–11PM", label: "Daily Hours" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-xl sm:text-2xl font-black text-white">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
