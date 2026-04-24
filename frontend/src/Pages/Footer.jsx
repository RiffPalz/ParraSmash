import { useState } from "react";
import Logo from "../assets/images/parrasmash.png";
import Modal from "../components/Modal";

const quickLinks = [
  { name: "Home",      href: "#home" },
  { name: "About Us",  href: "#about" },
  { name: "Courts",    href: "#courts" },
  { name: "Features",  href: "#features" },
  { name: "Contact",   href: "#contact" },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ── Policy content ─────────────────────────────────────────── */

/** @param {{ title: string, children: import("react").ReactNode }} props */
// eslint-disable-next-line react/prop-types
function PolicySection({ title, children }) {
  return (
    <div>
      <h3 className="font-bold text-gray-800 mb-1.5">{title}</h3>
      {children}
    </div>
  );
}

const disclaimer = (
  <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl px-4 py-3 font-medium">
    ⚠️ <strong>Demo Project Disclaimer:</strong> Parrasmash is a fictional personal project created for portfolio and learning purposes only. All names, addresses, contact details, and business information are entirely made up and do not represent any real entity.
  </div>
);

const privacyContent = (
  <>
    {disclaimer}
    <PolicySection title="1. Information We Collect">
      <p>When you use Parrasmash, we may collect information you provide directly — such as your name, email address, and messages submitted through our contact form. We also collect basic usage data (pages visited, time spent) to improve the platform.</p>
    </PolicySection>
    <PolicySection title="2. How We Use Your Information">
      <p>Information collected is used solely to respond to your inquiries, process court reservations, and improve our services. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
    </PolicySection>
    <PolicySection title="3. Cookies">
      <p>We may use cookies to maintain session state and remember your preferences. You can disable cookies in your browser settings, though some features may not function correctly as a result.</p>
    </PolicySection>
    <PolicySection title="4. Data Security">
      <p>We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>
    </PolicySection>
    <PolicySection title="5. Third-Party Links">
      <p>Our platform may contain links to external websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their policies independently.</p>
    </PolicySection>
    <PolicySection title="6. Changes to This Policy">
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the platform constitutes acceptance of the revised policy.</p>
    </PolicySection>
    <PolicySection title="7. Contact">
      <p>For any privacy-related questions, please reach out via our Contact section. <em>(Note: this is a demo project — no real support is provided.)</em></p>
    </PolicySection>
  </>
);

const termsContent = (
  <>
    {disclaimer}
    <PolicySection title="1. Acceptance of Terms">
      <p>By accessing or using Parrasmash, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform.</p>
    </PolicySection>
    <PolicySection title="2. Use of the Platform">
      <p>Parrasmash is intended for lawful use only. You agree not to misuse the platform, attempt unauthorized access, or engage in any activity that disrupts the service or other users&apos; experience.</p>
    </PolicySection>
    <PolicySection title="3. Court Reservations">
      <p>Reservations are subject to court availability. Once confirmed and paid, bookings may be cancelled or rescheduled according to our cancellation policy. We reserve the right to refuse service at our discretion.</p>
    </PolicySection>
    <PolicySection title="4. Payments">
      <p>All payments are processed securely. Prices are listed in Philippine Peso (₱) and are subject to change without prior notice. Refunds are handled on a case-by-case basis.</p>
    </PolicySection>
    <PolicySection title="5. Intellectual Property">
      <p>All content on this platform — including logos, text, images, and design — is the property of Parrasmash PH. You may not reproduce or distribute any content without written permission.</p>
    </PolicySection>
    <PolicySection title="6. Limitation of Liability">
      <p>Parrasmash is provided &quot;as is&quot; without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.</p>
    </PolicySection>
    <PolicySection title="7. Governing Law">
      <p>These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of jurisdiction.</p>
    </PolicySection>
    <PolicySection title="8. Changes to Terms">
      <p>We reserve the right to modify these terms at any time. Continued use of the platform after changes are posted constitutes your acceptance of the new terms.</p>
    </PolicySection>
  </>
);

/* ── Component ──────────────────────────────────────────────── */

export default function Footer() {
  const [modal, setModal] = useState(null); // null | "privacy" | "terms"

  return (
    <>
      <footer className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* ── Brand ── */}
            <div className="space-y-4">
              <img src={Logo} alt="Parrasmash" className="h-10 w-auto" />
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                A premium badminton court booking platform built for enthusiasts everywhere.
                Play more, stress less.
              </p>
              <div className="flex gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-emerald-500 transition-colors" />
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Map ── */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Find Us</h4>
              <div className="rounded-2xl overflow-hidden border border-gray-800 h-40 bg-gray-900 relative">
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="footer-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#374151" strokeWidth="0.8"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#footer-grid)" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#4b5563" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="38%" y1="0" x2="38%" y2="100%" stroke="#4b5563" strokeWidth="3.5" strokeLinecap="round"/>
                  <line x1="68%" y1="0" x2="68%" y2="100%" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="28%" x2="100%" y2="28%" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="0" y1="72%" x2="100%" y2="72%" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
                  <rect x="40%" y="30%" width="26%" height="18%" rx="3" fill="#374151"/>
                  <rect x="40%" y="52%" width="26%" height="18%" rx="3" fill="#374151"/>
                  <rect x="70%" y="30%" width="18%" height="40%" rx="3" fill="#374151"/>
                  <rect x="5%" y="30%" width="30%" height="40%" rx="3" fill="#374151"/>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 border-2 border-gray-900 shadow-lg flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="w-0.5 h-2.5 bg-emerald-500" />
                </div>
                <div className="absolute top-2 right-2 bg-amber-900/60 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-800">
                  Placeholder
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">42 Smash Street, Greenfield District, Metro Fictiona</p>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Parrasmash PH. All Rights Reserved.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setModal("privacy")}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModal("terms")}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Modals ── */}
      <Modal
        isOpen={modal === "privacy"}
        onClose={() => setModal(null)}
        title="Privacy Policy"
      >
        {privacyContent}
      </Modal>

      <Modal
        isOpen={modal === "terms"}
        onClose={() => setModal(null)}
        title="Terms of Service"
      >
        {termsContent}
      </Modal>
    </>
  );
}
