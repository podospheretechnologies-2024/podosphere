import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const AIWebsite = () => {
  return <PortfolioDetail project={portfolioProjects['ai-website']} />;
};

export default AIWebsite;

