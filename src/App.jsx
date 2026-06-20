import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Interests from "./components/interests";
import Projects from "./components/Projects";
import GitHubRepos from "./components/GitHubRepos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen text-black dark:text-white transition-colors duration-300">

      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Floating orbs */}
        <div className="animate-floatA absolute top-[5%]  left-[8%]   w-[580px] h-[580px] rounded-full bg-blue-300/30   dark:bg-blue-500/20   blur-[100px]" />
        <div className="animate-floatB absolute top-[50%] right-[5%]  w-[500px] h-[500px] rounded-full bg-cyan-300/25   dark:bg-cyan-500/18   blur-[90px]"  />
        <div className="animate-floatC absolute top-[28%] right-[22%] w-[440px] h-[440px] rounded-full bg-indigo-300/20 dark:bg-indigo-500/15  blur-[95px]"  />
        <div className="animate-floatD absolute bottom-[5%] left-[22%] w-[460px] h-[460px] rounded-full bg-sky-300/22   dark:bg-sky-500/15    blur-[85px]"  />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Interests />
      <Projects />
      <GitHubRepos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
