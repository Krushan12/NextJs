export default function Projects() {
    const projects = [
      {
        title: "Kanban Board",
        description: "Developed a responsive Kanban board with drag-and-drop functionality using ReactJS and TailwindCSS.",
        tech: ["ReactJS", "TailwindCSS"],
        links: {
          github: "GitHub Link",
          demo: "Live Demo"
        }
      },
      {
        title: "Spotify Clone",
        description: "Built a Spotify-inspired web app replicating playlists, music search, and responsive design.",
        tech: ["ReactJS", "API Integration"],
        links: {
          github: "GitHub Link"
        }
      },
      // Add other projects similarly
    ]
  
    return (
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl text-black font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-gray-100 text-black px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.links.github && (
                  <a href={project.links.github} className="text-blue-500 hover:underline">
                    GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} className="text-blue-500 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
