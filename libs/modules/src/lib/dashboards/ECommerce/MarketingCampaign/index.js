import React from 'react';
import AppCard from "@crema/components/AppCard";
import {useIntl} from 'react-intl';
import MarketingTable from './MarketingTable';
import PropTypes from 'prop-types';
import AppSelect from "@crema/components/AppSelect";

const MarketingCampaign = ({marketingCampaign}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };

  return (
    <AppCard
      title={messages['eCommerce.marketingCampaign']}
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
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
      <MarketingTable marketingCampaign={marketingCampaign} />
    </AppCard>
  );
};

export default MarketingCampaign;

MarketingCampaign.propTypes = {
  marketingCampaign: PropTypes.array,
};
