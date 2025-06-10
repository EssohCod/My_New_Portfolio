import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";
import Email from "../../assets/email.png";
import Call from "../../assets/call.png";
import Location from "../../assets/location.png";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_pugksno',
      'template_gi4zm0e', 
      form.current,
      'fk6REKeKkMBWmdij7'
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact_title">
        <h1>Get in Touch</h1>
        <hr />
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

        <form ref={form} className="contact_right" onSubmit={sendEmail}>
          <label>Your Name</label>
          <input type="text" name="user_name" required placeholder='Enter your name' />
          
          <label>Your Email</label>
          <input type="email" name="user_email" required placeholder='Enter your email' />
          
          <label>Write your message here</label>
          <textarea name="message" rows="8" required placeholder='Enter your message'></textarea>   

          <button type='submit' className='contact_submit'>Submit Now</button>       
        </form>
      </div>
    </div>
  );
};

export default Contact;
