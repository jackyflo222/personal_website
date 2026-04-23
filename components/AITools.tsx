const tools = [
  {
    name: "Applitools Eyes",
    category: "Visual AI Testing",
    description:
      "AI-powered visual validation that detects meaningful UI changes while ignoring irrelevant pixel differences.",
    icon: "👁",
  },
  {
    name: "Testim",
    category: "Self-Healing Tests",
    description:
      "Uses machine learning to automatically adapt tests when UI changes, reducing maintenance overhead.",
    icon: "🔧",
  },
  {
    name: "ChatGPT / GPT-4",
    category: "Test Generation",
    description:
      "Leverage LLMs to generate test cases, edge case scenarios, and test data from requirements or user stories.",
    icon: "🤖",
  },
  {
    name: "Mabl",
    category: "Intelligent Automation",
    description:
      "Cloud-based test automation platform with built-in ML for auto-healing and intelligent test insights.",
    icon: "🧠",
  },
  {
    name: "Diffblue Cover",
    category: "AI Unit Test Writing",
    description:
      "Automatically writes Java unit tests using AI, dramatically increasing code coverage without manual effort.",
    icon: "⚡",
  },
  {
    name: "GitHub Copilot",
    category: "AI Pair Programming",
    description:
      "Accelerates test script development with AI code suggestions tailored to the testing context.",
    icon: "🚀",
  },
];

export default function AITools() {
  return (
    <section id="ai-tools" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">AI Tools I Use</h2>
        <div className="section-divider" />
        <p className="text-[#94a3b8] mb-10 max-w-2xl">
          These are the AI-powered tools and platforms I use to make testing smarter —
          from auto-healing locators to LLM-generated test cases.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="card p-6">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl mt-0.5">{tool.icon}</span>
                <div>
                  <h3 className="font-bold text-[#e2e8f0]">{tool.name}</h3>
                  <span className="text-xs text-[#00d4ff] font-mono">{tool.category}</span>
                </div>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
