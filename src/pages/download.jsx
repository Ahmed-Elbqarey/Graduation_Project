import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";
import download_image from "../images/download.png";
import "./DownloadPage.css";
import Facebook from "../component/iconsSvg/facebook";
import Twitter from "../component/iconsSvg/twitter";
import Google from "../component/iconsSvg/google";
import LinkedInIcon from "../component/iconsSvg/linkedin";
import YouTubeIcon from "../component/iconsSvg/youtube";

function DownloadPage() {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/download", {
        responseType: "blob", // Ensure the response type is blob for file download
      });

      // Create a new Blob object using the response data
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "EduVerseApp.zip"); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <>
      <div className="download-page-container">
        <header className="download-page-header">
          <a href="/">
            <img
              src={logo}
              alt="Edu Verse Logo"
              className="download-page-logo"
            />
          </a>
          <div className="header-links">
            <button className="download-button" onClick={handleDownload}>
              Download EDU VERSE
            </button>
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
            <button className="download-app-button" onClick={handleDownload}>
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
      <div className="footer" style={{ marginTop: "50px" }}>
        <div className="media_links">
          <div className="icons">
            <Facebook />
            <Twitter />
            <Google />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
          <div className="nav">
            <ul>
              <li>
                <a href="#key">Key Benefits</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#started">Get Started</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy_right">
          Copyright &copy; 2024; Designed by{" "}
          <span style={{ color: "gray" }}>EDUVERSE Team</span>
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
