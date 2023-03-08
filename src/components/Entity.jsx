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
      {Object.values(fieldsData).map((field) => {
        const { fieldName, fieldConstrains, fieldType } = field;
        return (
          <tr>
            <td>
              <input type="text" value={fieldName} />
            </td>
            <td>
              <input type="text" value={fieldType} />
            </td>
            <td>
              <input type="text" value={fieldConstrains} />
            </td>
          </tr>
        );
      })}
    </table>
  );
};

export default Entity;
