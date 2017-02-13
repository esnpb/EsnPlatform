import React from 'react';

export default function CrudButtons(props) {
  const onDelete = (a, b, c) => {
    if (props.onDelete) {
      props.onDelete.call(this, props.cell, props.row, a, b, c);
    }
  };

  const onEdit = (a, b, c) => {
    if (props.onEdit) {
      props.onEdit.call(this, props.cell, props.row, a, b, c);
    }
  };

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
            data-toggle="modal"
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
  onDelete: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  cell: React.PropTypes.string.isRequired,
  row: React.PropTypes.shape({}).isRequired,
};

CrudButtons.defaultProps = {
  onDelete: null,
  onEdit: null,
  cell: null,
  row: null,
};
