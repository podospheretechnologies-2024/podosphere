import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const CMS = () => {
  return <PortfolioDetail project={portfolioProjects['cms']} />;
};

export default CMS;

