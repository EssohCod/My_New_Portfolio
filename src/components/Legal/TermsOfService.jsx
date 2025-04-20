import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Terms of Service</h1>
      <p>This page outlines the terms of using this website and services offered by Nsikan Essoh.</p>

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

export default TermsOfService;
