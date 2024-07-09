import React, { useState, useEffect } from "react";
import "./ProfileSettings.css";
import logo from "../images/logo-removebg-preview.png";
import profile_image from "../images/profile_image.jpg";

function ProfileSettings() {
  document.title = "Profile Settings";

  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    email: "",
    password: "************", // Placeholder for password
  });

  const [isEditing, setIsEditing] = useState({
    fullName: false,
    birthDate: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    // Fetch user data from the API when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
        }
      });
      // console.log(response)
      const data = await response.json();
      setFormData({
        fullName: data.fullName,
        birthDate: new Date(data.dob).toLocaleDateString(), // Format date as needed
        email: data.email,
        password: "************", // Do not fetch actual password
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          gender: "male" // Add other fields as needed
        }),
      });
      if (response.ok) {
        console.log("Data saved:", formData);
        setIsEditing({
          fullName: false,
          birthDate: false,
          email: false,
          password: false,
        });
      } else {
        console.error("Error saving data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="profile-settings-container">
      <header className="profile-settings-header">
        <a href="/">
          <img
            src={logo}
            alt="Edu Verse Logo"
            className="profile-settings-logo"
          />
        </a>
        <div>
          <button className="profile-settings-download">
            Download EDU VERSE
          </button>
          <img src={profile_image} className="profile_image" alt="" />
        </div>
      </header>

      <div className="profile-settings-content">
        <div className="profile-photo-section">
          <img src={profile_image} alt="Profile" className="profile-photo" />
          <button className="edit-photo-button">EDIT PHOTO</button>
        </div>
        <div className="profile-info-section">
          <h2>PROFILE INFO</h2>
          <div className="profile-info-item">
            <label>FULL NAME</label>
            {isEditing.fullName ? (
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            ) : (
              <span>{formData.fullName}</span>
            )}
            <button onClick={() => handleEdit("fullName")}>EDIT</button>
          </div>
          <div className="profile-info-item">
            <label>DATE OF BIRTH</label>
            {isEditing.birthDate ? (
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
              />
            ) : (
              <span>{formData.birthDate}</span>
            )}
            <button onClick={() => handleEdit("birthDate")}>EDIT</button>
          </div>
          <div className="profile-info-item">
            <label>EMAIL</label>
            {isEditing.email ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            ) : (
              <span>{formData.email}</span>
            )}
            <button onClick={() => handleEdit("email")}>EDIT</button>
          </div>
          <div className="profile-info-item">
            <label>PASSWORD</label>
            {isEditing.password ? (
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            ) : (
              <span>{formData.password}</span>
            )}
            <button onClick={() => handleEdit("password")}>EDIT</button>
          </div>
          <button className="save-button" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;
