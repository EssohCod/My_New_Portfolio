import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <p>This page describes how your information is collected, used, and protected by Nsikan Essoh’s portfolio website.</p>

      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: '2rem',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          background: '#f30c0c',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PrivacyPolicy;
