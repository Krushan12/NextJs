export default function Hero() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-16 text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Krushant Wagh
        </h1>
        <h2 className="text-2xl text-gray-400 mb-8">
          Materials Engineering Undergraduate at IIT Gandhinagar
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mb-8">
          A passionate developer focused on web development and materials science, 
          building innovative solutions with modern technologies.
        </p>
        <div className="flex space-x-6">
          <a 
            href="waghkrushant@gmail.com" 
            className="bg-primary hover:bg-primary-2 text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/Krushan12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-bg hover:bg-bg-hover border border-line text-white px-6 py-3 rounded-lg transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    )
  }