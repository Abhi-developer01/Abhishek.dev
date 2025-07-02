export default function Experience() {
  const experiences = [
    {
      title: " Frontend Developer",
      company: "Cognavi India.",
      duration: "2022 - Present",
      description:
        "Led frontend development for multiple client projects using React, TypeScript, and modern web technologies.",
    },
    {
      title: "Junior Developer",
      company: "Career Guide.",
      duration: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create pixel-perfect UIs.",
    },
    {
      title: "UI/UX Designer",
      company: "One 24",
      duration: "2019 - 2020",
      description: "Built interactive web components and gained experience in modern JavaScript frameworks.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-800">
              <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-2 top-0"></div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-indigo-400 font-medium">{exp.duration}</span>
                </div>
                <h4 className="text-lg text-gray-300 mb-3">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
