import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Sander
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            I'm a software developer (backend-preferred!) who loves building
            smart, scalable systems. I enjoy turning complex challenges into
            clean code, especially when I get to sprinkle in some AI and cloud
            magic.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Tombol yang diperbaiki */}
            <a
              href={`${baseUrl}/CV_Sander.pdf`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View My CV
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
