import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppScrollbar from '@crema/components/AppScrollbar';

const DealsTable = (props) => {
  const { dealsTableData } = props;

  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 250 }}>
        <Table className='table' stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {dealsTableData.map((row) => (
              <TableItem row={row} key={row.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
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
