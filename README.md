# Dental Center Management System

A comprehensive web-based system for managing appointments, patient data, and doctor interactions at a dental clinic.

# Features
- Doctor and Patient login support
- Add, Edit, and Cancel Appointments
- File upload support (PDFs, X-rays, Images)
- Add comments to appointments
- View patient and incident (appointment) tables
- Manage appointment status (Pending, Completed, Cancelled)

# Structure
DENTAL-CENTER-MANAGEMENT/
│
├── public/
│   ├── _redirects              
│   ├── blue_brush.png
│   ├── dentist.png
│   ├── doctor_Logo.jpg
│   ├── kid.png
│   ├── patient_Logo.png
│   └── women_teeth.png
│
├── src/
│   ├── components/             
│   │   ├── auth/
│   │   │   ├── DoctorLogin.jsx
│   │   │   └── PatientLogin.jsx
│   │   ├── calendar/
│   │   │   └── AppointmentCalendar.jsx
│   │   └── doctor/
│   │       ├── IncidentTable.jsx
│   │       └── PatientTable.jsx
│   │
│   ├── pages/                  
│   │   ├── Landing.jsx
│   │   ├── DoctorDashboard.jsx
│   │   └── PatientDashboard.jsx
│   │
│   ├── styles/                 
│   │   ├── Calendar.css
│   │   ├── DoctorDashboard.css
│   │   ├── Landing.css
│   │   ├── PatientDashboard.css
│   │   └── Signup.css
│   │
│   ├── App.jsx                 
│   ├── AppRouter.jsx          
│   ├── main.jsx               
│
├── .gitignore
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md

# Technical Decisions
- Used Vite over CRA for faster development.
- Kept localStorage to simulate backend without deployment.
- Simple file handling via base64 for prototype.
- Used component-level separation for scalability.

# Future Improvements
- Add Firebase or MongoDB backend
- Authentication with JWT
- File upload to cloud (e.g., AWS S3)

# vercel link : https://dental-center-management-git-main-siddhartha-vuggis-projects.vercel.app/

# screen shots :

![image](https://github.com/user-attachments/assets/dca5af98-2190-4f18-ac6d-cdfc1c871930)

![image](https://github.com/user-attachments/assets/d73b38ca-e701-4e6e-940c-5a645dd82c4a)

![image](https://github.com/user-attachments/assets/187b5a52-431d-4df0-ae2a-e5f0591bde13)
