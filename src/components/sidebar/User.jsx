import React from 'react'
import Profiles from '../Profiles/Profiles'

const User = () => {
  return (
    <div className='user-side-container'>
      <div>
        <Profiles />
    </div>
        <div className='user-side'>
            <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_640.png' alt='user' />
            <h4>Anuj Kumar</h4>
        </div>
    </div>
  )
}

export default User