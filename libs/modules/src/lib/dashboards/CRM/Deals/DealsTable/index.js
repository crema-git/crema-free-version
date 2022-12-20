import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';

const DealsTable = (props) => {
  const { dealsTableData } = props;

  return (
    <AppTableContainer>
      <Table className="table">
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody
          sx={{
            borderBottom: '0 none',
          }}
        >
          {dealsTableData.map((row) => (
            <TableItem row={row} key={row.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default DealsTable;

DealsTable.defaultProps = {
  dealsTableData: [],
};

DealsTable.propTypes = {
  dealsTableData: PropTypes.array,
};
