const steps = [
  {
    number: "01",
    title: "Select a Court",
    desc: "Browse available courts, compare prices, and pick the one that fits your needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Choose Date & Time",
    desc: "Pick your preferred schedule from real-time available slots on our calendar.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Secure Payment",
    desc: "Pay safely via GCash, credit card, or e-wallet. Your transaction is fully encrypted.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Get Confirmation",
    desc: "Receive an instant booking confirmation via email. Show up and play!",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function BookingProcess() {
  return (
    <section id="booking" className="py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-3">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Book in 4 Simple Steps
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            From browsing to playing — the whole process takes less than 3 minutes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-800 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center text-emerald-400">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center shadow-lg shadow-emerald-600/40">
                    {i + 1}
                  </span>
                </div>
                <p className="text-xs font-bold text-emerald-500 tracking-widest mb-1">{step.number}</p>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-16 text-center">
          <a
            href="#courts"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5"
          >
            Start Booking Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
