import "./NavBar.css";
import { Link } from "react-router-dom";

import { IconProfile } from "../../assets/images/IconProfile";
import { IconMenu } from "../../assets/images/IconMenu";
import { IconCat } from "../../assets/images/IconCat";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/myprofile">
        <button className="navbarButton"><IconProfile /></button>
      </Link>
      <Link to="/home">
        <button className="navbarButton"><IconMenu /></button>
      </Link>
      <Link to="/catprofile">
        <button className="navbarButton"><IconCat /></button>
      </Link>
    </div>
  );
};
