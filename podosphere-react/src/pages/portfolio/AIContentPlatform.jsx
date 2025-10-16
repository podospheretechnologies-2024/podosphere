import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const AIContentPlatform = () => {
  return <PortfolioDetail project={portfolioProjects['ai-website-2']} />;
};

export default AIContentPlatform;

