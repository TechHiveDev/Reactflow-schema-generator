import FieldData from "./FieldData";

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
      {Object.values(fieldsData).map((field, i) => {
        return <FieldData key={i} />;
      })}
    </table>
  );
};

export default Entity;
