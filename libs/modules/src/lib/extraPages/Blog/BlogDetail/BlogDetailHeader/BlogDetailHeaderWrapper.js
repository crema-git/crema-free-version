import React from 'react';
import PropTypes from 'prop-types';
import {alpha, Box} from '@mui/material';

const blogBgImage = '/assets/images/extra-pages/blog/blog-detail-header.png';

const BlogDetailHeaderWrapper = ({children}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${blogBgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: 340,
        color: (theme) => theme.palette.common.white,
        borderRadius: (theme) => theme.cardRadius / 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 5,
        '&:before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: (theme) => alpha(theme.palette.common.black, 0.3),
          borderRadius: 'inherit',
        },
        '& > *': {
          position: 'relative',
          zIndex: 3,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default BlogDetailHeaderWrapper;

BlogDetailHeaderWrapper.propTypes = {
  children: PropTypes.node,
};
