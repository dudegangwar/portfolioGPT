import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Input = ({value,onChange}) => {
  return (
    <div className='border px-4 py-3 rounded-2xl flex w-[746px]'>
        <input type='text' className='input w-full bg-transparent outline-none text-white' placeholder='Message ChatGPT...' onChange={onChange} value={value} />
        <div className='bg-gray-600 inline p-2 rounded-lg'><ArrowUpwardIcon htmlColor='#212121'/></div>
    </div>
  )
}

export default Input