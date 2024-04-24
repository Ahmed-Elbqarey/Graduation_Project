import "./App.css";
import logo from "../images/logo-removebg-preview.png";
import Angle from "../component/Svg";
import { Link } from "react-router-dom";

function ConfirmedPass() {
  return (
    <>
      <Link to="/">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>Forgot Password</h2>
            <p>Reset your Password</p>
          </div>
          <div className="form">
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Confirmed Password" />
            <Link to="/" className="action_btn">Next</Link>
            </div>
        </div>
      </div>
    </>
  );
}
export default ConfirmedPass;
