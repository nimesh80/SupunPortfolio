function Skills() {
  const techStack = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["Java", "JavaScript", "TypeScript", "Kotlin", "SQL", "Python", "C++"],
      tagClass:
        "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50 hover:bg-blue-500 hover:text-white hover:border-blue-500",
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "HTML5", "CSS3", "Tailwind CSS"],
      tagClass:
        "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50 hover:bg-cyan-500 hover:text-white hover:border-cyan-500",
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Spring Boot", "Node.js", "Express.js", "REST APIs"],
      tagClass:
        "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700/50 hover:bg-green-500 hover:text-white hover:border-green-500",
    },
    {
      category: "Mobile",
      icon: "📱",
      skills: ["Android Studio", "Android SDK", "Kotlin"],
      tagClass:
        "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700/50 hover:bg-orange-500 hover:text-white hover:border-orange-500",
    },
    {
      category: "Database",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB"],
      tagClass:
        "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/50 hover:bg-purple-500 hover:text-white hover:border-purple-500",
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Postman", "Docker"],
      tagClass:
        "bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600/50 hover:bg-gray-600 hover:text-white hover:border-gray-600",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50/60 dark:bg-gray-800/20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-3">Tech Stack</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map(({ category, icon, skills, tagClass }) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800/60 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full border text-base font-semibold cursor-default transition-all duration-200 ${tagClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
