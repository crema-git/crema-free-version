import React from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/utility/IntlMessages';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PropTypes from 'prop-types';
import Hidden from '@mui/material/Hidden';

const UserSocialMediaInfo = ({user}) => {
  return (
    <Box
      sx={{
        color: 'grey.600',
        mx: {xs: -3, xl: -5},
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        justifyContent: {xs: 'space-between', sm: 'flex-start'},
      }}
    >
      <Hidden xsDown>
        <Box
          sx={{
            px: {xs: 3, xl: 5},
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box sx={{mr: 1}} component='span'>
            {user.readTime}
          </Box>
          <IntlMessages id='common.read' />
        </Box>
      </Hidden>
      <Box sx={{px: {xs: 3, xl: 5}, display: 'flex', alignItems: 'center'}}>
        <Box sx={{mr: 1}} component='span'>
          <FacebookIcon />
        </Box>
        <Box sx={{mr: 1}} component='span'>
          {user.shares}
        </Box>
        <IntlMessages id='common.shares' />
      </Box>
      <Box
        sx={{
          px: {xs: 3, xl: 5},
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{mr: 1}} component='span'>
          <TwitterIcon />
        </Box>
        <Box sx={{mr: 1}} component='span'>
          {user.retweets}
        </Box>
        <IntlMessages id='common.retweets' />
      </Box>
    </Box>
  );
};

export default UserSocialMediaInfo;

UserSocialMediaInfo.propTypes = {
  user: PropTypes.object.isRequired,
};
