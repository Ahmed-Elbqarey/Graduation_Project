import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";
import download_image from "../images/download.png";
import "./DownloadPage.css";

function DownloadPage() {
  return (
    <div className="download-page-container">
      <header className="download-page-header">
        <img src={logo} alt="Edu Verse Logo" className="download-page-logo" />
        <div className="header-links">
          <button className="download-button">Download EDU VERSE</button>
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        </div>
      </header>
      <div className="download-page-content">
        <div className="text-section">
          <h1>The Edu verse is now available</h1>
          <p>
            Connect with your colleagues with avatars and immersive 3D spaces.
          </p>
          <button className="download-app-button">
            DOWNLOAD THE EDUVERSE APP FOR DESKTOP
          </button>
        </div>
        <div className="image-section">
          <img
            src={download_image}
            alt="Edu Verse illustration"
            className="illustration-image"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;
