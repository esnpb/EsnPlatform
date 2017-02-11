import React from 'react';

export default function CrudButtons(props) {
  const onDelete = props.onDelete !== undefined ? props.onDelete.bind(this) : undefined;
  const onEdit = props.onEdit !== undefined ? props.onEdit.bind(this) : undefined;
  return (
    <div >
      {
        onEdit ?
          <button
            type="button"
            class="btn btn-circle btn-outline btn-success"
            onClick={onEdit}
          >
            <i class="fa fa-pencil" />
          </button> : null
      }
      {
        onDelete ?
          <button
            type="button"
            class="btn btn-circle btn-outline btn-danger"
            onClick={onDelete}
          >
            <i class="fa fa-times" />
          </button> : null
      }
    </div>
  );
}

CrudButtons.propTypes = {
  // your propTypes here
  onDelete: React.PropTypes.bool,
  onEdit: React.PropTypes.bool,
};

CrudButtons.defaultProps = {
  onDelete: true,
  onEdit: true,
};
