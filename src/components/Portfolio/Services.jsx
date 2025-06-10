import React from 'react'
import Arrow from "../../assets/arrow.png"
import Data from "../../assets/services_data"
import "./Services.css"

const Portfolio = () => {
  return (
    <div id='services' className='services'>
      <div className="services_title">
        <h1>What I Can Do For You</h1>
        <p>I offer modern web, mobile, and IoT solutions, blending UI/UX design, API integration, AI features, and secure databases to build powerful, scalable, and user-centric digital products.</p>
      </div>

      <div className="services_container">
        {Data.map((service,index)=>{
          return <div key={index} className="services_format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services_readmore">
              <a href="https://github.com/essohcod" target="_blank" rel="noopener noreferrer">
                <button>
                  Read More
                  <img src={Arrow} alt="Arrow" />
                </button>
              </a>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio
