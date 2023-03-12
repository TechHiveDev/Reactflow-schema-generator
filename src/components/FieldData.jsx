import { useState, useRef, useEffect } from "react";
import { editJson, deleteOldJsonField } from "../util/schema";

const FieldData = ({ entityName, name, type, constrains }) => {
  const [fieldName, setFieldName] = useState(name);
  const [fieldType, setFieldType] = useState(type);
  const [fieldConstrains, setFieldConstrains] = useState(constrains);

  const fieldNameRef = useRef();
  const fieldTypeRef = useRef();
  const fieldConstrainsRef = useRef();

  const prevFieldName = useRef();
  const prevFieldType = useRef();
  const prevFieldConstrains = useRef();

  useEffect(() => {
    prevFieldName.current = fieldName;
    prevFieldType.current = fieldType;
    prevFieldConstrains.current = fieldConstrains;
  }, [fieldName, fieldType, fieldConstrains]);

  const updateJsonSchema = () => {
    const fieldName = fieldNameRef.current.value;
    const fieldType = fieldTypeRef.current.value;
    const fieldConstrains = fieldConstrainsRef.current.value;
    editJson(entityName, fieldName, fieldType, fieldConstrains);
  };

  const handleChangeName = (e) => {
    deleteOldJsonField(entityName, prevFieldName.current);
    updateJsonSchema();
    setFieldName(e.target.value);
  };

  const handleChangeType = (e) => {
    deleteOldJsonField(entityName, prevFieldType.current);
    setFieldType(e.target.value);
    updateJsonSchema();
  };

  const handleChangeConstrains = (e) => {
    deleteOldJsonField(entityName, prevFieldConstrains.current);
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
