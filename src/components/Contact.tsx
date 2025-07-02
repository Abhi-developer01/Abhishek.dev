import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-2 text-white">
  <Mail className="w-6 h-6 mr-4 mt-2 text-indigo-500" />
  Let's Connect
</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          {"Have a project in mind? Let's discuss how we can work together."}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail size={20} />
              <span>theabhishek96@gmail.com</span>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/Abhi-developer01"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-643782110/"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500 resize-none"
                  />
                </div>
                <a
                  href="mailto:theabhishek96@gmail.com"
                  className="block w-full"
                >
                  <div className="w-full text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 px-4 py-3 text-white rounded-md text-sm font-medium">
                    Send Message
                  </div>
                </a>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
