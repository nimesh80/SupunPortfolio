import profileImage from "../assets/Profile.webp";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">

<div className="relative z-10 max-w-6xl mx-auto w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Profile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-40 scale-110" />
              <img
                src={profileImage}
                alt="Supun Nimesha"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top shadow-2xl border-4 border-white dark:border-gray-900"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-700/50 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Supun Nimesha
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-8">
              Software Engineering Undergraduate
            </h2>

            <div className="flex flex-nowrap gap-2 justify-center md:justify-start">
              <a
                href="/cv/Supun-Nimesha-CV.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Download CV
              </a>

              <a
                href="/cv/Supun-Nimesha-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                View CV
              </a>

              <a
                href="https://github.com/Nimesh80"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2.5 rounded-xl font-semibold text-sm hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/supun-nimesha-7071103a7/"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2.5 rounded-xl font-semibold text-sm hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — About Me */}
          <div>
            <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-8 rounded-full" />
            <p className="text-xl leading-9 text-gray-600 dark:text-gray-300">
              I'm{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Supun Nimesha
              </span>
              , a BSc Information Technology undergraduate at SLIIT specializing in
              Software Engineering. I enjoy building real-world software solutions
              and am currently focused on deepening my expertise in full-stack
              development and system design through academic and personal projects.
              Looking ahead, I aspire to contribute to impactful products, grow as a
              software engineer in a collaborative team environment, and eventually
              work on large-scale systems that make a difference. Beyond tech, I
              enjoy engaging with my community, participating in group activities,
              and continuously learning from the people around me.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
