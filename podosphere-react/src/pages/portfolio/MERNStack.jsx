import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const MERNStack = () => {
  return <PortfolioDetail project={portfolioProjects['mern-stack']} />;
};

export default MERNStack;

