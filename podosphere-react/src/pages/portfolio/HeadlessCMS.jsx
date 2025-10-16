import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const HeadlessCMS = () => {
  return <PortfolioDetail project={portfolioProjects['cms-2']} />;
};

export default HeadlessCMS;

