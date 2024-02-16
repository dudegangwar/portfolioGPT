import React, { useContext } from 'react'
import { MainContext } from '../../context/context'



const Options = () => {
    const ctx = useContext(MainContext)
    // console.log(ctx)
    
    return (
        <div className='option-container mt-10'>
            <p className='option-text-title text-xs'>Yesterday</p>
            <div className='option-wrapper'>
                {ctx.question.map((item, index) => {
                    return (
                        <div className='py-1 hover:bg-gray-700 cursor-pointer rounded' key={index} onClick={()=>ctx.handleQuestionSelection(item)}>
                            <p className='text-xs font-light '>{item.question}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Options