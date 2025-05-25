import { AiOutlineMail } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <SingleInfo text="hks4102000@gmail.com" Image={AiOutlineMail} />
      <SingleInfo text="+91 8595698811" Image={MdOutlineLocalPhone} />
      <SingleInfo text="Uttar Pradesh, India" Image={GrLocation} />
    </div>
  )
}

export default ContactInfo
