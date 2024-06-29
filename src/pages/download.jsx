import React from "react";
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
        <div className="footer">
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
                  <a href="#key">Key Benifits</a>
                </li>
                <li>
                  <a href="#features">features</a>
                </li>
                <li>
                  <a href="#started">started</a>
                </li>
                <li>
                  <a href="#faqs">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copy_right">
            Copyright &copy; 2024; Designed by{" "}
            <span style={{ color: "gray" }}>EDUVERSE Team</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadPage;
