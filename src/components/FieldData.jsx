import React, { useContext } from "react";
import { useState } from "react";
import Entity from "./Entity";
import styles from "./field-data.module.css";
import { EntityContext } from "./Sidebar";

const FieldData = ({ entityName }) => {
  const { entityData, setEntityData } = useContext(EntityContext);

  const onChange = (e) => {
    setEntityData({ ...entityData, [e.target.name]: e.target.value });
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

export default FieldData;
