import React, { useState } from "react";
import "./ProfileSettings.css";
import logo from "../images/logo-removebg-preview.png";
import profile_image from '../images/profile_image.jpg'

function ProfileSettings() {
  document.title = "Profile Settings";

  const [formData, setFormData] = useState({
    fullName: "AHMED MOHAMED ALI",
    birthDate: "8/7/2001",
    email: "AHMED3320@F-ENG.TANTA.EDU.EG",
    password: "************",
  });

  const [isEditing, setIsEditing] = useState({
    fullName: false,
    birthDate: false,
    email: false,
    password: false,
  });

  const handleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing({
      fullName: false,
      birthDate: false,
      email: false,
      password: false,
    });
    // Here you can add logic to save the updated data, e.g., sending it to the server
    console.log("Data saved:", formData);
  };

  return (
    <div className="profile-settings-container">
      <header className="profile-settings-header">
        <img src={logo} alt="Edu Verse Logo" className="profile-settings-logo" />
        <div>
        <button className="profile-settings-download">Download EDU VERSE</button>
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
