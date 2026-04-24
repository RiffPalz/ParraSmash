import indoorCourt from "../assets/images/indoor-court.jpg";

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
      </svg>
    ),
    title: "Who We Are",
    desc: "A dedicated team of badminton enthusiasts and tech experts who recognize the need for quality playing spaces — catering to everyone from beginners to seasoned athletes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "What We Do",
    desc: "Our platform features advanced tools to streamline your search — location-based recommendations, easy-to-use filters, and detailed court profiles to help you make informed choices.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Why It Matters",
    desc: "The right court enhances your experience and skills. We prioritize transparency, ease, and accuracy to foster a stronger community and a healthier lifestyle.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-3">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Welcome to <span className="text-emerald-600">Parrasmash</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            More than a booking platform — a community built around the love of badminton.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div data-aos="fade-right" data-aos-delay="100" className="relative pb-8 sm:pb-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
              <img
                src={indoorCourt}
                alt="Indoor badminton court"
                className="w-full h-80 lg:h-120 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 sm:-bottom-5 sm:-right-5 bg-emerald-600 text-white rounded-2xl px-6 py-4 shadow-xl shadow-emerald-600/30">
              <p className="text-3xl font-black leading-none">6+</p>
              <p className="text-xs font-semibold text-emerald-100 mt-0.5">Premium Courts</p>
            </div>
          </div>

          {/* Right: pillars */}
          <div className="space-y-6">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                data-aos="fade-left"
                data-aos-delay={i * 100 + 150}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors">
                  {p.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
