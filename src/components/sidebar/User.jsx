import React from 'react'
import Profiles from '../Profiles/Profiles'

const User = () => {
  return (
    <div className='user-side-container'>
      <div>
        <Profiles />
    </div>
        <div className='user-side'>
            <img src='https://avatars.githubusercontent.com/u/86113409?v=4' alt='user' />
            <h4>Anuj Kumar</h4>
        </div>
    </div>
  )
}

export default User