import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Profiles = () => {
  return (
    <div>
        <p className='text-sm px-5 mb-4'>Find Me On Social Media</p>
        <div className='flex gap-4 px-5'>

        <LinkedInIcon/>
        <GitHubIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
        </div>
    </div>
  )
}

export default Profiles