import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppLoader from '@crema/components/AppLoader';

const InvoiceTable = ({ invoiceData, loading, onChangeStatus }) => {
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
            invoiceData.map((data) => (
              <TableItem
                data={data}
                key={data.id}
                onChangeStatus={onChangeStatus}
              />
            ))
          )}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default InvoiceTable;

InvoiceTable.defaultProps = {
  productData: [],
};

InvoiceTable.propTypes = {
  productData: PropTypes.array,
  loading: PropTypes.bool,
};
