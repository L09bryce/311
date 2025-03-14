import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import Navbar from '../Navbar'
import './Email.css'
import { GoPencil } from 'react-icons/go'
import { Box } from '@mui/material'

const Email = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "": 'ml-48'}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      <div className='email'>
        <h2 className='mx-10'>Email address</h2>
      <div className='ml-100 mt-20'>
        <MdEmail className='ml-40 h-15 w-15 text-green-600'/>
        <p>Email helps you access your account.It is not available to others.</p>
      </div>
      <div className='mx-10'>
        <h6 className='text-gray-400'>Email</h6><br />
        <Box className='d-flex'>
        gichuhubryson@gmail.com
        <GoPencil className='mx-4 mt-1' />
        </Box>
        <p className='d-flex text-green-600'><FaRegCircleCheck className='mt-1 mx-0.5'/>    Verified</p>
      </div>
      </div>
      
    </div>
  )
}

export default Email