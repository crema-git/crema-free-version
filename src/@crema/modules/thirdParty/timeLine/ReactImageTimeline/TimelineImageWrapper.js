import React from 'react';
import PropTypes from 'prop-types';
import {Box} from '@mui/material';
import {Fonts} from '@crema/constants/AppEnums';

const TimelineImageWrapper = ({children}) => {
  return (
    <Box
      sx={{
        width: '100%',
        pb: {sx: 4, ms: 0},
        '& .rt-timeline': {
          position: 'relative',
          background: 'none',
          '&:before': {
            left: {xs: 30, sm: 'calc(50% - .5px)'},
            top: 1,
            zIndex: 1,
            width: '1px',
            height: '100%',
            content: "''",
            position: 'absolute',
            backgroundColor: (theme) => theme.palette.divider,
          },
        },
        '& .rt-label-container': {
          justifyContent: {xs: 'flex-start', sm: 'center'},
        },
        '& .rt-backing': {
          borderRadius: (theme) => theme.cardRadius / 4,
          backgroundColor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
          boxShadow: 'none',
        },
        '& .rt-header-container': {
          p: 5,
          backgroundColor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.text.primary,
        },
        '& .rt-title': {
          fontSize: 16,
          fontWeight: Fonts.MEDIUM,
          m: '0 0 8px',
        },
        '& .rt-date': {
          fontWeight: Fonts.MEDIUM,
          fontSize: 14,
          color: (theme) => theme.palette.text.disabled,
          m: 0,
        },
        '& .rt-image-container': {
          px: 5,
        },
        '& .rt-text-container': {
          p: 5,
        },
        '& .rt-event': {
          width: {xs: '100%', sm: '50%'},
          paddingLeft: {
            xs: '76px',
            sm: '45px',
            xl: '65px',
          },
          paddingRight: 0,
        },
        '& .rt-event svg': {
          display: 'block',
        },
        '& .rt-event .rt-svg-container .rt-arrow': {
          color: (theme) => theme.palette.background.paper,
          width: 20,
          left: -20,
        },
        '& .rt-event .rt-dot': {
          backgroundColor: (theme) => theme.palette.background.paper,
          color: (theme) => theme.palette.secondary.main,
          border: (theme) => `solid 2px ${theme.palette.secondary.main}`,
          borderRadius: '50%',
          width: 30,
          height: 30,
          left: {xs: -61, sm: -60, xl: -79},
        },
        '& .rt-event:nth-of-type(2n)': {
          textAlign: {xs: 'left', sm: 'right'},
          paddingRight: {xs: 0, sm: '45px', xl: '65px'},
          paddingLeft: {xs: '76px', sm: 0},
          '& .rt-dot': {
            right: {xs: 'auto', sm: -60, xl: -79},
            left: {xs: -61, sm: 'auto'},
          },
          '& .rt-arrow': {
            right: {xs: 'auto', sm: -20},
            left: {xs: -20, sm: 'auto'},
            transform: {xs: 'rotate(180deg)', sm: 'rotate(0deg)'},
          },
        },
        '& .rt-footer-container': {
          borderTop: (theme) => `solid 1px ${theme.palette.grey[300]}`,
        },
        '& .rt-label': {
          backgroundColor: (theme) => theme.palette.secondary.main,
          fontSize: 20,
          boxShadow: 'none',
          position: 'relative',
          zIndex: 3,
        },
        '& .rt-btn': {
          color: (theme) => theme.palette.secondary.main,
          backgroundColor: 'transparent',
          border: '0 none',
          fontSize: 16,
          fontWeight: Fonts.MEDIUM,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default TimelineImageWrapper;

TimelineImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
