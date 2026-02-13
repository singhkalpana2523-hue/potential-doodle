import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    name: "AI Resume Screener",
    desc: "Full-stack AI-powered resume analyzer built with React + FastAPI. Scores resumes, matches job roles and gives intelligent improvement suggestions.",
    tech: "React • FastAPI • Python • NLP",
    github: "https://github.com/singhkalpana2523-hue/AI-RESUME-SCREENER"
  },
  {
    name: "Auth Dashboard CRUD",
    desc: "Authentication-based dashboard with CRUD operations. Secure login system with protected routes and database integration.",
    tech: "React • Node • MongoDB • Auth",
    github: "https://github.com/singhkalpana2523-hue/Auth-Dashboard-CRUD"
  },
  {
    name: "AI NIDS Dashboard",
    desc: "AI-based Network Intrusion Detection System with interactive analytics dashboard and visualization.",
    tech: "AI • Python • Dashboard • ML",
    github: "https://github.com/singhkalpana2523-hue/AI-NIDS-Dashboard"
  },
  {
    name: "Climate News Sentiment AI",
    desc: "Sentiment analysis engine analyzing climate-related news articles using machine learning models.",
    tech: "Python • NLP • ML",
    github: "https://github.com/singhkalpana2523-hue/Climate-News-Sentiment-AI"
  },
  {
    name: "AutoMentor AI",
    desc: "AI-powered coding assistant and reviewer helping developers improve code quality.",
    tech: "AI • React • Backend APIs",
    github: "https://github.com/singhkalpana2523-hue/AutoMentor-AI"
  },
  {
    name: "LaughLab",
    desc: "Creative AI meme and poster generator interface.",
    tech: "React • AI APIs",
    github: "https://github.com/singhkalpana2523-hue/LaughLab"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-16 bg-neutral-100">
      <h2 className="text-5xl font-bold mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  )
}
