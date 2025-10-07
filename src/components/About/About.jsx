import React from 'react'
import './About.css'
import theme from '../../assets/theme.jpeg'
import ghibli from '../../assets/ghibli.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
      <h1>About me</h1>
      <img src={theme} alt="theme" />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={ghibli} alt="abt-profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>I am an ambitious final-year IT Engineering student specializing in Full Stack Development with strong proficiency in programming languages,data structures, algorithms, and hands-on experience with web development tools.</p>
            <p>I am a collaborative and solutions-driven professional with strong communication and leadership skills.
                Passionate about teamwork, I thrive on solving complex problems and driving projects to success.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>Javasript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>ReactJS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>MySQL</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Java</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}}/></div>
        </div>
    </div>
    </div>
    <h1 className='my-achieve'>My Achievements</h1>
    <div className="about-achievements">
      <div className="about-achievement">
        <h1>Academic Proficiency Award </h1>
        <p>from IT Department of Dr.MCET</p>
      </div>
      <hr />
      <div className="about-achievement">
        <h1>300+</h1>
        <p>problems completed on LeetCode</p>
      </div>
    </div>
    </div>
  )
}

export default About
