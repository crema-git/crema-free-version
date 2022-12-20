import React from 'react';
import AppMessageView from '../AppMessageView';
import AppLoader from '../AppLoader';
// import { useInfoViewContext,useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import {useDispatch, useSelector} from 'react-redux';
import {hideMessage} from '@crema/redux/actions';

const AppInfoView = () => {
  // const { error, loading, message } = useInfoViewContext();
  // const { clearInfoView } = useInfoViewActionsContext();

  // For redux Only
  const { error, loading, message } = useSelector(({ common }) => common);
  const dispatch = useDispatch();
  const clearInfoView = () => {
    dispatch(hideMessage());
  };

  const showMessage = () => {
    return (
      <AppMessageView
        variant="success"
        message={message.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  const showError = () => {
    return (
      <AppMessageView
        variant="error"
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
