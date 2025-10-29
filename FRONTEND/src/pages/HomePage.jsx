import { useState } from "react";
import { ArrowRight, ChevronDown, Github } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What is a URL shortener?",
      a: "A URL shortener turns long links into short, shareable ones without changing the destination.",
    },
    {
      q: "Is it free to use?",
      a: "Yes, you can shorten unlimited URLs for free.",
    },
    {
      q: "Do links expire?",
      a: "No, your links remain active permanently unless deleted.",
    },
    {
      q: "Can I track clicks?",
      a: "Yes, analytics show total visits and referrers.",
    },
  ];

  const features = [
    {
      title: "Fast & Secure",
      desc: "Shorten links instantly with secure HTTPS encryption.",
    },
    {
      title: "Custom Links",
      desc: "Personalize your short URLs for brand recognition.",
    },
    {
      title: "Real-time Analytics",
      desc: "Track clicks, countries, and devices instantly.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0b0b16] text-white flex flex-col relative overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 relative">
        <div className="absolute top-10 left-10 animate-pulse opacity-20">
          <div className="w-32 h-32 bg-[#A992FF] rounded-full blur-3xl"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-4 bg-gradient-to-r from-[#A992FF] to-[#8667FF] bg-clip-text text-transparent">
            Turn Long Urls into <span className="italic font-black">Short</span>{" "}
            ✨
          </h1>
          <div className="absolute -top-6 -right-6 text-4xl rotate-12 opacity-80">
            🔗
          </div>
        </motion.div>
        <p className="text-gray-400 max-w-2xl mb-8 text-lg font-light italic">
          "Because ain't nobody got time for long URLs!"
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 py-4 rounded-lg bg-[#A992FF] text-black font-bold overflow-hidden group"
        >
          <span className="relative z-10 flex items-center">
            <Link
              to="/ShortUrlPage"
              className="px-6 py-3 rounded-lg bg-[#A992FF] text-black font-semibold hover:opacity-90"
            >
              <span className="flex items-center gap-2">
                Minify Magic <ArrowRight />
              </span>
            </Link>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </motion.button>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-[#111122] relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-[#1b1b2b] border border-[#2a2a40] rounded-2xl p-8 text-center shadow-lg overflow-hidden group backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-3 text-[#A992FF]">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto md:min-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-[#A992FF] to-[#8667FF] bg-clip-text text-transparent flex items-center justify-center gap-2">
          Got Questions?
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-[#111122] border border-[#2a2a40] rounded-xl p-5 overflow-hidden group hover:border-[#A992FF] transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
                aria-expanded={open === i}
              >
                <span className="font-medium text-lg text-white">{faq.q}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-[#A992FF] ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`mt-4 text-gray-400 text-sm leading-relaxed ${
                  open === i ? "block" : "hidden"
                }`}
              >
                {faq.a}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-[#1b1b2b]">
        <div className="flex items-center justify-center gap-3">
          <span>Made with 💜 by Minify</span>
          <a
            href="https://github.com/user007ash/MINIFY"
            className="hover:text-[#A992FF] transition-colors transform hover:scale-110 duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </main>
  );
}
