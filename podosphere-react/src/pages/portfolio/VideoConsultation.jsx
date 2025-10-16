import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const VideoConsultation = () => {
  return <PortfolioDetail project={portfolioProjects['video-consultation']} />;
};

export default VideoConsultation;

