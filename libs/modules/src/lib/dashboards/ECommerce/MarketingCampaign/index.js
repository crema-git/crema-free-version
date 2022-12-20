import React from 'react';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import MarketingTable from './MarketingTable';
import PropTypes from 'prop-types';

const MarketingCampaign = ({ marketingCampaign }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      title={messages['eCommerce.marketingCampaign']}
      contentStyle={{ px: 0 }}
    >
      <MarketingTable marketingCampaign={marketingCampaign} />
    </AppCard>
  );
};

export default MarketingCampaign;

MarketingCampaign.propTypes = {
  marketingCampaign: PropTypes.array,
};
