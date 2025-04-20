import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PrivacyPolicy.css"

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className='PrivacyPolicy'>
      <h1>Privacy Policy</h1>
      <h3>Effective Date: [Insert Date]<br /></h3>

        <p>
            Your privacy is important. This Privacy Policy outlines how your information is collected, used, and protected when you visit or interact with this website.
        </p>

        1. Information Collected
        When you fill out the contact form or communicate with me directly, I may collect the following information:

        Full Name

        Email Address

        Phone Number (optional)

        Project Details or Message Content

        2. Use of Information
        Your information is used solely for the purposes of:

        Responding to inquiries or service requests

        Understanding your project needs

        Improving communication and support

        I will never sell, trade, or share your information with third parties without your explicit consent.

        3. Cookies & Analytics
        This website may use cookies or analytical tools (e.g., Google Analytics) to monitor traffic and usage. These tools collect anonymized data and do not personally identify you.

        4. Data Security
        All reasonable steps are taken to protect your information from loss, misuse, or unauthorized access. However, no internet-based system is 100% secure.

        5. Third-Party Links
        This website may contain links to external sites. I am not responsible for the content or privacy practices of these websites.

        6. Your Rights
        You have the right to:

        Access the data you’ve provided

        Request correction or deletion

        Withdraw your consent at any time

        7. Contact
        For questions regarding this Privacy Policy, please reach out via the contact form or email at [your_email@example.com].


      <button
        onClick={() => navigate(-1)}      >
        Previous Page
      </button>
    </div>
  );
};

export default PrivacyPolicy;
