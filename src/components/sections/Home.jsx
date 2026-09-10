import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>Based in Depok, Indonesia • Open to Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent leading-tight">
            Hi, I&apos;m Sander
          </h1>

          <p className="text-lg sm:text-xl font-medium text-blue-400/90 mb-4">
            Software Engineer &bull; Informatics Graduate
          </p>

          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
            Specializing in architecting and implementing scalable backend systems using
            <span className="text-white font-medium"> JavaScript/TypeScript</span> and
            <span className="text-white font-medium"> Python</span>. Experienced in RESTful APIs,
            cloud computing with <span className="text-cyan-400 font-medium">AWS & GCP</span>, and
            building real-world <span className="text-blue-400 font-medium">AI integrations & agents</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8 text-xs sm:text-sm text-gray-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">⚡ Backend Architecture</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">☁️ Cloud (AWS & GCP)</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🤖 AI Agents & Workflows</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🚀 RESTful APIs & Microservices</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${baseUrl}/CV_Sander.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              <span>📄 View My CV</span>
            </a>

            <a
              href="#projects"
              className="border border-white/20 hover:border-blue-400 text-gray-200 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/5"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/40 text-blue-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:border-blue-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
