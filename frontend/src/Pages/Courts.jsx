import { useState } from "react";
import ReservationModal from "../components/ReservationModal";
import indoorImg1  from "../assets/images/indoor.jpg";
import indoorImg2  from "../assets/images/indoor-b.jpeg";
import indoorImg3  from "../assets/images/indoor-court.jpg";
import outdoorImg  from "../assets/images/outdoor-court.jpg";
import outdoorImg2 from "../assets/images/outdoor-court-1.jpg";
import privateImg1 from "../assets/images/private-court.jpg";

const courts = [
  {
    id: 1,
    name: "Indoor Court A",
    type: "Indoor",
    price: "₱200",
    unit: "/ hour",
    available: true,
    slots: 4,
    image: indoorImg1,
    features: ["Air-conditioned", "LED Lighting", "Wooden Flooring"],
  },
  {
    id: 2,
    name: "Indoor Court B",
    type: "Indoor",
    price: "₱200",
    unit: "/ hour",
    available: true,
    slots: 2,
    image: indoorImg2,
    features: ["Air-conditioned", "LED Lighting", "Wooden Flooring"],
  },
  {
    id: 3,
    name: "Outdoor Court",
    type: "Outdoor",
    price: "₱150",
    unit: "/ hour",
    available: false,
    slots: 0,
    image: outdoorImg,
    features: ["Open Air", "Flood Lights", "Synthetic Mat"],
  },
  {
    id: 4,
    name: "Private Court",
    type: "Private",
    price: "₱350",
    unit: "/ hour",
    available: true,
    slots: 6,
    image: privateImg1,
    features: ["Exclusive Access", "Locker Room", "Premium Flooring"],
  },
  {
    id: 5,
    name: "Training Court",
    type: "Indoor",
    price: "₱250",
    unit: "/ hour",
    available: true,
    slots: 3,
    image: indoorImg3,
    features: ["Ball Machine", "Coach Available", "Video Analysis"],
  },
  {
    id: 6,
    name: "VIP Court",
    type: "Private",
    price: "₱500",
    unit: "/ hour",
    available: true,
    slots: 1,
    image: outdoorImg2,
    features: ["VIP Lounge", "Refreshments", "Premium Equipment"],
  },
];

const typeColors = {
  Indoor:  "bg-blue-50 text-blue-700",
  Outdoor: "bg-amber-50 text-amber-700",
  Private: "bg-purple-50 text-purple-700",
};

export default function Courts() {
  const [selectedCourt, setSelectedCourt] = useState(null);

  return (
    <section id="courts" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-14">
          <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-3">
            Court Reservation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Choose Your Court
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Select from our range of premium courts. Real-time availability shown below.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {courts.map((court, i) => (
            <div
              key={court.id}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-gray-200/80 border border-gray-100 hover:border-emerald-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={court.image}
                  alt={court.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent" />
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${typeColors[court.type]}`}>
                  {court.type}
                </span>
                <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${court.available ? "bg-emerald-500/90 text-white" : "bg-red-500/90 text-white"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${court.available ? "bg-white animate-pulse" : "bg-white/60"}`} />
                  {court.available ? `${court.slots} slots` : "Full"}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{court.name}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {court.features.map((f) => (
                    <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-2xl font-black text-gray-900">{court.price}</span>
                    <span className="text-sm text-gray-400 ml-1">{court.unit}</span>
                  </div>
                  <button
                    disabled={!court.available}
                    onClick={() => court.available && setSelectedCourt(court)}
                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                      court.available
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {court.available ? "Reserve" : "Unavailable"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ReservationModal
        court={selectedCourt}
        onClose={() => setSelectedCourt(null)}
      />
    </section>
  );
}
