const skillGroups = [
  {
    category: "Test Automation",
    icon: "⚙️",
    skills: ["Selenium WebDriver", "WebDriverIO", "Appium", "Eggplant"],
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS"],
  },
  {
    category: "AI-Assisted Testing",
    icon: "🤖",
    skills: [
      "AI Test Generation",
      "Prompt Engineering",
      "Edge Case Discovery",
      "AI Code Generation",
      "Automated Debugging",
    ],
  },
  {
    category: "CI/CD & DevOps",
    icon: "🔁",
    skills: ["GitLab CI/CD", "Jenkins", "Git", "Bitbucket", "Linux"],
  },
  {
    category: "API & Debugging",
    icon: "🔌",
    skills: ["Postman", "Chrome DevTools", "Charles Proxy", "API Inspection"],
  },
  {
    category: "Tools & Platforms",
    icon: "🛠",
    skills: ["Jira", "Confluence", "TestRail", "Android Studio", "PyCharm"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-[#e2e8f0]">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">
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
