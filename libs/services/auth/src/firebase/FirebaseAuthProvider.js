import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  auth,
  createUserWithEmailAndPassword,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  twitterAuthProvider,
  updateProfile,
} from './firebase';

const FirebaseContext = createContext();
const FirebaseActionsContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseActions = () => useContext(FirebaseActionsContext);

const FirebaseAuthProvider = ({
  children,
  fetchStart,
  fetchSuccess,
  fetchError,
}) => {
  const [firebaseData, setFirebaseData] = useState({
    user: undefined,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    fetchStart();
    const getAuthUser = onAuthStateChanged(
      auth,
      (user) => {
        setFirebaseData({
          user: user,
          isAuthenticated: Boolean(user),
          isLoading: false,
        });
        fetchSuccess();
      },
      () => {
        fetchSuccess();
        setFirebaseData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
      },
      (completed) => {
        fetchSuccess();
        setFirebaseData({
          user: undefined,
          isLoading: false,
          isAuthenticated: completed,
        });
      },
    );

    return () => {
      getAuthUser();
    };
  }, []);

  const getProvider = (providerName) => {
    switch (providerName) {
      case 'google': {
        return googleAuthProvider;
      }
      case 'facebook': {
        return facebookAuthProvider;
      }
      case 'twitter': {
        return twitterAuthProvider;
      }
      case 'github': {
        return githubAuthProvider;
      }
      default:
        return googleAuthProvider;
    }
  };

  const logInWithPopup = async (providerName) => {
    fetchStart();
    try {
      const { user } = await signInWithPopup(auth, getProvider(providerName));
      setFirebaseData({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message);
    }
  };

  const logInWithEmailAndPassword = async ({ email, password }) => {
    fetchStart();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setFirebaseData({ user, isAuthenticated: true, isLoading: false });
      fetchSuccess();
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message);
    }
  };
  const registerUserWithEmailAndPassword = async ({
    name,
    email,
    password,
  }) => {
    fetchStart();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await sendEmailVerification(auth.currentUser, {
        url: window.location.href,
        handleCodeInApp: true,
      });
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      setFirebaseData({
        user: { ...user, displayName: name },
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setFirebaseData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error.message);
    }
  };

  const logout = async () => {
    setFirebaseData({ ...firebaseData, isLoading: true });
    try {
      await signOut(auth);
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      setFirebaseData({
        user: null,
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <FirebaseActionsContext.Provider
        value={{
          logInWithEmailAndPassword,
          registerUserWithEmailAndPassword,
          logInWithPopup,
          logout,
        }}
      >
        {children}
      </FirebaseActionsContext.Provider>
    </FirebaseContext.Provider>
  );
};
export default FirebaseAuthProvider;

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
