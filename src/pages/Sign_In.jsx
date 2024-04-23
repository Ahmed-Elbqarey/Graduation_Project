import "./App.css";
import logo from "../images/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import Angle from "../component/Svg";

function SignIn() {
  return (
    <>
      <Link to="/">
        <Angle />
      </Link>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>sign in</h2>
            <p>welcome back to edu vrse.</p>
          </div>
          <div className="form">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="password" />
            <Link to="/forgetpassword">Forgrt Password?</Link>
            <Link to="/SignUp">Dony Have accont?SignUp Now</Link>
            <button className="action_btn">sign in</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
