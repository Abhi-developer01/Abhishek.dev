import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink,LayoutGrid } from "lucide-react"
import Image from "next/image"


export default function Projects() {
  const projects = [
    {
      title: "Delicious Eats",
      description: "Smart restaurant dashboard with order management and delivery flow",
      image: "/images/1.png",
      tags: ["Next.js", "TypeScript", "Stripe","supabase"],
      link: "https://delicious-eats-lime.vercel.app/",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/images/2.png",
      tags: ["Next.js", "Socket.io", "MongoDB"],
      link: "https://museboard-rosy.vercel.app/",
    },
    {
      title: "Harmony",
      description: "Beautiful interface for searching and discovering your favorite tracks",
      image: "/images/3.png",
      tags: ["React", "API", "Tailwind"],
      link: "https://abhi-portfolio-alpha.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2 text-white">
  <LayoutGrid className="w-6 h-6  mr-4 mt-1 text-indigo-500" />
  Projects
</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
  key={index}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
            <Card
              key={index}
              className="bg-gray-900 sm:h-96 h-80 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-[410px] h-36 lg:w-full lg:h-60 object-cover transition-transform duration-300 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <ExternalLink className="text-white" size={20} />
                  </div>
                </div>
                <div className="p-6  space-y-4">
                  <h3 className="text-xl font-semibold  text-white group-hover:text-indigo-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-gray-700 text-gray-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
