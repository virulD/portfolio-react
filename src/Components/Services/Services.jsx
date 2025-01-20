// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Services/Services.css'

const Services = () => {
  return (
      <div>
          <h1 className='service-h1'>MY SERVICES</h1>
      <div className='parent-container'>
                  <div className="service-right">
          <div className="service-para">
          <p className='head'>Frontend Development </p>
          <li>Crafting responsive, intuitive, and visually appealing user interfaces using modern <br/>frameworks like React.</li>
          <li>Ensuring seamless user experiences with clean, efficient, and maintainable code.</li>
          <p className='head'>Backend Development </p>
          <li>Building robust, scalable, and secure server-side applications using Node.js and<br/> Java Spring Boot.</li>
          <li>Integrating APIs and managing databases like MongoDB and MySQL for efficient <br/>data handling.</li>
          <p className='head'>Full-Stack Web Development</p>
          <li>Developing complete end-to-end solutions, from interactive frontends to powerful<br/> backends.</li>
          <li>Ensuring secure and efficient data exchange for enhanced functionality.</li>
          </div>
      </div>

  
          
        </div>
      </div>
  )
}

export default Services