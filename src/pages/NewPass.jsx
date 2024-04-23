import "./App.css";
import logo from "../images/logo-removebg-preview.png";

function NewPass() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="" />
        <div className="parent">
          <div className="top">
            <h2>forgot password</h2>
            <p>reset your password</p>
          </div>
          <div className="form">
            <input type="password" placeholder="New Password" />
            <input type="password" placeholder="Reset Password" />
            <button className="action_btn">next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPass;
