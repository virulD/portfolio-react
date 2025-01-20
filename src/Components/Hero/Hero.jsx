// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Hero/Hero.css'
import '../About/About.css'
import profile_img from '../../assets/profile-pic.png'
import LinkedIn_icon from '../../assets/LinkedIn_icon.png'

import github_icon from '../../assets/github_icon.png'
import react_icon from '../../assets/react_icon.png'
import nodejs_icon from '../../assets/nodejs_icon.png'
import html_icon from '../../assets/html_icon.png'
import fiverr_icon from '../../assets/fiverr_icon.png'

const Hero = () => {
  const linkedInUrl = "https://www.linkedin.com/in/virul-akbo-de-silva-64a693255";
  const githubUrl = "https://github.com/virulD";
  const fiverrUrl = ' https://www.fiverr.com/virul_ad';
  return (
      <div className='hero'>
          <img className ='pp'src={profile_img} alt="" />
          <h1>Hello👋 I&apos;m <span>Virul De silva</span> </h1>
          <p>Full-Stack Web Developer From Sri Lanka With Years Of Experince🖥️</p>
            <div className='hero-action'>
              <div className="hero-connect"> CONNECT VIA👇 </div>
              
            </div> 
            <div className='link-buttons'>
                <a href={linkedInUrl}target="_blank" rel="noopener noreferrer">
                    <img className="linkedin-logo" src={LinkedIn_icon} alt="LinkedIn" />
                </a>
                <a href={githubUrl}target="_blank" rel="noopener noreferrer">
                    <img className="github_logo" src={github_icon} alt="github" />
                </a>
                <a href={fiverrUrl}target="_blank" rel="noopener noreferrer">
                    <img className="fiverr_logo" src={fiverr_icon} alt="fiverr" />
                </a>
                    
      </div>
      <div className="about-skills">
            <img src={react_icon }alt="" className='react_icon'/>
            <img src={nodejs_icon }alt=""className='node_icon' />
            <img src={html_icon }alt="" className='html_icon'/>
 
          </div>
        </div>
  )
}

export default Hero