import React from 'react';
import ProfileViewsGraph from './ProfileViewsGraph';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';

const ProfileViews = ({ data }) => {
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ display: 'flex', flexDirection: 'column' }}
    >
      <Box
        component="h3"
        sx={{
          mb: 1,
          color: 'text.primary',
          fontSize: 20,
          fontWeight: Fonts.MEDIUM,
        }}
      >
        {data.views}
      </Box>
      <Box
        component="p"
        sx={{
          color: 'text.secondary',
          fontSize: 14,
          fontWeight: Fonts.REGULAR,
        }}
      >
        <IntlMessages id="dashboard.profileViews" />
      </Box>
      <Box
        sx={{
          mt: 'auto',
        }}
      >
        <ProfileViewsGraph data={data.graphData} />
      </Box>
    </AppCard>
  );
};

export default ProfileViews;

ProfileViews.defaultProps = {
  data: {
    views: '',
    graphData: [],
  },
};

ProfileViews.propTypes = {
  data: PropTypes.object,
};
