import { useState } from "react";

const FieldData = () => {
  const fieldNameRef = useRef();
  const fieldTypeRef = useRef();
  const fieldConstrainsRef = useRef();

  return (
    <tr>
      <td>
        <input type="text" value={fieldName} ref={fieldNameRef} />
      </td>
      <td>
        <input type="text" value={fieldType} ref={fieldTypeRef} />
      </td>
      <td>
        <input type="text" value={fieldConstrains} ref={fieldConstrainsRef} />
      </td>
    </tr>
  );
};

export default FieldData;
