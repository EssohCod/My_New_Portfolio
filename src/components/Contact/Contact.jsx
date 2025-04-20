import React from 'react'
import "./Contact.css"
import Email from "../../assets/email.png"
import Call from "../../assets/call.png"
import Location from "../../assets/location.png"


const Contact = () => {
  return (
    <div id='contact' className='contact'>
          <div className="contact_title">
            <h1>Get in Touch</h1>
            <hr />
            {/* <img src="" alt="" /> */}
          </div>
    
          <div className="contact_section">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>Feel free to reach out for collaborations, project inquiries, or just to say hi — I’d love to connect!</p>
                <div className="contact_details">
                    <div className="contact_detail">
                      <img src={Email} alt="send me an email" /><p>nsikanessohofficial@gmail.com</p>
                    </div>
                    <div className="contact_detail">
                      <img src={Call} alt="call me" /><p>+234 8039 8838 35</p>
                    </div>
                    <div className="contact_detail">
                        <img src={Location} alt="my location" /><p>Abuja FCT, Nigeria</p>
                    </div>
                </div>
            </div>
            <form className="contact_right">
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder='Enter your name' name='name'/>
              
              <label htmlFor="">Your Email</label>
              <input type="email" placeholder='Enter your email' name='email'/>
              
              <label htmlFor="">Write your message here</label>
              <textarea name="message" rows={8} placeholder='Enter your message'></textarea>   
    
              <button type='submit' className='contact_submit'>Submit Now</button>       
            </form>
          </div>
        </div>
  )
}

export default Contact
