import "./App.css";
import logo from "../images/logo-removebg-preview.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Angle from "../component/Svg";
function OtpCode() {
  return (
    <>
      <Link to="/forgetpassword">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>forgot password</h2>
            <p>We just sent a code to ahmedelsberbawy@gmail.com.</p>
          </div>
          <div className="form">
            <input type="number" maxLength={6} placeholder="Enter Code" />
            <Link to="/confirmePassword" className="action_btn">
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtpCode;
