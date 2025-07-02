"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Code, Palette, Zap, Coffee } from "lucide-react"

export default function Hero() {
  const [animatedText, setAnimatedText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const fullText = "Passionate about creating exceptional user experiences with modern web technologies"
  
  const roles = [
    "Frontend Developer building sleek, performant UIs",
    "React Specialist crafting modern web experiences",
    "UI/UX Engineer creating pixel-perfect designs",
    "Full-Stack Developer with frontend expertise"
  ]

  // Typewriter effect for main description
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setAnimatedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  // Role text animation with looping
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-violet-500/15 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl" style={{transform: 'translate(-50%, -50%)', animation: 'float 8s ease-in-out infinite'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-purple-500/3 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Developer Image with Floating Elements */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Developer Avatar */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <img
  src="/images/4.png" // ← Replace this with your image path
  alt="Developer Avatar"
  className="w-full h-full object-cover rounded-full"
/>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                <Zap size={24} className="text-white" />
              </div>
              
              <div className="absolute top-1/2 -left-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
                <Palette size={20} className="text-white" />
              </div>
              
              <div className="absolute -bottom-2 left-1/4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
                <Coffee size={18} className="text-white" />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              {/* Greeting with subtle animation */}
              {/* <div className="animate-fade-in-up">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-4">
                  👋 Welcome to my portfolio
                </span>
              </div> */}
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Abhishek Kumar
                </span>
              </h1>
              
              {/* Animated Role Text */}
              <div className="h-16 flex items-center justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <p className="text-xl sm:text-2xl lg:text-2xl font-semibold text-gray-300 ">
                  <span className="inline-block animate-fade-in-out" key={roleIndex}>
                    {roles[roleIndex]}
                  </span>
                </p>
              </div>
              
              {/* Typewriter Description */}
              <div className="text-lg text-gray-400 max-w-2xl min-h-[3rem] flex items-center justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <span className="typewriter">
                  {animatedText}
                  <span className="animate-ping inline-block w-0.5 h-6 bg-indigo-400 ml-1"></span>
                </span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <a href="#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                  
                >
                  View My Work
                </Button>
                </a>
                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-indigo-500/50 text-indigo-300 hover:bg-indigo-500/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  Download CV
                </Button> */}
              </div>
              
              {/* Stats or Quick Info */}
              <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-gray-400">Coffee Cups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out;
        }
      `}</style>
    </section>
  )
}