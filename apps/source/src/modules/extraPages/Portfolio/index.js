import React from 'react';
import { portfolioData } from '@crema/fakedb/extraPages';
import { PortfolioTabs } from '@crema/modules/extraPages/Portfolio';

const PortFolioPage = () => {
  return <PortfolioTabs portfolio={portfolioData.portfolio} />;
};

export default PortFolioPage;
