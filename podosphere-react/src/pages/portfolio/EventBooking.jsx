import React from 'react';
import PortfolioDetail from './PortfolioDetail';
import { portfolioProjects } from '../../data/portfolioProjects';

const EventBooking = () => {
  return <PortfolioDetail project={portfolioProjects['event-booking']} />;
};

export default EventBooking;

