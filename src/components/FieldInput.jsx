import React, { useContext, useState } from "react";
import styles from "./field-data.module.css";
import { EntityContext } from "./Sidebar";

const FieldInput = ({ fieldId }) => {
  const { entityData, setEntityData } = useContext(EntityContext);
  const [fieldData, setFieldData] = useState({});
  const onChange = (e) => {
    const value = e.target.value;
    setFieldData((fieldData) => ({
      ...fieldData,
      [e.target.name]: value,
    }));
    setEntityData({ ...entityData, [fieldId]: fieldData });
  };

  return (
    <>
      <fieldset>
        <legend>Add new Field</legend>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="fieldName"
            className={styles.sidebarInput}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Type :</label>
          <input
            type="text"
            name="fieldType"
            className={styles.sidebarInput}
            onChange={onChange}
          />
        </div>
        <div>
          <label>Constrains :</label>
          <input
            type="text"
            name="fieldConstrains"
            className={styles.sidebarInput}
            onChange={onChange}
          />
        </div>
      </fieldset>
    </>
  );
};

export default FieldInput;
