import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const SocialMedia = () => {
  return <PortfolioDetail project={portfolioProjects['social-media']} />;
};

export default SocialMedia;

