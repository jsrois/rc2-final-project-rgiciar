import "./SectionCalendar.css";

import { InProgress } from "../../components/InProgress/InProgress";

export const SectionCalendar = () => {
  return (
    <main className="calendarContainer">
      <div className="titleSectionContainer">
        <h1 className="titleSection">Calendar</h1>
      </div>
      <div>
        <InProgress />
      </div>
    </main>
  )
}
