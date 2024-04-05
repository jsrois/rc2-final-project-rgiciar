import "./SectionResources.css";

import { Header } from "../../components/Header/Header";
import { InProgress } from "../../components/InProgress/InProgress";
import { NavBar } from "../../components/NavBar/NavBar";

export const SectionResources = () => {
  return (
    <main className="resourcesContainer">
      <Header />
      <InProgress />
      <NavBar />
    </main>
  )
}
