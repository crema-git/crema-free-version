import React from 'react';
import AppPage from '../../../../@crema/hoc/AppPage';
import asyncComponent from '../../../../@crema/utility/asyncComponent';

const Modal = asyncComponent(() =>
  import('../../../../modules/muiComponents/utils/Modal'),
);
export default AppPage(() => <Modal />);
