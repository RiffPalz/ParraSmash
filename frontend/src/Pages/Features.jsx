const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Real-Time Booking",
    desc: "See live court availability and lock in your slot in under 3 minutes — no calls, no waiting.",
    color: "emerald",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Secure Payments",
    desc: "Pay via GCash, credit card, or e-wallet. All transactions are encrypted and fully secure.",
    color: "teal",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Instant Confirmation",
    desc: "Receive a booking confirmation immediately after payment — straight to your inbox.",
    color: "green",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Prime Location",
    desc: "Conveniently located at the heart of the city — easy to reach from anywhere in the metro.",
    color: "cyan",
  },
];

const colorMap = {
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", border: "group-hover:border-emerald-200", glow: "group-hover:shadow-emerald-50" },
  teal:    { bg: "bg-teal-50",    icon: "text-teal-600",    border: "group-hover:border-teal-200",    glow: "group-hover:shadow-teal-50" },
  green:   { bg: "bg-green-50",   icon: "text-green-600",   border: "group-hover:border-green-200",   glow: "group-hover:shadow-green-50" },
  cyan:    { bg: "bg-cyan-50",    icon: "text-cyan-600",    border: "group-hover:border-cyan-200",    glow: "group-hover:shadow-cyan-50" },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-3">
            Why Parrasmash
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Everything You Need
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            We built Parrasmash to make court booking effortless, secure, and enjoyable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const c = colorMap[f.color];
            return (
              <div
                key={f.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`group p-7 rounded-3xl border border-gray-100 ${c.border} hover:shadow-xl ${c.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.icon} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
