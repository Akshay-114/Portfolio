import React , { useState } from 'react'
import './Contact.css'
import theme from '../../assets/theme.jpeg'
import phone from '../../assets/icons/phone.jpeg'
import location from '../../assets/icons/location.jpeg'
import mail from '../../assets/icons/mail.jpeg'
import linkedin from '../../assets/icons/linkedin.jpeg'

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "64b3ff71-f18f-41a5-8404-e9a8305eaf25");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="theme" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p id='connect'>That's a little about me - but I'd love to know about you. Got an idea, feedback or just want to say hi? Drop a message!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail} alt="mail" className='mail'/>    
                    <p>akshaysathyamoorthy11@gmail.com</p>             
                </div>
                <div className="contact-detail">
                    <img src={phone} alt="phone" className='phone'/>
                    <p>+91 9585820679</p>
                </div>
                <div className="contact-detail">
                    <img src={location} alt="location" className='location'/>
                    <p>Coimbatore,Tamilnadu</p>
                </div>
                <div className="contact-detail">
                    <img src={linkedin} alt="linkedin" className='linkedin'/>
                    <p><a href="https://www.linkedin.com/in/akshay-s-1030a6284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Click here to view</a></p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name'/>
            <label htmlFor="">Your email</label>
            <input type="email" placeholder='Enter your email' name='email'/>
            <label htmlFor="">Leave your message</label>
            <textarea name="message" id="" rows="10" placeholder='Type your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
