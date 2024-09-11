import React from 'react';
import PopularCoinsTable from './PopularCoinsTable';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const PopularCoins = ({ popularCoins = [] }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ px: 0 }}
      title={messages['dashboard.popularCoins']}
      action={messages['common.viewAll']}
    >
      <PopularCoinsTable popularCoins={popularCoins} />
    </AppCard>
  );
};

export default PopularCoins;

PopularCoins.propTypes = {
  popularCoins: PropTypes.array,
};
