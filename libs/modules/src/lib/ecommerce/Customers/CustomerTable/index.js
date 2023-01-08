import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppLoader from '@crema/components/AppLoader';

const CustomerTable = ({ customers, loading }) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className='table'>
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {loading ? (
            <AppLoader />
          ) : (
            customers.map((data) => <TableItem data={data} key={data.id} />)
          )}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default CustomerTable;

CustomerTable.defaultProps = {
  customers: [],
};

CustomerTable.propTypes = {
  customers: PropTypes.array,
  loading: PropTypes.bool,
};
