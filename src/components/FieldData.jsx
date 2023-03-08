import { useState } from "react";

const FieldData = ({ name, type, constrains }) => {
  const [fieldName, setFieldName] = useState(name);
  const [fieldType, setFieldType] = useState(type);
  const [fieldConstrains, setFieldConstrains] = useState(constrains);
  return (
    <tr>
      <td>
        <input
          type="text"
          value={fieldName}
          onChange={(e) => {
            setFieldName(e.target.value);
            console.log(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={fieldType}
          onChange={(e) => {
            setFieldType(e.target.value);
            console.log(e.target.value);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          value={fieldConstrains}
          onChange={(e) => {
            setFieldConstrains(e.target.value);
            console.log(e.target.value);
          }}
        />
      </td>
    </tr>
  );
};

export default FieldData;
