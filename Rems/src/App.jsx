import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'


const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className=''>
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
    </div>
  )
}

export default App