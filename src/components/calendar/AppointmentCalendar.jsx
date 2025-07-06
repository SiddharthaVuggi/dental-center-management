import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../styles/Calendar.css';

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState('day');

  const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isSameDay = (d1, d2) => d1.toDateString() === d2.toDateString();

  const isSameWeek = (d1, d2) => {
    const start = new Date(d1);
    const end = new Date(d1);
    start.setDate(start.getDate() - start.getDay());
    end.setDate(start.getDate() + 6);
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return d2 >= start && d2 <= end;
  };

  const isSameMonth = (d1, d2) =>
    d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();

  const appointments = incidents.filter((incident) => {
    const incidentDate = new Date(incident.appointmentDate);
    incidentDate.setHours(0, 0, 0, 0);
    if (incidentDate < today) return false;

    if (filter === 'day') return isSameDay(selectedDate, incidentDate);
    if (filter === 'week') return isSameWeek(selectedDate, incidentDate);
    if (filter === 'month') return isSameMonth(selectedDate, incidentDate);
    return false;
  });

  const totalAppointments = appointments.length;
  const totalCost = appointments.reduce(
    (sum, app) => sum + (parseFloat(app.cost) || 0),
    0
  );

  return (
    <div className="calendar-page">
      <h2>Appointment Calendar</h2>
      <div className="calendar-layout">
        <div className="calendar-box">
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>

        <div className="filter-box">
          <div className="filter-buttons">
            <button onClick={() => setFilter('day')}>This Day</button>
            <button onClick={() => setFilter('week')}>This Week</button>
            <button onClick={() => setFilter('month')}>This Month</button>
          </div>

          <div className="appointments">
            <h3>
              {filter === 'day' && `Appointments on ${selectedDate.toDateString()}`}
              {filter === 'week' && `Appointments in the Week of ${selectedDate.toDateString()}`}
              {filter === 'month' && `Appointments in ${selectedDate.toLocaleString('default', { month: 'long',})}`}
            </h3>

            {appointments.length > 0 ? (
              <>
                <ul>
                  {appointments.map((app) => (
                    <li key={app.id}>
                      <strong>{app.title}</strong>: {app.description} — {app.status}
                    </li>
                  ))}
                </ul>
                <div className="totals">
                  <p><strong>Total Appointments:</strong> {totalAppointments}</p>
                  <p><strong>Total Cost:</strong> ₹{totalCost}</p>
                </div>
              </>
            ) : (
              <p>No appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalendar;