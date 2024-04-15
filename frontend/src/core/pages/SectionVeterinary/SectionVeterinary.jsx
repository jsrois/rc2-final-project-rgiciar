import "./SectionVeterinary.css";

import { WeightChart } from "../../components/VeterinaryComponents/WeightChart/WeightChart";
import { Files } from "../../components/VeterinaryComponents/Files/Files";


export const SectionVeterinary = () => {
  return (
    <main className="veterinaryContainer">
      <div className="titleSectionContainer">
        <h1 className="titleSection">Veterinary Section</h1>
      </div>
      <div>
        <WeightChart />
      </div>
      <Files />
    </main>
  )
}