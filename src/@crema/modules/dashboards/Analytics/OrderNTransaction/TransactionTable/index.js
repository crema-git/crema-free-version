import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';

const TransactionTable = ({transactionData}) => {
  return (
    <AppTableContainer>
      <Table className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {transactionData.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default TransactionTable;

TransactionTable.defaultProps = {
  transactionData: [],
};

TransactionTable.propTypes = {
  transactionData: PropTypes.array,
};
