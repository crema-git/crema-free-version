import React from 'react';
import { useDispatch } from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
} from '@crema/constants';
import FirebaseAuthProvider from '@crema/services/auth/FirebaseAuthProvider';

const AppAuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const fetchStart = () => {
    dispatch({ type: FETCH_START });
  };
  const fetchError = (message) => {
    dispatch({ type: FETCH_ERROR, payload: message });
  };
  const fetchSuccess = () => {
    dispatch({ type: FETCH_SUCCESS });
  };
  const showMessage = (message) => {
    dispatch({ type: SHOW_MESSAGE, payload: message });
  };

  return (
    <FirebaseAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      showMessage={showMessage}
    >
      {children}
    </FirebaseAuthProvider>
  );
};

export default AppAuthProvider;
