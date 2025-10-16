import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const LMSPro = () => {
  return <PortfolioDetail project={portfolioProjects['lms-2']} />;
};

export default LMSPro;

