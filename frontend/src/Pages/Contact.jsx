const info = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "42 Smash Street, Greenfield District, Metro Fictiona",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Operating Hours",
    value: "Open Daily: 6:00 AM – 11:00 PM",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@parrasmash.ph",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you shortly.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-3">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Questions about reservations, bulk bookings, or anything else? We&apos;re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: info + map */}
          <div data-aos="fade-right" data-aos-delay="100" className="space-y-6">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-52 bg-gray-100 relative">
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="contact-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#d1d5db" strokeWidth="0.8"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contact-grid)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#9ca3af" strokeWidth="6" strokeLinecap="round"/>
                <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round"/>
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#d1d5db" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="0" y1="25%" x2="100%" y2="25%" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0" y1="75%" x2="100%" y2="75%" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round"/>
                <rect x="42%" y="27%" width="26%" height="20%" rx="3" fill="#e5e7eb"/>
                <rect x="42%" y="52%" width="26%" height="20%" rx="3" fill="#e5e7eb"/>
                <rect x="72%" y="27%" width="20%" height="44%" rx="3" fill="#e5e7eb"/>
                <rect x="5%" y="27%" width="32%" height="44%" rx="3" fill="#e5e7eb"/>
              </svg>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white shadow-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="w-0.5 h-3 bg-emerald-600" />
              </div>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 px-3 py-1.5 rounded-full shadow border border-gray-200 whitespace-nowrap">
                📍 Parrasmash Badminton Center
              </div>
              <div className="absolute top-2 right-2 bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-200">
                Placeholder Map
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div data-aos="fade-left" data-aos-delay="150" className="bg-white rounded-3xl shadow-xl shadow-gray-200/60 border border-gray-100 p-5 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Your Name</label>
                  <input type="text" placeholder="Juan dela Cruz" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address</label>
                  <input type="email" placeholder="juan@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Subject</label>
                <input type="text" placeholder="Court reservation inquiry" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
                <textarea placeholder="Tell us how we can help..." rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm transition-all resize-none" />
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-emerald-500/35 transition-all duration-200 hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
