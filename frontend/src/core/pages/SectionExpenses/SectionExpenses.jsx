import "./SectionExpenses.css";

import { Header } from "../../components/Header/Header";
import { InProgress } from "../../components/InProgress/InProgress";
import { NavBar } from "../../components/NavBar/NavBar";

export const SectionExpenses = () => {
  return (
    <main className="expensesContainer">
      <Header />
      <InProgress />
      <NavBar />
    </main>
  )
}
