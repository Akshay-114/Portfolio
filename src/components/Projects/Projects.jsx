import React from 'react'
import './Projects.css'
import theme from '../../assets/theme.jpeg'
import Projects_Data from '../../assets/projects_data'
import arrow from '../../assets/arrow.jpeg'

const Projects = () => {

  return (
    <div id='projects' className='projects'> 
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="projects-container">
        {Projects_Data.map((project,index)=>{
            return <div key={index} className="projects-format">
                <h3>{project.s_no}</h3>
                <h2>{project.s_name}</h2>
                <p>{project.s_desc}</p>
                <div className="projects-readmore">
                    <p>Read More</p>
                    <img src={arrow} alt="arrow" className='arrow'   onClick={() => window.open(project.s_link, '_blank')} />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Projects
