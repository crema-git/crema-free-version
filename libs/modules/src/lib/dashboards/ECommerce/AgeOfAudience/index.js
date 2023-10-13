import React from 'react';
import AudienceChart from './AudienceChart';
import {Box} from '@mui/material';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AudienceCell from './AudienceCell';
import AppCard from "@crema/components/AppCard";
import AppList from "@crema/components/AppList";

const AgeOfAudience = ({audienceData}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['dashboard.eCommerce.ageAudience']}
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          padding: '8px 12px',
        }}
      >
        <AudienceChart audienceData={audienceData} />
      </Box>

      <AppList
        data={audienceData}
        renderRow={(audience) => (
          <AudienceCell key={'audience-' + audience.id} audience={audience} />
        )}
      />
    </AppCard>
  );
};

export default AgeOfAudience;

AgeOfAudience.propTypes = {
  audienceData: PropTypes.array,
};
