import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import StoriesItem from './StoriesItem';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppScrollbar from '@crema/components/AppScrollbar';

const TopStories = ({stories}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={messages['dashboard.crypto.topStories']}
      action={messages['common.viewAll']}
    >
      <AppScrollbar sx={{maxHeight: 388, px: 5}}>
        <Box
          sx={{
            position: 'relative',
            '& .stories-item': {
              '&:not(:last-child)': {
                borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
                pb: 2.5,
                mb: 2.5,
              },
            },
          }}
        >
          {stories.map((stories, index) => (
            <Box key={index} className='stories-item'>
              <StoriesItem stories={stories} />
            </Box>
          ))}
        </Box>
      </AppScrollbar>
    </AppCard>
  );
};

export default TopStories;

TopStories.propTypes = {
  stories: PropTypes.array,
};
