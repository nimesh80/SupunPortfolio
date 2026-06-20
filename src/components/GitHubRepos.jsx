import { useEffect, useState } from "react";

const LANG_COLORS = {
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-500",
  Java: "bg-orange-500",
  Kotlin: "bg-purple-500",
  Python: "bg-green-500",
  CSS: "bg-pink-500",
  HTML: "bg-red-500",
};

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const featuredProjects = ["Mood-Journal", "SupunPortfolio", "WellnessApp"];

    fetch("https://api.github.com/users/Nimesh80/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((r) => !r.fork)
          .filter((r) => !featuredProjects.includes(r.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-3">More on GitHub</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4 rounded-full" />
      <p className="text-center text-gray-500 dark:text-gray-400 text-xl mb-16">
        Other open-source repositories from my GitHub profile
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 animate-pulse"
              >
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-2 w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded mb-6 w-2/3" />
                <div className="h-7 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
              </div>
            ))
          : repos.map((repo) => (
              <div
                key={repo.id}
                className="group bg-white dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-700/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate pr-2">
                    {repo.name}
                  </h3>
                  {repo.stargazers_count > 0 && (
                    <span className="text-xs text-gray-400 flex items-center gap-1 flex-shrink-0">
                      ⭐ {repo.stargazers_count}
                    </span>
                  )}
                </div>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-5 flex-1 leading-9">
                  {repo.description || "No description provided"}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  {repo.language ? (
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${LANG_COLORS[repo.language] ?? "bg-gray-400"}`}
                      />
                      <span className="text-base text-gray-500 dark:text-gray-400">
                        {repo.language}
                      </span>
                    </div>
                  ) : (
                    <span />
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}

export default GitHubRepos;
