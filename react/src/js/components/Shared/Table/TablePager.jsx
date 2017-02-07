import React from 'react';

export default function TablePager() {
  return (
    <div class="row">
      <div class="col-sm-6">
        <div
          class="dataTables_info"
          id="dataTables-example_info"
          role="status"
          aria-live="polite"
        >Showing 1 to 10 of 57 entries</div>
      </div>
      <div class="col-sm-6">
        <div class="dataTables_paginate paging_simple_numbers" id="dataTables-example_paginate">
          <ul class="pagination">
            <li
              class="paginate_button previous disabled"
              aria-controls="dataTables-example"
              tabIndex="0"
              id="dataTables-example_previous"
            >
              <a href="#test">Previous</a>
            </li>
            <li class="paginate_button active" aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">1</a>
            </li>
            <li class="paginate_button " aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">2</a>
            </li>
            <li class="paginate_button " aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">3</a>
            </li>
            <li class="paginate_button " aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">4</a>
            </li>
            <li class="paginate_button " aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">5</a>
            </li>
            <li class="paginate_button " aria-controls="dataTables-example" tabIndex="0">
              <a href="#test">6</a>
            </li>
            <li
              class="paginate_button next"
              aria-controls="dataTables-example"
              tabIndex="0"
              id="dataTables-example_next"
            >
              <a href="#test">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

TablePager.propTypes = {
  // your propTypes here
};
