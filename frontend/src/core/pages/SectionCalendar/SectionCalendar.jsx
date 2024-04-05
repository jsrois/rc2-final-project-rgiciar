import "./SectionCalendar.css";

import { Header } from "../../components/Header/Header";
import { InProgress } from "../../components/InProgress/InProgress";
import { NavBar } from "../../components/NavBar/NavBar";

export const SectionCalendar = () => {
  return (
    <main className="calendarContainer">
      <Header />
      <InProgress />
      <NavBar />
    </main>
  )
}
