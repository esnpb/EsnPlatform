import React from 'react';
import ShortId from 'shortid';

export default function TableBody(props) {
  const tableRows = props.rows.map((row, rowIndex) => {
    const rowClass = `${row.class} ${rowIndex % 2 === 1 ? 'odd' : 'even'}`;
    return (
      <tr key={ShortId.generate()} class={rowClass} role="row"> {
        row.cells.map(cell =>
          <td
            key={ShortId.generate()}
            colSpan={cell.colSpan}
            rowSpan={cell.rowSpan}
            class={cell.class}
          >
            {cell.value}
          </td>,
        )
      }
      </tr>);
  });
  return (
    <tbody>
      {tableRows}
    </tbody>
  );
}

TableBody.propTypes = {
  // your propTypes here
  rows: React.PropTypes.arrayOf(React.PropTypes.object),
};

TableBody.defaultProps = {
  rows: [],
};
