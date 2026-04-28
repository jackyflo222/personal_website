const caseStudies = [
  {
    title: "Cutting a 2-Week Regression Cycle Down to 2 Hours",
    problem:
      "At SpotOn, manual regression testing consumed two full weeks before every release, creating a bottleneck that slowed deployment velocity and stretched the QA team thin.",
    approach:
      "Automated 500+ test cases using Python and Selenium, collaborating directly with development teams to improve testability and reduce defect leakage at the source. Led weekly company-wide automation meetings to align teams on standards and drive consistent adoption.",
    outcome:
      "Regression time dropped from 2 weeks to 2 hours, freeing the team to focus on exploratory and edge-case testing. Junior engineers were mentored into automation, and detailed onboarding guides ensured knowledge didn't stay siloed.",
    tags: ["Python", "Selenium", "Bitbucket", "QA Leadership"],
    metrics: [
      { label: "Regression Time", before: "2 weeks", after: "2 hours" },
      { label: "Automated Cases", before: "0", after: "500+" },
    ],
  },
  {
    title: "Halving a 2-Week Regression Cycle with a Lean Automation Team",
    problem:
      "At Shift4, regression coverage depended heavily on manual effort, a 2-week cycle run by a single manual tester. With limited headcount and no clear automation ownership, releases were slow and the team had little runway for anything beyond keeping up.",
    approach:
      "Led a team of two automation engineers, taking ownership of the full automation strategy end to end creating all tickets and epics, setting priorities, and driving execution. Focused automation efforts on the highest-volume, most time-consuming regression areas to maximise impact with a small team.",
    outcome:
      "Regression time was cut by 50%, from 2 weeks down to 1, with only one manual tester remaining in the loop. The team delivered this with just three engineers total, establishing a scalable automation foundation for future releases.",
    tags: ["QA Leadership", "Automation Strategy", "Agile", "Eggplant Functional", "TypeScript"],
    metrics: [
      { label: "Regression Time", before: "2 weeks", after: "1 week" },
      { label: "Reduction", before: "—", after: "50%" },
    ],
  },
  {
    title: "Setting Up a Hardware-Backed Automation Lab Across Two Release Teams",
    problem:
      "End-to-end automation required real hardware devices, but there was no centralised lab or consistent process. Two separate release teams had diverging testing strategies, causing gaps in coverage and unstable automation runs.",
    approach:
      "Built and maintained web and API automation using Eggplant Functional and TypeScript. Took ownership of the automation lab in the Las Vegas office managing remote hardware, tooling, and device inventory. Optimised data setups, environment configurations, and test stability to reduce noise in results.",
    outcome:
      "Established a shared automation infrastructure that served two release teams under a unified testing strategy. Manual QA engineers were mentored through the transition to automation, growing the team's overall capability.",
    tags: ["Eggplant Functional", "TypeScript", "Hardware Automation", "Lab Ops"],
    metrics: [
      { label: "Release Teams Served", before: "0 unified", after: "2 teams" },
      { label: "QA Scope", before: "Manual", after: "Automated + Lab" },
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
