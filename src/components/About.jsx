function About() {
  const education = [
    {
      label: "Primary School",
      color: "cyan",
      institution: "Terrence N De Silva M.V, Kolonnawa",
      period: "2004 – 2015",
      description:
        "Completed primary and middle school education, building strong academic foundations in core subjects while developing leadership, teamwork, and problem-solving skills through extracurricular activities.",
    },
    {
      label: "Secondary School",
      color: "cyan",
      institution: "D.S. Senanayaka College, Colombo 07",
      period: "2016 – 2018",
      description:
        "Completed secondary education at one of Sri Lanka's premier national schools, strengthening analytical thinking and academic discipline through focused study of Science, and ICT.",
    },
    {
      label: "Diploma",
      color: "purple",
      institution: "Esoft Metro Campus",
      period: "Diploma in Information Technology",
      description:
        "Completed a Diploma in Information Technology, covering core programming concepts, database management, web development fundamentals, and networking — forming a solid technical foundation for a career in software development.",
    },
    {
      label: "Language Certificate",
      color: "purple",
      institution: "BritishWay English Academy",
      period: "Diploma in English Language Proficiency",
      description:
        "Completed an English Language Proficiency diploma, enhancing professional communication, business English, and written skills essential for collaborating in international technology environments.",
    },
    {
      label: "University",
      color: "blue",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "BSc (Hons) Information Technology · 2023 – Present",
      description:
        "Currently pursuing a BSc (Hons) in Information Technology, specializing in Software Engineering. Focused on Full-Stack Development, System Design, Web Technologies, and building industry-standard applications through academic and personal projects.",
    },
  ];

  const colors = {
    cyan: {
      dot: "bg-cyan-400",
      label: "text-cyan-600 dark:text-cyan-400",
      border: "hover:border-cyan-200 dark:hover:border-cyan-700/50",
    },
    purple: {
      dot: "bg-purple-400",
      label: "text-purple-600 dark:text-purple-400",
      border: "hover:border-purple-200 dark:hover:border-purple-700/50",
    },
    blue: {
      dot: "bg-blue-500",
      label: "text-blue-600 dark:text-blue-400",
      border: "hover:border-blue-200 dark:hover:border-blue-700/50",
    },
  };

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-3">Education</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-16 rounded-full" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-500 rounded-full" />

        <div className="space-y-6">
          {education.map((item, index) => {
            const c = colors[item.color];
            return (
              <div key={index} className="ml-14 relative">
                <div
                  className={`absolute -left-[50px] top-5 w-4 h-4 ${c.dot} rounded-full ring-4 ring-white dark:ring-gray-900 shadow`}
                />
                <div
                  className={`bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 ${c.border} transition-all duration-300`}
                >
                  <span className={`text-sm font-bold uppercase tracking-widest ${c.label}`}>
                    {item.label}
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-1 text-gray-900 dark:text-white">
                    {item.institution}
                  </h4>
                  <p className="text-xl text-gray-500 dark:text-gray-400 mb-3 font-medium">
                    {item.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-9 text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
