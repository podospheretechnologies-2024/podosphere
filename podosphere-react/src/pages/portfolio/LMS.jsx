import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const LMS = () => {
  return <PortfolioDetail project={portfolioProjects['lms']} />;
};

export default LMS;

