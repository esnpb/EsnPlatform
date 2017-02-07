import React from 'react';
import ShortId from 'shortid';

export default function TableHeader(props) {
  const defColStyle = {
    width: '20%',
  };
  const headerCells = props.header.map((cell, index) =>
    <th
      key={ShortId.generate()}
      class={cell.class}
      tabIndex={cell.tabIndex || index}
      aria-controls={cell.ariaControls}
      rowSpan={cell.rowSpan}
      colSpan={cell.colSpan}
      aria-sort={cell.ariaSort}
      aria-label={cell.ariaLabel}
      style={cell.style || defColStyle}
    >
      {cell.value}
    </th>
  );

  return (
    <thead>
      <tr role="row">
        {headerCells}
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  // your propTypes here
};
