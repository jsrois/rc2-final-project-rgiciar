import "./SectionResources.css";

import { InProgress } from "../../components/InProgress/InProgress";

export const SectionResources = () => {
  return (
    <main className="resourcesContainer">
      <div className="titleSectionContainer">
        <h1 className="titleSection">Pet Care Section</h1>
      </div>
      <div>
        <InProgress />
      </div>
    </main>
  )
}
