import React from 'react'
import Home from '../Pages/Home'

const Pages = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "ml-48" : "w-full"}`}>
        <Home />
    </div>
  )
}

export default Pages