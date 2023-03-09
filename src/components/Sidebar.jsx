import "./sidebar-style.module.css";
import FieldInput from "./FieldInput.jsx";
import { useState } from "react";
import { createContext } from "react";
import { addEntity } from "../util/schema";

export const EntityContext = createContext([]);
const Sidebar = ({ addNode }) => {
  const [entityData, setEntityData] = useState({});
  const [entityName, setEntityName] = useState("");
  const [numberFields, setNumberFields] = useState(1);

  const handleCreateField = () => {
    setNumberFields(numberFields + 1);
  };

  const handleCreateEntities = () => {
    addEntity({ entityName, ...entityData });
    addNode({ entityName, ...entityData });
  };

  const handleOnChange = (e) => {
    setEntityName(e.target.value);
  };

  return (
    <aside>
      <h1>Create/Edit New Entity</h1>
      <form>
        <legend>New Entity</legend>
        Entity name
        <input type="text" onChange={handleOnChange} value={entityName} />
      </form>
      <EntityContext.Provider value={{ entityData, setEntityData }}>
        {[...Array(numberFields)].map((_, i) => (
          <FieldInput key={i} fieldId={i} />
        ))}
      </EntityContext.Provider>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style={{
          width: "30px",
          height: "30px",
          display: "block",
          cursor: "pointer",
        }}
        onClick={handleCreateField}
      >
        <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
      </svg>
      <button onClick={handleCreateEntities}>Create Entity</button>
    </aside>
  );
};

export default Sidebar;
