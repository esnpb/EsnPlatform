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
        readOnly={props.readOnly}
        value={props.item[controlName]}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
}

TextFor.propTypes = {
  // your propTypes here
  field: React.PropTypes.string.isRequired,
  item: React.PropTypes.shape({}).isRequired,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  readOnly: React.PropTypes.bool,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

TextFor.defaultProps = {
  //your default props here
  field: '',
  item: {},
  label: '',
  name: '',
  readOnly: false,
  type: '',
  onChange: null,
}
