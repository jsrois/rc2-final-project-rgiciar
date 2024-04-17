import "./InfoUser.css";
import { useState } from "react";
import { IconEdit } from "../../assets/images/IconEdit.jsx";

export const InfoUser = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Iciar Rodríguez",
    phone: "435 675 988",
    direction: "Feline Avenue, nº123 - Meowtown, CA 90210",
    centerName: "Veterinary Clinic",
    vetName: "Mia Whiskers",
    vetPhone: "412 635 021",
    emergencyPhone: "433 627 372",
    vetDirection: "Purrfect Place, nº21 - Whisker City, NY 10001",
  });

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleChange = (field, value) => {
    setUserInfo({
      ...userInfo, //Coge los valores existentes
      [field]: value, //Actualiza con los nuevos valores
    });
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="infoUserContainer">
      <div>
        <h1>My profile</h1>
        {isEditMode ? (
          <button className="buttonSave" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="buttonEdit" onClick={handleEditClick}>
            <IconEdit />
          </button>
        )}
      </div>
      <section className="userData">
        {isEditMode ? (
          <>
            <p>
              Name:{" "} {/* Se pone {" "} para agregar un espacio en blanco */}
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </p>
            <p>
              Phone:{" "}
              <input
                type="text"
                value={userInfo.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </p>
            <p>
              Direction:{" "}
              <input
                type="text"
                value={userInfo.direction}
                onChange={(e) => handleChange("direction", e.target.value)}
              />
            </p>
            <p>
              Center Name:{" "}
              <input
                type="text"
                value={userInfo.centerName}
                onChange={(e) => handleChange("centerName", e.target.value)}
              />
            </p>
            <p>Veterinary Info:</p>
            <p>
              Veterinary Name:{" "}
              <input
                type="text"
                value={userInfo.vetName}
                onChange={(e) => handleChange("vetName", e.target.value)}
              />
            </p>
            <p>
              Phone:{" "}
              <input
                type="text"
                value={userInfo.vetPhone}
                onChange={(e) => handleChange("vetPhone", e.target.value)}
              />
            </p>
            <p>
              Emergency Phone:{" "}
              <input
                type="text"
                value={userInfo.emergencyPhone}
                onChange={(e) => handleChange("emergencyPhone", e.target.value)}
              />
            </p>
            <p>
              Direction:{" "}
              <input
                type="text"
                value={userInfo.vetDirection}
                onChange={(e) => handleChange("vetDirection", e.target.value)}
              />
            </p>
          </>
        ) : (
          <>
            <p>
              Name: <span className="catInfoGreen">{userInfo.name}</span>
            </p>
            <p>
              Phone: <span className="catInfoGreen">{userInfo.phone}</span>
            </p>
            <p>
              Direction:{" "}
              <span className="catInfoGreen">{userInfo.direction}</span>
            </p>
            <br />
            <p>Veterinary Info:</p>
            <p>
              Center Name:{" "}
              <span className="catInfoGreen">{userInfo.centerName}</span>
            </p>
            <p>
              Veterinary Name:{" "}
              <span className="catInfoGreen">{userInfo.vetName}</span>
            </p>
            <p>
              Phone: <span className="catInfoGreen">{userInfo.vetPhone}</span>
            </p>
            <p>
              Emergency Phone:{" "}
              <span className="catInfoGreen">{userInfo.emergencyPhone}</span>
            </p>
            <p>
              Direction:{" "}
              <span className="catInfoGreen">{userInfo.vetDirection}</span>
            </p>
          </>
        )}
      </section>
    </div>
  );
};
