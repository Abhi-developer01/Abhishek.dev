"use client"

import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
