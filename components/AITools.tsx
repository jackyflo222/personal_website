const tools = [
  {
    name: "ChatGPT",
    category: "Test Generation",
    description:
      "Generate test cases, edge case scenarios, and test data from requirements or user stories using OpenAI's LLM.",
    icon: "🤖",
  },
  {
    name: "GitHub Copilot",
    category: "AI Pair Programming",
    description:
      "Accelerates test script development with AI code suggestions tailored to the testing context.",
    icon: "🚀",
  },
  {
    name: "Claude",
    category: "AI Assistant",
    description:
      "Used for debugging automation scripts, writing documentation, and exploring test strategies with conversational AI.",
    icon: "💬",
  },
  {
    name: "Claude API",
    category: "AI Integration",
    description:
      "Integrate Claude directly into test pipelines for intelligent test generation, analysis, and reporting.",
    icon: "⚡",
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
