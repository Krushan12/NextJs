export default function Skills() {
  const skills = {
    "Programming": ["Python", "C++", "JavaScript", "HTML", "CSS", "React.js"],
    "Tools & Technologies": ["Git", "Linux", "MATLAB", "AutoDesk Inventor"]
  }

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card p-6">
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-bg-hover border border-line px-4 py-2 rounded-lg hover:border-primary transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}