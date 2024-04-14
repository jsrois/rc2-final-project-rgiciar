import "./SectionVeterinary.css";

import { WeightChart } from "../../components/WeightChart/WeightChart";

export const SectionVeterinary = () => {
  return (
    <main className="veterinaryContainer">
      <div className="titleSectionContainer">
        <h1 className="titleSection">Veterinary Section</h1>
      </div>
      <div>
        <WeightChart />
      </div>
    </main>
  )
}
