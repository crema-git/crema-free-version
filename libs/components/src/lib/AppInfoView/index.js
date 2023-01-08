import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppMessageView from '../AppMessageView';
import AppLoader from '../AppLoader';
import { HIDE_MESSAGE } from '@crema/constants';
// import {
//   useInfoViewActionsContext,
//   useInfoViewContext,
// } from '@crema/context/InfoViewContextProvider';

const AppInfoView = () => {
  // // Only for Context APIs
  // const { error, loading, message } = useInfoViewContext();
  // const { clearInfoView } = useInfoViewActionsContext();

  // Only for redux
  const { error, loading, message } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const clearInfoView = () => {
    dispatch(dispatch({ type: HIDE_MESSAGE }));
  };

  const showMessage = () => {
    return (
      <AppMessageView
        variant='success'
        message={message.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  const showError = () => {
    return (
      <AppMessageView
        variant='error'
        message={error.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  return (
    <>
      {loading && <AppLoader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default AppInfoView;
