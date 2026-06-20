import cocoChain from "../assets/cocoChain/cocoChain.jpg";
import cleanWater from "../assets/clean_water_project/cleanWater.jpg";
import portfolio from "../assets/portfolio/portfolio.jpg";
import wellnessApp from "../assets/wellness_app/wellness.jpeg";
import healthcare from "../assets/smartHealthCare/smarthealthcare.jpg";

function Projects() {
  const projects = [
    {
      title: "CocoChain",
      description:
        "A Coconut Supply Chain Management System connecting farmers and buyers through a modern e-commerce platform with real-time inventory tracking and order management.",
      tech: ["React", "Express.js", "MongoDB", "Node.js"],
      image: cocoChain,
      github: "https://github.com/dulX404/CocoChain",
      featured: true,
    },
    {
      title: "Clean Water & Sanitation (CWAS)",
      description:
        "A public washroom management platform enabling citizens to report complaints and track maintenance issues in real time — improving sanitation standards to support safer, healthier public spaces.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      image: cleanWater,
      github: "https://github.com/nimesh80/Clean-Water-And-Sanitation",
      live: "https://clean-water-and-sanitation-zeta.vercel.app/",
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS, showcasing projects, skills, and professional experience with full dark mode support.",
      tech: ["React", "Tailwind CSS", "Vite", "EmailJS"],
      image: portfolio,
      github: "https://github.com/nimesh80/SupunPortfolio",
      live: "https://supun-portfolio-cyan.vercel.app/",
      featured: true,
    },
    {
      title: "Wellness App",
      description:
        "An Android mobile application for tracking personal health metrics, mood journaling, and providing guided wellness resources and daily health insights.",
      tech: ["Kotlin", "Android SDK", "Room Database", "Figma"],
      image: wellnessApp,
      github: "https://github.com/nimesh80/WellnessApp",
      featured: true,
    },
    {
      title: "Smart Healthcare Platform",
      description:
        "A microservices-based healthcare platform with separate admin and patient frontends. Features patient management, doctor scheduling, telemedicine, and AI-powered symptom analysis.",
      tech: ["Spring Boot", "React", "MySQL", "Docker", "Microservices"],
      image: healthcare,
      github: "https://github.com/VishwaNadeen/Smart-Healthcare-Platform",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50/60 dark:bg-gray-800/20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">Projects</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-8 overflow-hidden max-h-24 group-hover:max-h-96 transition-[max-height] duration-500 ease-in-out">
                  {project.description}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center px-3 py-2 rounded-xl bg-gray-900 dark:bg-gray-700 text-white text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center px-3 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="flex-1 text-center px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 text-sm font-medium cursor-not-allowed">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
