import React from 'react';
import AppCard from '@crema/components/AppCard';
import Categories from './Categories';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import { useIntl } from 'react-intl';
import ChartView from './ChartView';
import { Box } from '@mui/material';

export const EmailMarking = ({ emailMarketing }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.crm.emailMarketing']}
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          mb: 3,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ChartView data={emailMarketing} />
      </Box>
      <List
        sx={{
          padding: 0,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {emailMarketing.map((category, id) => {
          return <Categories category={category} key={id} />;
        })}
      </List>
    </AppCard>
  );
};

export default EmailMarking;

EmailMarking.defaultProps = {
  emailMarketing: [],
};

EmailMarking.propTypes = {
  emailMarketing: PropTypes.array,
};
