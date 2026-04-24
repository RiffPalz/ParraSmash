import "./App.css";
import Navbar         from "./components/Navbar";
import ScrollToTop    from "./components/ScrollToTop";
import Hero           from "./Pages/Hero";
import About          from "./Pages/About";
import Courts         from "./Pages/Courts";
import Features       from "./Pages/Features";
import BookingProcess from "./Pages/BookingProcess";
import Contact        from "./Pages/Contact";
import Footer         from "./Pages/Footer";

export default function App() {
  return (
    <div className="font-['Inter','Poppins',sans-serif] text-gray-800 bg-white overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Courts />
        <Features />
        <BookingProcess />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
