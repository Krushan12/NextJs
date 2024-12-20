export default function Skills() {
    const skills = {
      "Programming Languages": ["Python", "C++", "HTML", "CSS", "React.js", "JavaScript"],
      "Tools": ["MATLAB", "AutoDesk Inventor", "Git", "Linux"]
    }
  
    return (
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="max-w-3xl mx-auto text-black">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-lg">
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