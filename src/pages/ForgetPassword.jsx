import "./App.css";
import logo from "../images/logo-removebg-preview.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Angle from "../component/Svg";
function ForgetPass() {
  return (
    <>
      <Link to="/signin">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>forgot password</h2>
            <p>dont wory , just tell us your email.</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Email" />
            <Link to="/otpcode" className="action_btn">Next</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
