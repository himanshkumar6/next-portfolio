const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="font-bold text-6xl text-cyan-400 ">{number}</p>
      <p className="font-bold text-2xl uppercase -mt-4 text-slate-400">{text}</p>
    </div>
  )
}

export default ExperienceInfo
