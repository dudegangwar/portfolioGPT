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

        <a href='https://www.linkedin.com/in/dudegangwar/' target='_blank'><LinkedInIcon/></a>
        <a href="https://github.com/dudegangwar" target='_blank'><GitHubIcon/></a>
        <a href="https://www.facebook.com/dudegangwar/" target='_blank'><FacebookIcon/></a>
        <a href="https://www.youtube.com/c/DudeGangwar" target='_blank'><YouTubeIcon/></a>
        </div>
    </div>
  )
}

export default Profiles