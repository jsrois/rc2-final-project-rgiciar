import "./InfoCat.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { IconEdit } from "../../assets/images/IconEdit.jsx";

export const InfoCat = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [catInfo, setCatInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/cat/1`
        );
        setCatInfo(response.data);
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
    setCatInfo({
      ...catInfo, //Coge los valores existentes
      [field]: value, //Actualiza con los nuevos valores
    });
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="infoCatContainer">
      <div>
        <h1>
          I love, <span className="catInfoGreen">{catInfo.name}</span>
        </h1>
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
      <section className="catData">
        {isEditMode ? (
          <>
            <p>
              Chip ID:{" "}
              <input
                type="text"
                value={catInfo.chip_id}
                onChange={(e) => handleChange("chip_id", e.target.value)}
              />
            </p>
            <p>
              Date of birth:{" "}
              <input
                type="text"
                value={catInfo.dateOfBirth}
                onChange={(e) => handleChange("birth", e.target.value)}
              />
            </p>
            <p>
              Gender:{" "}
              <input
                type="text"
                value={catInfo.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
              />
            </p>
            <p>
              Breed:{" "}
              <input
                type="text"
                value={catInfo.breed}
                onChange={(e) => handleChange("breed", e.target.value)}
              />
            </p>
            <p>
              Color:{" "}
              <input
                type="text"
                value={catInfo.color}
                onChange={(e) => handleChange("color", e.target.value)}
              />
            </p>
            <p>
              Identification features:{" "}
              <input
                type="text"
                value={catInfo.features}
                onChange={(e) =>
                  handleChange("identificationFeatures", e.target.value)
                }
              />
            </p>
            <p>
              Sterilized:{" "}
              <input
                type="text"
                value={catInfo.sterilized}
                onChange={(e) => handleChange("sterilized", e.target.value)}
              />
            </p>
            <p>
              Allergies:{" "}
              <input
                type="text"
                value={catInfo.allergies}
                onChange={(e) => handleChange("allergies", e.target.value)}
              />
            </p>
            <p>
              Health information:{" "}
              <input
                type="text"
                value={catInfo.health}
                onChange={(e) => handleChange("health", e.target.value)}
              />
            </p>
          </>
        ) : (
          <>
            <p>
              Chip ID: <span className="catInfoGreen">{catInfo.chip_id}</span>
            </p>
            <p>
              Date of birth:{" "}
              <span className="catInfoGreen">{catInfo.birth}</span>
            </p>
            <p>
              Gender: <span className="catInfoGreen">{catInfo.gender}</span>
            </p>
            <p>
              Breed: <span className="catInfoGreen">{catInfo.breed}</span>
            </p>
            <p>
              Color: <span className="catInfoGreen">{catInfo.color}</span>
            </p>
            <p>
              Identification features:{" "} <span className="catInfoGreen">{catInfo.features}</span>
            </p>
            <p>
              Sterilized:{" "}
              <span className="catInfoGreen">{catInfo.sterilized}</span>
            </p>
            <p>
              Allergies:{" "}
              <span className="catInfoGreen">{catInfo.allergies}</span>
            </p>
            <p>
              Health information:{" "}
              <span className="catInfoGreen">{catInfo.health}</span>
            </p>
          </>
        )}
      </section>
    </div>
  );
};
