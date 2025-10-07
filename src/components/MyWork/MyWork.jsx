import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme.jpeg'
import arrow from '../../assets/arrow.jpeg'
import mywork_data from '../../assets/mywork_data.js'
import certificate from '../../assets/Certifications.pdf'

const MyWork = () => {

  const handleCertificateClick = () => {
    window.location.href = certificate;
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Certifications</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="certificate"/>
        })}
      </div>
      <div className='mywork-showmore'>
        <p>Show more</p>
        <img src={arrow} alt="arrow" className='arrow' onClick={handleCertificateClick}/>
      </div>
    </div>
  )
}

export default MyWork
