import React from 'react';

export default function ControlFor(props) {
  const { value } = props;
  let result = null;
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    // is float
    return <NumericFor />
  } else if (!isNaN(new Date(value).getDate())) {
    // is date
    return <CalendarFor />
  } else if (['true', 'false'].contains(value.toLower())) {
    // is checkbox
    return <CheckboxFor />
  }
  // is string
  return <TextFor />;
}

ControlFor.propTypes = {
  // your propTypes here
  title: React.PropTypes.string.isRequired,
};

ControlFor.defaultProps = {
  //your default props here
}
