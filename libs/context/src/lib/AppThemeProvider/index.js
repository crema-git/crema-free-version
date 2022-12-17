import React from 'react';
import PropTypes from 'prop-types';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import {useThemeContext} from '../AppContextProvider/ThemeContextProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers';

const AppThemeProvider = (props) => {
  const {theme} = useThemeContext();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          {props.children}
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default AppThemeProvider;

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
