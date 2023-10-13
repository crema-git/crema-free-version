import React from 'react';
import AppCard from "@crema/components/AppCard";
import {useIntl} from 'react-intl';
import AppSelect from "@crema/components/AppSelect";

import OrderTable from './OrderTable';
import PropTypes from 'prop-types';

const RecentOrders = ({recentOrders}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      title={messages['eCommerce.recentOrders']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <OrderTable orderData={recentOrders} />
    </AppCard>
  );
};

export default RecentOrders;
RecentOrders.propTypes = {
  recentOrders: PropTypes.array,
};
