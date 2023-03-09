import { createContext, useState } from "react";
import FieldData from "./FieldData";

const Entity = ({ data }) => {
  const { entityData } = data;
  const entityName = entityData.entityName;
  const fieldsData = JSON.parse(JSON.stringify(entityData));
  delete fieldsData.entityName;

  const EntityContext = createContext({});
  const [jsonData, setJsonData] = useState({});

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>{entityName}</th>
        </tr>
      </thead>
      {Object.values(fieldsData).map((field, i) => {
        const { fieldName, fieldConstrains, fieldType } = field;
        return (
          <EntityContext.Provider value={{ jsonData, setJsonData }}>
            <FieldData
              key={i}
              entityName={entityName}
              name={fieldName}
              type={fieldType}
              constrains={fieldConstrains}
            />
          </EntityContext.Provider>
        );
      })}
    </table>
  );
};

export default Entity;
