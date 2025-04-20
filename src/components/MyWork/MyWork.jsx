import React from 'react'
import "./MyWork.css"
import MyWork_Data from "../../assets/mywork_data"
import Arrow from "../../assets/arrow.png"


const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork_title">
        <h1>My Latest Work</h1>
        <p>Take a glance at some of my proudly completed projects. I take great pride in my work and I deliver exactly to your satisfaction.</p>
      </div>

      <div className="mywork_container">
        {MyWork_Data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt='My Work' />
        })}
      </div>

      <div className="show_more_btn">
        <button>
            Show More
            <img src={Arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default MyWork
