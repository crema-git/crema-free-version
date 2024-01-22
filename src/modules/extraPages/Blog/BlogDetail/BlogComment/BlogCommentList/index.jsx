import React from 'react';
import { Box, Typography } from '@mui/material';
import BlogCommentItem from './BlogCommentItem';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';

const BlogCommentList = ({ comments }) => {
  return (
    <Box
      sx={{
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        mb: 7.5,
        pb: 7.5,
      }}
    >
      <Typography
        component='h3'
        sx={{
          mb: 7.5,
          fontSize: { xs: 18, md: 20 },
          fontWeight: Fonts.BOLD,
        }}
      >
        {comments.length} <IntlMessages id='common.comments' />
      </Typography>
      <Box
        sx={{
          '& .blog-comment-item': {
            '&:not(:last-of-type)': {
              mb: 7.5,
            },
          },
        }}
      >
        {comments.map((comment, index) => (
          <Box className='blog-comment-item' key={index}>
            <BlogCommentItem comment={comment} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BlogCommentList;

BlogCommentList.propTypes = {
  comments: PropTypes.array,
};
