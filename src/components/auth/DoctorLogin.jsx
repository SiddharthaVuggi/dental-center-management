import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Signup.css';

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'doctor@gmail.com' && password === 'doctor123') {
      alert('Login successful');
      navigate('/doctor/dashboard');
    } else {
      alert('Invalid Doctor credentials');
    }
  };

  return (

    <div className="video-bg-wrapper doctor-bg">
      <form onSubmit={handleLogin} className="signup-form" >
        <h2>Doctor Login</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Doctor Email" required />
        <input type="password"value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;