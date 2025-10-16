export const portfolioProjects = {
  'meditation-wellness': {
    id: 'meditation-wellness',
    title: 'Meditate & Wellness App',
    subtitle: 'Transform stress into serenity with AI-powered audio experiences',
    category: 'Mobile App • Wellness',
    color1: '#667eea',
    color2: '#764ba2',
    image: 'case-studies1.png',
    client: 'Wellness Tech Inc.',
    industry: 'Health & Wellness',
    platform: 'iOS & Android',
    timeline: '6 months',
    teamSize: '5 developers',
    overview: 'A comprehensive meditation and wellness application designed to help users manage stress and achieve desired mental states through curated audio experiences. The app leverages AI to personalize content recommendations based on user preferences and mood tracking.',
    features: [
      { icon: 'bx-brain', title: 'AI-Powered Recommendations', description: 'Smart algorithm suggests personalized meditation tracks based on mood and preferences' },
      { icon: 'bx-music', title: 'Curated Audio Library', description: 'Extensive collection of guided meditations, ambient sounds, and binaural beats' },
      { icon: 'bx-line-chart', title: 'Progress Tracking', description: 'Track meditation streaks, mood patterns, and wellness journey' },
      { icon: 'bx-mobile-alt', title: 'Offline Mode', description: 'Download favorite sessions for meditation anywhere, anytime' }
    ],
    challenge: 'Users needed a simple yet effective way to manage stress and improve mental health through personalized audio experiences without overwhelming complexity.',
    solution: 'Developed an intuitive app with AI-driven personalization, easy-to-navigate categories, and scientifically-backed audio content that adapts to user preferences and goals.',
    results: [
      { value: '100K+', label: 'Active Users' },
      { value: '4.8★', label: 'App Store Rating' },
      { value: '85%', label: 'User Retention' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow', 'AWS', 'Firebase']
  },

  'social-media': {
    id: 'social-media',
    title: 'DigiCupid Social Media App',
    subtitle: 'Secure social networking with enhanced privacy controls',
    category: 'Mobile App • Social',
    color1: '#10b981',
    color2: '#059669',
    image: 'case-studies2.png',
    client: 'DigiCupid Networks',
    industry: 'Social Media',
    platform: 'iOS & Android',
    timeline: '8 months',
    teamSize: '8 developers',
    overview: 'A modern social networking platform that prioritizes user privacy and security while enabling seamless sharing of multimedia content. Features include private messaging, group chats, and advanced content moderation.',
    features: [
      { icon: 'bx-lock-alt', title: 'End-to-End Encryption', description: 'Military-grade encryption for all messages and shared content' },
      { icon: 'bx-group', title: 'Smart Groups', description: 'Create and manage groups with customizable privacy settings' },
      { icon: 'bx-video', title: 'Media Sharing', description: 'Share photos, videos, and audio with advanced compression' },
      { icon: 'bx-shield', title: 'Content Moderation', description: 'AI-powered content filtering and reporting system' }
    ],
    challenge: 'Building a social platform that balances easy content sharing with robust privacy protection and secure communications.',
    solution: 'Implemented end-to-end encryption, granular privacy controls, and intuitive UI that makes security features accessible to all users.',
    results: [
      { value: '500K+', label: 'Downloads' },
      { value: '4.7★', label: 'User Rating' },
      { value: '60%', label: 'Daily Active Users' }
    ],
    technologies: ['React Native', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS S3', 'WebRTC']
  },

  'ride-booking': {
    id: 'ride-booking',
    title: 'RideX Booking App',
    subtitle: 'Multi-service transportation and delivery platform',
    category: 'Mobile App • Transportation',
    color1: '#f59e0b',
    color2: '#ea580c',
    image: 'case-studies3.png',
    client: 'RideX Technologies',
    industry: 'Transportation',
    platform: 'iOS, Android & Web',
    timeline: '10 months',
    teamSize: '12 developers',
    overview: 'A comprehensive multi-service platform offering taxi, bike, pickup, and delivery services with real-time tracking, dynamic pricing, and integrated payment solutions.',
    features: [
      { icon: 'bx-map', title: 'Real-Time Tracking', description: 'Live GPS tracking with ETA predictions and route optimization' },
      { icon: 'bx-dollar', title: 'Dynamic Pricing', description: 'Smart fare calculation based on demand, distance, and traffic' },
      { icon: 'bx-credit-card', title: 'Multiple Payments', description: 'Support for cards, wallets, UPI, and cash payments' },
      { icon: 'bx-star', title: 'Rating System', description: 'Comprehensive driver and rider rating with feedback' }
    ],
    challenge: 'Creating a unified platform that seamlessly handles multiple service types while ensuring reliability and real-time coordination.',
    solution: 'Developed microservices architecture with real-time communication, intelligent matching algorithm, and robust payment processing.',
    results: [
      { value: '1M+', label: 'Rides Completed' },
      { value: '50K+', label: 'Active Drivers' },
      { value: '4.6★', label: 'Average Rating' }
    ],
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API', 'Stripe', 'Socket.io']
  },

  'elearning': {
    id: 'elearning',
    title: 'E-Learning Platform',
    subtitle: 'Interactive online education with video conferencing',
    category: 'Web App • Education',
    color1: '#3b82f6',
    color2: '#2563eb',
    image: 'case-studies4.png',
    client: 'EduTech Solutions',
    industry: 'Education Technology',
    platform: 'Web & Mobile',
    timeline: '9 months',
    teamSize: '10 developers',
    overview: 'A comprehensive e-learning platform that enables interactive online education through live video conferencing, recorded lectures, assignments, and progress tracking.',
    features: [
      { icon: 'bx-video-recording', title: 'Live Classes', description: 'HD video conferencing with screen sharing and whiteboard' },
      { icon: 'bx-book', title: 'Course Management', description: 'Create and organize courses with multimedia content' },
      { icon: 'bx-task', title: 'Assignments & Tests', description: 'Automated grading and feedback system' },
      { icon: 'bx-line-chart', title: 'Analytics Dashboard', description: 'Track student progress and engagement metrics' }
    ],
    challenge: 'Delivering high-quality live video education while managing large student groups and ensuring platform stability.',
    solution: 'Built scalable infrastructure with CDN integration, adaptive bitrate streaming, and interactive features for enhanced learning.',
    results: [
      { value: '200K+', label: 'Students' },
      { value: '5,000+', label: 'Courses' },
      { value: '98%', label: 'Uptime' }
    ],
    technologies: ['React', 'Next.js', 'WebRTC', 'MongoDB', 'AWS', 'Zoom SDK']
  },

  'event-booking': {
    id: 'event-booking',
    title: 'Event Booking App',
    subtitle: 'Book celebrities and entertainers for your events',
    category: 'Mobile App • Entertainment',
    color1: '#ec4899',
    color2: '#db2777',
    image: 'case-studies5.png',
    client: 'StarConnect Events',
    industry: 'Entertainment',
    platform: 'iOS & Android',
    timeline: '7 months',
    teamSize: '6 developers',
    overview: 'A platform connecting event organizers with celebrities, comedians, and entertainers. Features include availability search, booking management, reviews, and secure payment processing.',
    features: [
      { icon: 'bx-calendar', title: 'Availability Search', description: 'Find artists by date, location, and category' },
      { icon: 'bx-star', title: 'Review System', description: 'Verified reviews and ratings from past events' },
      { icon: 'bx-dollar-circle', title: 'Secure Booking', description: 'Escrow payment system for safe transactions' },
      { icon: 'bx-message-dots', title: 'Direct Chat', description: 'Communicate directly with artist management' }
    ],
    challenge: 'Building trust between event organizers and talent while streamlining the booking process and ensuring payment security.',
    solution: 'Implemented verification system, escrow payments, detailed profiles with portfolio, and transparent pricing structure.',
    results: [
      { value: '10K+', label: 'Artists' },
      { value: '50K+', label: 'Events Booked' },
      { value: '4.8★', label: 'Customer Rating' }
    ],
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe', 'Twilio', 'AWS']
  },

  'home-service': {
    id: 'home-service',
    title: 'On Demand Home Services',
    subtitle: 'One-stop solution for all home service needs',
    category: 'Mobile App • Services',
    color1: '#8b5cf6',
    color2: '#7c3aed',
    image: 'case-studies6.png',
    client: 'HomeServe Pro',
    industry: 'Home Services',
    platform: 'iOS, Android & Web',
    timeline: '8 months',
    teamSize: '9 developers',
    overview: 'A comprehensive platform for booking home services including plumbing, electrical, cleaning, and repair services with real-time tracking and secure payments.',
    features: [
      { icon: 'bx-wrench', title: 'Multi-Service Platform', description: '50+ service categories from cleaning to repairs' },
      { icon: 'bx-time', title: 'Schedule Flexibility', description: 'Book instantly or schedule for later convenience' },
      { icon: 'bx-bell', title: 'Real-Time Updates', description: 'Live notifications for service provider arrival' },
      { icon: 'bx-shield-quarter', title: 'Quality Guarantee', description: 'Verified professionals with insurance coverage' }
    ],
    challenge: 'Managing diverse service categories while ensuring quality standards and timely service delivery across regions.',
    solution: 'Created unified platform with professional verification, standardized pricing, GPS tracking, and quality assurance protocols.',
    results: [
      { value: '300K+', label: 'Services Completed' },
      { value: '15K+', label: 'Service Providers' },
      { value: '4.7★', label: 'Average Rating' }
    ],
    technologies: ['Flutter', 'Laravel', 'MySQL', 'Google Maps', 'Firebase', 'Razorpay']
  },

  'video-consultation': {
    id: 'video-consultation',
    title: 'Video Consultation App',
    subtitle: 'Connect with experts globally via video calls',
    category: 'Mobile App • Healthcare',
    color1: '#06b6d4',
    color2: '#0891b2',
    image: 'case-studies7.png',
    client: 'MediConnect',
    industry: 'Healthcare',
    platform: 'iOS, Android & Web',
    timeline: '10 months',
    teamSize: '11 developers',
    overview: 'A telemedicine platform enabling patients to consult with healthcare professionals through secure video calls, appointment scheduling, and digital prescriptions.',
    features: [
      { icon: 'bx-video', title: 'HD Video Calls', description: 'HIPAA-compliant video consultations with doctors' },
      { icon: 'bx-calendar-check', title: 'Appointment Booking', description: 'Easy scheduling with reminders and notifications' },
      { icon: 'bx-file', title: 'Digital Records', description: 'Secure storage of medical history and prescriptions' },
      { icon: 'bx-credit-card', title: 'Integrated Payments', description: 'Secure payment processing with insurance support' }
    ],
    challenge: 'Ensuring HIPAA compliance while providing seamless video consultations and maintaining patient data security.',
    solution: 'Built HIPAA-compliant infrastructure with end-to-end encryption, secure data storage, and reliable video streaming.',
    results: [
      { value: '100K+', label: 'Consultations' },
      { value: '5,000+', label: 'Doctors' },
      { value: '99.5%', label: 'Uptime' }
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS', 'Twilio Video']
  },

  'video-kyc': {
    id: 'video-kyc',
    title: 'Video KYC Solution',
    subtitle: 'Remote customer verification for banking',
    category: 'Web App • Fintech',
    color1: '#f59e0b',
    color2: '#d97706',
    image: 'case-studies8.png',
    client: 'Major Banking Institution',
    industry: 'Financial Services',
    platform: 'Web & Mobile',
    timeline: '12 months',
    teamSize: '8 developers',
    overview: 'A secure video-based KYC verification system for banks enabling customers to complete identity verification remotely through video calls.',
    features: [
      { icon: 'bx-video-recording', title: 'Live Video KYC', description: 'Real-time identity verification via video call' },
      { icon: 'bx-face-mask', title: 'Face Recognition', description: 'AI-powered face matching with ID documents' },
      { icon: 'bx-file-find', title: 'Document Verification', description: 'Automated validation of identity documents' },
      { icon: 'bx-shield-alt-2', title: 'Bank-Grade Security', description: 'Military-grade encryption and audit trails' }
    ],
    challenge: 'Meeting stringent banking regulations while providing user-friendly remote KYC process with fraud prevention.',
    solution: 'Developed AI-powered verification system with liveness detection, document authentication, and comprehensive audit logging.',
    results: [
      { value: '500K+', label: 'Verifications' },
      { value: '99.2%', label: 'Success Rate' },
      { value: '5 min', label: 'Avg. Time' }
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'WebRTC', 'AWS', 'MongoDB']
  },

  'fitness': {
    id: 'fitness',
    title: 'Fitness Tracking App',
    subtitle: 'Track workouts and health metrics seamlessly',
    category: 'Mobile App • Health',
    color1: '#ef4444',
    color2: '#dc2626',
    image: 'case-studies9.jpg',
    client: 'FitLife Technologies',
    industry: 'Health & Fitness',
    platform: 'iOS & Android',
    timeline: '7 months',
    teamSize: '7 developers',
    overview: 'A comprehensive fitness tracking application that monitors physical activity, health indicators, nutrition, and provides personalized workout plans.',
    features: [
      { icon: 'bx-run', title: 'Activity Tracking', description: 'Track steps, distance, calories, and workouts' },
      { icon: 'bx-heart', title: 'Health Monitoring', description: 'Monitor heart rate, sleep, and vital statistics' },
      { icon: 'bx-food-menu', title: 'Nutrition Tracker', description: 'Log meals and track caloric intake' },
      { icon: 'bx-trending-up', title: 'Progress Analytics', description: 'Visualize fitness journey with detailed charts' }
    ],
    challenge: 'Integrating with various fitness devices while providing accurate tracking and motivational features for user engagement.',
    solution: 'Built unified platform with wearable integration, gamification elements, and AI-powered personalized recommendations.',
    results: [
      { value: '250K+', label: 'Active Users' },
      { value: '10M+', label: 'Workouts Logged' },
      { value: '4.6★', label: 'App Rating' }
    ],
    technologies: ['Swift', 'Kotlin', 'HealthKit', 'Google Fit', 'Firebase', 'AWS']
  },

  'lms': {
    id: 'lms',
    title: 'Learning Management System',
    subtitle: 'Complete LMS for educational institutions',
    category: 'Web App • Education',
    color1: '#8b5cf6',
    color2: '#6366f1',
    image: 'case-studies4.png',
    client: 'University System',
    industry: 'Education',
    platform: 'Web & Mobile',
    timeline: '14 months',
    teamSize: '15 developers',
    overview: 'An enterprise-grade Learning Management System with course management, student tracking, assignment submission, grade management, and interactive learning modules.',
    features: [
      { icon: 'bx-book-open', title: 'Course Management', description: 'Create and manage courses with multimedia content' },
      { icon: 'bx-user-check', title: 'Student Tracking', description: 'Monitor attendance, progress, and performance' },
      { icon: 'bx-task', title: 'Assignment System', description: 'Automated submission, grading, and feedback' },
      { icon: 'bx-bar-chart-alt-2', title: 'Analytics Dashboard', description: 'Comprehensive reporting and insights' }
    ],
    challenge: 'Building scalable LMS handling thousands of concurrent users while providing rich interactive learning features.',
    solution: 'Developed microservices architecture with CDN integration, automated grading system, and responsive design.',
    results: [
      { value: '50K+', label: 'Students' },
      { value: '2,000+', label: 'Courses' },
      { value: '99.8%', label: 'Uptime' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker']
  },

  'cms': {
    id: 'cms',
    title: 'Content Management System',
    subtitle: 'Powerful CMS for enterprise content management',
    category: 'Web App • CMS',
    color1: '#06b6d4',
    color2: '#0891b2',
    image: 'case-studies1.png',
    client: 'Media Corporation',
    industry: 'Digital Media',
    platform: 'Web',
    timeline: '10 months',
    teamSize: '12 developers',
    overview: 'A robust content management system with role-based access control, media library, SEO optimization, and multi-language support.',
    features: [
      { icon: 'bx-edit', title: 'WYSIWYG Editor', description: 'Intuitive content creation with rich text editing' },
      { icon: 'bx-image', title: 'Media Library', description: 'Centralized asset management with optimization' },
      { icon: 'bx-search-alt', title: 'SEO Tools', description: 'Built-in SEO optimization and analytics' },
      { icon: 'bx-world', title: 'Multi-Language', description: 'Support for 20+ languages and localization' }
    ],
    challenge: 'Creating flexible CMS that handles complex content structures while maintaining performance and ease of use.',
    solution: 'Built modular architecture with customizable content types, caching layers, and intuitive admin interface.',
    results: [
      { value: '10K+', label: 'Pages Managed' },
      { value: '500+', label: 'Users' },
      { value: '2sec', label: 'Page Load Time' }
    ],
    technologies: ['Next.js', 'Strapi', 'PostgreSQL', 'GraphQL', 'AWS', 'Cloudflare']
  },

  'portfolio-site': {
    id: 'portfolio-site',
    title: 'Portfolio Website Platform',
    subtitle: 'Showcase creative work with stunning portfolios',
    category: 'Web App • Creative',
    color1: '#ec4899',
    color2: '#db2777',
    image: 'case-studies2.png',
    client: 'Creative Professionals',
    industry: 'Design & Photography',
    platform: 'Web',
    timeline: '6 months',
    teamSize: '5 developers',
    overview: 'A platform for creative professionals to build stunning portfolio websites with dynamic galleries, case studies, client testimonials, and integrated contact systems.',
    features: [
      { icon: 'bx-image-alt', title: 'Dynamic Galleries', description: 'Create beautiful image galleries with various layouts' },
      { icon: 'bx-briefcase', title: 'Project Showcases', description: 'Detailed case studies with before/after comparisons' },
      { icon: 'bx-customize', title: 'Theme Builder', description: 'Customize colors, fonts, and layouts easily' },
      { icon: 'bx-mobile', title: 'Mobile Optimized', description: 'Perfect display on all devices and screen sizes' }
    ],
    challenge: 'Balancing beautiful design aesthetics with performance and providing easy customization for non-technical users.',
    solution: 'Created drag-and-drop builder with pre-designed templates, image optimization, and fast loading times.',
    results: [
      { value: '5K+', label: 'Portfolios Created' },
      { value: '100K+', label: 'Monthly Visitors' },
      { value: '4.9★', label: 'User Rating' }
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'MongoDB', 'Vercel', 'Cloudinary']
  },

  'ecommerce': {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    subtitle: 'Full-featured online marketplace solution',
    category: 'Web App • E-Commerce',
    color1: '#f59e0b',
    color2: '#d97706',
    image: 'case-studies3.png',
    client: 'Retail Business',
    industry: 'E-Commerce',
    platform: 'Web & Mobile',
    timeline: '12 months',
    teamSize: '14 developers',
    overview: 'A complete e-commerce solution with product catalog, shopping cart, payment gateway integration, order management, and customer analytics dashboard.',
    features: [
      { icon: 'bx-shopping-bag', title: 'Product Management', description: 'Advanced catalog with variants, inventory tracking' },
      { icon: 'bx-credit-card-front', title: 'Payment Integration', description: 'Multiple payment gateways and wallet support' },
      { icon: 'bx-package', title: 'Order Management', description: 'Complete order lifecycle tracking and fulfillment' },
      { icon: 'bx-line-chart', title: 'Analytics Dashboard', description: 'Sales insights, customer behavior, and reports' }
    ],
    challenge: 'Building scalable platform handling high traffic during sales while ensuring secure transactions and inventory management.',
    solution: 'Implemented microservices architecture with caching, load balancing, and real-time inventory synchronization.',
    results: [
      { value: '$5M+', label: 'Annual Revenue' },
      { value: '100K+', label: 'Orders' },
      { value: '99.9%', label: 'Uptime' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS']
  },

  'mern-stack': {
    id: 'mern-stack',
    title: 'MERN Stack Application',
    subtitle: 'Full-stack web app with real-time features',
    category: 'Web App • Full-Stack',
    color1: '#10b981',
    color2: '#059669',
    image: 'case-studies5.png',
    client: 'Tech Startup',
    industry: 'SaaS',
    platform: 'Web',
    timeline: '8 months',
    teamSize: '8 developers',
    overview: 'A robust full-stack application built with MongoDB, Express.js, React, and Node.js featuring real-time updates, RESTful APIs, and scalable architecture.',
    features: [
      { icon: 'bx-data', title: 'RESTful APIs', description: 'Well-documented APIs with authentication and rate limiting' },
      { icon: 'bx-refresh', title: 'Real-Time Updates', description: 'WebSocket integration for live data synchronization' },
      { icon: 'bx-shield-alt', title: 'Secure Authentication', description: 'JWT-based auth with role-based access control' },
      { icon: 'bx-cloud-upload', title: 'Cloud Deployment', description: 'Containerized deployment with CI/CD pipeline' }
    ],
    challenge: 'Creating highly responsive application with real-time features while maintaining data consistency and security.',
    solution: 'Implemented event-driven architecture with WebSocket, optimistic UI updates, and comprehensive error handling.',
    results: [
      { value: '50K+', label: 'Active Users' },
      { value: '<100ms', label: 'API Response' },
      { value: '99.95%', label: 'Availability' }
    ],
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Docker']
  },

  'react-app': {
    id: 'react-app',
    title: 'React Web Application',
    subtitle: 'Modern SPA with component-based architecture',
    category: 'Web App • Frontend',
    color1: '#3b82f6',
    color2: '#2563eb',
    image: 'case-studies6.png',
    client: 'Digital Agency',
    industry: 'Web Development',
    platform: 'Web',
    timeline: '6 months',
    teamSize: '6 developers',
    overview: 'A modern single-page application built with React featuring component-based architecture, state management with Redux, and optimized performance.',
    features: [
      { icon: 'bx-code-block', title: 'Component Architecture', description: 'Reusable components with TypeScript for type safety' },
      { icon: 'bx-layer', title: 'State Management', description: 'Redux for predictable state and Redux Toolkit' },
      { icon: 'bx-rocket', title: 'Performance Optimized', description: 'Code splitting, lazy loading, and memoization' },
      { icon: 'bx-test-tube', title: 'Fully Tested', description: 'Unit and integration tests with Jest and RTL' }
    ],
    challenge: 'Building performant SPA with complex state management while ensuring code maintainability and scalability.',
    solution: 'Adopted React best practices, implemented modular architecture, and comprehensive testing strategy.',
    results: [
      { value: '<1sec', label: 'Load Time' },
      { value: '95+', label: 'Lighthouse Score' },
      { value: '100%', label: 'Test Coverage' }
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'Vite', 'Jest']
  },

  'n8n-automation': {
    id: 'n8n-automation',
    title: 'N8N Workflow Automation',
    subtitle: 'Business process automation and integration',
    category: 'Automation • Integration',
    color1: '#8b5cf6',
    color2: '#7c3aed',
    image: 'case-studies7.png',
    client: 'Enterprise Client',
    industry: 'Business Automation',
    platform: 'Cloud',
    timeline: '5 months',
    teamSize: '4 developers',
    overview: 'Custom workflow automation solution using N8N for seamless integration of business processes, API connections, data synchronization, and automated task execution.',
    features: [
      { icon: 'bx-git-branch', title: 'Workflow Builder', description: 'Visual workflow designer with 200+ integrations' },
      { icon: 'bx-sync', title: 'Data Sync', description: 'Automated data synchronization across platforms' },
      { icon: 'bx-alarm', title: 'Scheduled Jobs', description: 'Cron-based scheduling for automated tasks' },
      { icon: 'bx-error-circle', title: 'Error Handling', description: 'Robust error handling and retry mechanisms' }
    ],
    challenge: 'Integrating disparate systems and automating complex business processes while ensuring reliability and data accuracy.',
    solution: 'Designed modular workflows with comprehensive error handling, logging, and monitoring for business-critical automation.',
    results: [
      { value: '80%', label: 'Time Saved' },
      { value: '50+', label: 'Automated Tasks' },
      { value: '99.5%', label: 'Success Rate' }
    ],
    technologies: ['N8N', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Various APIs']
  },

  'ai-website': {
    id: 'ai-website',
    title: 'AI-Powered Website',
    subtitle: 'Intelligent web experience with AI features',
    category: 'Web App • AI',
    color1: '#667eea',
    color2: '#764ba2',
    image: 'case-studies8.png',
    client: 'Tech Innovators',
    industry: 'Artificial Intelligence',
    platform: 'Web',
    timeline: '11 months',
    teamSize: '10 developers',
    overview: 'An intelligent website leveraging artificial intelligence for personalized user experiences, chatbot integration, predictive analytics, and machine learning capabilities.',
    features: [
      { icon: 'bx-bot', title: 'AI Chatbot', description: 'Natural language processing for customer support' },
      { icon: 'bx-user', title: 'Personalization', description: 'ML-driven content recommendations per user' },
      { icon: 'bx-brain', title: 'Predictive Analytics', description: 'Forecast user behavior and trends' },
      { icon: 'bx-search-alt-2', title: 'Smart Search', description: 'AI-powered search with intent recognition' }
    ],
    challenge: 'Integrating AI features seamlessly while maintaining fast performance and providing meaningful personalized experiences.',
    solution: 'Implemented edge computing for AI inference, cached predictions, and progressive enhancement strategy.',
    results: [
      { value: '150%', label: 'Engagement Increase' },
      { value: '60%', label: 'Support Automation' },
      { value: '4.8★', label: 'User Satisfaction' }
    ],
    technologies: ['Next.js', 'Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'AWS']
  },

  'lms-2': {
    id: 'lms-2',
    title: 'Learning Management System Pro',
    subtitle: 'Advanced LMS for enterprises and institutions',
    category: 'Web App • Education',
    color1: '#06b6d4',
    color2: '#0891b2',
    image: 'case-studies4.png',
    client: 'Corporate Training',
    industry: 'Corporate Education',
    platform: 'Web & Mobile',
    timeline: '13 months',
    teamSize: '14 developers',
    overview: 'Enterprise-level Learning Management System with advanced features for corporate training, certifications, and skill development programs.',
    features: [
      { icon: 'bx-certification', title: 'Certificate Management', description: 'Automated certificate generation and tracking' },
      { icon: 'bx-trophy', title: 'Gamification', description: 'Points, badges, and leaderboards for engagement' },
      { icon: 'bx-video-plus', title: 'Video Learning', description: 'Interactive video lessons with quizzes' },
      { icon: 'bx-group', title: 'Collaborative Learning', description: 'Discussion forums and peer learning' }
    ],
    challenge: 'Creating engaging learning environment that works at enterprise scale with diverse content types and assessment methods.',
    solution: 'Built modular platform with gamification, social learning features, and comprehensive analytics.',
    results: [
      { value: '100K+', label: 'Learners' },
      { value: '5,000+', label: 'Courses' },
      { value: '92%', label: 'Completion Rate' }
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS', 'Vimeo API']
  },

  'cms-2': {
    id: 'cms-2',
    title: 'Headless CMS Platform',
    subtitle: 'API-first content management system',
    category: 'Web App • CMS',
    color1: '#8b5cf6',
    color2: '#7c3aed',
    image: 'case-studies1.png',
    client: 'Digital Agency',
    industry: 'Content Management',
    platform: 'API & Web',
    timeline: '9 months',
    teamSize: '9 developers',
    overview: 'A headless CMS providing content as an API, enabling content delivery across web, mobile, IoT, and any other platform.',
    features: [
      { icon: 'bx-data', title: 'API-First', description: 'RESTful and GraphQL APIs for content delivery' },
      { icon: 'bx-palette', title: 'Custom Content Types', description: 'Flexible content modeling for any use case' },
      { icon: 'bx-sitemap', title: 'Multi-Channel', description: 'Deliver content to web, mobile, and IoT' },
      { icon: 'bx-revision', title: 'Version Control', description: 'Content versioning and rollback capabilities' }
    ],
    challenge: 'Providing flexibility for developers while maintaining ease of use for content creators.',
    solution: 'Created intuitive admin UI with powerful API, comprehensive documentation, and SDKs for major platforms.',
    results: [
      { value: '1M+', label: 'API Calls/Month' },
      { value: '50+', label: 'Clients' },
      { value: '99.99%', label: 'API Uptime' }
    ],
    technologies: ['Strapi', 'GraphQL', 'MongoDB', 'Next.js', 'Docker', 'Kubernetes']
  },

  'portfolio-site-2': {
    id: 'portfolio-site-2',
    title: 'Creative Portfolio Builder',
    subtitle: 'Build stunning portfolios in minutes',
    category: 'Web App • SaaS',
    color1: '#f59e0b',
    color2: '#d97706',
    image: 'case-studies2.png',
    client: 'Creative Platform',
    industry: 'SaaS',
    platform: 'Web',
    timeline: '7 months',
    teamSize: '7 developers',
    overview: 'SaaS platform enabling creatives to build and customize professional portfolio websites without coding.',
    features: [
      { icon: 'bx-paint', title: 'Template Library', description: '50+ professionally designed templates' },
      { icon: 'bx-customize', title: 'Drag & Drop', description: 'Visual editor with real-time preview' },
      { icon: 'bx-rocket', title: 'Fast Hosting', description: 'CDN-powered hosting with SSL included' },
      { icon: 'bx-trending-up', title: 'SEO Built-in', description: 'Optimized for search engines and social sharing' }
    ],
    challenge: 'Making professional web design accessible to non-technical creatives while ensuring performance and customization.',
    solution: 'Developed intuitive drag-and-drop builder with smart templates and automated optimization.',
    results: [
      { value: '10K+', label: 'Websites Built' },
      { value: '4.9★', label: 'User Rating' },
      { value: '95%', label: 'Lighthouse Score' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Cloudflare', 'Stripe']
  },

  'ecommerce-2': {
    id: 'ecommerce-2',
    title: 'Multi-Vendor Marketplace',
    subtitle: 'Complete marketplace platform with vendor management',
    category: 'Web App • E-Commerce',
    color1: '#ef4444',
    color2: '#dc2626',
    image: 'case-studies3.png',
    client: 'Marketplace Startup',
    industry: 'E-Commerce',
    platform: 'Web & Mobile',
    timeline: '14 months',
    teamSize: '16 developers',
    overview: 'A multi-vendor e-commerce platform enabling vendors to sell products with integrated logistics, payments, and analytics.',
    features: [
      { icon: 'bx-store', title: 'Vendor Dashboard', description: 'Complete vendor management with analytics' },
      { icon: 'bx-package', title: 'Logistics Integration', description: 'Multi-carrier shipping with tracking' },
      { icon: 'bx-wallet', title: 'Split Payments', description: 'Automated vendor payouts and commission' },
      { icon: 'bx-bar-chart-square', title: 'Marketplace Analytics', description: 'Business intelligence for vendors and admin' }
    ],
    challenge: 'Managing complex multi-vendor ecosystem with inventory sync, commission calculations, and quality control.',
    solution: 'Built comprehensive vendor system with automated workflows, quality checks, and transparent reporting.',
    results: [
      { value: '5,000+', label: 'Vendors' },
      { value: '$10M+', label: 'GMV' },
      { value: '200K+', label: 'Products' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS']
  },

  'mern-stack-2': {
    id: 'mern-stack-2',
    title: 'MERN SaaS Platform',
    subtitle: 'Enterprise SaaS with MERN stack',
    category: 'Web App • SaaS',
    color1: '#10b981',
    color2: '#059669',
    image: 'case-studies5.png',
    client: 'SaaS Company',
    industry: 'Software as a Service',
    platform: 'Web',
    timeline: '10 months',
    teamSize: '12 developers',
    overview: 'A multi-tenant SaaS platform built on MERN stack with subscription management, user analytics, and third-party integrations.',
    features: [
      { icon: 'bx-buildings', title: 'Multi-Tenancy', description: 'Isolated data and customization per organization' },
      { icon: 'bx-credit-card', title: 'Subscription Billing', description: 'Stripe integration with usage-based pricing' },
      { icon: 'bx-plug', title: 'API Integrations', description: 'Connect with 100+ third-party services' },
      { icon: 'bx-customize', title: 'White-Label', description: 'Customizable branding for resellers' }
    ],
    challenge: 'Building scalable multi-tenant architecture with complex billing and maintaining data isolation.',
    solution: 'Implemented tenant-aware database design, background job processing, and comprehensive API layer.',
    results: [
      { value: '1,000+', label: 'Organizations' },
      { value: '$2M+', label: 'ARR' },
      { value: '99.95%', label: 'Uptime' }
    ],
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', 'AWS']
  },

  'react-app-2': {
    id: 'react-app-2',
    title: 'React Dashboard Application',
    subtitle: 'Admin dashboard with real-time analytics',
    category: 'Web App • Dashboard',
    color1: '#3b82f6',
    color2: '#2563eb',
    image: 'case-studies6.png',
    client: 'Data Analytics Firm',
    industry: 'Business Intelligence',
    platform: 'Web',
    timeline: '8 months',
    teamSize: '8 developers',
    overview: 'A comprehensive admin dashboard with real-time data visualization, reporting, and business intelligence features.',
    features: [
      { icon: 'bx-bar-chart-alt-2', title: 'Real-Time Charts', description: 'Live data visualization with interactive charts' },
      { icon: 'bx-table', title: 'Data Tables', description: 'Advanced tables with filtering, sorting, and export' },
      { icon: 'bx-bell', title: 'Alerts & Notifications', description: 'Real-time alerts for critical events' },
      { icon: 'bx-download', title: 'Export Reports', description: 'Generate and download custom reports' }
    ],
    challenge: 'Displaying complex data sets in real-time while maintaining smooth performance and intuitive UX.',
    solution: 'Optimized rendering with virtualization, implemented efficient state management, and WebSocket for live updates.',
    results: [
      { value: '10K+', label: 'Daily Users' },
      { value: '1M+', label: 'Data Points' },
      { value: '<200ms', label: 'Update Latency' }
    ],
    technologies: ['React', 'Redux', 'D3.js', 'WebSocket', 'Node.js', 'InfluxDB']
  },

  'n8n-automation-2': {
    id: 'n8n-automation-2',
    title: 'Enterprise Workflow Automation',
    subtitle: 'Complex business process automation',
    category: 'Automation • Enterprise',
    color1: '#ec4899',
    color2: '#db2777',
    image: 'case-studies7.png',
    client: 'Large Corporation',
    industry: 'Enterprise',
    platform: 'Cloud',
    timeline: '9 months',
    teamSize: '6 developers',
    overview: 'Enterprise-grade workflow automation connecting CRM, ERP, email, and 50+ business tools with custom integrations.',
    features: [
      { icon: 'bx-network-chart', title: 'Complex Workflows', description: 'Multi-step automation with conditional logic' },
      { icon: 'bx-transfer', title: 'Data Transformation', description: 'ETL pipelines for data processing' },
      { icon: 'bx-time-five', title: 'Scheduled Automation', description: 'Time-based and event-triggered workflows' },
      { icon: 'bx-bug', title: 'Error Recovery', description: 'Automatic retry and failure notifications' }
    ],
    challenge: 'Automating critical business processes across multiple systems while ensuring data integrity and reliability.',
    solution: 'Created fault-tolerant workflows with comprehensive logging, monitoring, and alerting systems.',
    results: [
      { value: '90%', label: 'Manual Work Reduced' },
      { value: '100+', label: 'Workflows Active' },
      { value: '$500K', label: 'Annual Savings' }
    ],
    technologies: ['N8N', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes']
  },

  'ai-website-2': {
    id: 'ai-website-2',
    title: 'AI Content Platform',
    subtitle: 'AI-powered content generation and optimization',
    category: 'Web App • AI',
    color1: '#f59e0b',
    color2: '#ea580c',
    image: 'case-studies8.png',
    client: 'Marketing Agency',
    industry: 'Marketing Technology',
    platform: 'Web',
    timeline: '10 months',
    teamSize: '9 developers',
    overview: 'Platform using GPT and AI for content creation, SEO optimization, and automated marketing campaigns.',
    features: [
      { icon: 'bx-edit-alt', title: 'AI Content Writer', description: 'Generate blog posts, ads, and social content' },
      { icon: 'bx-search', title: 'SEO Optimizer', description: 'AI-driven keyword research and optimization' },
      { icon: 'bx-image-alt', title: 'Image Generation', description: 'Create unique images with AI' },
      { icon: 'bx-calendar', title: 'Content Scheduler', description: 'Automated publishing across platforms' }
    ],
    challenge: 'Creating AI-generated content that matches brand voice while ensuring quality and originality.',
    solution: 'Fine-tuned language models for brand-specific content with quality scoring and human review workflow.',
    results: [
      { value: '10K+', label: 'Articles Generated' },
      { value: '300%', label: 'Content Output' },
      { value: '85%', label: 'Quality Score' }
    ],
    technologies: ['Next.js', 'OpenAI API', 'Python', 'FastAPI', 'MongoDB', 'AWS']
  }
};

