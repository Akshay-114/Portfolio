import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/S-Akshay-Resume.pdf'

const Hero = () => {

  const handleResumeClick = () => {
    window.location.href = resume;
  };

  return (
    <div id='home' className='hero'>
      <img src={profile} alt="profile image" />
      <h1><span>Hi, I'm Akshay,</span> a passionate Full Stack Developer</h1>
      <p>A passionate Full Stack Developer with experience in both
        frontend and backend technologies. I love creating scalable and user-friendly
        applications.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeClick}>My Resume</div>
    </div>
    </div>
  )
  
}


export default Hero
