const caseStudies = [
  {
    title: "Reducing Flaky Tests by 80% with Self-Healing Locators",
    problem:
      "A legacy e-commerce platform had over 300 flaky end-to-end tests causing CI pipelines to fail weekly, eroding team trust in automation.",
    approach:
      "Introduced self-healing locator strategies in WebdriverIO combined with Testim's ML engine to automatically adapt selectors when the DOM changed. Also added retry logic with intelligent wait strategies.",
    outcome: "Flaky test rate dropped from 35% to under 7%. CI pipeline reliability improved significantly, and developer confidence in the test suite was restored.",
    tags: ["WebdriverIO", "Testim", "TypeScript", "CI/CD"],
    metrics: [
      { label: "Flaky Rate", before: "35%", after: "7%" },
      { label: "Pipeline Failures", before: "Weekly", after: "Rare" },
    ],
  },
  {
    title: "AI-Generated Test Cases for a Payment Microservice",
    problem:
      "A newly built payment microservice had minimal test coverage. Writing comprehensive tests manually would take weeks across hundreds of API endpoints.",
    approach:
      "Used GPT-4 to analyse the OpenAPI spec and generate test scenarios covering happy paths, edge cases, and negative tests. Tests were reviewed, refined, and integrated into the CI pipeline.",
    outcome: "Achieved 85% API test coverage in 3 days instead of the estimated 3 weeks. Caught 12 edge-case bugs before the service went live.",
    tags: ["GPT-4", "API Testing", "OpenAPI", "TypeScript"],
    metrics: [
      { label: "Coverage", before: "12%", after: "85%" },
      { label: "Time to Coverage", before: "3 weeks", after: "3 days" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-[#0d1b2a]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Case Studies</h2>
        <div className="section-divider" />

        <div className="flex flex-col gap-10">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="card p-8">
              <h3 className="font-bold text-xl text-[#e2e8f0] mb-6">{cs.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-xs text-[#00d4ff] font-mono uppercase tracking-widest mb-2">
                    Problem
                  </p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs text-[#00d4ff] font-mono uppercase tracking-widest mb-2">
                    Approach
                  </p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{cs.approach}</p>
                </div>
                <div>
                  <p className="text-xs text-[#00d4ff] font-mono uppercase tracking-widest mb-2">
                    Outcome
                  </p>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{cs.outcome}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-4 mb-5">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#0a0f1e] border border-[#1e3a5f] rounded-lg px-4 py-3 text-center min-w-[120px]"
                  >
                    <p className="text-xs text-[#94a3b8] mb-1">{m.label}</p>
                    <p className="text-sm">
                      <span className="text-red-400 line-through mr-2">{m.before}</span>
                      <span className="text-[#10b981] font-bold">{m.after}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
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
