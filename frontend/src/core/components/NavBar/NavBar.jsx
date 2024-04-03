import "./NavBar.css";
import { Link } from "react-router-dom";

import iconProfile from "../../assets/images/icon_profile.svg";
import iconCat from "../../assets/images/icon_cat.svg";
import iconMenu from "../../assets/images/icon_menu.svg";



export const NavBar = () => {
  return (
    <div className="navbar">
        <Link to="/myprofile">
          <img src={iconProfile} alt="" />
        </Link>
        <Link to="/home">
          <img src={iconMenu} alt="" />
        </Link>
        <Link to="/catprofile">
          <img src={iconCat} alt="" />
        </Link>
    </div>
  )
}
