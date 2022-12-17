import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import TableContainer from '@mui/material/TableContainer';

const OrderTable = ({orderData}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {orderData.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  orderData: [],
};

OrderTable.propTypes = {
  orderData: PropTypes.array,
};
