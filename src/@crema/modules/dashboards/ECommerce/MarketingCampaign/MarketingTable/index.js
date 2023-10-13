import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppScrollbar from '@crema/components/AppScrollbar';

import TableHeading from './TableHeading';
import TableItem from './TableItem';

const OrderTable = ({marketingCampaign}) => {
  return (
    <AppTableContainer>
      <AppScrollbar sx={{maxHeight: {xs: 365, lg: 340}}}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {marketingCampaign.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default OrderTable;

OrderTable.defaultProps = {
  marketingCampaign: [],
};

OrderTable.propTypes = {
  marketingCampaign: PropTypes.array,
};
