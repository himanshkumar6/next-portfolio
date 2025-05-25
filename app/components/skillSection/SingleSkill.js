const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan-400 h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-slate-400 hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange-400">{imgSvg}</div>
        <p className="font-bold lg:text-black text-amber-50">{text}</p>
        <div className="w-[100px] h-[140px] absolute bg-orange-300 top-[50px] -z-10 hidden lg:block rounded-md"></div>
      </div>
    </div>
  )
}

export default SingleSkill
