import React from 'react'
import "./About.css"
import About_Img from "../../assets/about.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about_title">
        <h1>About Me</h1>
        <hr />
      </div>

      <div className="about_sections">
        <div className="about_left">
            <img src={About_Img} alt="" />
        </div>
        <div className="about_right">
            <div className="about_para">
                {/* <p>Passionate software developer with a strong background in building web and mobile applications. Skilled in modern frameworks like React, Ruby on Rails, and AWS cloud services. I love solving problems through clean, efficient code and am always eager to learn new technologies. Focused on creating seamless user experiences and scalable solutions.</p> */}
                <p>I am creative and highly detail-oriented with focus on building reliable, user-friendly applications. Experienced in full-stack development, cloud integration, and real-time systems. I thrive in collaborative environments and enjoy turning complex ideas into simple, effective solutions.</p>
            </div>
            <div className="about_skills">
                <div className="about_skill"><p>HTML & CSS</p> <hr style = {{width: "80%"}} /></div>
                <div className="about_skill"><p>ReactJS</p> <hr style = {{width: "50%"}} /></div>
                <div className="about_skill"><p>React Native</p> <hr style = {{width: "55%"}} /></div>
                <div className="about_skill"><p>Javascript</p> <hr style = {{width: "66%"}} /></div>
                <div className="about_skill"><p>Node JS</p> <hr style = {{width: "45%"}} /></div>
                <div className="about_skill"><p>Ruby on Rails</p> <hr style = {{width: "60%"}} /></div>
                <div className="about_skill"><p>MongoDB</p> <hr style = {{width: "45%"}} /></div>
                <div className="about_skill"><p>Git</p> <hr style = {{width: "850%"}} /></div>
                
            </div>
        </div>
      </div>

      <div className="about_achievements">
        <div className="about_achievement">
            <h1>10+</h1>
            <p>Years of Experince</p>
        </div>
        <hr />

        <div className="div about_achievement">
            <h1>90+</h1>
            <p>Projects Completed</p>
        </div>
        <hr />

        <div className="div about_achievement">
            <h1>15+</h1>
            <p>Happy Clients </p>
        </div>
      </div>
    </div>
  )
}

export default About;