import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const PortfolioSite = () => {
  return <PortfolioDetail project={portfolioProjects['portfolio-site']} />;
};

export default PortfolioSite;

