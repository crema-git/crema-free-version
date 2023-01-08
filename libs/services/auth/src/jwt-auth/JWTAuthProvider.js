import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import jwtAxios, { setAuthToken } from './index';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({
  children,
  fetchStart,
  fetchSuccess,
  fetchError,
}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const getAuthUser = () => {
      fetchStart();
      const token = localStorage.getItem('token');

      if (!token) {
        fetchSuccess();
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);
      jwtAxios
        .get('/auth')
        .then(({ data }) => {
          fetchSuccess();
          setJWTAuthData({
            user: data,
            isLoading: false,
            isAuthenticated: true,
          });
        })
        .catch(() => {
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
          });
          fetchSuccess();
        });
    };

    getAuthUser();
  }, []);

  const signInUser = async ({ email, password }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('auth', { email, password });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const signUpUser = async ({ name, email, password }) => {
    fetchStart();
    try {
      const { data } = await jwtAxios.post('users', { name, email, password });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      const res = await jwtAxios.get('/auth');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      fetchSuccess();
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      console.log('error:', error.response.data.error);
      fetchError(error?.response?.data?.error || 'Something went wrong');
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
