import React from 'react'
import AdminLeft from './AdminLeft'
import AdminRight from './AdminRight'

const AdminMiddle = () => {
  return (
    <div className='flex'>
      <AdminLeft />
      <AdminRight />
    </div>
  )
}

export default AdminMiddle