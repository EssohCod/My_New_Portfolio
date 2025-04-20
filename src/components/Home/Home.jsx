import React from 'react'
import './Home.css'
import Profile from "../../assets/profile.png"
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div id='home' className='home'>
      <img src={Profile} alt="Essoh" />
      
        <h1><span>I'm Nsikan Essoh,</span><br /> Software Developer based in Nigeria.</h1>
        <p>3+ years of experience building scalable web applications and leading development teams. Seeking to bring my expertise in Mobile App Development, responsive web application, cloud technologies, and eCommerce platforms like Shopify to organizations looking to drive innovative SaaS solutions and optimize development processes.
        </p>
      
        <div className="hero_action">
            <div className="home_connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    <button>Connect With Me</button>
                </AnchorLink></div>
            <div className="home_resume">
                <button>My Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Home
