import React from 'react'

const Blocks = ({title, description}) => {
  return (
    <div className='rounded-lg border p-4 border-gray-600 hover:cursor-pointer hover:bg-[#00000050]'>
        <p className='text-sm'>{title}</p>
        <p className='text-xs text-gray-400'>{description}</p>
    </div>
  )
}

export default Blocks