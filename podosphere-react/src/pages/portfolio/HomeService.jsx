import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const HomeService = () => {
  return <PortfolioDetail project={portfolioProjects['home-service']} />;
};

export default HomeService;

