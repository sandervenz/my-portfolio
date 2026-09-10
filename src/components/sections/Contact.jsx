import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitting(false);
        setStatusMessage({ type: "success", text: "Thank you! Your message has been sent successfully." });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setIsSubmitting(false);
        setStatusMessage({ type: "error", text: "Oops! Something went wrong. Please try emailing me directly." });
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-base">
              Feel free to reach out for software engineering opportunities, collaborations,
              or just to talk about backend systems and AI!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Contact Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Direct Contact Information</h3>
                
                <a
                  href="mailto:sandervdb23@gmail.com"
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition group"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">EMAIL</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition">
                      sandervdb23@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/6281289874640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition group"
                >
                  <span className="text-2xl">📱</span>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">PHONE / WHATSAPP</span>
                    <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition">
                      +62 812 8987 4640
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-2xl">📍</span>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">LOCATION</span>
                    <span className="text-sm font-medium text-gray-200">
                      Depok, West Java, Indonesia
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-gray-400 block font-mono mb-2 uppercase">Connect</span>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/sandervenz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 text-center text-xs font-medium rounded-lg border border-white/10 hover:border-blue-500/40 hover:bg-white/5 text-gray-300 hover:text-white transition"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sander-vdb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 text-center text-xs font-medium rounded-lg border border-white/10 hover:border-blue-500/40 hover:bg-white/5 text-gray-300 hover:text-white transition"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Message Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-4">Send a Direct Message</h3>

                {statusMessage && (
                  <div
                    className={`mb-4 p-3 rounded-lg text-sm ${
                      statusMessage.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                        : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                    }`}
                  >
                    {statusMessage.text}
                  </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-400 mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                      placeholder="e.g. Alex Smith"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-400 mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                      placeholder="alex@company.com"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-gray-400 mb-1">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 placeholder-gray-500"
                      placeholder="Hi Sander, let's discuss an engineering project..."
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white py-3 px-6 rounded-lg font-medium transition duration-200 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <span>✉️ Send Message</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

