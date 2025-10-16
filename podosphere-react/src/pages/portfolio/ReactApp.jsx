import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const ReactApp = () => {
  return <PortfolioDetail project={portfolioProjects['react-app']} />;
};

export default ReactApp;

