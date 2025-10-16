import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const EnterpriseAutomation = () => {
  return <PortfolioDetail project={portfolioProjects['n8n-automation-2']} />;
};

export default EnterpriseAutomation;

