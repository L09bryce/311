//import React from 'react'
import { IoMdSettings } from 'react-icons/io'

const Settings = ({sidebar, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
        <div>
        <IoMdSettings />
        </div>
    </div>
  )
}

export default Settings