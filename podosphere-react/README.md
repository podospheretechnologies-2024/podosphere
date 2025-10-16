# PodoSphere Technologies - React Web Application

A modern, fully-functional React web application converted from the original HTML template. Built with React, Vite, and React Router for optimal performance and user experience.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly across all devices
- **Modern React Architecture** - Component-based structure with React Hooks
- **Fast Page Navigation** - Client-side routing with React Router
- **Optimized Performance** - Built with Vite for lightning-fast development and production builds
- **Complete Page Coverage** - All original pages converted to React components
  - Home
  - About Us
  - Services
  - Solutions
  - Portfolio (with 18 projects including LMS, CMS, E-commerce, MERN, React, N8N, AI websites)
  - Contact
  - How We Work
  - NDA Policy
  - Career

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 20.19+ or 22.12+)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Navigate to the project directory:**
   ```bash
   cd podosphere-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🏃 Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will open at `http://localhost:5173` (or another port if 5173 is busy).

### Production Build
Create an optimized production build:
```bash
npm run build
```
The built files will be in the `dist` folder.

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
podosphere-react/
├── public/
│   └── assets/
│       ├── css/          # Stylesheets from original template
│       ├── fonts/        # Icon fonts and web fonts
│       ├── img/          # All images and icons
│       └── js/           # jQuery plugins and scripts
├── src/
│   ├── components/
│   │   ├── Layout.jsx    # Main layout wrapper
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Preloader.jsx # Loading animation
│   │   └── ScrollToTop.jsx # Scroll to top on route change
│   ├── pages/
│   │   ├── Home.jsx      # Homepage
│   │   ├── About.jsx     # About page
│   │   ├── Service.jsx   # Services page
│   │   ├── Solution.jsx  # Solutions page
│   │   ├── Portfolio.jsx # Portfolio page
│   │   ├── Contact.jsx   # Contact page
│   │   ├── Work.jsx      # How We Work page
│   │   ├── NDA.jsx       # NDA Policy page
│   │   └── Career.jsx    # Career page
│   ├── App.jsx           # Main App component with routing
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🎨 Styling

The application uses the original template's CSS files loaded from the `public/assets/css` directory:
- Bootstrap CSS
- Custom template styles
- Responsive styles
- Theme (dark mode) styles
- Animation libraries (WOW.js, Owl Carousel, etc.)

## 🔌 Technologies Used

- **React 19.1** - JavaScript library for building user interfaces
- **React Router DOM 7.9** - Declarative routing for React applications
- **Vite 7.1** - Next-generation frontend tooling
- **Bootstrap** - CSS framework
- **jQuery** - For legacy plugins (Owl Carousel, Magnific Popup, etc.)

## 📱 Pages Overview

### Home (`/`)
Main landing page with banner, services overview, about section, and call-to-action.

### About (`/about`)
Company information, statistics, and why choose us section.

### Services (`/service`)
Comprehensive list of IT services offered including Web Development, Mobile Apps, AI/ML, Cloud Solutions, CRM/ERP, and IT Consulting.

### Solutions (`/solution`)
Industry-specific solutions for E-commerce, Education, Healthcare, On-Demand Services, Retail, and Business Consulting.

### Portfolio (`/portfolio`)
Showcase of 18 completed projects including:
- Meditation & Wellness App
- Social Media App
- Car Bike Booking App
- E-learning App
- Event Booking App
- Home Service Booking App
- Video Consultation App
- Video KYC App
- Fitness App
- Learning Management System
- Content Management System
- Portfolio Website
- E-Commerce Platform
- MERN Stack Application
- React Web Application
- N8N Workflow Automation
- AI-Powered Website

### Contact (`/contact`)
Contact form with office location, contact details, hours of operation, and Google Maps integration.

### How We Work (`/work`)
Explanation of the company's work process and methodology.

### NDA (`/nda`)
Non-disclosure agreement policy and confidentiality commitment.

### Career (`/career`)
Current job openings and career opportunities with the company.

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Deploy to Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## 🔧 Configuration

### Vite Configuration
The `vite.config.js` file contains the build configuration. You can customize:
- Base URL
- Build output directory
- Plugin options
- Server options

### Environment Variables
Create a `.env` file for environment-specific variables:
```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 📝 Development Notes

- All assets (images, CSS, JS) are loaded from the `public/assets` directory
- jQuery plugins are loaded in `index.html` for compatibility with original template functionality
- React Router handles all navigation with client-side routing
- ScrollToTop component ensures pages scroll to top on route change
- Layout component wraps all pages with Navbar and Footer

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**PodoSphere Technologies**
- **Email:** info@podospheretechnologies.com
- **Phone:** +91 8595611983
- **Address:** 1st Floor, Amrapali Circle, Vaishali, Jaipur

## 📄 License

Copyright ©2025 Podosphere Technologies – Powers you in IT World.

---

**Built with ❤️ by PodoSphere Technologies**
