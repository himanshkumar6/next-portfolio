import React from 'react'

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className='text-2xl h-12 w-12 border border-orange-400 text-orange-300 rounded-full p-3 flex items-center justify-center'>
      <a href={link} className='cursor-pointer '>
        <Icon />
      </a>
    </div>
  )
}

export default SingleContactSocial
