import { useState, useRef } from "react";
import { editJson, deleteOldJsonField } from "../util/schema";

const FieldData = ({ entityName, name, type, constrains }) => {
  const [fieldName, setFieldName] = useState(name);
  const [fieldType, setFieldType] = useState(type);
  const [fieldConstrains, setFieldConstrains] = useState(constrains);

  const fieldNameRef = useRef();
  const fieldTypeRef = useRef();
  const fieldConstrainsRef = useRef();

  const updateJsonSchema = () => {
    const fieldName = fieldNameRef.current.value;
    const fieldType = fieldTypeRef.current.value;
    const fieldConstrains = fieldConstrainsRef.current.value;
    editJson(entityName, fieldName, fieldType, fieldConstrains);
  };

  const handleChangeName = (e) => {
    //deleteOldJsonField(entityName, fieldNameRef.previous.value);
    updateJsonSchema();
    console.log("old", e.target.value);
    setFieldName(e.target.value);
  };

  const handleChangeType = (e) => {
    setFieldType(e.target.value);
    updateJsonSchema();
  };

  const handleChangeConstrains = (e) => {
    setFieldConstrains(e.target.value);
    updateJsonSchema();
  };

  return (
    <tr>
      <td>
        <input
          type="text"
          value={fieldName}
          ref={fieldNameRef}
          onChange={handleChangeName}
        />
      </td>
      <td>
        <input
          type="text"
          value={fieldType}
          ref={fieldTypeRef}
          onChange={handleChangeType}
        />
      </td>
      <td>
        <input
          type="text"
          value={fieldConstrains}
          ref={fieldConstrainsRef}
          onChange={handleChangeConstrains}
        />
      </td>
    </tr>
  );
};

export default FieldData;
