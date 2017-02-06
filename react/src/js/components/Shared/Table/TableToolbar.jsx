import React from 'react';

export default function TableToolbar(props) {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div class="dataTables_length" id="dataTables-example_length">
          <label>Show
            <select
              name="dataTables-example_length"
              aria-controls="dataTables-example"
              class="form-control input-sm">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> entries</label>
        </div>
      </div>
      <div class="col-sm-6">
        <div id="dataTables-example_filter" class="dataTables_filter">
          <label>Search:
            <input type="search" class="form-control input-sm" placeholder=""
              aria-controls="dataTables-example"/>
          </label>
        </div>
      </div>
    </div>
  );
}

TableToolbar.propTypes = {
  // your propTypes here

};
