import "./InfoCat.css";
import { useState } from "react";
import { IconEdit } from "../../assets/images/IconEdit.jsx";

export const InfoCat = () => {
  const [isEditMode, setIsEditMode] = useState(false);
   const [catInfo, setCatInfo] = useState({
     name: "Briski",
     chipId: "8728723642874268",
     dateOfBirth: "25-03-2022",
     gender: "Male",
     breed: "American exotic",
     color: "Tabby cream",
     identificationFeatures: "He is very small. His jaw is crooked, showing a fang. His tail tip is also twisted.",
     sterilized: "Yes",
     allergies: "All poultries",
     healthInfo: "No"
   });


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
                value={catInfo.chipId}
                onChange={(e) => handleChange("chipId", e.target.value)}
              />
            </p>
            <p>
              Date of birth:{" "}
              <input
                type="text"
                value={catInfo.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
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
                value={catInfo.identificationFeatures}
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
                value={catInfo.healthInfo}
                onChange={(e) => handleChange("healthInfo", e.target.value)}
              />
            </p>
          </>
        ) : (
          <>
            <p>
              Chip ID: <span className="catInfoGreen">{catInfo.chipId}</span>
            </p>
            <p>
              Date of birth:{" "}
              <span className="catInfoGreen">{catInfo.dateOfBirth}</span>
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
              Identification features:{" "}
              <span className="catInfoGreen">
                {catInfo.identificationFeatures}
              </span>
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
              <span className="catInfoGreen">{catInfo.healthInfo}</span>
            </p>
          </>
        )}
      </section>
    </div>
  );
};
