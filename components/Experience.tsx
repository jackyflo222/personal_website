const experiences = [
  {
    title: "Test Automation Engineer — Data Intelligence",
    company: "Shift4",
    type: "Full-time · Remote",
    location: "Las Vegas, Nevada",
    period: "Sep 2023 – Present",
    current: true,
  },
  {
    title: "Quality Assurance Automation Engineer",
    company: "SpotOn",
    type: "Full-time · Remote",
    location: "Los Angeles Metropolitan Area",
    period: "Apr 2023 – Dec 2023",
    current: false,
  },
  {
    title: "Jr QA Automation Engineer",
    company: "SpotOn",
    type: "Full-time",
    location: "",
    period: "Sep 2021 – May 2023",
    current: false,
  },
  {
    title: "Junior QA Engineer",
    company: "Appetize (now SpotOn)",
    type: "Full-time",
    location: "",
    period: "Oct 2020 – Sep 2021",
    current: false,
  },
  {
    title: "Quality Assurance Analyst",
    company: "Appetize (now SpotOn)",
    type: "Full-time",
    location: "Los Angeles Metropolitan Area",
    period: "Nov 2019 – Oct 2020",
    current: false,
  },
  {
    title: "Media and Outreach Intern",
    company: "Wedu Global",
    type: "Internship",
    location: "Bangkok Metropolitan Area",
    period: "Sep 2017 – Dec 2017",
    current: false,
  },
];

const volunteering = [
  {
    title: "Web Manager",
    org: "Recircle Society",
    period: "Jan 2025 – Mar 2026",
    description:
      "Created and managed the organization's website with Wix Studio, ensuring it remained reliable, visually consistent, and easy for members to navigate.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        <div className="section-divider" />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1e3a5f]" />

          <div className="flex flex-col gap-8 pl-8">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="relative">
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-[#00d4ff] bg-[#0a0f1e]" />
                <div className="card p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <p className="font-semibold text-[#e2e8f0]">{exp.title}</p>
                      <p className="text-[#00d4ff] text-sm mt-0.5">{exp.company}</p>
                      <p className="text-[#94a3b8] text-xs mt-1">
                        {exp.type}
                        {exp.location ? ` · ${exp.location}` : ""}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          exp.current
                            ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "text-[#94a3b8]"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-[#e2e8f0] mt-14 mb-5">Volunteering</h3>
        <div className="flex flex-col gap-4">
          {volunteering.map((v) => (
            <div key={v.org} className="card p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-semibold text-[#e2e8f0]">{v.title}</p>
                  <p className="text-[#00d4ff] text-sm mt-0.5">{v.org}</p>
                  <p className="text-[#94a3b8] text-xs mt-2 max-w-xl">{v.description}</p>
                </div>
                <span className="text-xs text-[#94a3b8] shrink-0">{v.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
