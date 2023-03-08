import { useState } from "react";
import FieldData from "./FieldData";

const Entity = ({ data }) => {
  const { entityData } = data;
  const entityName = entityData.entityName;
  const fieldsData = JSON.parse(JSON.stringify(entityData));
  delete fieldsData.entityName;

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
          <FieldData
            key={i}
            name={fieldName}
            type={fieldType}
            constrains={fieldConstrains}
          />
        );
      })}
    </table>
  );
};

export default Entity;
