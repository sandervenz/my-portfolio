import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  // Data for projects to make it cleaner
  const projectData = [
    {
      title: "Digital FoodScoop",
      description:
        "This application functions as a digital menu for restaurants, allowing users to view various available food and drink options.",
      tags: ["VanillaJS", "ExpressJs", "MongoDB"],
      link: "https://github.com/sandervenz/Projek-PW",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable MERN stack chat app supporting real-time messaging, presence features.",
      tags: ["Socket.IO", "Express", "React", "MongoDB"],
      link: "https://github.com/sandervenz/chat-app-mern",
    },
    {
      title: "AI-Driven Protein Discovery",
      description:
        "An AI-powered web app to predict and visualize 3D protein structures from text prompts, utilizing models like Mistral AI and ESMFold.",
      tags: ["Python", "FastAPI", "Streamlit", "PostgreSQL", "Docker", "Huggingface"],
      link: "https://huggingface.co/spaces/sandervenz/origin-protein-clone",
    },
    {
      title: "OpenMusic API",
      description:
        "A backend service to manage music data like songs and playlists, with features like playlist export, cover uploads, and caching.",
      tags: ["NodeJS", "AWS", "Redis", "PostgreSQL", "RabbitMQ"],
      link: "https://github.com/sandervenz/openmusic-api",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Map through project data to render each project card */}
            {projectData.map((project, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};