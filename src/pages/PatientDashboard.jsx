import React, { useEffect, useState } from 'react';
import '../styles/PatientDashboard.css';
import { useNavigate } from 'react-router-dom';

const PatientDashboard = () => {
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allPatients = JSON.parse(localStorage.getItem('patients')) || [];
    const allIncidents = JSON.parse(localStorage.getItem('incidents')) || [];

    console.log("📦 Loaded patients:", allPatients);
    console.log("📦 Loaded incidents:", allIncidents);

    const ananya = allPatients.find(p => p.name.toLowerCase() === 'ananya');

    if (!ananya) {
      console.warn("⚠️ Patient 'ananya' not found in localStorage");
      return;
    }

    const patientAppointments = allIncidents.filter(
      (incident) => incident.patientId === ananya.id
    );

    setPatient(ananya);
    setAppointments(patientAppointments);
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = appointments.filter((app) => {
    const date = new Date(app.appointmentDate);
    date.setHours(0, 0, 0, 0);
    return date >= today;
  });

  const history = appointments.filter((app) => {
    const date = new Date(app.appointmentDate);
    date.setHours(0, 0, 0, 0);
    return date < today;
  });

  if (!patient) {
    return (
      <div className="teeth-background">
        <div className="patient-dashboard">
          <div className="top-header">
            <h1></h1>
            <button className="home-button" onClick={() => navigate('/')}>Logout</button>
          </div>
          <h2>No patient data found.</h2>
          <p>This may happen if localStorage is cleared or not set. Please visit the Doctor Dashboard and re-add data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="teeth-background">
      <div className="patient-dashboard">
        <div className="top-header">
          <h1></h1>
          <button className="home-button" onClick={() => navigate('/')}>Logout</button>
        </div>

        <h1>Welcome, {patient.name}</h1>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>DOB:</strong> {patient.dob}</p>
        <p><strong>Health Info:</strong> {patient.healthInfo}</p>

        <div className="section-box">
          <h2>Upcoming Appointments</h2>
          {upcoming.length > 0 ? (
            <ul>
              {upcoming.map((app) => (
                <li key={app.id}>
                  <strong>Date:</strong> {new Date(app.appointmentDate).toDateString()}<br />
                  <strong>Treatment:</strong> {app.title}<br />
                  <strong>Status:</strong> {app.status}<br />
                  <strong>Cost:</strong> ₹{app.cost || '—'}<br />
                  {app.files?.length > 0 && (
                    <>
                      <strong>Files:</strong>
                      <ul>
                        {app.files.map((f, i) => (
                          <li key={i}>
                            <a href={f.url} target="_blank" rel="noopener noreferrer" download>
                              {f.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming appointments.</p>
          )}
        </div>

        <div className="section-box">
          <h2>Appointment History</h2>
          {history.length > 0 ? (
            <ul>
              {history.map((app) => (
                <li key={app.id}>
                  <strong>Date:</strong> {new Date(app.appointmentDate).toDateString()}<br />
                  <strong>Treatment:</strong> {app.title}<br />
                  <strong>Status:</strong> {app.status}<br />
                  <strong>Cost:</strong> ₹{app.cost || '—'}<br />
                  {app.files?.length > 0 && (
                    <>
                      <strong>Files:</strong>
                      <ul>
                        {app.files.map((f, i) => (
                          <li key={i}>
                            <a href={f.url} target="_blank" rel="noopener noreferrer" download>
                              {f.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No previous appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;