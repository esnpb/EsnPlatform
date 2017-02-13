import React from 'react';
import { splitCamelCase } from '../../helpers/strings';

export default function TextFor(props) {
  const labelText = props.label || splitCamelCase(props.field);
  const controlName = props.name || props.field;
  return (
    <div class="form-group">
      <label htmlFor={controlName}>{labelText}</label>
      <input
        name={controlName}
        class="form-control"
        readoOnly={props.readOnly}
        value={props.item[controlName]}
        type={props.type}
      />
    </div>
  );
}

TextFor.propTypes = {
  // your propTypes here
  field: React.PropTypes.string.isRequired,
  item: React.PropTypes.shape({}).isRequired,
};

TextFor.defaultProps = {
  //your default props here
  field: '',
  item: {},
}
