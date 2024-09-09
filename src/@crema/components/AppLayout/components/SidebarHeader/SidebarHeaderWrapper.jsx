import React from 'react';
import { Box } from '@mui/material';
import PropsTypes from 'prop-types';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';

const SidebarHeaderWrapper = ({ children }) => {
  const { sidebarHeaderColor, allowSidebarBgImage } = useSidebarContext();
  return (
    (<Box
      sx={[{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        '&:hover': {
          '& .arrowIcon': {
            opacity: 1,
            visibility: 'visible',
          },
        }
      }, allowSidebarBgImage ? {
        backgroundColor: 'transparent'
      } : {
        backgroundColor: sidebarHeaderColor
      }]}
    >
      {children}
    </Box>)
  );
};

export default SidebarHeaderWrapper;

SidebarHeaderWrapper.propTypes = {
  children: PropsTypes.node,
};
