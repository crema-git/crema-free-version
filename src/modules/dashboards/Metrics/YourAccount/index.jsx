import React from 'react';
import AccountGraph from './AccountGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';

const YourAccount = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      title={messages['dashboard.yourAccount']}
      sxStyle={{ height: 1 }}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box
        sx={{
          mt: 'auto',
        }}
      >
        <AccountGraph data={data} />
      </Box>
    </AppCard>
  );
};

export default YourAccount;

YourAccount.defaultProps = {
  data: [],
};

YourAccount.propTypes = {
  data: PropTypes.array,
};
