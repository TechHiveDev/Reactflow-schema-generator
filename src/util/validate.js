const validFields = (data) => {
  const toBeValidated = JSON.parse(JSON.stringify(data));
  const { entityName } = toBeValidated;
  if (!entityName.trim()) {
    return false;
  }
  delete toBeValidated.entityName;
  let valid = true;
  Object.values(toBeValidated).forEach((field) => {
    const { fieldName, fieldType } = field;
    console.log(fieldName, fieldType);
    if (emptyData(fieldName) || emptyData(fieldType)) {
      valid = false;
    }
  });
  return valid;
};

const emptyData = (data) => !data || !data.trim();

export default validFields;
