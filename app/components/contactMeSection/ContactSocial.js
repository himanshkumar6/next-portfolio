import { GrGithub } from "react-icons/gr";
import SingleContactSocial from './SingleContactSocial'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="gap-4 flex text-white">
      <SingleContactSocial link='https://github.com/himanshkumar6' Icon={GrGithub} />
      <SingleContactSocial link='https://www.linkedin.com/in/himanshukr2002/' Icon={CiLinkedin} />
      <SingleContactSocial link='https://www.instagram.com/himanshu_s_2002' Icon={FaInstagram} />
    </div>
  )
}

export default ContactSocial
