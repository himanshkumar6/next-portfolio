import ExperienceInfo from "./ExperienceInfo"

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange-400 font-bold uppercase text-3xl text-center">Since 2024</p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Year" />
        <p className="font-extrabold text-gray-400 text-6xl">-</p>
        <ExperienceInfo number="2" text="Websites" />
      </div>
      <p className="text-white font-bold text-center text-2xl lg:text-base">I have one year of experience in developing dynamic, user-friendly web applications.
      </p>
      <ExperienceInfo number="$150" text="Max Budget" />
    </div>
  )
}

export default ExperienceTopLeft
