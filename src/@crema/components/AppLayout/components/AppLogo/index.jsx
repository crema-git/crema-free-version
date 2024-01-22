import React from 'react';
import { Box } from '@mui/material';
import { useThemeContext } from '@crema/context/AppContextProvider/ThemeContextProvider';
import { alpha } from '@mui/material/styles';
import  Logo  from '../../../../../assets/icon/logo.svg';
import LogoText  from '../../../../../assets/icon/logo_text.svg';

const AppLogo = () => {
  const { theme } = useThemeContext();
  return (
    <Box
      sx={{
        height: { xs: 56, sm: 70 },
        padding: 2.5,
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
          height: { xs: 40, sm: 45 },
        },
      }}
      className='app-logo'
    >
      <img src={Logo} alt={Logo}/>
      <Box
        sx={{
          mt: 1,
          display: { xs: 'none', md: 'block' },
          '& img': {
            height: { xs: 25, sm: 30 },
          },
        }}
      >
          <img src={LogoText} alt={LogoText}/>
      </Box>
    </Box>
  );
};

export default AppLogo;
