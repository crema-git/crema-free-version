import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import PropTypes from 'prop-types';

const CartTable = ({ cartItems, setTableData }) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {cartItems.map((data) => (
            <TableItem data={data} key={data.id} setTableData={setTableData} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default CartTable;

CartTable.propTypes = {
  cartItems: PropTypes.array,
  setTableData: PropTypes.func,
};
