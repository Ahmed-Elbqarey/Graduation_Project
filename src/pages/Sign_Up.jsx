import "./App.css";
import logo from "../images/logo-removebg-preview.png";
import Angle from "../component/Svg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function SignUp() {
  return (
    <>
      <Link to="/signin">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>sign up</h2>
            <p>welcome to edu vrse.</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="Confirmed Password" />
            <button className="action_btn">sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
