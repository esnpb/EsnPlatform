import React from 'react';

export default function TableGrid(props) {
  return (
    <table
      width="100%"
      class="table table-striped table-bordered table-hover dataTable no-footer dtr-inline"
      role="grid"
      aria-describedby="dataTables-example_info">
      {props.children}
    </table>
  );
}

TableGrid.propTypes = {
  // your propTypes here
  //title: React.PropTypes.string.isRequired,
};
