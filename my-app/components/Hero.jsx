export default function Hero() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-6xl font-bold text-white">
          Krushant Wagh
        </h1>
        <h2 className="mt-4 text-2xl text-gray-600">
          Materials Engineering Undergraduate at IIT Gandhinagar
        </h2>
        <div className="mt-8 flex space-x-4">
          <a href="mailto:waghkrushant@iitgn.ac.in" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Contact Me
          </a>
          <a href="https://github.com/YourGitHub" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            GitHub
          </a>
        </div>
      </div>
    )
  }