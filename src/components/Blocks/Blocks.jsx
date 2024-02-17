import React from 'react'

const Blocks = ({title, description, link}) => {
  return (
    <a href={link} target='_blank' className='rounded-lg border p-4 border-gray-600 hover:cursor-pointer hover:bg-[#00000050]'>
        <p className='text-sm'>{title}</p>
        <p className='text-xs text-gray-400'>{description}</p>
    </a>
  )
}

export default Blocks