import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'patient@gmail.com' && password === 'patient123') {
      alert('Login successful');
      navigate('/patient/dashboard');
    } else {
      alert('Invalid Patient credentials');
    }
  };

  return (
    <div className="video-bg-wrapper patient-bg">
      <form onSubmit={handleLogin} className="signup-form">
        <h2 className="pat-log">Patient Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Patient Email"required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default PatientLogin;