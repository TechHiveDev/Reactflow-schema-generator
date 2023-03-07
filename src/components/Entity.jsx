const Entity = () => {
  return (
    <table>
      <th colSpan={3}>Student</th>
      <tr>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
      </tr>
      <tr className="last-row">
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
        <td>
          <input type="text" style={{ display: "block" }} />
        </td>
      </tr>
    </table>
  );
};

export default Entity;
