import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Signup.css";

const DoctorLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isValid =
      email === "doctor@gmail.com" &&
      password === "doctor123";

    if (!isValid) {
      alert("Invalid doctor credentials");
      return;
    }

    alert("Login successful");
    navigate("/doctor/dashboard");
  };

  return (
    <div className="video-bg-wrapper doctor-bg">
      <form className="signup-form" onSubmit={handleLogin}>
        <h2>Doctor Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Doctor Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default DoctorLogin;
