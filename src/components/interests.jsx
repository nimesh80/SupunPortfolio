function Interests() {
  const interests = [
    {
      icon: "🌐",
      title: "Full-Stack Web Development",
      description:
        "Passionate about building scalable, production-ready web applications using React, Spring Boot, and modern software engineering practices. I love the end-to-end process — from database design to pixel-perfect UIs.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Interested in Android development using Kotlin, crafting intuitive mobile experiences that are practical, performant, and genuinely user-friendly.",
    },
    {
      icon: "🏗️",
      title: "Software Architecture",
      description:
        "Enjoy exploring system design, distributed systems, microservices, and clean architecture — patterns that solve complex, real-world engineering problems at scale.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Passionate about creating interfaces that are intuitive, accessible, and visually appealing. I care deeply about usability and crafting experiences that users genuinely enjoy.",
    },
  ];

  return (
    <section id="interests" className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-3">Interests</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-16 rounded-full" />

      <div className="grid md:grid-cols-2 gap-6">
        {interests.map(({ icon, title, description }) => (
          <div
            key={title}
            className="group bg-white dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-300"
          >
            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
              {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-9 text-xl">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Interests;
