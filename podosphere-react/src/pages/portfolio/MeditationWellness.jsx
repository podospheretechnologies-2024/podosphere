import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const MeditationWellness = () => {
  return <PortfolioDetail project={portfolioProjects['meditation-wellness']} />;
};

export default MeditationWellness;

