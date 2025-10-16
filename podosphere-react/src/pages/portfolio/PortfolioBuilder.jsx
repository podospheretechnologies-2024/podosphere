import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const PortfolioBuilder = () => {
  return <PortfolioDetail project={portfolioProjects['portfolio-site-2']} />;
};

export default PortfolioBuilder;

