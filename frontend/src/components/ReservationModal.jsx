import { useState, useEffect } from "react";

/* ── Constants ─────────────────────────────────────────────── */

const TIME_SLOTS = [
  "06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM", "10:00 PM",
];

const DURATIONS = [1, 1.5, 2, 2.5, 3];

const PAYMENT_METHODS = [
  { id: "gcash",   label: "GCash" },
  { id: "card",    label: "Credit Card" },
  { id: "ewallet", label: "E-Wallet" },
  { id: "cash",    label: "Pay on Site" },
];

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  date: "",
  timeSlot: "",
  duration: 1,
  players: 2,
  paymentMethod: "",
  notes: "",
};

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

const inputCls = (error) =>
  `w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
    error ? "border-red-400 bg-red-50" : "border-gray-200"
  }`;

/* ── Reusable sub-components (defined OUTSIDE main component) ── */

// eslint-disable-next-line react/prop-types
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Summary({ court, form, formattedTotal }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-5 space-y-3 text-sm">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Booking Summary</p>
      <div className="flex items-center gap-3">
        <img src={court.image} alt={court.name} className="w-14 h-14 rounded-xl object-cover" />
        <div>
          <p className="font-bold text-gray-900">{court.name}</p>
          <p className="text-xs text-gray-500">{court.type} Court</p>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-3 space-y-2 text-gray-600">
        {form.date && (
          <Row
            label="Date"
            value={new Date(form.date + "T00:00").toLocaleDateString("en-PH", {
              weekday: "short", year: "numeric", month: "short", day: "numeric",
            })}
          />
        )}
        {form.timeSlot && <Row label="Time" value={form.timeSlot} />}
        <Row label="Duration" value={`${form.duration} hr${form.duration > 1 ? "s" : ""}`} />
        <Row label="Players"  value={form.players} />
        {form.paymentMethod && (
          <Row label="Payment" value={PAYMENT_METHODS.find((p) => p.id === form.paymentMethod)?.label} />
        )}
      </div>
      <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Total</span>
        <span className="text-xl font-black text-emerald-600">{formattedTotal}</span>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Backdrop({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {children}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Panel({ onClose, title, step, children }) {
  const steps = ["Your Details", "Review", "Confirmed"];
  return (
    <div
      className="relative w-full max-w-3xl max-h-[92vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-[fadeSlideUp_0.25s_ease]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-100 shrink-0 gap-3">
        <div className="min-w-0">
          <h2 className="text-lg sm:text-xl font-black text-gray-900">{title}</h2>
          <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <div className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center shrink-0 ${
                  i + 1 < step   ? "bg-emerald-600 text-white" :
                  i + 1 === step ? "bg-emerald-600 text-white ring-4 ring-emerald-100" :
                                   "bg-gray-100 text-gray-400"
                }`}>
                  {i + 1 < step ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-semibold hidden sm:inline ${i + 1 === step ? "text-gray-800" : "text-gray-400"}`}>{s}</span>
                {i < steps.length - 1 && <span className="text-gray-200 text-xs mx-0.5">›</span>}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Scrollable body */}
      <div className="overflow-y-auto px-4 sm:px-8 py-5 sm:py-6 flex flex-col gap-5">
        {children}
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */

// eslint-disable-next-line react/prop-types
export default function ReservationModal({ court, onClose }) {
  const [form,   setForm]   = useState(INITIAL_FORM);
  const [step,   setStep]   = useState(1);
  const [errors, setErrors] = useState({});

  // Reset when a new court is opened
  useEffect(() => {
    setForm(INITIAL_FORM);
    setStep(1);
    setErrors({});
  }, [court]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = court ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [court]);

  // Close on Escape
  useEffect(() => {
    if (!court) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [court, onClose]);

  if (!court) return null;

  /* ── Derived values ── */
  const priceNum       = parseInt(court.price.replace(/[^\d]/g, ""), 10);
  const total          = priceNum * form.duration;
  const formattedTotal = `₱${total.toLocaleString()}`;

  /* ── Handlers ── */
  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: "" }));
  };

  const setPhone = (e) => {
    const digits = e.target.value.replace(/[^\d]/g, "").slice(0, 11);
    setForm((f) => ({ ...f, phone: digits }));
    setErrors((er) => ({ ...er, phone: "" }));
  };

  const setPayment = (id) => {
    setForm((f) => ({ ...f, paymentMethod: id }));
    setErrors((er) => ({ ...er, paymentMethod: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim())  e.firstName = "Required";
    if (!form.lastName.trim())   e.lastName  = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{11}$/.test(form.phone)) e.phone = "Must be exactly 11 digits";
    if (!form.date)              e.date      = "Required";
    if (!form.timeSlot)          e.timeSlot  = "Required";
    if (!form.paymentMethod)     e.paymentMethod = "Select a payment method";
    return e;
  };

  const handleNext = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setStep(2);
  };

  /* ── Step 3: Success ── */
  if (step === 3) {
    return (
      <Backdrop onClose={onClose}>
        <div
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center animate-[fadeSlideUp_0.25s_ease]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 text-sm mb-1">
            Your reservation for <strong>{court.name}</strong> has been submitted.
          </p>
          <p className="text-gray-400 text-xs mb-8">
            A confirmation will be sent to <strong>{form.email}</strong>.
          </p>
          <div className="bg-gray-50 rounded-2xl p-4 text-sm text-left space-y-2 mb-8">
            <Row label="Court"    value={court.name} />
            <Row label="Date"     value={new Date(form.date + "T00:00").toLocaleDateString("en-PH", { weekday: "short", year: "numeric", month: "short", day: "numeric" })} />
            <Row label="Time"     value={form.timeSlot} />
            <Row label="Duration" value={`${form.duration} hr${form.duration > 1 ? "s" : ""}`} />
            <div className="border-t border-gray-200 pt-2 flex justify-between">
              <span className="text-gray-400">Total Paid</span>
              <span className="font-black text-emerald-600">{formattedTotal}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-emerald-600/20"
          >
            Done
          </button>
        </div>
      </Backdrop>
    );
  }

  /* ── Step 2: Review ── */
  if (step === 2) {
    return (
      <Backdrop onClose={onClose}>
        <Panel onClose={onClose} title="Confirm Reservation" step={step}>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Please review your booking details before confirming.</p>
            <div className="bg-gray-50 rounded-2xl p-5 space-y-2 text-sm">
              <Row label="Name"  value={`${form.firstName} ${form.lastName}`} />
              <Row label="Email" value={form.email} />
              <Row label="Phone" value={form.phone} />
              {form.notes && <Row label="Notes" value={form.notes} />}
            </div>
            <Summary court={court} form={form} formattedTotal={formattedTotal} />
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-700 font-medium">
              ⚠️ This is a demo — no real booking will be processed.
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setStep(1)}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors"
            >
              ← Back
            </button>
            <button
              onClick={() => setStep(3)}
              className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
            >
              Confirm Booking
            </button>
          </div>
        </Panel>
      </Backdrop>
    );
  }

  /* ── Step 1: Form ── */
  return (
    <Backdrop onClose={onClose}>
      <Panel onClose={onClose} title="Reserve a Court" step={step}>
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ── Form fields ── */}
          <div className="flex-1 space-y-4 min-w-0">

            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="First Name" error={errors.firstName}>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={set("firstName")}
                  placeholder="Juan"
                  className={inputCls(errors.firstName)}
                />
              </Field>
              <Field label="Last Name" error={errors.lastName}>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={set("lastName")}
                  placeholder="dela Cruz"
                  className={inputCls(errors.lastName)}
                />
              </Field>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Email Address" error={errors.email}>
                <input
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="juan@email.com"
                  className={inputCls(errors.email)}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={setPhone}
                  placeholder="09XXXXXXXXX"
                  inputMode="numeric"
                  className={inputCls(errors.phone)}
                />
              </Field>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Date" error={errors.date}>
                <input
                  type="date"
                  value={form.date}
                  min={getTodayString()}
                  onChange={set("date")}
                  className={inputCls(errors.date)}
                />
              </Field>
              <Field label="Start Time" error={errors.timeSlot}>
                <select value={form.timeSlot} onChange={set("timeSlot")} className={inputCls(errors.timeSlot)}>
                  <option value="">Select time</option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Duration + Players */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Duration (hours)">
                <select value={form.duration} onChange={set("duration")} className={inputCls()}>
                  {DURATIONS.map((d) => (
                    <option key={d} value={d}>{d} hr{d > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </Field>
              <Field label="Number of Players">
                <select value={form.players} onChange={set("players")} className={inputCls()}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>{n} player{n > 1 ? "s" : ""}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Payment method */}
            <Field label="Payment Method" error={errors.paymentMethod}>
              <div className="grid grid-cols-2 gap-2">
                {PAYMENT_METHODS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPayment(p.id)}
                    className={`flex items-center justify-start px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                      form.paymentMethod === p.id
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </Field>

            {/* Notes */}
            <Field label="Special Requests (optional)">
              <textarea
                value={form.notes}
                onChange={set("notes")}
                placeholder="Any special requests or notes..."
                rows={2}
                className={`${inputCls()} resize-none`}
              />
            </Field>
          </div>

          {/* ── Summary sidebar ── */}
          <div className="lg:w-64 shrink-0">
            <Summary court={court} form={form} formattedTotal={formattedTotal} />
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
        >
          Review Booking →
        </button>
      </Panel>
    </Backdrop>
  );
}
