import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1 className="landing-title">Dental Center Management</h1>
      <main className="landing-container">
        <div className="role-options">
          <button className="role-card" onClick={() => navigate('/login/patient')}>
            <img src="/patient_Logo.png" alt="Patient Icon" className="role-icon" />
            <p className="role-text">Patient</p>
          </button>
          <button className="role-card" onClick={() => navigate('/login/doctor')}>
            <img src="/doctor_Logo.jpg" alt="Doctor Icon" className="role-icon" />
            <p className="role-text">Doctor</p>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Landing;