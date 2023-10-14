import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import OrdersActivitiesTable from './OrdersActivitiesTable';
import PropTypes from 'prop-types';

const OrdersActivities = ({ordersActivities}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={messages['dashboard.crypto.ordersActivities']}
      action={messages['common.viewAll']}
    >
      <OrdersActivitiesTable ordersActivities={ordersActivities} />
    </AppCard>
  );
};

export default OrdersActivities;

OrdersActivities.propTypes = {
  ordersActivities: PropTypes.array,
};
