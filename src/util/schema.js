const json = {
  definitions: {},
  type: "object",
  properties: {},
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
  console.log(json);
};

export const editJson = (entityName, fieldName, fieldType, fieldConstrains) => {
  const entityData = json["definitions"][entityName]["properties"];
  json["definitions"][entityName]["properties"] = {
    ...entityData,
    [fieldName]: {
      type: fieldType,
    },
  };
  console.log(json);
};

export const initializeJsonSchema = () => {
  localStorage.setItem("jsonSchema", json);
};
