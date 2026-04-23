const certifications = [
  {
    name: "ISTQB Certified Tester — Foundation Level",
    issuer: "ISTQB",
    year: "2023",
    icon: "🏅",
  },
  {
    name: "ISTQB Certified Tester — Advanced Level Test Automation Engineer",
    issuer: "ISTQB",
    year: "2024",
    icon: "🏅",
  },
  {
    name: "AI for Everyone",
    issuer: "Coursera / DeepLearning.AI",
    year: "2024",
    icon: "🤖",
  },
  {
    name: "TypeScript Developer Certification",
    issuer: "Udemy",
    year: "2023",
    icon: "💻",
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    school: "Your University",
    year: "20XX",
    icon: "🎓",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Certifications & Education</h2>
        <div className="section-divider" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-[#e2e8f0] mb-5">Certifications</h3>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card p-5 flex items-start gap-4"
                >
                  <span className="text-2xl mt-0.5">{cert.icon}</span>
                  <div>
                    <p className="font-semibold text-[#e2e8f0] text-sm">{cert.name}</p>
                    <p className="text-[#94a3b8] text-xs mt-1">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#e2e8f0] mb-5">Education</h3>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.degree} className="card p-5 flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{edu.icon}</span>
                  <div>
                    <p className="font-semibold text-[#e2e8f0] text-sm">{edu.degree}</p>
                    <p className="text-[#94a3b8] text-xs mt-1">
                      {edu.school} · {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
