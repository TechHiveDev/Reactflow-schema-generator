import Axios from "axios";

const json = {
  definitions: {},
  type: "object",
  properties: {},
};

export const submitDataToServer = () => {
  fetch("http://localhost:3001/download", {
    responseType: "blob",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  })
    .then((res) => res.blob())
    .then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      const fileLink = document.createElement("a");
      fileLink.href = fileURL;
      const fileName = "schema.prisma";
      fileLink.setAttribute("download", fileName);
      fileLink.setAttribute("target", "_blank");
      document.body.appendChild(fileLink);
      fileLink.click();
      fileLink.remove();
    });
};

export const deleteOldJsonField = (entityName, fieldName) => {
  delete json["definitions"][entityName]["properties"][fieldName];
};

export const addEntity = (entityData) => {
  const { entityName } = entityData;
  delete entityData.entityName;
  json["definitions"][entityName] = {
    type: "object",
  };
  json["definitions"][entityName]["properties"] = {};
  Object.values(entityData).forEach((field) => {
    const { fieldName, fieldType, fieldConstrains } = field;
    json["definitions"][entityName]["properties"][fieldName] = {
      type: fieldType,
    };
  });
  json["properties"][entityName] = {
    $ref: `#/definitions/${entityName}`,
  };
};

export const editJson = (entityName, fieldName, fieldType, fieldConstrains) => {
  const entityData = json["definitions"][entityName]["properties"];
  json["definitions"][entityName]["properties"] = {
    ...entityData,
    [fieldName]: {
      type: fieldType,
    },
  };
};

export const initializeJsonSchema = () => {
  localStorage.setItem("jsonSchema", json);
};
