import React from 'react';
import {Box} from '@mui/material';
import AppImage from "@crema/components/AppImage";

const AppLogo = () => {

  return (
    <Box
      sx={{
        height: {xs: 56, sm: 70},
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: {xs: 40, sm: 45},
        },
      }}
      className='app-logo'
    >
        <AppImage src={'/assets/icon/logo.svg'} alt='logo' />
      <Box
        sx={{
          mt: 1,
          display: {xs: 'none', md: 'block'},
          '& svg': {
            height: {xs: 25, sm: 30},
          },
        }}
      >
          <AppImage src={'/assets/icon/logo_text.svg'} alt='logo_text' />
      </Box>
    </Box>
  );
};

export default AppLogo;
