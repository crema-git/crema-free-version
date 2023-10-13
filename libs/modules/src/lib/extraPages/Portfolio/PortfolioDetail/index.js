import React from 'react';
import Product from './Product';
import PremiumBrand from './PremiumBrand';
import Card from '@mui/material/Card';
import Innovation from './Innovation';
import PortfolioSlider from './PortfolioSlider';
import ProjectDescription from './ProjectDescription';
import AppAnimate from '@crema/components/AppAnimate';

const PortfolioDetail = ({ portfolioData }) => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <Card>
        <PortfolioSlider slide={portfolioData.portfolioDetail.slide} />
        <ProjectDescription
          projectDescription={portfolioData.portfolioDetail.projectDescription}
        />
        <Product product={portfolioData.portfolioDetail.product} />
        <PremiumBrand
          premiumBrand={portfolioData.portfolioDetail.premiumBrand}
        />
        <Innovation innovation={portfolioData.portfolioDetail.innovation} />
      </Card>
    </AppAnimate>
  );
};

export default PortfolioDetail;
