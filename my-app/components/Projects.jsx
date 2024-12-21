export default function Projects() {
  const projects = [
      {
          title: "Kanban Board",
          description:
              "Developed a responsive Kanban board with drag-and-drop functionality using ReactJS and TailwindCSS.",
          tech: ["React", "TailwindCSS"],
      },
      {
          title: "E-commerce Platform",
          description: "Built a full-stack e-commerce platform using the MERN stack with secure payment integration.",
          tech: ["MongoDB", "Express", "React", "Node.js"],
      },
  ];

  return (
      <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold">{project.title}</h2>
                      <p className="mt-2 text-gray-300">{project.description}</p>
                      <div className="mt-4">
                          {project.tech.map((tech, i) => (
                              <span
                                  key={i}
                                  className="inline-block bg-gray-700 text-sm text-white px-2 py-1 rounded-full mr-2"
                              >
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}