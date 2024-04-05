import "./MainMenu.css";
import { Link } from "react-router-dom";

import iconVeterinary from "../../assets/images/icon_veterinary.svg";
import iconExpenses from "../../assets/images/icon_expenses.svg";
import iconCalendar from "../../assets/images/icon_calendar.svg";
import iconResources from "../../assets/images/icon_resources.svg";

export const MainMenu = () => {
  return (
    <section className="mainMenuContainer">
      <Link to="/veterinary">
        <div className="sectionContainer">
          <p>Veterinary Section</p>
          <img src={iconVeterinary} alt="" />
        </div>
      </Link>
      <Link to="/expenses">
        <div className="sectionContainer">
          <p>Expenses Section</p>
          <img src={iconExpenses} alt="" />
        </div>
      </Link>
      <Link to="/calendar">
        <div className="sectionContainer">
          <p>Calendar</p>
          <img src={iconCalendar} alt="" />
        </div>
      </Link>
      <Link to="/resources">
        <div className="sectionContainer">
          <p>Pet Care Resources</p>
          <img src={iconResources} alt="" />
        </div>
      </Link>
    </section>
  );
};
