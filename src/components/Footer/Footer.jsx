import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer_bottom">
        <div className="footer_name">
          <p className='footer_bottom_left'>© 2024 Nsikan Essoh. All rights reserved.</p>
        </div>

        {/* <div className="footer_links">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
