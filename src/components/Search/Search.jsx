import React, { useContext } from 'react'
import Input from '../ui/Input/Input'
import Blocks from '../Blocks/Blocks'
import { MainContext } from '../../context/context'

const Search = () => {
    const ctx = useContext(MainContext)
    const [blocks, setBlocks] = React.useState([
        {
            title: 'Suggest Fun Activities',
            description: 'For a family visiting san fransico'
        },
        {
            title: 'Write a Text Message',
            description: 'To a friend about a trip to the beach'
        },
        {
            title: 'Suggest Some Nice Places',
            description: 'To visit in New York City'
        },
        {
            title: 'How to Plan a Trip',
            description: 'To the Grand Canyon'
        },
    ])
    const [value, setValue] = React.useState('')
    const onChange = (e) => {
        setValue(e.target.value)
    }
    console.log(blocks)
  return (
    <div className='bottom-0 w-full px-8 pb-7 absolute left-0 right-0 flex flex-col items-center text-white'>
      {!ctx.selectedQuestions?<div className='grid grid-rows-2 grid-flow-col gap-4 grid-cols-2 w-[746px] mb-4'>
        {blocks.map((block)=>{
          return <Blocks title={block.title} description={block.description}/>
        })}

      </div>:null}
      <div className="flex justify-center">
        <Input value={value} onChange={onChange}/>
      </div>
        <p className='text-center text-white text-xs text-gray-400 mt-2'>ChatGPT can make mistakes. Consider checking important information.</p>
    </div>
  )
}

export default Search