import ContactMeLeft from "./ContactMeLeft"
import ContactMeRight from "./ContactMeRight"

const ContactMeMain = () => {
  return (
    <div className="font-extrabold max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 text-white" id="contact">
      <h2 className="text-6xl text-cyan-400 mb-10 text-center">Contact Me</h2>
      <div className="font-extrabold flex justify-center gap-24 bg-[#271a09] rounded-2xl p-8 lg:flex-row flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  )
}

export default ContactMeMain
