import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const ImageList = asyncComponent(() =>
  import('../../../../modules/muiComponents/layout/ImageList'),
);
export default AppPage(() => <ImageList />);
