import React from 'react';

export default function TableHeader(props) {
  const defColStyle = {
    'width': '20%',
  };
  return (
    <thead>
      <tr role="row">
        <th class="sorting_asc" tabIndex="0" aria-controls="dataTables-example"
          rowSpan="1" colSpan="1" aria-sort="ascending"
          aria-label="Rendering engine: activate to sort column descending"
          style={defColStyle}>Rendering engine</th>
        <th class="sorting" tabIndex="0" aria-controls="dataTables-example"
          rowSpan="1" colSpan="1"
          aria-label="Browser: activate to sort column ascending"
          style={defColStyle}>Browser</th>
        <th class="sorting" tabIndex="0" aria-controls="dataTables-example"
          rowSpan="1" colSpan="1"
          aria-label="Platform(s): activate to sort column ascending"
          style={defColStyle}>Platform(s)</th>
        <th class="sorting" tabIndex="0" aria-controls="dataTables-example"
          rowSpan="1" colSpan="1"
          aria-label="Engine version: activate to sort column ascending"
          style={defColStyle}>Engine version</th>
        <th class="sorting" tabIndex="0" aria-controls="dataTables-example"
          rowSpan="1" colSpan="1"
          aria-label="CSS grade: activate to sort column ascending"
          style={defColStyle}>CSS grade</th>
      </tr>
    </thead>
  );
}

TableHeader.propTypes = {
  // your propTypes here

};
