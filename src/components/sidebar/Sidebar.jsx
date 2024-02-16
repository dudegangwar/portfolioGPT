import React from 'react'
import Header from './Header'
import Options from './Options'
import User from './User'


const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <Header />
        <Options />
        <User />
    </div>
  )
}

export default Sidebar