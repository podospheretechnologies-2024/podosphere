import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const VideoKYC = () => {
  return <PortfolioDetail project={portfolioProjects['video-kyc']} />;
};

export default VideoKYC;

