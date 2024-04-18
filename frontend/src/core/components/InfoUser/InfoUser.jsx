import "./InfoUser.css";
import { useEffect, useState } from "react";
import { IconEdit } from "../../assets/images/IconEdit.jsx";
import axios from "axios";

export const InfoUser = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/1`
        );
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

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
                value={userInfo.centername}
                onChange={(e) => handleChange("centername", e.target.value)}
              />
            </p>
            <p>Veterinary Info:</p>
            <p>
              Veterinary Name:{" "}
              <input
                type="text"
                value={userInfo.vetname}
                onChange={(e) => handleChange("vetname", e.target.value)}
              />
            </p>
            <p>
              Phone:{" "}
              <input
                type="text"
                value={userInfo.vetphone}
                onChange={(e) => handleChange("vetphone", e.target.value)}
              />
            </p>
            <p>
              Emergency Phone:{" "}
              <input
                type="text"
                value={userInfo.emergencyphone}
                onChange={(e) => handleChange("emergencyphone", e.target.value)}
              />
            </p>
            <p>
              Direction:{" "}
              <input
                type="text"
                value={userInfo.vetdirection}
                onChange={(e) => handleChange("vetdirection", e.target.value)}
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
              <span className="catInfoGreen">{userInfo.centername}</span>
            </p>
            <p>
              Veterinary Name:{" "}
              <span className="catInfoGreen">{userInfo.vetname}</span>
            </p>
            <p>
              Phone: <span className="catInfoGreen">{userInfo.vetphone}</span>
            </p>
            <p>
              Emergency Phone:{" "}
              <span className="catInfoGreen">{userInfo.emergencyphone}</span>
            </p>
            <p>
              Direction:{" "}
              <span className="catInfoGreen">{userInfo.vetdirection}</span>
            </p>
          </>
        )}
      </section>
    </div>
  );
};
