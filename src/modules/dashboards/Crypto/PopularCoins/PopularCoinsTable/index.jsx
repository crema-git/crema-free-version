import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';

const PopularCoinsTable = (props) => {
  const { popularCoins } = props;

  return (
    <AppTableContainer>
      <Table>
        <TableHead
          sx={{
            borderBottom: '0 none',
          }}
        >
          <TableHeading />
        </TableHead>
        <TableBody>
          {popularCoins.map((row) => (
            <TableItem key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default PopularCoinsTable;

PopularCoinsTable.defaultProps = {
  popularCoins: [],
};

PopularCoinsTable.propTypes = {
  popularCoins: PropTypes.array,
};
