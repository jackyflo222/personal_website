const projects = [
  {
    title: "E2E Automation Framework",
    description:
      "Built a scalable end-to-end test suite using WebdriverIO and TypeScript with Page Object Model pattern, reducing regression testing time by 60%.",
    tags: ["WebdriverIO", "TypeScript", "GitHub Actions", "Page Object Model"],
    github: "https://github.com/your-username/e2e-framework",
    demo: "",
  },
  {
    title: "AI-Powered Test Generator",
    description:
      "Integrated an LLM to auto-generate test cases from user stories, cutting test writing time by 40% and improving coverage of edge cases.",
    tags: ["Python", "OpenAI API", "WebdriverIO", "TypeScript"],
    github: "https://github.com/your-username/ai-test-gen",
    demo: "",
  },
  {
    title: "Visual Regression Suite",
    description:
      "Implemented visual AI testing with Applitools Eyes across a multi-brand design system, catching pixel-level UI regressions across 5 browsers.",
    tags: ["Applitools", "WebdriverIO", "TypeScript", "CI/CD"],
    github: "https://github.com/your-username/visual-regression",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d1b2a]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#e2e8f0] mb-2">{project.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
