import React from 'react'
import Navbar from '../Navbar'
import { PiSimCardBold } from 'react-icons/pi'

const Number = ({sidebarToggle, setSidebarTogle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarTogle} />
        <div className='justify-center px-50 pt-20'>
            <div className='d-flex ml-50'>
                <PiSimCardBold className='w-20 h-20'/> <span className='mt-6 text-2xl'>... </span><PiSimCardBold className='text-red-800 w-20 h-20'/>
            </div>
            <div>
                <p>Changing your phone number will migrate your account info and settings</p>
                <p>Before proceeding, please confirm that you are able to receive SMS or calls at your new number.</p>
                <p>If you have both a new phone or a new number, first change your number on your old phone.</p>
            </div>
            <div>
              <div>
                <p>Your old phone number is</p>
                <form action="PUT">
                  <input className='underline' type="text" placeholder='+254  7123456' />
                </form>
              </div>
              <div>
                <p>Enter your new phone number starting with the country code</p>
                <form action="PUT">
                  <input className='underline' type="text" placeholder='+254  7123456' />
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Number