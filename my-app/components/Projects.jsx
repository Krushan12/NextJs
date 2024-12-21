const projects = [
    {
      title: "Kanban Board",
      description: "A responsive Kanban board with drag-and-drop functionality built using ReactJS and TailwindCSS.",
      tech: ["ReactJS", "TailwindCSS"],
      github: "https://github.com/Krushan12/KanbanBoard",
      demo: "https://kanban-board-teal-pi.vercel.app/"
    },
    {
      title: "Spotify Clone",
      description: "A Spotify-inspired web app featuring playlist management and music search functionality.",
      tech: ["ReactJS", "API Integration"],
      github: "https://github.com/Krushan12/Spotify-Clone"
    },
    {
      title: "Human Activity Recognition",
      description: "Decision tree model for classifying human activities using accelerometer data from UCI-HAR dataset.",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/Krushan12/Human-Activity-Recognition"
    },
    {
      title: "Image Reconstruction",
      description: "Compression algorithm using matrix factorization and Random Fourier Features for image reconstruction.",
      tech: ["Python", "MATLAB"],
      github: "https://github.com/Krushan12/Image-Reconstruction"
    }
  ]
  
  export default function Projects() {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 hover:border-primary transition-colors duration-300">
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-bg-hover px-3 py-1 rounded-full text-sm border border-line">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href={project.github} className="text-primary hover:text-primary-2 transition-colors">
                  GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} className="text-primary hover:text-primary-2 transition-colors">
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