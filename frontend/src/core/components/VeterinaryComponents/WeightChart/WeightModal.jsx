import { useState } from "react";

export const WeightModal = ({ isOpen, onClose, onSave }) => {
  const [weight, setWeight] = useState("");

  const handleSave = () => {
    onSave(weight);
    setWeight("");
    onClose();
  };

  return (
    <div className="weightModal">
      <h2>Select Weight</h2>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
