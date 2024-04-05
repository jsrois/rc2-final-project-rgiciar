import "./SectionVeterinary.css";

import { Header } from "../../components/Header/Header";
import { InProgress } from "../../components/InProgress/InProgress";
import { NavBar } from "../../components/NavBar/NavBar";

export const SectionVeterinary = () => {
  return (
    <main className="veterinaryContainer">
      <Header />
      <InProgress />
      <NavBar />
    </main>
  )
}
