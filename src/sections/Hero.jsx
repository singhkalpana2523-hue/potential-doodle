import { motion } from "framer-motion"



export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#f8f4ef] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-[#3e2f25] leading-tight"
        >
          AI Engineer & Full-Stack Developer
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg text-gray-600"
        >
          Building intelligent web applications that combine AI,
          performance, and thoughtful design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="bg-[#7c5e45] text-white px-8 py-3 rounded-full
                       hover:bg-[#5f4634] transition duration-300 shadow-md"
          >
            View Projects
          </a>

          <a
            href="/Kalpana-Resume.pdf"
            download
            className="border border-[#7c5e45] text-[#7c5e45]
                       px-8 py-3 rounded-full
                       hover:bg-[#7c5e45] hover:text-white
                       transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
      

    </section>
  )
}
