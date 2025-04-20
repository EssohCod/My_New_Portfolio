import React from 'react'
import Arrow from "../../assets/arrow.png"
import Data from "../../assets/services_data"
import "./Services.css"

const Portfolio = () => {
  return (
    <div id='services' className='services'>
      <div className="services_title">
        <h1>What I Do</h1>
        <img src="" alt="" />
      </div>

      <div className="services_container">
        {Data.map((service,index)=>{
          return <div key={index} className="services_format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services_readmore">
                <button>Read More
                    <img src={Arrow} alt="Arrow" />
                </button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Portfolio
