import React from 'react';
import PropsTypes from 'prop-types';
import {Box} from '@mui/material';

const StandardWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: (theme) => theme.palette.background.default,
        paddingTop: {xs: 14, sm: 17.5},
        '& .mainContent': {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: {xs: '100%', lg: 'calc(100% - 280px)'},
          transition: 'all 0.5s ease',
          ml: {lg: '280px'},
        },
        '&.appMainFixedFooter': {
          pb: {xs: 12, xl: 14.5},
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default StandardWrapper;

StandardWrapper.propTypes = {
  children: PropsTypes.node,
};
