// import React from 'react'
// import "./Footer.css"
// // import AnchorLink from 'react-anchor-link-smooth-scroll';

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <hr /> 
//       <div className="footer_bottom">
//         <p className='footer_bottom_left'>© 2024 Nsikan Essoh. All rights reserved.</p>
//         <div className="footer_bottom_right">
//             <ul>
//                 <li>Terms of Service</li>
//                 <li>Privacy Policy</li>
//                 <li>Connect with me</li>
//             </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer_bottom">
        <p className='footer_bottom_left'>© 2024 Nsikan Essoh. All rights reserved.</p>
        <div className="footer_bottom_right">
          <ul>
            <li>
              <Link to="/terms-of-service" className="footer_link">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="footer_link">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
