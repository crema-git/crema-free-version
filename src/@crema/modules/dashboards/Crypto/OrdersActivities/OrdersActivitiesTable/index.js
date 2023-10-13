import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppScrollbar from '@crema/components/AppScrollbar';

const OrdersActivitiesTable = ({ordersActivities}) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{maxHeight: 388}}>
        <Table stickyHeader>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {ordersActivities.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default OrdersActivitiesTable;

OrdersActivitiesTable.propTypes = {
  ordersActivities: PropTypes.array,
};
