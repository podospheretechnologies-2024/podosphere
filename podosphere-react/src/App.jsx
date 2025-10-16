import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Solution from './pages/Solution';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NDA from './pages/NDA';
import Career from './pages/Career';
import Team from './pages/Team';

// Import service detail pages
import AIMLService from './pages/services/AIMLService';
import WebDevelopmentService from './pages/services/WebDevelopmentService';
import AppDevelopmentService from './pages/services/AppDevelopmentService';
import SoftwareDevelopmentService from './pages/services/SoftwareDevelopmentService';
import CRMERPService from './pages/services/CRMERPService';

// Import portfolio detail pages
import MeditationWellness from './pages/portfolio/MeditationWellness';
import SocialMedia from './pages/portfolio/SocialMedia';
import RideBooking from './pages/portfolio/RideBooking';
import ELearning from './pages/portfolio/ELearning';
import EventBooking from './pages/portfolio/EventBooking';
import HomeService from './pages/portfolio/HomeService';
import VideoConsultation from './pages/portfolio/VideoConsultation';
import VideoKYC from './pages/portfolio/VideoKYC';
import Fitness from './pages/portfolio/Fitness';
import LMS from './pages/portfolio/LMS';
import CMS from './pages/portfolio/CMS';
import PortfolioSite from './pages/portfolio/PortfolioSite';
import ECommerce from './pages/portfolio/ECommerce';
import MERNStack from './pages/portfolio/MERNStack';
import ReactApp from './pages/portfolio/ReactApp';
import N8NAutomation from './pages/portfolio/N8NAutomation';
import AIWebsite from './pages/portfolio/AIWebsite';
import LMSPro from './pages/portfolio/LMSPro';
import HeadlessCMS from './pages/portfolio/HeadlessCMS';
import PortfolioBuilder from './pages/portfolio/PortfolioBuilder';
import MultiVendorMarketplace from './pages/portfolio/MultiVendorMarketplace';
import MERNSaaS from './pages/portfolio/MERNSaaS';
import ReactDashboard from './pages/portfolio/ReactDashboard';
import EnterpriseAutomation from './pages/portfolio/EnterpriseAutomation';
import AIContentPlatform from './pages/portfolio/AIContentPlatform';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/nda" element={<NDA />} />
          <Route path="/career" element={<Career />} />
          <Route path="/team" element={<Team />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/ai-ml" element={<AIMLService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/app-development" element={<AppDevelopmentService />} />
          <Route path="/services/software-development" element={<SoftwareDevelopmentService />} />
          <Route path="/services/crm-erp" element={<CRMERPService />} />
          
          {/* Portfolio Detail Pages */}
          <Route path="/portfolio/meditation-wellness" element={<MeditationWellness />} />
          <Route path="/portfolio/social-media" element={<SocialMedia />} />
          <Route path="/portfolio/ride-booking" element={<RideBooking />} />
          <Route path="/portfolio/elearning" element={<ELearning />} />
          <Route path="/portfolio/event-booking" element={<EventBooking />} />
          <Route path="/portfolio/home-service" element={<HomeService />} />
          <Route path="/portfolio/video-consultation" element={<VideoConsultation />} />
          <Route path="/portfolio/video-kyc" element={<VideoKYC />} />
          <Route path="/portfolio/fitness" element={<Fitness />} />
          <Route path="/portfolio/lms" element={<LMS />} />
          <Route path="/portfolio/cms" element={<CMS />} />
          <Route path="/portfolio/portfolio-site" element={<PortfolioSite />} />
          <Route path="/portfolio/ecommerce" element={<ECommerce />} />
          <Route path="/portfolio/mern-stack" element={<MERNStack />} />
          <Route path="/portfolio/react-app" element={<ReactApp />} />
          <Route path="/portfolio/n8n-automation" element={<N8NAutomation />} />
          <Route path="/portfolio/ai-website" element={<AIWebsite />} />
          <Route path="/portfolio/lms-pro" element={<LMSPro />} />
          <Route path="/portfolio/headless-cms" element={<HeadlessCMS />} />
          <Route path="/portfolio/portfolio-builder" element={<PortfolioBuilder />} />
          <Route path="/portfolio/multi-vendor-marketplace" element={<MultiVendorMarketplace />} />
          <Route path="/portfolio/mern-saas" element={<MERNSaaS />} />
          <Route path="/portfolio/react-dashboard" element={<ReactDashboard />} />
          <Route path="/portfolio/enterprise-automation" element={<EnterpriseAutomation />} />
          <Route path="/portfolio/ai-content-platform" element={<AIContentPlatform />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
