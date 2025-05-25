"use client"


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const ContactMeForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ehf539s', 'template_p985l4h', form.current, {
        publicKey: 'MdIiXVU1PAjmEKeNy',
      })
      .then(
        () => {
          setName('')
          setEmail('')
          setMessage('')
          setSuccess("Message Sent!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='mt-5'>
      <p className='text-cyan-500 my-4'>{success}</p>
      <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
        <input value={name} onChange={handleName} name='from_name' type="text" placeholder="Your Name" required className="h-12 rounded-lg bg-gray-600 px-2" />
        <input value={email} onChange={handleEmail} name='from_email' type="email" placeholder="Your Email" required className="h-12 rounded-lg bg-gray-600 px-2" />
        <textarea value={message} onChange={handleMessage} name='message' type='text' placeholder="Message" rows='9' cols='50' required className=" rounded-lg bg-gray-600 p-2" />
        <button type="submit" className="w-full rounded-lg border border-cyan-400 text-white h-12 font-bold text-xl lg:hover:bg-cyan-400 bg-cyan-400  transition-all duration-500 cursor-pointer">Send</button>
      </form>
    </div>
  )
}

export default ContactMeForm
