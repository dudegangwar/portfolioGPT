import React from 'react'
import logo from '../../../assets/chatgpt.svg'

const chat = ({question,text}) => {
  return (
    <div className='text-white pb-5'>
        <div className='flex items-center text-white'>
        
        <img className='h-10 w-10' src={question?'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png':logo} alt='user' />
        
        <p>{question?"You":"ChatGPT"}</p>
        </div>
        <p className='text-sm mt-3 px-10 font-light text-gray-300'>{text}</p>
    </div>
  )
}

export default chat