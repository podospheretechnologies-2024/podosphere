import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const ECommerce = () => {
  return <PortfolioDetail project={portfolioProjects['ecommerce']} />;
};

export default ECommerce;

