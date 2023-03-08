import React, { useContext, useRef, useState } from "react";
import styles from "./field-data.module.css";
import { EntityContext } from "./Sidebar";

const FieldInput = ({ fieldId }) => {
  const { entityData, setEntityData } = useContext(EntityContext);

  const fieldNameRef = useRef();
  const fieldTypeRef = useRef();
  const fieldConstrainsRef = useRef();

  const onChange = (e) => {
    setEntityData({
      ...entityData,
      [fieldId]: {
        fieldName: fieldNameRef.current.value,
        fieldType: fieldTypeRef.current.value,
        fieldConstrains: fieldConstrainsRef.current.value,
      },
    });
  };

  return (
    <>
      <fieldset>
        <legend>Add new Field</legend>
        <div>
          <label>Name :</label>
          <input
            type="text"
            className={styles.sidebarInput}
            onChange={onChange}
            ref={fieldNameRef}
          />
        </div>
        <div>
          <label>Type :</label>
          <input
            type="text"
            className={styles.sidebarInput}
            onChange={onChange}
            ref={fieldTypeRef}
          />
        </div>
        <div>
          <label>Constrains :</label>
          <input
            type="text"
            className={styles.sidebarInput}
            onChange={onChange}
            ref={fieldConstrainsRef}
          />
        </div>
      </fieldset>
    </>
  );
};

export default FieldInput;
