import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const N8NAutomation = () => {
  return <PortfolioDetail project={portfolioProjects['n8n-automation']} />;
};

export default N8NAutomation;

