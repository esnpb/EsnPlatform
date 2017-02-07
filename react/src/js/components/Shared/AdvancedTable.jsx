import React from 'react';
import TableToolbar from './Table/TableToolbar';
import Table from './Table/Table';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';
import TableFooter from './Table/TableFooter';
import TablePager from './Table/TablePager';

export default function AdvancedTable(props) {
  const allClasses = `dataTables_wrapper form-inline dt-bootstrap no-footer ${props.classes}`;
  return (
    <div class={allClasses}>
      {props.children}
    </div>
  );
}

AdvancedTable.propTypes = {
  // your propTypes here
  classes: React.PropTypes.string,
  children: React.PropTypes.node,
};

AdvancedTable.defaultProps = {
  classes: '',
  children: null,
};

export {
  AdvancedTable,
  TableToolbar,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TablePager,
};
