import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import InfoViewContextProvider from '@crema/context/InfoViewContextProvider';
import AppAuthProvider from './core/AppAuthProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import AppLayout from './core/AppLayout';
import '@crema/mockapi';
import './assets/styles/maps.css';

const App = () => (
  <AppContextProvider>
    <AppThemeProvider>
      <AppStyleProvider>
        <AppLocaleProvider>
          <BrowserRouter>
            <InfoViewContextProvider>
              <AppAuthProvider>
                <AuthRoutes>
                  <CssBaseline />
                  <AppLayout />
                </AuthRoutes>
              </AppAuthProvider>
            </InfoViewContextProvider>
          </BrowserRouter>
        </AppLocaleProvider>
      </AppStyleProvider>
    </AppThemeProvider>
  </AppContextProvider>
);

export default App;
