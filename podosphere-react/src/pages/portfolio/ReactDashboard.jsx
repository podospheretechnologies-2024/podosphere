import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const ReactDashboard = () => {
  return <PortfolioDetail project={portfolioProjects['react-app-2']} />;
};

export default ReactDashboard;

