import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Navbar/>
    </div>
  )
}

export default App