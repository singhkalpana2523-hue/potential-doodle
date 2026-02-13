export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Kalpana</h1>

        <div className="flex gap-8 text-sm font-medium">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
