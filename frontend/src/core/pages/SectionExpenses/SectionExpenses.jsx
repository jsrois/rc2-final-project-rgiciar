import "./SectionExpenses.css";

import { InProgress } from "../../components/InProgress/InProgress";

export const SectionExpenses = () => {
  return (
    <main className="expensesContainer">
      <div className="titleSectionContainer">
        <h1 className="titleSection">Expenses Section</h1>
      </div>
      <div>
        <InProgress />
      </div>
    </main>
  );
};
