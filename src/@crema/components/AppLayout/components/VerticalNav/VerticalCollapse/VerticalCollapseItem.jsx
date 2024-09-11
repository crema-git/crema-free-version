import React from 'react';
import PropsTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import { alpha } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';

const VerticalCollapseItem = ({ children, sidebarTextColor, ...rest }) => {
  return (
    <ListItemButton
      sx={{
        height: 40,
        my: 0.25,
        pl: '31px',
        pr: 3.75,
        whiteSpace: 'nowrap',
        transition: 'all 0.4s ease',
        '& .nav-item-text': {
          fontWeight: Fonts.MEDIUM,
          color: alpha(sidebarTextColor, 0.7),
        },

        '& .nav-item-icon': {
          color: alpha(sidebarTextColor, 0.7),
          fontSize: 20,
          display: 'block',
        },

        '& .nav-item-icon-arrow': {
          color: alpha(sidebarTextColor, 0.7),
        },

        '& .MuiIconButton-root': {
          mr: 3,
          padding: 0,
        },

        '& .MuiTouchRipple-root': {
          zIndex: 10,
        },

        '&.open, &:hover, &:focus': {
          '& .nav-item-text': {
            fontWeight: Fonts.MEDIUM,
            color: sidebarTextColor,
          },

          '& .nav-item-icon': {
            color: sidebarTextColor,
          },

          '& .nav-item-icon-arrow': {
            color: sidebarTextColor,
          },
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      {...rest}
    >
      {children}
    </ListItemButton>
  );
};

export default VerticalCollapseItem;

VerticalCollapseItem.propTypes = {
  children: PropsTypes.node,
  sidebarTextColor: PropsTypes.string,
};
