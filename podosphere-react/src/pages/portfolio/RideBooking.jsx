import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const RideBooking = () => {
  return <PortfolioDetail project={portfolioProjects['ride-booking']} />;
};

export default RideBooking;

