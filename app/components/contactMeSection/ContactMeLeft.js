import ContactMeForm from './ContactMeForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col w-full' id='contact'>
      <div>
        <h2 className='text-orange-400 text-3xl mb-4'>Get In Touch</h2>
        <p>Feel free to reach out if you&apos;d like to collaborate <br /> you are just a few click away!
        </p>
      </div>
      <ContactMeForm />
    </div>
  )
}

export default ContactMeLeft
