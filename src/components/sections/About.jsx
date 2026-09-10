import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP"],
      color: "from-blue-500/20 to-cyan-500/20 text-cyan-300 border-cyan-500/30",
    },
    {
      category: "Frameworks & Backend",
      skills: ["FastAPI", "Express.js", "Hapi.js", "React", "Streamlit", "Node.js"],
      color: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    },
    {
      category: "Databases & Caching",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      category: "Cloud & Deployment",
      skills: ["AWS", "GCP", "Docker", "Railway", "Vercel", "Netlify"],
      color: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
    },
    {
      category: "Tools & Ecosystem",
      skills: ["Git", "GitHub", "GitLab", "Hugging Face", "RabbitMQ", "Socket.io", "Figma", "draw.io"],
      color: "from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-500/30",
    },
  ];

  const experiences = [
    {
      role: "Module Assistant",
      company: "Integrated Laboratory (iLab), Gunadarma University",
      type: "Contract",
      period: "Jul 2025 – Aug 2026",
      location: "Depok, West Java",
      bullets: [
        "Reviewed and managed practicum modules to ensure quality and consistency in academic materials.",
        "Assisted students with technical questions and guided them through practical exercises.",
        "Prepared and maintained official reports and documentation for academic and administrative use.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Universa AI",
      type: "Part-time",
      period: "Aug 2025 – Oct 2025",
      location: "Remote",
      bullets: [
        "Developed backend automation systems and integrated AI agents using Python.",
        "Engineered asynchronous workflows and service orchestration pipelines for autonomous AI operations.",
        "Optimized API performance and internal tooling to improve system reliability and automation speed.",
      ],
    },
    {
      role: "Fullstack AI Developer",
      company: "Universa AI",
      type: "Internship",
      period: "May 2025 – Jul 2025",
      location: "Remote",
      bullets: [
        "Built an AI-powered web application for protein structure prediction using Python and Javascript.",
        "Integrated AI LLMs for protein modeling and deployed inference pipelines with Docker.",
        "Deployed and hosted the full system on Hugging Face Spaces for reproducible performance.",
      ],
    },
  ];

  const education = [
    {
      school: "Gunadarma University",
      degree: "Bachelor's Degree in Informatics",
      period: "2022 – 2026",
      location: "Depok, West Java",
      details: "Focusing on Software Engineering, Backend Architecture, and Intelligent Systems.",
    },
    {
      school: "SMA Cakra Buana",
      degree: "Science Major (MIPA)",
      period: "2019 – 2022",
      location: "Depok, West Java",
      details: "High school education with strong foundations in natural sciences and mathematics.",
    },
  ];

  const certifications = [
    {
      name: "Intermediate Backend JavaScript and AWS Course",
      issuer: "IDCamp x Dicoding",
      year: "2025",
    },
    {
      name: "Intense Backend NodeJS ExpressJS Bootcamp",
      issuer: "Sanbercode",
      year: "2024",
    },
    {
      name: "Intense Frontend ReactJS Bootcamp",
      issuer: "Sanbercode",
      year: "2025",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              A passionate Software Engineer with a strong focus on architecting and
              implementing scalable backend systems, cloud computing, and real-world AI applications.
            </p>
          </div>

          {/* Skills Section categorized */}
          <div className="mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🛠️</span> Technical Skills & Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillCategories.map((group, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-md border bg-gradient-to-r ${group.color} transition-all duration-200 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-14">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span>💼</span> Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white flex flex-wrap items-center gap-2">
                        {exp.role}
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 font-normal">
                          {exp.type}
                        </span>
                        {exp.location === "Remote" && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-normal">
                            Remote
                          </span>
                        )}
                      </h4>
                      <p className="text-blue-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-md self-start sm:self-center">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4 text-sm text-gray-300">
                    {exp.bullets.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1 text-xs">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Formal Education */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="space-y-5">
                {education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-blue-500/40 pl-4 space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-white text-base">{edu.school}</h4>
                      <span className="text-xs font-mono text-gray-400">{edu.period}</span>
                    </div>
                    <p className="text-sm text-blue-400 font-medium">{edu.degree}</p>
                    <p className="text-xs text-gray-400">{edu.location}</p>
                    <p className="text-xs text-gray-400 mt-1">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Bootcamps */}
            <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <span>📜</span> Certifications & Bootcamps
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="border-l-2 border-cyan-500/40 pl-4">
                      <h4 className="font-medium text-white text-sm">{cert.name}</h4>
                      <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                        <span>{cert.issuer}</span>
                        <span className="font-mono">{cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/sander-vdb/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 font-medium"
                >
                  View all verified credentials on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

