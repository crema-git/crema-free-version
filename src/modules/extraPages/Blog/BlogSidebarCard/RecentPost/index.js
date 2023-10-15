import React from 'react';
import {Box, Typography} from '@mui/material';
import RecentPostItem from './RecentPostItem';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppList from '@crema/components/AppList';
import {Fonts} from '@crema/constants/AppEnums';

const RecentPost = ({recentPost}) => {
  return (
    <Box
      sx={{
        mb: 5.5,
        pb: 5,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Typography
        component='h3'
        sx={{
          mb: 5,
          fontWeight: Fonts.SEMI_BOLD,
          fontSize: 14,
        }}
      >
        <IntlMessages id='extraPages.recentPost' />
      </Typography>
      <Box
        sx={{
          position: 'relative',
          '& .recent-post-item:not(:last-of-type)': {
            mb: 5,
          },
        }}
      >
        <AppList
          data={recentPost}
          renderRow={(post, index) => (
            <Box className='recent-post-item' key={index}>
              <RecentPostItem recentPost={post} />
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

export default RecentPost;

RecentPost.propTypes = {
  recentPost: PropTypes.array,
};
