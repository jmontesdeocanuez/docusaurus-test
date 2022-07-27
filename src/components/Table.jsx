import React from "react";

// Generate a <Table /> component that renders a <table> element with a <tbody>
// element and a <tr> element for each item in the array passed to it.
// The <tr> element should contain a <td> element for each item in the array.
// The <td> element should contain the item's index and the item's value.

const Table = ({ items }) => {
  return (
    <table>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
