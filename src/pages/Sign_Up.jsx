import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Angle from "../component/Svg";
import logo from "../images/logo-removebg-preview.png";
import "./App.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform validation
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill all fields");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords not match");
        return;
      }

      // Send data to the server
      const response = await axios.post("/api/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log(response.data); // Log the response from the server

      // Optionally, clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Link to="/signin">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>Sign up</h2>
            <p>Welcome to edu vrse.</p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" value={formData.name} placeholder="Name" />
            <input onChange={handleChange} type="email" name="email" value={formData.email} placeholder="Email" />
            <input onChange={handleChange} type="password" name="password" value={formData.password} placeholder="Password" />
            <input onChange={handleChange} type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm Password" />
            <button type="submit" className="action_btn">Sign up</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
