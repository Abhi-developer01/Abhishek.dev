"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Github } from "lucide-react"


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
              A
            </div>
            <span className="text-xl font-semibold">Abhishek Kumar</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://github.com/Abhi-developer01" className="hover:text-gray-300 transition-colors">
              <Github size={20} className="text-white hover:text-gray-300 transition" />
            </a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">
              Project
            </a>
            <a href="https://drive.google.com/file/d/15fgWxQIoBCedYIy72Eev_9vAITL4-B8y/view">
            <Button className="bg-white text-black hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
              Resume
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:text-gray-300 transition-colors">
                Connect
              </a>
              <a href="#projects" className="block px-3 py-2 hover:text-gray-300 transition-colors">
                Case Study
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-white text-black hover:bg-gray-100">Resume</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
