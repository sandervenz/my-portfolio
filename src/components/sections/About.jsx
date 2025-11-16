import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // Combined and updated list of skills
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "PHP",
    "AWS",
    "GCP",
    "Python",
    "FastAPI",
    "Docker",
    "Figma",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Git",
    "n8n",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Skills Section */}
          <div className="rounded-xl p-8 border-white/10 border mb-8 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="rounded-xl p-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education & Bootcamp</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Informatics</strong> - Gunadarma University
                </li>
                <li>
                  IDCamp x Dicoding - Intermediate Backend Javascript and AWS Course (2025)
                </li>
                <li>
                  Sanbercode - Intense Backend NodeJS ExpressJs Bootcamp (2024)
                </li>
                <li>
                  Sanbercode - Intense Frontend ReactJS Bootcamp (2025)
                </li>
              </ul>
              <a 
                href="https://www.linkedin.com/in/sander-vdb/details/certifications/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-blue-400 transition mt-3 inline-block"
              >
                and more certificates...
              </a>
            </div>

            {/* Work Experience Section */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    <li>Module Assistant at Integrated Laboratory (iLab){" "}
                      <span className="text-sm text-gray-400 font-normal">
                        - Contract
                      </span>
                    </li>  
                  </h4>
                  <p className="text-sm text-gray-400">Gunadarma University · Jul 2025 - Present</p>
                  <p className="text-sm text-gray-400">
                    Quality assurance and revision of practicum modules, content review and testing.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <li>Software Engineer{" "}
                      <span className="text-sm text-gray-400 font-normal">
                        - Part-time
                      </span>
                    </li>  
                  </h4>
                  <p className="text-sm text-gray-400">UNIVERSA AI · Aug 2025 - Oct 2025</p>
                  <p className="text-sm text-gray-400">
                    Building backend services and automation tools.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    <li>Fullstack AI Developer{" "}
                      <span className="text-sm text-gray-400 font-normal">
                        - Intern
                      </span>
                    </li>  
                  </h4>
                  <p className="text-sm text-gray-400">UNIVERSA AI · Apr 2025 - Jul 2025</p>
                  <p className="text-sm text-gray-400">
                    Creating an AI-driven protein discovery web app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
