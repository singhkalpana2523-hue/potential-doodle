import { HiOutlineMail } from "react-icons/hi"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#f5f1eb] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-12 border border-[#e5dcd1]">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#3e2f25] mb-4">
          Contact
        </h2>

        {/* Tagline */}
        <p className="text-center text-gray-600 mb-10 text-lg">
          Let’s build something meaningful together.
        </p>

        {/* Contact Items */}
        <div className="space-y-8 text-lg text-gray-700">

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <HiOutlineMail className="text-2xl text-[#7c5e45]" />
            <a
              href="mailto:dk71singh@example.com"
              className="group-hover:text-[#7c5e45] transition"
            >
              dk71singh@example.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 group">
            <FaLinkedinIn className="text-2xl text-[#7c5e45]" />
            <a
              href="https://www.linkedin.com/in/gecrai062/"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-[#7c5e45] transition"
            >
              LinkedIn – Kalpana Singh
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 group">
            <FaGithub className="text-2xl text-[#7c5e45]" />
            <a
              href="https://github.com/singhkalpana2523-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:text-[#7c5e45] transition"
            >
              GitHub – singhkalpana2523-hue
            </a>
          </div>

        </div>

        {/* Resume Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/Kalpana-Resume.pdf"
            download
            className="bg-[#7c5e45] text-white px-8 py-3 rounded-full
                       hover:bg-[#5f4634] transition duration-300
                       shadow-md hover:shadow-lg"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  )
}
