export default function ProjectCard({ name, desc, tech, github }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl ">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-3 text-gray-700">{desc}</p>

      <p className="mt-4 text-sm text-gray-500">{tech}</p>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 text-blue-600 font-medium"
      >
        View on GitHub →
      </a>
    </div>
  )
}
