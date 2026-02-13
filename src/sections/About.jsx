export default function About() {
  return (
    <section id="about" className="min-h-screen px-6 py-24 bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#3e2f25]">
            About
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am a third-year Artificial Intelligence and Data Science student 
            passionate about building intelligent, full-stack applications. 
            I specialize in AI-driven systems combined with modern web technologies, 
            creating solutions that are both technically strong and visually refined. 
            I enjoy solving complex problems with consistency and creativity while delivering results on time. 
            Beyond coding, I’m an energetic extrovert who enjoys connecting with people and turning ideas into real-world impact.
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Kalpana"
            className="w-80 h-80 object-cover rounded-3xl shadow-2xl border border-[#e5dcd1]"
          />
        </div>

      </div>
    </section>
  )
}
