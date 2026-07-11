import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

const FILTERS = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
};

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filter, setFilter] = useState(FILTERS.DAY);

  const incidents = useMemo(
    () => JSON.parse(localStorage.getItem("incidents") ?? "[]"),
    []
  );

  const today = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const isSameDay = (d1, d2) => d1.toDateString() === d2.toDateString();

  const isSameWeek = (d1, d2) => {
    const start = new Date(d1);
    start.setDate(start.getDate() - start.getDay());
    start.setHours(0, 0, 0, 0);

    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);

    return d2 >= start && d2 <= end;
  };

  const isSameMonth = (d1, d2) =>
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const appointments = useMemo(() => {
    return incidents.filter((incident) => {
      const incidentDate = new Date(incident.appointmentDate);
      incidentDate.setHours(0, 0, 0, 0);

      if (incidentDate < today) return false;

      switch (filter) {
        case FILTERS.DAY:
          return isSameDay(selectedDate, incidentDate);

        case FILTERS.WEEK:
          return isSameWeek(selectedDate, incidentDate);

        case FILTERS.MONTH:
          return isSameMonth(selectedDate, incidentDate);

        default:
          return false;
      }
    });
  }, [incidents, selectedDate, filter, today]);

  const totalAppointments = appointments.length;

  const totalCost = useMemo(
    () =>
      appointments.reduce(
        (sum, app) => sum + (Number(app.cost) || 0),
        0
      ),
    [appointments]
  );

  const heading = {
    [FILTERS.DAY]: `Appointments on ${selectedDate.toDateString()}`,
    [FILTERS.WEEK]: `Appointments in the Week of ${selectedDate.toDateString()}`,
    [FILTERS.MONTH]: `Appointments in ${selectedDate.toLocaleString(
      "default",
      { month: "long", year: "numeric" }
    )}`,
  }[filter];

  return (
    <div className="calendar-page">
      <h2>Appointment Calendar</h2>

      <div className="calendar-layout">
        <div className="calendar-box">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>

        <div className="filter-box">
          <div className="filter-buttons">
            <button
              className={filter === FILTERS.DAY ? "active" : ""}
              onClick={() => setFilter(FILTERS.DAY)}
            >
              This Day
            </button>

            <button
              className={filter === FILTERS.WEEK ? "active" : ""}
              onClick={() => setFilter(FILTERS.WEEK)}
            >
              This Week
            </button>

            <button
              className={filter === FILTERS.MONTH ? "active" : ""}
              onClick={() => setFilter(FILTERS.MONTH)}
            >
              This Month
            </button>
          </div>

          <div className="appointments">
            <h3>{heading}</h3>

            {appointments.length ? (
              <>
                <ul>
                  {appointments.map((app) => (
                    <li key={app.id}>
                      <strong>{app.title}</strong>: {app.description} —{" "}
                      {app.status}
                    </li>
                  ))}
                </ul>

                <div className="totals">
                  <p>
                    <strong>Total Appointments:</strong>{" "}
                    {totalAppointments}
                  </p>

                  <p>
                    <strong>Total Cost:</strong>{" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(totalCost)}
                  </p>
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
