import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import Member from './Member';
import PropTypes from 'prop-types';
import AppGridContainer from '@crema/components/AppGridContainer';

const ProfileConnection = ({ profileConnection }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        <IntlMessages id="common.profileConnections" />
      </Typography>
      <AppGridContainer spacing={4}>
        {profileConnection.map((member, index) => (
          <Grid item xs={12} sm={12} md={4} lg={6} xl={3} key={index}>
            <Member member={member} />
          </Grid>
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default ProfileConnection;

ProfileConnection.propTypes = {
  profileConnection: PropTypes.array,
};
