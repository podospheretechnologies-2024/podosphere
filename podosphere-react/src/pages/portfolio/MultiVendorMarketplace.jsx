import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const MultiVendorMarketplace = () => {
  return <PortfolioDetail project={portfolioProjects['ecommerce-2']} />;
};

export default MultiVendorMarketplace;

