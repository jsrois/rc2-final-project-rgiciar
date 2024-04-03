import "./MainMenu.css";
import iconVeterinary from "../../assets/images/icon_veterinary.svg";
import iconExpenses from "../../assets/images/icon_expenses.svg";
import iconCalendar from "../../assets/images/icon_calendar.svg";
import iconResources from "../../assets/images/icon_resources.svg";

export const MainMenu = () => {
  return (
    <section className="mainMenuContainer">
      <div className="sectionContainer">
        <p>Veterinary Section</p>
        <img src={iconVeterinary} alt="" />
      </div>
      <div className="sectionContainer">
        <p>Expenses Section</p>
        <img src={iconExpenses} alt="" />
      </div>
      <div className="sectionContainer">
        <p>Calendar</p>
        <img src={iconCalendar} alt="" />
      </div>
      <div className="sectionContainer">
        <p>Pet Care Resources</p>
        <img src={iconResources} alt="" />
      </div>
    </section>
  );
};
