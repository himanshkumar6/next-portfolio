const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
  { link: "Blogs", section: "blogs" }
];


const FooterMain = () => {
  return (
    <div className="px-4 font-semibold">
      <div className="w-full h-[1px] bg-gray-400 mt-24 "></div>
      <div className="md:flex hidden justify-between mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-orange-500">Himanshu Kumar</p>
        <ul className="flex gap-4 text-xl text-yellow-400">
          {Links.map((elem, idx) => {
            return <li key={idx}><a className="hover:text-white transition-all duration-500 cursor-pointer" href="#">{elem.link}</a></li>
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-gray-300"> &#169; 2024 Himanshu | All Rights Reserved. </p>
    </div>
  )
}

export default FooterMain
