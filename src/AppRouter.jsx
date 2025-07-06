import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import PatientLogin from './components/auth/PatientLogin';
import DoctorLogin from './components/auth/DoctorLogin';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
    <Route path="/patient/dashboard" element={<PatientDashboard />} />
    <Route path="/login/doctor" element={<DoctorLogin />} />
    <Route path="/login/patient" element={<PatientLogin />} />

  </Routes>
);

export default AppRouter;