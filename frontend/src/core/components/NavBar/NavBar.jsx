import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

import { IconProfile } from "../../assets/images/IconProfile";
import { IconMenu } from "../../assets/images/IconMenu";
import { IconCat } from "../../assets/images/IconCat";

export const NavBar = () => {

  const location = useLocation();

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <Link to="/myprofile">
          <button data-testid="myprofile-button" className={location.pathname === '/myprofile' ? 'navbarButton active' : 'navbarButton'}><IconProfile /></button>
        </Link>
        <Link to="/home">
          <button data-testid="home-button" className={location.pathname === '/home' ? 'navbarButton active' : 'navbarButton'}><IconMenu /></button>
        </Link>
        <Link to="/catprofile">
          <button data-testid="catprofile-button" className={location.pathname === '/catprofile' ? 'navbarButton active' : 'navbarButton'}><IconCat /></button>
        </Link>
      </div>
    </div>
  );
};
