
const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center md:items-start text-start md:text-start font-extrabold">
      <h2 className="text-6xl text-cyan-400 mb-10">About Me</h2>
      <div className="text-white">Hello! I&apos;m Himanshu, a passionate Frontend Developer with 1 year of hands-on experience in building user-focused, responsive web applications using React.js. As a self-initiated learner, I&apos;ve explored and delivered multiple personal projects that reflect both creativity and code quality.
        I specialize in crafting smooth, interactive UIs using:
        <div className="justify-start items-start mt-4">
          <ul>
            <li>👉 HTML5, CSS3, JavaScript (ES6+)</li>
            <li>👉 React.js and Next.js</li>
            <li>👉 Framer Motion for seamless animations</li>
            <li>👉 Tailwind CSS & Bootstrap for sleek and responsive designs</li>
            <li>👉 Firebase for backend services & real-time database integration</li>
          </ul>
        </div>
        <br />
        From authentication systems to responsive dashboards, I love transforming ideas into real products that solve problems and look good doing it. I&apos;m continuously upgrading my skills to stay aligned with modern frontend ecosystems and build better user experiences</div>
      <button className="border border-orange-400 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-600 transition-all duration-500 cursor-pointer text-white hover:text-cyan-300">My Projects</button>
    </div>
  )
}

export default AboutMeText
