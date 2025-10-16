import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const Fitness = () => {
  return <PortfolioDetail project={portfolioProjects['fitness']} />;
};

export default Fitness;

