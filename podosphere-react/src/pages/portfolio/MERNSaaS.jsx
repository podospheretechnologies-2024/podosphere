import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const MERNSaaS = () => {
  return <PortfolioDetail project={portfolioProjects['mern-stack-2']} />;
};

export default MERNSaaS;

