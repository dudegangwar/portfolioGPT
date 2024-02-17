import React, { useContext } from 'react'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import logo from '../../assets/chatgpt.svg'
import { MainContext } from '../../context/context';

const Header = () => {
  const {handleQuestionSelection} = useContext(MainContext);
  
  return (
    <div className='header-sidebar-container'>
        <div className='header-wrapper '>
            <img src={logo} alt='logo' />
            <p className='cursor-pointer' onClick={()=> {
              handleQuestionSelection(null)
            }}>New Chat</p>
        </div>
            <DriveFileRenameOutlineIcon />
    </div>
  )
}

export default Header