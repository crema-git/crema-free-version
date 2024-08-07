import React from 'react';

const AppInfoViewContext = React.lazy(() => import('./ContextView'));

const AppInfoView = () => {
  return <AppInfoViewContext />;
};

export default AppInfoView;
