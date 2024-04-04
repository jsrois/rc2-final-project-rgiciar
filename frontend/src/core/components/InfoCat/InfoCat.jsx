import "./InfoCat.css";
import { IconEdit } from "../../assets/images/IconEdit.jsx";

export const InfoCat = () => {
  return (
    <div className="infoCatContainer">
      <div>
        <h1>I love, </h1>
        <button className="buttonEdit">
          <IconEdit />
        </button>
      </div>
      <section className="catData">
        <p>Chip ID: </p>
        <p>Date of birth: </p>
        <p>Gender: </p>
        <p>Breed: </p>
        <p>Color: </p>
        <p>Identification features: </p>
        <p>Sterilized: </p>
        <p>Allergies: </p>
        <p>Health information: </p>
      </section>
    </div>
  );
};
