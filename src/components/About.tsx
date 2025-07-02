import { Badge } from "@/components/ui/badge"

export default function About() {
  const techStack = ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "Node.js", "Figma", "Git"]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {"I'm a passionate frontend developer with over 4 years of experience creating beautiful, functional, and user-friendly web applications. I specialize in React, TypeScript, and modern CSS frameworks."}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {"My approach combines clean code practices with pixel-perfect design implementation, ensuring every project delivers exceptional user experiences across all devices and platforms."}
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                AK
              </div>
              <div>
                <h3 className="text-xl font-semibold">Abhishek Kumar</h3>
                <p className="text-gray-400">Frontend Developer</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700 p-3 text-center justify-center transition-colors duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
