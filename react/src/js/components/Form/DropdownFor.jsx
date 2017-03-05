import React from 'react';
import { splitCamelCase } from '../../helpers/strings';

export default function DropdownFor(props) {
  const labelText = props.label || splitCamelCase(props.field);
  const controlName = props.name || props.field;
  const data = props.data.map(item =>
    <option
      key={item.val}
      value={item.val}
      selected={props.value == item.val}
    >{item.text}</option>
  );
  return (
    <div class="form-group">
      <label htmlFor={controlName}>{labelText}</label>
      <select class="form-control">
        {data}
      </select>
    </div>
  );
}

DropdownFor.propTypes = {
  // your propTypes here
  field: React.PropTypes.string.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    val: React.PropTypes.string.isRequired,
    text: React.PropTypes.string,
  })).isRequired,
  item: React.PropTypes.shape({}).isRequired,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  readOnly: React.PropTypes.bool,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

DropdownFor.defaultProps = {
  //your default props here
  field: '',
  data: [],
  item: {},
  label: '',
  name: '',
  readOnly: false,
  type: '',
  onChange: null,
}
