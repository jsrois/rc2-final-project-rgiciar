import "./InfoUser.css";
import { IconEdit } from "../../assets/images/IconEdit.jsx";

export const InfoUser = () => {
  return (
    <div className="infoUserContainer">
      <div>
        <h1>My profile</h1>
        <button className="buttonEdit">
          <IconEdit />
        </button>
      </div>
      <section className="userData">
        <p>Name: </p>
        <p>Phone: </p>
        <p>Direction</p>
      </section>
      <section className="veterinaryData">
        <p>Veterinary Info: </p>
        <p>Center name: </p>
        <p>Veterinary name: </p>
        <p>Phone: </p>
        <p>Emergency phone: </p>
        <p>Direction: </p>
      </section>
    </div>
  );
};
