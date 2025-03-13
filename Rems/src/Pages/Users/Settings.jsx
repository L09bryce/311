//import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import Navbar from '../Navbar'

const Settings = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
        <div>
        <IoMdSettings />
        </div>
    </div>
  )
}

export default Settings