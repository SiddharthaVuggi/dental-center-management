import React from "react";
import { useNavigate } from "react-router-dom";

import AppointmentCalendar from "../components/calendar/AppointmentCalendar";
import IncidentTable from "../components/doctor/IncidentTable";
import PatientTable from "../components/doctor/PatientTable";

import "../styles/DoctorDashboard.css";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dash">
      <div className="header-container">
        <h1 className="hello">Hello, Dentist</h1>

        <button
          className="home-button"
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </div>

      <AppointmentCalendar />

      <div style={{ padding: "2rem" }}>
        <PatientTable />
        <br />
        <IncidentTable />
      </div>
    </div>
  );
};

export default DoctorDashboard;
