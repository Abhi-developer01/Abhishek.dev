export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            Resume
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
