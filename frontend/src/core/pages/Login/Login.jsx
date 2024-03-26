import "./Login.css";
import { Link } from "react-router-dom";
import arrowIn from "../../assets/images/arrow_in.svg"

export const Login = () => {
  return (
    <main className="login">
      <div className="greetingLogin">
        <span className="hey">Hey,</span>&nbsp;&nbsp;<span className="karen">Karen</span>
      </div>
      <div className="loginBoxes">
        <input type="text" placeholder="Insert your email"></input>
        <input type="password" placeholder="Insert your password"></input>
      </div>
      <Link to="/home">
        <button className="signin">
            <span>Sign in</span>
            <img src={arrowIn} alt="" />
        </button>
      </Link>
    </main>
  );
};
