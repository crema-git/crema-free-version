import React from 'react';
import AppInfoViewContext from './ContextView';
import AppInfoViewRedux from './ReduxView';

const AppInfoView = () => {
  if (process.env.NX_STATE_TYPE === 'context') {
    return <AppInfoViewContext />;
  }
  return <AppInfoViewRedux />;
};

export default AppInfoView;
