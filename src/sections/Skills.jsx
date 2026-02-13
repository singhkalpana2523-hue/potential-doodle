export default function Skills() {
  const skills = [
    "React", "JavaScript", "Python",
    "FastAPI", "AI", "ML",
    "Tailwind CSS", "Node.js",
    "MongoDB", "NLP", "Git", "Java"
  ]

  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-[#f5f1eb]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-[#3e2f25]">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map(skill => (
            <div
              key={skill}
              className="bg-white/70 backdrop-blur-md border border-[#e5dcd1]
                         rounded-xl p-6 text-center text-lg font-medium
                         transition duration-300 ease-out
                         hover:-translate-y-2 hover:shadow-xl
                         hover:bg-[#fdfaf6] hover:border-[#d4c4b5]
                         hover:text-[#7c5e45]
                         cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
