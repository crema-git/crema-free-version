import React from 'react';
import AppCard from '@crema/components/AppCard';
import TransactionTable from './TransactionTable';
import AppSelect from '@crema/components/AppSelect';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const OrderNTransaction = ({transactionData}) => {
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      contentStyle={{px: 0}}
      title={messages['dashboard.analytics.ordersTransaction']}
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
      <TransactionTable transactionData={transactionData} />
    </AppCard>
  );
};

export default OrderNTransaction;

OrderNTransaction.propTypes = {
  transactionData: PropTypes.array,
};
