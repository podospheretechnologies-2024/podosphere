import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const ELearning = () => {
  return <PortfolioDetail project={portfolioProjects['elearning']} />;
};

export default ELearning;

