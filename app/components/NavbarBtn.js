import { FiArrowDownRight } from "react-icons/fi";

const NavbarBtn = () => {

 const handleClick = () => {
    const contactSection = document.getElementById("contact"); // no #
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <button onClick={handleClick} className=" px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-400 border flex items-center gap-1 bg-gradient-to-r from-green-400 to-orange-400 hover:scale-110 transition-all duration-500 hover:border-amber-400 cursor-pointer">
      Hire Me
      <div className="lg:block hidden"><FiArrowDownRight size={30} /></div>
    </button>
  )
}

export default NavbarBtn