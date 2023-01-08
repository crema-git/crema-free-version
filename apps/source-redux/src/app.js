import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import AppContextProvider from '@crema/context/AppContextProvider';
import AppThemeProvider from '@crema/context/AppThemeProvider';
import AppStyleProvider from '@crema/context/AppStyleProvider';
import AppLocaleProvider from '@crema/context/AppLocaleProvider';
import { BrowserRouter } from 'react-router-dom';
import AuthRoutes from '@crema/components/AuthRoutes';
import configureStore from './redux/store';
import AppLayout from './core/AppLayout';
import AppAuthProvider from './core/AppAuthProvider';
import './assets/styles/maps.css';
import '@crema/mockapi';

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
