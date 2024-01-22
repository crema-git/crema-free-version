import React from 'react';
import { Box, Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import BlogDetailHeaderWrapper from './BlogDetailHeaderWrapper';
import { BiCommentDetail, BiUserCircle } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';

const getBlogDetailHeaderIcon = (icon) => {
  switch (icon) {
    case 'BiUserCircle':
      return <BiUserCircle />;
    case 'AiOutlineCalendar':
      return <AiOutlineCalendar />;
    default:
      return <BiCommentDetail />;
  }
};
const BlogDetailHeader = ({ title, blogDetailHeader }) => {
  return (
    <BlogDetailHeaderWrapper>
      <Box
        sx={{
          maxWidth: 650,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          component='h2'
          sx={{
            mb: { xs: 5, md: 7.5 },
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: { xs: 24, sm: 26, md: 28, lg: 30 },
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            mx: { xs: -2, md: -4 },
          }}
        >
          {blogDetailHeader?.map((data, index) => (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: { xs: 2, md: 4 },
                mb: 2,
                fontSize: 14,
                fontWeight: Fonts.MEDIUM,
              }}
              key={index}
            >
              <Box sx={{ fontSize: 16, mt: 1, mr: 2 }}>
                {getBlogDetailHeaderIcon(data.icon)}
              </Box>
              <Box component='span'>{data.title}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </BlogDetailHeaderWrapper>
  );
};

export default BlogDetailHeader;

BlogDetailHeader.propTypes = {
  title: PropTypes.string,
  blogDetailHeader: PropTypes.array,
};
