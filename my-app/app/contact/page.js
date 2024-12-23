export default function Contact() {
  return (
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
          <div className="bg-black rounded-lg shadow-md p-6">
              <p className="mb-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:waghkrushant@iitgn.ac.in" className="text-blue-500 hover:underline">
                      waghkrushant@gmail.com
                  </a>
              </p>
              <div className="flex space-x-4">
                  <a
                      href="https://www.linkedin.com/in/krushant-wagh-703688228"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                  >
                      LinkedIn
                  </a>
                  <a
                      href="https://github.com/Krushan12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                  >
                      GitHub
                  </a>
              </div>
          </div>
      </div>
  );
}