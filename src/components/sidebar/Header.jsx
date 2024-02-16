import React from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import logo from '../../assets/chatgpt.svg'

const Header = () => {
  return (
    <div className='header-sidebar-container'>
        <div className='header-wrapper'>
            <img src={logo} alt='logo' />
            <p>New Chat</p>
        </div>
            <DriveFileRenameOutlineIcon />
    </div>
  )
}

export default Header