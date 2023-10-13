import React from 'react';
import {Box} from '@mui/material';
import PropsTypes from 'prop-types';

const MainContent = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        position: 'relative',
        transition: 'all 0.5s ease',
        '& .app-content, & .footerContainer': {
          px: 5,
          width: '100%',
          maxWidth: {lg: 1140, xl: 1420},
          mx: 'auto',
        },
      }}
      className='mainContent'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default MainContent;

MainContent.propTypes = {
  children: PropsTypes.node,
};
