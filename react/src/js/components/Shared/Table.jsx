import React from 'react';
import TableToolbar from './Table/TableToolbar';
import TableGrid from './Table/TableGrid';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';
import TablePager from './Table/TablePager';
import TableFooter from './Table/TableFooter';

export default function Table(props) {
  return (
    <div class="dataTables_wrapper form-inline dt-bootstrap no-footer">
      {props.children}
    </div>
  );
}

Table.propTypes = {
  // your propTypes here
  classes: React.PropTypes.string,
};

Table.defaultProps = {
  classes: '',
}

export {
  Table,
  TableToolbar,
  TableGrid,
  TableHeader,
  TableBody,
  TableFooter,
  TablePager
};
