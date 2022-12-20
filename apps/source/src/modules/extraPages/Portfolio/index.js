import React from 'react';
import Portfolio from '@crema/modules/extraPages/Portfolio';
import { photos } from '@crema/fakedb/data';

const PortFolioPage = () => {
  return <Portfolio photos={photos} />;
};

export default PortFolioPage;
