import React from 'react';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import FirebaseAuthProvider from '@crema/services/auth/FirebaseAuthProvider';

const AppAuthProvider = ({ children }) => {
  const { fetchStart, fetchSuccess, fetchError, showMessage } =
    useInfoViewActionsContext();

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
