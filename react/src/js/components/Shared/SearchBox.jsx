import React from 'react';

export default function SearchBox() {
  return (
    <div class="input-group custom-search-form">
      <input type="text" class="form-control" placeholder="Search..." />
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">
          <i class="fa fa-search" />
        </button>
      </span>
    </div>
  );
}
