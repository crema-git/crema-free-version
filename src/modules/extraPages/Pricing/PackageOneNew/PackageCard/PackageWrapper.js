import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {Fonts} from '@crema/constants/AppEnums';

const PackageWrapper = ({children, ...rest}) => {
  return (
    <Box
      sx={{
        pt: 2.5,
        position: 'relative',
        '& .tag': {
          position: 'absolute',
          left: 30,
          top: 0,
          zIndex: 1,
          padding: '2px 5px',
          minWidth: 70,
          fontSize: 12,
          fontWeight: Fonts.BOLD,
          textTransform: 'uppercase',
          color: (theme) => theme.palette.common.white,
          textAlign: 'center',
          borderRadius: (theme) => theme.cardRadius / 16,
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default PackageWrapper;

PackageWrapper.propTypes = {
  children: PropTypes.node,
};
