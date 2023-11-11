import React from 'react';
import Box from '@mui/material/Box';
import { useIntl } from 'react-intl';
import RecentPost from './RecentPost';
import PropTypes from 'prop-types';
import Categories from './Categories';
import TagCloud from './TagCloud';
import AppCard from '@crema/components/AppCard';
import AppSearchBar from '@crema/components/AppSearchBar';

const BlogSidebarCard = ({ blogSidebar }) => {
  const { messages } = useIntl();

  return (
    <AppCard>
      <Box
        sx={{
          mb: 5.5,
          pb: 5,
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <AppSearchBar
          disableFocus
          iconPosition='right'
          overlap={false}
          placeholder={messages['common.searchHere']}
        />
      </Box>
      <RecentPost recentPost={blogSidebar.recentPost} />
      <Categories categories={blogSidebar.categories} />
      <TagCloud tag={blogSidebar.tag} />
    </AppCard>
  );
};

export default BlogSidebarCard;

BlogSidebarCard.propTypes = {
  blogSidebar: PropTypes.object,
};
