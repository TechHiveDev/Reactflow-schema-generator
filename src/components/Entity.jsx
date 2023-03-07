const Entity = ({ data }) => {
  const { entityData } = data;
  const { entityName, fieldName, fieldType, fieldConstrains } = entityData;
  console.error(entityData);
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>{entityName}</th>
        </tr>
      </thead>
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
    </table>
  );
};

export default Entity;
