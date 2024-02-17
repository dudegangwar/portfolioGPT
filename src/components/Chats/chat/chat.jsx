import React from 'react'
import logo from '../../../assets/chatgpt.svg'

const chat = ({question,text}) => {
  return (
    <div className='text-white pb-5'>
        <div className='flex items-center text-white'>
        
        <img className='h-8 w-8 rounded-full p-1 bg-white mr-2' src={question?'https://avatars.githubusercontent.com/u/86113409?v=4':logo} alt='user' />
        
        <p>{question?"You":"ChatGPT"}</p>
        </div>
        <div className='text-base mt-3 px-10 font-light text-gray-300'>{text}</div>
    </div>
  )
}

export default chat