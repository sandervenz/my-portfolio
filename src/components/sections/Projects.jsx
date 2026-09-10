import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projectData = [
    {
      title: "HematOto – AI-Powered Personal Finance",
      category: "Fullstack Web & AI",
      period: "2026",
      featured: true,
      description:
        "Web-based personal finance application featuring AI-powered receipt scanning and automated expense tracking.",
      highlights: [
        "Integrated Google Gemini AI to extract structured transaction data from uploaded receipt images.",
        "Built responsive client interface with React, TypeScript, and TailwindCSS.",
        "Engineered RESTful backend using FastAPI and PostgreSQL (Neon) for transactions and users.",
      ],
      tags: [
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "Google Gemini AI",
        "Cloudinary",
        "Railway",
        "Neon",
      ],
      demoLink: "https://hematoto.app",
      githubLink: null,
    },
    {
      title: "AI-Driven Protein Discovery",
      category: "Fullstack AI Web App",
      period: "Jul 2025",
      featured: true,
      description:
        "AI-powered platform for predicting and visualizing 3D protein structures directly from user prompts.",
      highlights: [
        "Integrated Mistral AI LLM and protein inference models (ESMFold, ColabFold).",
        "Engineered real-time 3D interactive molecular visualization interface.",
        "Containerized with Docker and hosted on Hugging Face Spaces for reproducible inference.",
      ],
      tags: [
        "Python",
        "FastAPI",
        "Streamlit",
        "Mistral AI",
        "ESMFold",
        "Docker",
        "Hugging Face",
      ],
      demoLink: "https://huggingface.co/spaces/sandervenz/origin-protein-clone",
      githubLink: null,
    },
    {
      title: "OpenMusic API",
      category: "Backend RESTful API",
      period: "Mar 2025",
      featured: false,
      description:
        "Production-grade backend system for managing songs, albums, and playlists with authentication and caching.",
      highlights: [
        "Architected RESTful endpoints using Hapi.js, PostgreSQL, and Redis caching.",
        "Implemented JWT authentication, playlist collaborations, and message queuing with RabbitMQ.",
        "Integrated AWS S3 object storage for scalable album cover uploads.",
      ],
      tags: [
        "Node.js",
        "Hapi.js",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "AWS S3",
      ],
      demoLink: null,
      githubLink: "https://github.com/sandervenz/openmusic-api",
    },
    {
      title: "Real-Time Chat App",
      category: "Fullstack Web App",
      period: "Jan 2025",
      featured: false,
      description:
        "MERN-based real-time chat application supporting instant messaging, user presence, and media sharing.",
      highlights: [
        "Enabled low-latency bi-directional messaging with Socket.io and Node.js.",
        "Integrated JWT security and Cloudinary cloud media storage for seamless sharing.",
        "Deployed frontend on Vercel and backend microservice on Railway.",
      ],
      tags: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
        "Cloudinary",
      ],
      demoLink: "https://yapper-ten.vercel.app",
      githubLink: "https://github.com/sandervenz/chat-app-mern",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              A curated selection of real-world fullstack, backend, and AI projects
              showcasing architectural design, cloud scaling, and modern engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md">
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-5 text-xs sm:text-sm text-gray-400">
                    {project.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1 text-xs">▹</span>
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/5 border border-white/10 text-gray-300 py-0.5 px-2.5 rounded-md text-xs hover:border-blue-500/30 hover:text-white transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-white text-xs sm:text-sm font-medium border border-blue-500/30 transition-all hover:scale-105"
                    >
                      <span>🚀 Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-medium border border-white/10 transition-all hover:scale-105"
                    >
                      <span>💻 GitHub</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};