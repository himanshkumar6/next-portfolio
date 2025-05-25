import ContactInfo from "./ContactInfo"
import ContactSocial from "./ContactSocial"

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src='https://raw.githubusercontent.com/himanshkumar6/portfolio-website/refs/heads/main/email-file.gif' alt='Contact Me' className='max-w-[300px] rounded-full' />
      <ContactInfo />
      <ContactSocial />
    </div>
  )
}

export default ContactMeRight
