import React from 'react';
import AppMessageView from '../AppMessageView';
import AppLoader from '../AppLoader';
import {useInfoViewContext} from "@crema/context/InfoViewContextProvider";
import {useSelector} from "react-redux";

const AppInfoView = () => {
  const infoViewContext = useInfoViewContext();
  const commonSelector = useSelector(({common}) => common);
  const {error, loading, message} =  process.env.NX_IS_CONEXT==='true'?infoViewContext:commonSelector;

  const showMessage = () => {
    return <AppMessageView variant='success' message={message.toString()} />;
  };

  const showError = () => {
    return <AppMessageView variant='error' message={error.toString()} />;
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
