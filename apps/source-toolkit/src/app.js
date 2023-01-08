import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import AuthRoutes from '@crema/components/AuthRoutes';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './toolkit/store';
import AppAuthProvider from './core/AppAuthProvider';
import AppLayout from './core/AppLayout';
import '@crema/mockapi';
import './assets/styles/maps.css';

const store = configureStore();

const App = () => (
  <AppContextProvider>
    <Provider store={store}>
      <AppThemeProvider>
        <AppStyleProvider>
          <AppLocaleProvider>
            <BrowserRouter>
              <AppAuthProvider>
                <AuthRoutes>
                  <CssBaseline />
                  <AppLayout />
                </AuthRoutes>
              </AppAuthProvider>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppStyleProvider>
      </AppThemeProvider>
    </Provider>
  </AppContextProvider>
);

export default App;
